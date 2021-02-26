import {
    GOR_FRAME,
    SQUARE_FRAME, 
    TOP_FRAME,

    APP_HEIGHT_CLIPART,
    SEGMENTS,
} from '../constants/constants'



export class Resizer {
    constructor() {
        this._app = null
        this._arrElems = []
        this.resolution = Math.max(window.innerWidth, window.innerHeight) > 700 ? 1 : 3

        this._domWrapper = document.querySelector('.app-wrapper')
        this.domContainer = document.querySelector('.app-container')

        this._isNewResize = false

        window.addEventListener('resize', this._resize.bind(this))
        this._resize()
    }


    /** public **************************/

    setAppForResize (pixiApp) {
        this._app = pixiApp
        this._resize()
    }


    setElementToResize (data) {
        this._arrElems.push(data)
        this._resize()
    } 


    /** internal **************************/

    _resize () {
        const { windowRatio, mode, w, h } = getRatioAndMode()
        const { stepW, stepH, appScale } = getAppSteps(windowRatio, mode, w, h)

        this._domWrapper.style.width = w + 'px'
        this._domWrapper.style.height = h + 'px'

        this.domContainer.style.maxWidth = h * 2.2 + 'px'
        this.domContainer.style.maxHeight = w * 2.2 + 'px'
        this.domContainer.style.width = w + 'px'
        this.domContainer.style.height = h + 'px'

        if (this._app) {
            this._app.app.resize()
            this._app.app.view.style.width = w + 'px'
            this._app.app.view.style.height = h + 'px'
            this._app.app.view.style.maxWidth = h * 2.2 + 'px'
            this._app.app.view.style.maxHeight = w * 2.2 + 'px'
            /** set game container to center */
            this._app.container.x = this._app.app.view.width / 2 / this.resolution
            this._app.container.y = this._app.app.view.height / 2 / this.resolution
        }

        for (let i = 0; i < this._arrElems.length; ++i) {
            const { container, resizeData } = this._arrElems[i]
            const { x, y, scale } = resizeData[mode]
            container.x = x * stepW
            container.y = y * stepH
            container.scale.set(scale * appScale)
        }
    }
}



const getRatioAndMode = () => {
    const w = window.innerWidth
    const h = window.innerHeight

    const windowRatio  = w / h

    let mode = TOP_FRAME
    if (windowRatio > 0.7) mode = SQUARE_FRAME
    if (windowRatio > 1.3) mode = GOR_FRAME
    return { mode, windowRatio, w, h }
}


const getAppSteps = (windowRatio, mode, w, h) => {
    let appW, appH

    if (mode === GOR_FRAME) {
        /** Max width equal two app heights */
        appW = windowRatio < 2.2 ? w : h * 2.2
        appH = h
    } else if (mode === SQUARE_FRAME) {
        appW = w
        appH = h
    } else if (mode === TOP_FRAME) {
        /** Max height equal two app width */
        appW = w
        appH = windowRatio > .4 ? h : w * 2.2
    }

    const stepW = appW / SEGMENTS
    const stepH = appH / SEGMENTS
    const appScale = appH / APP_HEIGHT_CLIPART

    return { stepW, stepH, appScale }
}
