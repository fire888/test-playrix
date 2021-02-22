import {
    GOR_FRAME,
    SQUARE_FRAME, 
    VERT_FRAME,
} from '../constants/appData'



export class Resizer {
    constructor() {
        this._mode = null // GOR_FRAME, VERT_FRAME, SQUARE_FRAME  
        this._appContainer = null
        this._arrElems = []

        window.addEventListener('resize', this._resize.bind(this))
        this._resize()
    }

    setAppContainerForResize (container) {
        this._appContainer = container
        this._resize()
    }

    setElementToResize (data) {
        this._arrElems.push(data)
        this._resize()
    } 

    _resize () {
        const w = window.innerWidth
        const h = window.innerHeight
        const scaleR = window.innerHeight / 1000 

        if (this._appContainer) {
            this._appContainer.x = w / 2
            this._appContainer.y = h / 2
        }

        this._updateMode()

        for (let i = 0; i < this._arrElems.length; ++i) {
            const { container, resizeData } = this._arrElems[i]
            const { x, y, scale } = resizeData[this._mode]
            container.x = x 
            container.y = y
            container.scale.set(scale * scaleR)
        }
    }

    _updateMode () {
        const w = window.innerWidth
        const h = window.innerHeight

        const ratio = w / h

        if (ratio > 1.3) return this._mode = GOR_FRAME 
        if (ratio > 0.7) return this._mode = SQUARE_FRAME 
        return this._mode = VERT_FRAME 
    }
}