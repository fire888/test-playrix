import { Background } from '../elements/Background'
import backImg from '../assets/back.png'

import { Logo } from '../elements/Logo'
import logoImg from '../assets/logo.png'

import { MessageFinal } from '../elements/MessageFinal'
import messageFinalImg from '../assets/message-final.png'

import { BtnContinue } from '../elements/BtnContinue'
import continueImg from '../assets/btn-continue.png' 

import { BtnCarpet } from '../elements/BtnCarpet'
import btnOkImg from '../assets/btn-ok.png'
import iconHoverImg from '../assets/icon-hover.png'
import iconIdleImg from '../assets/icon-idle.png'
import carpet1Img from '../assets/carpet1.png'
import carpet2Img from '../assets/carpet2.png'
import carpet3Img from '../assets/carpet3.png'

import { BtnHummer } from '../elements/BtnHummer'
import iconHummerImg from '../assets/icon-hummer.png'


import { EasySprite } from '../elements/EasySprite'
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
export const VERT_FRAME = 'VERT_FRAME'
export const SQUARE_FRAME = 'SQUARE_FRAME'
export const APP_HEIGHT_CLIPART = 1000
export const SEGMENTS = 10




export const BACK = 'BACK'
export const MESSAGE_FINAL = 'MESSAGE_FINAL'
export const LOGO = 'LOGO'
export const CONTINUE = 'CONTINUE'
export const ICON_CARPET_1 = 'ICON_CARPET_1'
export const ICON_CARPET_2 = 'ICON_CARPET_2'
export const ICON_CARPET_3 = 'ICON_CARPET_3'
export const BTN_HUMMER = 'BTN_HUMMER'
export const AUSTIN = 'AUSTIN'
export const STAIRS_00 = 'STAIRS_00'
export const STAIRS_01 = 'STAIRS_01'
export const STAIRS_02 = 'STAIRS_02'
export const STAIRS_03 = 'STAIRS_03'




