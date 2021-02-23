export class EasySprite {
    constructor (config) {
        const { keyImg } = config
        this.container = new PIXI.Sprite.from(keyImg)
        this.container.anchor.set(.5)
    }
}