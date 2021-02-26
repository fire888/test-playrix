import {
    DARK_W,
    DARK_H,
    DARK_ALPHA,
} from '../constants/constants'



export class MessageFinal {
    constructor () {
        this.container = new PIXI.Container()
    }

    init () {
        const dark = new PIXI.Graphics()
        dark.beginFill(0x000000);
        dark.drawRect(-DARK_W / 2, -DARK_H / 2, DARK_W, DARK_H);
        dark.endFill()
        dark.alpha = DARK_ALPHA

        this.container.addChild(dark)

        const spr = new PIXI.Sprite.from('messageFinalImg')
        spr.anchor.set(.5)
        this.container.addChild(spr)
    }
}
