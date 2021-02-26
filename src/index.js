import { App } from './elements/App'
import { LoaderAssets } from './helpers/LoaderAssets'
import { Resizer } from './helpers/Resizer'
import { FrameUpdater } from './helpers/FrameUpdater'
import { Tween } from './helpers/Tween'
import { GameManager } from './managers/GameManager'
import { COMPONENTS_DATA } from './constants/constants'

import { LOADING_00, LOADING_01 } from './constants/constants'




/** app states **************************************** */

const loadStartScreenAssets = (appData, callback) => {
    const { componentsData  } = appData
     const assets = getAssetsByLoadingFlag(componentsData, LOADING_00)
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


const createComponents = (appData, callback) => {
    const { app, resizer, emitter, componentsData } = appData

    const components = {}
    for (let i = 0; i < componentsData.length; ++i) {
        const { key, constructorElem, resizeData, isStartRender, config } = componentsData[i]
        const component = new constructorElem({ key, emitter, config })
        component.container.renderable = isStartRender
        app.container.addChild(component.container)
        resizeData && resizer.setElementToResize({ key, container: component.container, resizeData })
        components[key] = component
    }

    callback({
        ...appData,
        components,
    })
}


const initStartElements = (appData, callback) => {
    const { componentsData } = appData
    initElementsByProp({
        prop: 'assetsLoadingFlag',
        val: LOADING_00,
        componentsData,
        components: appData.components,
    })

    callback(appData)
}


const loadMoreGameAssets= (appData, callback) => {
    const { componentsData  } = appData
    const assets = getAssetsByLoadingFlag(componentsData, LOADING_01)
    loadGameAssets(assets, () => callback(appData))
}


const initMoreGameElements = (appData, callback) => {
    const { componentsData } = appData
    initElementsByProp({
        prop: 'assetsLoadingFlag',
        val: LOADING_01,
        componentsData,
        components: appData.components,
    })

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

const getAssetsByLoadingFlag = (componentsData, flag) => {
    const filteredComponents = componentsData.filter(item => item.assetsLoadingFlag === flag)
    const assets = {}
    for (let i = 0; i < filteredComponents.length; ++i) {
        for (let keyAsset in filteredComponents[i].assetsToLoad) {
            assets[keyAsset] = filteredComponents[i].assetsToLoad[keyAsset]
        }
    }
    return assets
}


const loadGameAssets = (assets, callback) => {
    const loader = new LoaderAssets()
    loader.load(assets, callback)
}


const initElementsByProp = ({ prop,  val, componentsData, components  }) => {
    for (let i = 0; i < componentsData.length; ++i) {
        if (componentsData[i][prop] === val) {
            components[componentsData[i].key].init()
        }
    }
}


const execute = (arr, data, index = 0) =>
    arr[index] && arr[index](data, newData => execute(arr, newData, ++index))




/** start ******************************************************* */

execute(
    [
        loadStartScreenAssets,
        initApp,
        createComponents,
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
    { componentsData: COMPONENTS_DATA },
)
