import { MessageFinal } from '../elements/MessageFinal'
import messageFinalImg from '../assets/message-final.png'

import { Btn } from '../elements/Btn'
import continueImg from '../assets/btn-continue.png'
import iconHummerImg from '../assets/icon-hummer.png'


import { BtnStairs } from '../elements/BtnStairs'
import btnOkImg from '../assets/btn-ok.png'
import iconHoverImg from '../assets/icon-hover.png'
import iconIdleImg from '../assets/icon-idle.png'
import carpet1Img from '../assets/carpet1.png'
import carpet2Img from '../assets/carpet2.png'
import carpet3Img from '../assets/carpet3.png'


import { EasySprite } from '../elements/EasySprite'
import backImg from '../assets/back.png'
import logoImg from '../assets/logo.png'
import austinImg from '../assets/austin.png'
import item1Img from '../assets/item_1.png'
import item2Img from '../assets/item_2.png'
import item3Img from '../assets/item_3.png'
import item4Img from '../assets/item_4.png'
import item5Img from '../assets/item_5.png'
import item6Img from '../assets/item_6.png'



import { Stairs } from '../elements/Stairs'
import stairs_00Img from '../assets/stairs_00.png'
import stairs_01_01Img from '../assets/stairs_01_01.png'
import stairs_01_02Img from '../assets/stairs_01_02.png'
import stairs_01_03Img from '../assets/stairs_01_03.png'
import stairs_02_01Img from '../assets/stairs_02_01.png'
import stairs_02_02Img from '../assets/stairs_02_02.png'
import stairs_02_03Img from '../assets/stairs_02_03.png'
import stairs_03_01Img from '../assets/stairs_03_01.png'
import stairs_03_02Img from '../assets/stairs_03_02.png'
import stairs_03_03Img from '../assets/stairs_03_03.png'




export const GOR_FRAME = 'GOR_FRAME'
export const TOP_FRAME = 'TOP_FRAME'
export const SQUARE_FRAME = 'SQUARE_FRAME'
export const APP_HEIGHT_CLIPART = 1000
export const SEGMENTS = 10

export const DARK_W = 3000
export const DARK_H = 3000
export const DARK_ALPHA = .7






