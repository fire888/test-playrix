export class Btn {
    constructor ({ key, config }) {
        this._config = config
        this.key = key
        this.container = new PIXI.Container()
    }

    init () {
        const { keyImg, scaleImg } = this._config
        this.spr = PIXI.Sprite.from(keyImg)
        this.spr.anchor.set(.5)
        scaleImg && this.spr.scale.set(scaleImg)

        this.container.addChild(this.spr)
    }

    onClick (func) {
        this.spr.buttonMode = true
        this.spr.interactive = true
        this.spr.on('pointerdown', () => {
            func(this.key)
        })
    }

    disable () {
        this.spr.buttonMode = false
        this.spr.interactive = false
    }
}