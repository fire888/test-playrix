import { App } from './elements/App'
import { LoaderAssets } from './helpers/LoaderAssets'
import { Resizer } from './helpers/Resizer'
import { FrameUpdater } from './helpers/FrameUpdater'
import { Tween } from './helpers/Tween'
import { GameManager } from './managers/GameManager'
import { START_COMPONENTS_DATA } from './constants/constants'




/** app states **************************************** */

const loadAssets = (appData, callback) => {
    const { startComponentsData  } = appData
    const loader = new LoaderAssets()
    const assetsAll = getAssetsFromAppData(startComponentsData)
    loader.load(assetsAll, () => callback(appData))
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


const addElements = (appData, callback) => {
    const { app, resizer, emitter, startComponentsData } = appData

    const components = {}
    for (let i = 0; i < startComponentsData.length; ++i) {
        const { key, constructorElem, resizeData, isStartRender, config } = startComponentsData[i]
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

const getAssetsFromAppData = data => {
    const assets = {}
    for (let i = 0; i < data.length; ++i) {
        for (let keyAsset in data[i].assetsToLoad) {
            assets[keyAsset] = data[i].assetsToLoad[keyAsset]
        }
    }
    return assets
}

const execute = (arr, index = 0, data = { startComponentsData: START_COMPONENTS_DATA }) =>
    arr[index] && arr[index](data, newData => execute(arr, ++index, newData))




/** start ******************************************************* */

execute([
    loadAssets,
    initApp,
    addElements,
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
])
