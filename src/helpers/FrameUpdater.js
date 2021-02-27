const CONFIG = {
    defaultFPS: 60,
    second: 1000,
}
const tickVal = CONFIG.defaultFPS / CONFIG.second


class FrameUpdater {
    constructor () {
        this._lastStamp = null;
        this._arrFunctions = []
        this._update()
    }

    /** public ****************************** */
    
    addFunction (f) {
        this._arrFunctions.push(f)
        return () => this._arrFunctions.filter(item => item !== f)
    }

    reset () {
        this.lastStamp = null
    }
  
    /** internal ************************************************** */
  
    _update () {
        requestAnimationFrame(this._update.bind(this))
        if (this._arrFunctions.length === 0) return;
  
        const count = this._getCountRedraw()
        for (let i = 0; i < this._arrFunctions.length; ++i) {
            this._arrFunctions[i](count)
        }
    }

    _getCountRedraw () {
        if (!this._lastStamp) this._lastStamp = Date.now()
      
        const timeCurrent = Date.now()
        const timePassed = timeCurrent - this._lastStamp
        let framesToExec = Math.floor(timePassed / tickVal)
        if (framesToExec !== 0) {
            framesToExec = Math.max(1, framesToExec)
            this.lastStamp += framesToExec * tickVal
            return framesToExec
        }
        return 0
    }
}


export const frameUpdater = new FrameUpdater()
