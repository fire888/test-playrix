export class ContainerManyImgs {
    constructor ({ config }) {
        this._config = config
        this.container = new PIXI.Container()
    }

    init () {
        const { keyImgs } = this._config
        this.sprites = []
        for (let i = 0; i < keyImgs.length; ++i) {
            const spr = new PIXI.Sprite.from(keyImgs[i])
            spr.anchor.set(1, 0.5)
            this.container.addChild(spr)
            this.sprites.push(spr)
        }
    }
}
