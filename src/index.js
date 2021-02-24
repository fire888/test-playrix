import { App } from './elements/App'
import { LoaderAssets } from './helpers/LoaderAssets'
import { Resizer } from './helpers/Resizer'
import { componentsData } from './constants/appData'
import { GameManager } from './managers/GameManager'




const loadAssets = (appData, callback) => {
    const loader = new LoaderAssets()
    const assetsAll = getAssetsFromAppData(componentsData)
    loader.load(assetsAll, () => callback(appData))
}
 

const initApp = (appData, callback) => {
    const domWrapper = document.querySelector('.app-container')
    const app = new App({}, domWrapper)
    domWrapper.appendChild(app.app.view)
    const resizer = new Resizer()
    resizer.setAppContainerForResize(app.container)

    callback({
        ...appData,
        resizer,
        app,
    })
}


const addElements = (appData, callback) => {
    const { app, resizer, emitter } = appData

    const components = {}
    for (let i = 0; i < componentsData.length; ++i) {
        const { key, constructorElem, resizeData, isStartRender, config } = componentsData[i]
        const component = new constructorElem({ key, emitter, config })
        component.container.renderable = isStartRender
        app.container.addChild(component.container)
        resizer.setElementToResize({ key, container: component.container, resizeData })
        components[key] = component
    }

    callback({
        ...appData,
        components,
    })
}


const initPlay = (appData, callback) => {
    const gameManager = new GameManager(appData)
    gameManager.startPlay(() => callback({ ...appData }))
}


const logGameComplete = (appData, callback) => {
    console.log('Game complete.')
    callback({ ...appData })
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

const iterate = (arr, index = 0, data = {}) =>
    arr[index] && arr[index](data, newData => iterate(arr, ++index, newData))




/** start ******************************************************* */

iterate([
    loadAssets,
    initApp,
    addElements,
    initPlay,
    logGameComplete,
])
