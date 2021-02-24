export class Btn {
    constructor ({ key, config }) {
        this.key = key
        const { keyImg } = config
        this.container = new PIXI.Sprite.from(keyImg)
        this.container.anchor.set(.5)
    }
}