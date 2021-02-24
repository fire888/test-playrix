export class Btn {
    constructor ({ key, config }) {
        this.key = key
        this.container = new PIXI.Container()   
        
        const { keyImg } = config
        this.spr = PIXI.Sprite.from(keyImg)
        this.spr.anchor.set(.5)

        this.container.addChild(this.spr)
    }
}