export const componentsData = [

    /** ************************************
     * BACK
     ***************************************/

    {
        key: BACK,
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

    /** ************************************
     * ITEMS
     ***************************************/

    {
        key: AUSTIN,
        constructorElem: EasySprite,
        assetsToLoad: { 
            austinImg,
        },
        config: {
            keyImg: 'austinImg',
        },
        resizeData: {
            GOR_FRAME:    { x: -4, y: 0, scale: 1.8 },
            VERT_FRAME:   { x: -4, y: 0, scale: 1   },
            SQUARE_FRAME: { x: -4, y: 0, scale: 1.2 },
        },
        isStartRender: true,
    },
    {
        key: 'item1',
        constructorElem: EasySprite,
        assetsToLoad: { 
            item1Img,
        },
        config: {
            keyImg: 'item1Img'
        },
        resizeData: {
            GOR_FRAME:    { x: -4, y: 3, scale: 1.8 },
            VERT_FRAME:   { x: -4, y: 3, scale: 1   },
            SQUARE_FRAME: { x: -4, y: 3, scale: 1.2 },
        },
        isStartRender: true,
    },
    {
        key: 'item2',
        constructorElem: EasySprite,
        assetsToLoad: { 
            item2Img,
        },
        config: {
            keyImg: 'item2Img'
        },
        resizeData: {
            GOR_FRAME:    { x: -4, y: -3, scale: 1.8 },
            VERT_FRAME:   { x: -4, y: -3, scale: 1   },
            SQUARE_FRAME: { x: -4, y: -3, scale: 1.2 },
        },
        isStartRender: true,
    },
    {
        key: 'item2_2',
        constructorElem: EasySprite,
        config: {
            keyImg: 'item2Img'
        },
        resizeData: {
            GOR_FRAME:    { x: -3, y: -3, scale: 1.8 },
            VERT_FRAME:   { x: -3, y: -3, scale: 1   },
            SQUARE_FRAME: { x: -3, y: -3, scale: 1.2 },
        },
        isStartRender: true,
    },
    {
        key: 'item3',
        constructorElem: EasySprite,
        assetsToLoad: { 
            item3Img,
        },
        config: {
            keyImg: 'item3Img'
        },
        resizeData: {
            GOR_FRAME:    { x: 4, y: -3, scale: 1.8 },
            VERT_FRAME:   { x: 4, y: -3, scale: 1   },
            SQUARE_FRAME: { x: 4, y: -3, scale: 1.2 },
        },
        isStartRender: true,
    },
    {
        key: 'item4',
        constructorElem: EasySprite,
        assetsToLoad: { 
            item4Img,
        },
        config: {
            keyImg: 'item4Img'
        },
        resizeData: {
            GOR_FRAME:    { x: 3, y: -2, scale: 1.8 },
            VERT_FRAME:   { x: 3, y: -2, scale: 1   },
            SQUARE_FRAME: { x: 3, y: -2, scale: 1.2 },
        },
        isStartRender: true,
    },
    {
        key: 'item5',
        constructorElem: EasySprite,
        assetsToLoad: { 
            item5Img,
        },
        config: {
            keyImg: 'item5Img'
        },
        resizeData: {
            GOR_FRAME:    { x: 3, y: 0, scale: 1.8 },
            VERT_FRAME:   { x: 3, y: 0, scale: 1   },
            SQUARE_FRAME: { x: 3, y: 0, scale: 1.2 },
        },
        isStartRender: true,
    },

    /** ************************************
     * STAIRS
     ***************************************/
    {
        key: STAIRS_00,
        constructorElem: Stairs,
        assetsToLoad: {
            stairs_00Img,
        },
        config: {
            keyImgs: ['stairs_00Img']
        },
        resizeData: {
            GOR_FRAME:    { x: -1, y: 0, scale: 1 },
            VERT_FRAME:   { x: -1, y: 0, scale: .5 },
            SQUARE_FRAME: { x: -1, y: 0, scale: .7 },
        },
        isStartRender: true,
    },

    {
        key: STAIRS_01,
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
            VERT_FRAME:   { x: 1, y: 0, scale: .5 },
            SQUARE_FRAME: { x: 1, y: 0, scale: .7 },
        },
        isStartRender: true,
    },

    {
        key: STAIRS_02,
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
            VERT_FRAME:   { x: 3, y: 0, scale: .5 },
            SQUARE_FRAME: { x: 3, y: 0, scale: .7 },
        },
        isStartRender: true,
    },

    {
        key: STAIRS_03,
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
            VERT_FRAME:   { x: 5, y: 0, scale: .5 },
            SQUARE_FRAME: { x: 5, y: 0, scale: .7 },
        },
        isStartRender: true,
    },

    /** ************************************
     * ITEMS TOP
     ***************************************/

    {
        key: 'item6',
        constructorElem: EasySprite,
        assetsToLoad: { 
            item6Img,
        },
        config: {
            keyImg: 'item6Img'
        },
        resizeData: {
            GOR_FRAME:    { x: -4, y: 3, scale: 1.8 },
            VERT_FRAME:   { x: -4, y: 3, scale: 1   },
            SQUARE_FRAME: { x: -4, y: 3, scale: 1.2 },
        },
        isStartRender: true,
    },


    /** ************************************
     * CONTROLS
     ***************************************/

    {
        key: ICON_CARPET_1,
        constructorElem: BtnCarpet,
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
            VERT_FRAME:   { x: -2, y: 0, scale: 1   },
            SQUARE_FRAME: { x: -2, y: 0, scale: 1.2 },
        },
        isStartRender: true,
    },
    {
        key: ICON_CARPET_2,
        constructorElem: BtnCarpet,
        assetsToLoad: { 
            carpet2Img,
        },
        config: {
            keyCarpetImg: 'carpet2Img'
        },
        resizeData: {
            GOR_FRAME:    { x: 0, y: 0, scale: 1.8 },
            VERT_FRAME:   { x: 0, y: 0, scale: 1   },
            SQUARE_FRAME: { x: 0, y: 0, scale: 1.2 },
        },
        isStartRender: true,
    },
    {
        key: ICON_CARPET_3,
        constructorElem: BtnCarpet,
        assetsToLoad: { 
            carpet3Img,
        },
        config: {
            keyCarpetImg: 'carpet3Img'
        },
        resizeData: {
            GOR_FRAME:    { x: 2, y: 0, scale: 1.8 },
            VERT_FRAME:   { x: 2, y: 0, scale: 1   },
            SQUARE_FRAME: { x: 2, y: 0, scale: 1.2 },
        },
        isStartRender: true,
    },
    {
        key: BTN_HUMMER,
        constructorElem: BtnHummer,
        assetsToLoad: { 
            iconHummerImg,
        },
        resizeData: {
            GOR_FRAME:    { x: 2, y: -2, scale: 1.8 },
            VERT_FRAME:   { x: 2, y: -2, scale: 1   },
            SQUARE_FRAME: { x: 2, y: -2, scale: 1.2 },
        },
        isStartRender: true,
    },
    {
        key: MESSAGE_FINAL,
        constructorElem: MessageFinal,
        assetsToLoad: {
            messageFinalImg,
        },
        resizeData: {
            GOR_FRAME:    { x: 0, y: -.5, scale: 1.2 },
            VERT_FRAME:   { x: 0, y: -.5, scale: .7 },
            SQUARE_FRAME: { x: 0, y: -.5, scale: .8 },
        },
        isStartRender: false,
    },
    {
        key: LOGO,
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
    {
        key: CONTINUE,
        constructorElem: BtnContinue,
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
]
