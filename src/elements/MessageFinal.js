const DARK_W = 3000
const DARK_H = 3000

export class MessageFinal {
    constructor () {
        this.container = new PIXI.Container()

        const dark = new PIXI.Graphics()
        dark.beginFill(0x000000);
        dark.drawRect(-DARK_W / 2, -DARK_H / 2, DARK_W, DARK_H);
        dark.endFill()
        dark.alpha = .7

        this.container.addChild(dark)

        const spr = new PIXI.Sprite.from('messageFinalImg')
        spr.anchor.set(.5)
        this.container.addChild(spr)
    }
}