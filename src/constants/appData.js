import { Background } from '../elements/Background'
import backImg from '../assets/back.png'

import { Continue } from '../elements/Continue'
import continueImg from '../assets/btn-continue.png' 


export const GOR_FRAME = 'GOR_FRAME'
export const VERT_FRAME = 'VERT_FRAME'
export const SQUARE_FRAME = 'SQUARE_FRAME'


export const appContainers = {
    'back': {
        constructorElem: Background,
        assetsToLoad: { 
            backImg, 
        },
        resizeData: {
            GOR_FRAME:    { x: 0, y: 0, scale: 1.6 },
            VERT_FRAME:   { x: 0, y: 0, scale: 1 },
            SQUARE_FRAME: { x: 0, y: 0, scale: 1.2 },
        }
    },
    'continue': {
        constructorElem: Continue,
        assetsToLoad: { 
            continueImg, 
        },
        resizeData: {
            GOR_FRAME:    { x: 0, y: 0, scale: 1.6 },
            VERT_FRAME:   { x: 0, y: 0, scale: 1 },
            SQUARE_FRAME: { x: 0, y: 0, scale: 1.2 },
        }
    },
}