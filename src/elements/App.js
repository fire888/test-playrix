export class App {
    constructor({ resolution, domContainer }) {

        this.app = new PIXI.Application({
            resizeTo: domContainer,
            autoResize: false,
            autoDensity: false,
            resolution,
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
