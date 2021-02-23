export class LoaderAssets {
    constructor () {
        this._loader = new PIXI.Loader()
        this._loader.onError.add(this._loadHandler.bind(this))
        this._loader.onProgress.add(e => {
            console.log(e.progress)
        })
    }

    load (data, callback) {
        for (let key in data) {
            this._loader.add(key, data[key])
        }
        this._loader.load(callback)
    }

    _loadHandler (loader, resource) {
        console.log("loading error: " + resource.url);
        console.log("progress error: " + loader.progress + "%");
    }
}

