export class EasySprite {
    constructor ({ config }) {
        this._config = config
        this.container = new PIXI.Container()
    }

    init () {
        const { keyImg } = this._config
        const sp = new PIXI.Sprite.from(keyImg)
        sp.anchor.set(.5)
        this.container.addChild(sp)
    }
}
