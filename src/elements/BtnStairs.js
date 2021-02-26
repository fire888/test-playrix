export class BtnStairs {
    constructor ({ key, config }) {
        this.key = key
        this._config = config
        this.container = new PIXI.Container()
    }

    init () {
        const { keyCarpetImg } = this._config

        this.spr = new PIXI.Container()
        this.container.addChild(this.spr)

        this._idle = new PIXI.Sprite.from('iconIdleImg')
        this._idle.anchor.set(.5)
        this.spr.addChild(this._idle)

        this._hover = new PIXI.Sprite.from('iconHoverImg')
        this._hover.anchor.set(.5)
        this._hover.renderable = false
        this.spr.addChild(this._hover)

        this._carpet = new PIXI.Sprite.from(keyCarpetImg)
        this._carpet.anchor.set(.5)
        this.spr.addChild(this._carpet)
    }

    onClick (func) {
        this.spr.buttonMode = true
        this.spr.interactive = true
        this.spr.on('pointerdown', () => {
            this._hover.renderable = true
            func(this.key)
        })
    }

    disable () {
        this.spr.buttonMode = false
        this.spr.interactive = false
        this._hover.renderable = false
    }

    setCurrent () {
        this._hover.alpha = 1

    }
    clearCurrent () {
        this._hover.alpha = 0
    }
}
