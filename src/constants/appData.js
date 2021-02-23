import { Background } from '../elements/Background'
import backImg from '../assets/back.png'

import { Logo } from '../elements/Logo'
import logoImg from '../assets/logo.png'

import { MessageFinal } from '../elements/MessageFinal'
import messageFinalImg from '../assets/message-final.png'

import { Continue } from '../elements/Continue'
import continueImg from '../assets/btn-continue.png' 


export const GOR_FRAME = 'GOR_FRAME'
export const VERT_FRAME = 'VERT_FRAME'
export const SQUARE_FRAME = 'SQUARE_FRAME'

export const APP_HEIGHT_CLIPART = 1000
export const SEGMENTS = 10



export const appContainers = {
    'back': {
        constructorElem: Background,
        assetsToLoad: { 
            backImg, 
        },
        resizeData: {
            GOR_FRAME:    { x: 0, y: 0, scale: 1.8 },
            VERT_FRAME:   { x: 0, y: 0, scale: 1   },
            SQUARE_FRAME: { x: 0, y: 0, scale: 1.2 },
        },
        isStartRender: true,
    },
    'messageFinal': {
        constructorElem: MessageFinal,
        assetsToLoad: {
            messageFinalImg,
        },
        resizeData: {
            GOR_FRAME:    { x: 0, y: -.5, scale: 1.2 },
            VERT_FRAME:   { x: 0, y: -.5, scale: .7 },
            SQUARE_FRAME: { x: 0, y: -.5, scale: .8 },
        },
        isStartRender: true,
    },
    'logo': {
        constructorElem: Logo,
        assetsToLoad: {
            logoImg,
        },
        resizeData: {
            GOR_FRAME:    { x: -3.5, y: -4, scale: 1.2 },
            VERT_FRAME:   { x: 0, y: -3.5, scale: .9 },
            SQUARE_FRAME: { x: -3, y: -4, scale: 1.2 },
        },
        isStartRender: true,
    },
    'continue': {
        constructorElem: Continue,
        assetsToLoad: { 
            continueImg, 
        },
        resizeData: {
            GOR_FRAME:    { x: 0, y: 4,   scale: .8 },
            VERT_FRAME:   { x: 0,  y: 3.5, scale: .6 },
            SQUARE_FRAME: { x: 0,  y: 4,   scale: .8 },
        },
        isStartRender: true,
    },
}