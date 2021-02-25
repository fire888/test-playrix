export class Tween {
    constructor (frameUpdater) {
        this._arrTweens = []

        this._frameUpdater = frameUpdater
        this._frameUpdater.addFunction(this._updateTweens.bind(this))
    }

    /** public ********************************** */

    create (data) {
        let onComplete = () => {}
        const key = rand()

        const tweenData = {
            ...data,
            timeStarted: Date.now(),
            callback: () => {
                this._arrTweens = this._arrTweens.filter(item => item.key !== key)
                onComplete()
            },
        }

        return {
            start: () => { 
                const update = tweens[data.tweenType](tweenData)
                this._arrTweens.push({ update, key })
                return new Promise(res => onComplete = res)
            },
            stop: tweenData.callback,
        }
    }


    /** intrnal  ******************************** */
    
    _updateTweens () {
        for (let i = 0; i < this._arrTweens.length; ++i) {
            this._arrTweens[i].update()
        }
    }
}



const tweens = {
    'linear': ({
            timeStarted,
            fromValue,
            toValue,
            duration,
            actionWithValue,
            callback,
        }) => () => {
            const phase = Math.min(1, (Date.now() - timeStarted) / duration)
            actionWithValue((toValue - fromValue) * phase)
            phase === 1 && callback()
        },

    'simpleTween': ({
            timeStarted,
            fromValue,
            toValue,
            duration,
            actionWithValue,
            callback,
        }) => () => {
            const phase = Math.min(1, (Date.now() - timeStarted) / duration)
            const value = lerp(fromValue, toValue, phase)
            actionWithValue(value)
            phase === 1 && callback()
        },

    'eraseTween': ({
            timeStarted,
            fromValue,
            toValue,
            duration,
            actionWithValue,
            callback,
        }) => () => {
            const phase = Math.min(1, (Date.now() - timeStarted) / duration)
            const value = lerp(fromValue, toValue, easeOutElastic(phase))
            actionWithValue(value)
            phase === 1 && callback()
        },

    'autoUpdateColumnTwoVals': ({
           timeStarted,
           fromValue,
           middleValueOne,
           middleValueTwo,
           toValue,
           duration,
           actionWithValue,
           callback,
        }) => () => {
            const phase = Math.min(1, (Date.now() - timeStarted) / duration)
            const value = interpolateTwoVals(fromValue, middleValueOne, middleValueTwo, toValue, phase)
            actionWithValue(value)
            phase === 1 && callback()
        },
}


const rand = () => Math.floor(Math.random() * 100000)

const interpolate = (x1, x2, x3, t) => ((1 - t) * (1 - t) * x1) + (2 * t * (1 - t) * x2) + (t * t * x3)

const lerp = (x1, x2, t) => x1 * (1 - t) + x2 * t;

const interpolateTwoVals = (x1, x2, x3, x4, t) => {
    const v1 = (1-t)**3 * x1;
    const v2 = 3 * (1-t)**2 * t * x2
    const v3 = 3 * (1-t)*(t**2) * x3
    const v4 = t**3 * x4
    return v1 + v2 + v3 + v4
}

const backOut = amount => t => (--t * t * ((amount + 1) * t + amount) + 1)

const C4 = (2 * Math.PI) / 3
const easeOutElastic = x =>
    x === 0
      ? 0
      : x === 1
        ? 1
        : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * C4) + 1


