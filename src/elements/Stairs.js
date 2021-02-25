export class Stairs {
    constructor ({ config }) {
        const { keyImgs } = config

        this.container = new PIXI.Container()

        this.sprites = []
        for (let i = 0; i < keyImgs.length; ++i) {
            const spr = new PIXI.Sprite.from(keyImgs[i])
            spr.anchor.set(1, 0.5)
            this.container.addChild(spr)
            this.sprites.push(spr)
        }
    }
}
