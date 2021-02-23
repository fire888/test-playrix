import { App } from './elements/App'
import { LoaderAssets } from './helpers/LoaderAssets'
import { Resizer } from './helpers/Resizer'
import { componentsData } from './constants/appData'


const loadAssets = () => {
    const loader = new LoaderAssets()
    const assetsAll = getAssetsFromAppData(componentsData)
    loader.load(assetsAll, initApp)
}
 

const initApp = () => {
    const domWrapper = document.querySelector('.app-container')
    const app = new App({}, domWrapper)
    domWrapper.appendChild(app.app.view)
    const resizer = new Resizer()
    resizer.setAppContainerForResize(app.container)

    const context = { resizer, app }
    addElements(context)
}


const addElements = appContext => {
    const { app, resizer } = appContext

    const components = {}
    for (let i = 0; i < componentsData.length; ++i) {
        const { key, constructorElem, resizeData, isStartRender} = componentsData[i]
        const component = new constructorElem
        component.container.renderable = isStartRender
        app.container.addChild(component.container)
        resizer.setElementToResize({ key, container: component.container, resizeData })
        components[key] = component
    }

    appContext.components = components
}



/** helper ****************************************************** */

const getAssetsFromAppData = data => {
    const assets = {}
    for (let i = 0; i < data.length; ++i) {
        for (let keyAsset in data[i].assetsToLoad) {
            assets[keyAsset] = data[i].assetsToLoad[keyAsset]
        }
    }
    return assets
}


/** init ****************************************************** */

loadAssets()

