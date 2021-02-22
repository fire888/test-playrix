import { App } from './elements/App'
import { LoaderAssets } from './helpers/LoaderAssets'
import { Resizer } from './helpers/Resizer'
import { appContainers } from './constants/appData'

let app, elements = {}

const initApp = () => {
    const domWrapper = document.querySelector('.app-container')
    app = new App({}, domWrapper)
    domWrapper.appendChild(app.app.view)
    const loader = new LoaderAssets()
    const assetsAll = getDassetaFromData(appContainers)
    loader.load(assetsAll, addElements)
}
 

const addElements = () => {
    const resizer = new Resizer()
    resizer.setAppContainerForResize(app.container)

    for (let key in appContainers) {
        const { constructorElem, resizeData } = appContainers[key]
        const elem = new constructorElem
        app.container.addChild(elem.container)
        resizer.setElementToResize({ container: elem.container, resizeData })
    }
    //const back = new Background()
    //app.app.stage.addChild(back.sprite)
}





/** ****************************************************** */

const getDassetaFromData = data => {
    const assets = {}
    for (let key in data) {
        for (let keyAsset in data[key].assetsToLoad) {
            assets[keyAsset] = data[key].assetsToLoad[keyAsset]
        }
    }
    console.log(assets)
    return assets
}


/** ****************************************************** */

initApp() 

