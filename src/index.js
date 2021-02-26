import { App } from './elements/App'
import { LoaderAssets } from './helpers/LoaderAssets'
import { Resizer } from './helpers/Resizer'
import { FrameUpdater } from './helpers/FrameUpdater'
import { Tween } from './helpers/Tween'
import { GameManager } from './managers/GameManager'
import {  } from './constants/constants'

import { 
    ELEMENTS_DATA,
    
    LOADING_00, 
    LOADING_01, 
} from './constants/constants'




/** app states **************************************** */

const loadStartScreenAssets = (appData, callback) => {
    const { elementsData } = appData
    const assets = getAssetsByLoadingFlag(elementsData, LOADING_00)
    loadGameAssets(assets, () => callback(appData))
}


const initApp = (appData, callback) => {
    const resizer = new Resizer()

    const app = new App({ resolution: resizer.resolution, domContainer: resizer.domContainer })
    
    resizer.domContainer.appendChild(app.app.view)
    resizer.setAppForResize(app)

    const frameUpdater = new FrameUpdater()
    const tween = new Tween(frameUpdater)

    callback({
        ...appData,
        app,
        resizer,
        frameUpdater,
        tween,
    })
}


const createAllElements = (appData, callback) => {
    const { app, resizer, emitter, elementsData } = appData

    const elements = {}
    for (let i = 0; i < elementsData.length; ++i) {
        const { key, constructorElem, resizeData, isStartRender, config } = elementsData[i]
        const elem = new constructorElem({ key, emitter, config })
        elem.container.renderable = isStartRender
        app.container.addChild(elem.container)
        resizeData && resizer.setElementToResize({ key, container: elem.container, resizeData })
        elements[key] = elem
    }

    callback({
        ...appData,
        elements,
    })
}


const initStartElements = (appData, callback) => {
    const { elementsData, elements } = appData

    const filtered = elementsData.filter(item => item.assetsLoadingFlag === LOADING_00)
    filtered.forEach(item => elements[item.key].init())

    callback(appData)
}


const loadMoreGameAssets= (appData, callback) => {
    const { elementsData  } = appData
    const assets = getAssetsByLoadingFlag(elementsData, LOADING_01)
    loadGameAssets(assets, () => callback(appData))
}


const initMoreGameElements = (appData, callback) => {
    const { elementsData, elements } = appData

    const filtered = elementsData.filter(item => item.assetsLoadingFlag === LOADING_01)
    filtered.forEach(item => elements[item.key].init())

    callback(appData)
}


const initAppManagers = (appData, callback) => {
    const gameManager = new GameManager()
    return callback({
        ...appData,
        gameManager,
    })
}


const startStairsGame = (appData, callback) => {
    const { gameManager } = appData
    gameManager.startStairsPlay(appData, newGameData => callback({
        ...appData,
        ...newGameData,
    }))
}


const resetToStart = (appData, callback) => {
    const { gameManager } = appData
    gameManager.resetToStart(appData, newGameData => {
        callback({
        ...appData,
        ...newGameData,
    })})
}


const logProcess = (appData, callback) => {
    const { stairsPlayed, restarted } = appData
    console.log(`Played stairs: ${ stairsPlayed }. Restarted: ${ restarted }`)
    callback(appData)
}


const logComplete = (appData, callback) => {
    console.log(`Game complete.`)
    callback(appData)
}




/** helpers ****************************************************** */

const getAssetsByLoadingFlag = (elementsData, flag) => {
    const filtered = elementsData.filter(item => item.assetsLoadingFlag === flag)
    const assets = {}
    for (let i = 0; i < filtered.length; ++i) {
        for (let key in filtered[i].assetsToLoad) {
            assets[key] = filtered[i].assetsToLoad[key]
        }
    }
    return assets
}


const loadGameAssets = (assets, callback) => {
    const loader = new LoaderAssets()
    loader.load(assets, callback)
}


const execute = (arr, data, index = 0) =>
    arr[index] && arr[index](data, newData => execute(arr, newData, ++index))




/** start ******************************************************* */

execute(
    [
        loadStartScreenAssets,
        initApp,
        createAllElements,
        initStartElements,
        loadMoreGameAssets,
        initMoreGameElements,
        initAppManagers,
        startStairsGame,
        resetToStart,
        logProcess,
        startStairsGame,
        resetToStart,
        logProcess,
        startStairsGame,
        logProcess,
        logComplete,
    ], 
    { elementsData: ELEMENTS_DATA },
)
