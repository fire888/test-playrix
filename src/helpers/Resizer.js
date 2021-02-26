import {
    GOR_FRAME,
    SQUARE_FRAME, 
    TOP_FRAME,

    MAX_RATIO,
    RATIO_GOR,
    RATIO_TOP,

    DESKTOP_THRESHOLD,
    APP_HEIGHT_CLIPART,
    SEGMENTS,
} from '../constants/constants'



export class Resizer {
    constructor() {
        this._app = null
        this._arrElems = []
        this.resolution = Math.max(window.innerWidth, window.innerHeight) > DESKTOP_THRESHOLD ? 1 : 3

        this._domWrapper = document.querySelector('.app-wrapper')
        this.domContainer = document.querySelector('.app-container')

        window.addEventListener('resize', this.resize.bind(this))
        this.resize()
    }


    /** public **************************/

    setAppForResize (pixiApp) {
        this._app = pixiApp
        this.resize()
    }


    setElementToResize (data) {
        this._arrElems.push(data)
        this.resize()
    } 


    /** internal **************************/

    resize () {
        const { windowRatio, mode, windowW, windowH } = getRatioAndMode()
        const { stepW, stepH, appW, appH, appScale } = getAppData(windowRatio, mode, windowW, windowH)

        this._domWrapper.style.width = windowW + 'px'
        this._domWrapper.style.height = windowH + 'px'

        this.domContainer.style.maxWidth = appH * MAX_RATIO + 'px'
        this.domContainer.style.maxHeight = appW * MAX_RATIO + 'px'
        this.domContainer.style.width = appW + 'px'
        this.domContainer.style.height = appH + 'px'

        if (this._app) {
            this._app.app.resize()
            this._app.app.view.style.width = appW + 'px'
            this._app.app.view.style.height = appH + 'px'
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
    const windowW = window.innerWidth
    const windowH = window.innerHeight

    const windowRatio  = windowW / windowH

    let mode = TOP_FRAME
    if (windowRatio > RATIO_TOP) mode = SQUARE_FRAME
    if (windowRatio > RATIO_GOR) mode = GOR_FRAME
    return { mode, windowRatio, windowW, windowH }
}


const getAppData = (windowRatio, mode, w, h) => {
    let appW, appH

    if (mode === GOR_FRAME) {
        /** Max width equal two app heights */
        appW = windowRatio < MAX_RATIO ? w : h * MAX_RATIO
        appH = h
    } else if (mode === SQUARE_FRAME) {
        appW = w
        appH = h
    } else if (mode === TOP_FRAME) {
        /** Max height equal two app width */
        appW = w
        appH = windowRatio > 1 / MAX_RATIO ? h : w * MAX_RATIO
    }

    const stepW = appW / SEGMENTS
    const stepH = appH / SEGMENTS
    const appScale = appH / APP_HEIGHT_CLIPART

    return { stepW, stepH, appScale, appW, appH }
}
