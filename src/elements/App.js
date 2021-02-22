export class App {
    constructor(gameContext, parentDom) {
        this.app = new PIXI.Application({
            resizeTo: parentDom,
            autoResize: true,
            autoDensity: false,
            resolution: window.devicePixelRatio,
            autoStart: true,
            antialias: false,
            transparent: false,
        })

        this.container = new PIXI.Container()
        this.app.stage.addChild(this.container)

        this.app.resize()
        this.app.render()
    }
}
