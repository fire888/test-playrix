export class LoaderAssets {
    constructor () {
        this._loader = new PIXI.Loader()
    }

    load (data, callback) {
        for (let key in data)
            this._loader.add(key, data[key])

        this._loader.load(callback)
    }
}

