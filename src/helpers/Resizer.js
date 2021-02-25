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
        const { windowRatio, mode } = getRatioAndMode()
        const { stepW, stepH, appScale } = getAppSteps(windowRatio, mode)


        /** Set game container to center */
        if (this._app) {
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

    if (windowRatio > 1.3) return { mode: GOR_FRAME, windowRatio }
    if (windowRatio > 0.7) return { mode: SQUARE_FRAME, windowRatio }
    return { mode: TOP_FRAME, windowRatio }
}


const getAppSteps = (windowRatio, mode) => {
    let appW, appH

    if (mode === GOR_FRAME) {
        /** Max width equal two app heights */
        appW = windowRatio < 2 ? window.innerWidth : window.innerHeight * 2
        appH = window.innerHeight
    } else if (mode === SQUARE_FRAME) {
        appW = window.innerWidth
        appH = window.innerHeight
    } else if (mode === TOP_FRAME) {
        /** Max height equal two app width */
        appW = window.innerWidth
        appH = windowRatio > .4 ? window.innerHeight : window.innerWidth * 2
    }

    const stepW = appW / SEGMENTS
    const stepH = appH / SEGMENTS
    const appScale = appH / APP_HEIGHT_CLIPART

    return { stepW, stepH, appScale }
}
