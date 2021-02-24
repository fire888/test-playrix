export class BtnStairs {
    constructor ({ key, config }) {
        this.key = key

        const { keyCarpetImg } = config

        this.container = new PIXI.Container()

        this._idle = new PIXI.Sprite.from('iconIdleImg')
        this._idle.anchor.set(.5)
        this.container.addChild(this._idle)

        this._hover = new PIXI.Sprite.from('iconHoverImg')
        this._hover.anchor.set(.5)
        this._hover.renderable = false
        this.container.addChild(this._hover)

        this._carpet = new PIXI.Sprite.from(keyCarpetImg)
        this._carpet.anchor.set(.5)
        this.container.addChild(this._carpet)

        this._btnOk = new PIXI.Sprite.from('btnOkImg')
        this._btnOk.y = 90
        this._btnOk.anchor.set(.5)
        this._btnOk.renderable = false
        this.container.addChild(this._btnOk)
    }
}
