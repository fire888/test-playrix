import {
    DARK_W,
    DARK_H,
    DARK_ALPHA,
    DARK,
} from '../constants/constants'



export class MessageDark {
    constructor ({ config }) {
        this._config = config
        this.container = new PIXI.Container()
    }

    init () {
        const dark = new PIXI.Graphics()
        dark.beginFill(DARK)
        dark.drawRect(-DARK_W / 2, -DARK_H / 2, DARK_W, DARK_H)
        dark.endFill()
        dark.alpha = DARK_ALPHA
        this.container.addChild(dark)

        const { keyMessageImg } = this._config
        const spr = new PIXI.Sprite.from(keyMessageImg)
        spr.anchor.set(.5)
        this.container.addChild(spr)
    }
}
