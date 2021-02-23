import {
    GOR_FRAME,
    SQUARE_FRAME, 
    VERT_FRAME,
} from '../constants/appData'



export class Resizer {
    constructor() {
        this._mode = null // GOR_FRAME, VERT_FRAME, SQUARE_FRAME
        this._windowRatio = null
        this._appW = null
        this._appH = null
        this._appContainer = null
        this._arrElems = []

        window.addEventListener('resize', this._resize.bind(this))
        this._resize()
    }


    /** public **************************/

    setAppContainerForResize (container) {
        this._appContainer = container
        this._resize()
    }



    setElementToResize (data) {
        this._arrElems.push(data)
        this._resize()
    } 


    /** internal **************************/

    _resize () {
        const { windowRatio, mode } = getRatioAndMode()
        const { stepW, stepH, globalScale } = getAppSteps(windowRatio, mode)


        if (this._appContainer) {
            this._appContainer.x = window.innerWidth / 2
            this._appContainer.y = window.innerHeight / 2
        }


        for (let i = 0; i < this._arrElems.length; ++i) {
            const { container, resizeData } = this._arrElems[i]
            const { x, y, scale } = resizeData[mode]
            container.x = stepW * x
            container.y = stepH * y
            container.scale.set(scale * globalScale)
        }
    }
}



const getRatioAndMode = () => {
    const w = window.innerWidth
    const h = window.innerHeight

    const windowRatio  = w / h

    if (windowRatio > 1.3) return { mode: GOR_FRAME, windowRatio }
    if (windowRatio > 0.7) return { mode: SQUARE_FRAME, windowRatio }
    return { mode: VERT_FRAME, windowRatio }
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
    } else if (mode === VERT_FRAME) {
        /** Max height equal two app width */
        appW = window.innerWidth
        appH = windowRatio > .4 ? window.innerHeight : window.innerWidth * 2
    }

    /** Set coordinates from global values to -5 to 5 */
    const stepW = appW / 2 / 5
    const stepH = appH / 2 / 5

    const globalScale = appH / 1000

    return { stepW, stepH, globalScale }
}