export const START_COMPONENTS_DATA = [

    /** ************************************
     * BACK
     ***************************************/

    {
        key: 'background',
        constructorElem: EasySprite,
        assetsToLoad: { 
            backImg, 
        },
        config: {
            keyImg: 'backImg',
        },
        resizeData: {
            GOR_FRAME:    { x: 0, y: 0, scale: 1.8 },
            TOP_FRAME:   { x: 0, y: 0, scale: 1.1   },
            SQUARE_FRAME: { x: 0, y: 0, scale: 1.2 },
        },
        isStartRender: true,
    },

    /** ************************************
     * ITEMS
     ***************************************/

    {
        key: 'hero',
        constructorElem: EasySprite,
        assetsToLoad: { 
            austinImg,
        },
        config: {
            keyImg: 'austinImg',
        },
        resizeData: {
            GOR_FRAME:    { x: -4, y: 0, scale: 1.8 },
            TOP_FRAME:   { x: -4, y: 0, scale: 1   },
            SQUARE_FRAME: { x: -4, y: 0, scale: 1.2 },
        },
        isStartRender: true,
    },
    {
        key: 'item01',
        constructorElem: EasySprite,
        assetsToLoad: { 
            item1Img,
        },
        config: {
            keyImg: 'item1Img'
        },
        resizeData: {
            GOR_FRAME:    { x: -4, y: 3, scale: 1.8 },
            TOP_FRAME:   { x: -4, y: 3, scale: 1   },
            SQUARE_FRAME: { x: -4, y: 3, scale: 1.2 },
        },
        isStartRender: true,
    },
    {
        key: 'item02',
        constructorElem: EasySprite,
        assetsToLoad: { 
            item2Img,
        },
        config: {
            keyImg: 'item2Img'
        },
        resizeData: {
            GOR_FRAME:    { x: -4, y: -3, scale: 1.8 },
            TOP_FRAME:   { x: -4, y: -3, scale: 1   },
            SQUARE_FRAME: { x: -4, y: -3, scale: 1.2 },
        },
        isStartRender: true,
    },
    {
        key: 'item02_2',
        constructorElem: EasySprite,
        config: {
            keyImg: 'item2Img'
        },
        resizeData: {
            GOR_FRAME:    { x: -3, y: -3, scale: 1.8 },
            TOP_FRAME:   { x: -3, y: -3, scale: 1   },
            SQUARE_FRAME: { x: -3, y: -3, scale: 1.2 },
        },
        isStartRender: true,
    },
    {
        key: 'item03',
        constructorElem: EasySprite,
        assetsToLoad: { 
            item3Img,
        },
        config: {
            keyImg: 'item3Img'
        },
        resizeData: {
            GOR_FRAME:    { x: 4, y: -3, scale: 1.8 },
            TOP_FRAME:   { x: 4, y: -3, scale: 1   },
            SQUARE_FRAME: { x: 4, y: -3, scale: 1.2 },
        },
        isStartRender: true,
    },
    {
        key: 'item04',
        constructorElem: EasySprite,
        assetsToLoad: { 
            item4Img,
        },
        config: {
            keyImg: 'item4Img'
        },
        resizeData: {
            GOR_FRAME:    { x: 3, y: -2, scale: 1.8 },
            TOP_FRAME:   { x: 3, y: -2, scale: 1   },
            SQUARE_FRAME: { x: 3, y: -2, scale: 1.2 },
        },
        isStartRender: true,
    },
    {
        key: 'item05',
        constructorElem: EasySprite,
        assetsToLoad: { 
            item5Img,
        },
        config: {
            keyImg: 'item5Img'
        },
        resizeData: {
            GOR_FRAME:    { x: 3, y: 0, scale: 1.8 },
            TOP_FRAME:   { x: 3, y: 0, scale: 1   },
            SQUARE_FRAME: { x: 3, y: 0, scale: 1.2 },
        },
        isStartRender: true,
    },

    /** ************************************
     * STAIRS
     ***************************************/
    {
        key: 'stairs00',
        constructorElem: Stairs,
        assetsToLoad: {
            stairs_00Img,
        },
        config: {
            keyImgs: ['stairs_00Img']
        },
        resizeData: {
            GOR_FRAME:    { x: 6, y: 1, scale: 1 },
            TOP_FRAME:   { x: 6, y: 2, scale: .5 },
            SQUARE_FRAME: { x: 6, y: 1, scale: 1 },
        },
        isStartRender: true,
    },

    {
        key: 'stairs01',
        constructorElem: Stairs,
        assetsToLoad: {
            stairs_01_01Img,
            stairs_01_02Img,
            stairs_01_03Img,
        },
        config: {
            keyImgs: ['stairs_01_03Img', 'stairs_01_02Img', 'stairs_01_01Img'],
        },
        resizeData: {
            GOR_FRAME:    { x: 1, y: 0, scale: 1 },
            TOP_FRAME:   { x: 1, y: 0, scale: .5 },
            SQUARE_FRAME: { x: 1, y: 0, scale: .7 },
        },
        isStartRender: false,
    },

    {
        key: 'stairs02',
        constructorElem: Stairs,
        assetsToLoad: {
            stairs_02_01Img,
            stairs_02_02Img,
            stairs_02_03Img,
        },
        config: {
            keyImgs: ['stairs_02_03Img', 'stairs_02_02Img', 'stairs_02_01Img'],
        },
        resizeData: {
            GOR_FRAME:    { x: 3, y: 0, scale: 1 },
            TOP_FRAME:   { x: 3, y: 0, scale: .5 },
            SQUARE_FRAME: { x: 3, y: 0, scale: .7 },
        },
        isStartRender: false,
    },

    {
        key: 'stairs03',
        constructorElem: Stairs,
        assetsToLoad: {
            stairs_03_01Img,
            stairs_03_02Img,
            stairs_03_03Img,
        },
        config: {
            keyImgs: ['stairs_03_03Img', 'stairs_03_02Img', 'stairs_03_01Img'],
        },
        resizeData: {
            GOR_FRAME:    { x: 5, y: 0, scale: 1 },
            TOP_FRAME:   { x: 5, y: 0, scale: .5 },
            SQUARE_FRAME: { x: 5, y: 0, scale: .7 },
        },
        isStartRender: false,
    },

    /** ************************************
     * ITEMS TOP
     ***************************************/

    {
        key: 'item_06',
        constructorElem: EasySprite,
        assetsToLoad: { 
            item6Img,
        },
        config: {
            keyImg: 'item6Img'
        },
        resizeData: {
            GOR_FRAME:    { x: -4, y: 3, scale: 1.8 },
            TOP_FRAME:   { x: -4, y: 3, scale: 1   },
            SQUARE_FRAME: { x: -4, y: 3, scale: 1.2 },
        },
        isStartRender: true,
    },


    /** ************************************
     * CONTROLS
     ***************************************/

    {
        key: 'btnStairs01',
        constructorElem: BtnStairs,
        assetsToLoad: { 
            btnOkImg,
            iconHoverImg,
            iconIdleImg,
            carpet1Img,
        },
        config: {
            keyCarpetImg: 'carpet1Img'
        },
        resizeData: {
            GOR_FRAME:    { x: -2, y: 0, scale: 1.8 },
            TOP_FRAME:   { x: -2, y: 0, scale: 1   },
            SQUARE_FRAME: { x: -2, y: 0, scale: 1.2 },
        },
        isStartRender: false,
    },
    {
        key: 'btnStairs02',
        constructorElem: BtnStairs,
        assetsToLoad: { 
            carpet2Img,
        },
        config: {
            keyCarpetImg: 'carpet2Img'
        },
        resizeData: {
            GOR_FRAME:    { x: 0, y: 0, scale: 1.8 },
            TOP_FRAME:   { x: 0, y: 0, scale: 1   },
            SQUARE_FRAME: { x: 0, y: 0, scale: 1.2 },
        },
        isStartRender: false,
    },
    {
        key: 'btnStairs03',
        constructorElem: BtnStairs,
        assetsToLoad: { 
            carpet3Img,
        },
        config: {
            keyCarpetImg: 'carpet3Img'
        },
        resizeData: {
            GOR_FRAME:    { x: 2, y: 0, scale: 1.8 },
            TOP_FRAME:   { x: 2, y: 0, scale: 1   },
            SQUARE_FRAME: { x: 2, y: 0, scale: 1.2 },
        },
        isStartRender: false,
    },
    {
         key: 'btnConfirm',
         constructorElem: Btn,
         assetsToLoad: {
             btnOkImg,
         },
         config: {
             keyImg: 'btnOkImg'
         },
         isStartRender: false,
    },
    {
        key: 'btnHummer',
        constructorElem: Btn,
        assetsToLoad: { 
            iconHummerImg,
        },
        config: {
            keyImg: 'iconHummerImg',
        },
        resizeData: {
            GOR_FRAME:    { x: 2, y: -2, scale: 1.8 },
            TOP_FRAME:   { x: 2, y: -2, scale: 1   },
            SQUARE_FRAME: { x: 2, y: -2, scale: 1.2 },
        },
        isStartRender: false,
    },
    {
        key: 'messageFinal',
        constructorElem: MessageFinal,
        assetsToLoad: {
            messageFinalImg,
        },
        resizeData: {
            GOR_FRAME:    { x: 0, y: -.5, scale: 1.2 },
            TOP_FRAME:   { x: 0, y: -.5, scale: .7 },
            SQUARE_FRAME: { x: 0, y: -.5, scale: .8 },
        },
        isStartRender: false,
    },
    {
        key: 'logo',
        constructorElem: EasySprite,
        assetsToLoad: {
            logoImg,
        },
        config: {
            keyImg: 'logoImg',
        },
        resizeData: {
            GOR_FRAME:    { x: -3.5, y: -4, scale: 1.2 },
            TOP_FRAME:   { x: 0, y: -3.5, scale: .9 },
            SQUARE_FRAME: { x: -3, y: -4, scale: 1.2 },
        },
        isStartRender: true,
    },
    {
        key: 'btnContinue',
        constructorElem: Btn,
        assetsToLoad: {
            continueImg,
        },
        config: {
            keyImg: 'continueImg',
        },
        resizeData: {
            GOR_FRAME:    { x: 0, y: 3.5,   scale: .8 },
            TOP_FRAME:   { x: 0,  y: 3.5, scale: .6 },
            SQUARE_FRAME: { x: 0,  y: 3.5,   scale: .8 },
        },
        isStartRender: false,
    },
]