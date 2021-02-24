export class Stairs {
    constructor (config) {
        const { keyImgs } = config

        this.container = new PIXI.Container()

        this._sprites = []
        for (let i = 0; i < keyImgs.length; ++i) {
            const spr = new PIXI.Sprite.from(keyImgs[i])
            spr.anchor.set(1, 0.5)
            this.container.addChild(spr)
            this._sprites.push(spr)
        }
        //  this._item = new PIXI.Sprite.from('iconIdleImg')
        // this._idle.anchor.set(.5)
        // this.container.addChild(this._idle)
        //
        // this._hover = new PIXI.Sprite.from('iconHoverImg')
        // this._hover.anchor.set(.5)
        // this._hover.renderable = false
        // this.container.addChild(this._hover)
        //
        // this._carpet = new PIXI.Sprite.from(keyCarpetImg)
        // this._carpet.anchor.set(.5)
        // this.container.addChild(this._carpet)
        //
        // this._btnOk = new PIXI.Sprite.from('btnOkImg')
        // this._btnOk.y = 90
        // this._btnOk.anchor.set(.5)
        // this._btnOk.renderable = false
        // this.container.addChild(this._btnOk)
    }
}
