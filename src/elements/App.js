export class App {
    constructor({ resolution, domWrapper }) {

        this.app = new PIXI.Application({
            resizeTo: domWrapper,
            autoResize: true,
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
