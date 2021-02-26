export class Tween {
    constructor (frameUpdater) {
        this._arrTweens = []
        this._pulseTweens = []

        this._frameUpdater = frameUpdater
        this._frameUpdater.addFunction(this._updateTweens.bind(this))
    }


    /** public ********************************** */

    toggleView(item, toValue) {

        let fromValue = 1
        if (toValue === 1) {
            fromValue = 0
            item.container.alpha = 0
            item.container.renderable = true
        }

        const show = this._create({
            tweenType: 'linear',
            fromValue,
            toValue,
            duration: 100,
            actionWithValue: val => item.container.alpha = val,
        })
        show.start()
            .then(() => {
                if (toValue === 0) {
                    item.container.renderable = false
                }
            })
    }


    showScale (item) {
        const scale = this._create({
            tweenType: 'linear',
            fromValue: 0,
            toValue: .7,
            duration: 300,
            actionWithValue: val => item.container.scale.set(.3 + val),
        })
        scale.start()
    }


    dropDown(item, key, size) {
        const drop = sp => {
            const show = this._create({
                tweenType: 'eraseTween',
                fromValue: 0,
                toValue: 1,
                duration: 500,
                actionWithValue: val => {
                    sp.y = val * size
                    sp.alpha = val
                }
            })
            show.start()
        }


        if (Array.isArray(item[key])) {
            item.container.alpha = 1
            item.container.renderable = true
            item[key].forEach(sp => sp.alpha = 0)

            const offsetTime = 200
            for (let i = 0; i < item[key].length; ++i) {
                setTimeout(() => drop(item[key][i]), i * offsetTime)
            }
        } else {
            item.container.alpha = 0
            item.container.renderable = true
            drop(item[key])
        }
    }


    startPulse( item, key, size ) {
        const pulseFunction = () => {
            let isNext = true
            let move = null

            const iterate = () => {
                move = this._create({
                    tweenType: 'autoUpdateColumnTwoVals',
                    fromValue: 0,
                    middleValueOne: -.5,
                    middleValueTwo: .5,
                    toValue: 0.001,
                    duration: 500,
                    actionWithValue: val => item[key].scale.set(1 + val * size),
                })
                move.start()
                    .then(() => isNext && iterate())
            }

            iterate()

            return {
                key: item.key,
                stop () {
                    isNext = false
                    move.stop()
                }
            }
        }

        this._pulseTweens.push(pulseFunction())
    }


    stopPulse (keyItem) {
        for(let i = 0; i < this._pulseTweens.length; ++i) {
            const { key, stop } = this._pulseTweens[i]
            if (key === keyItem) {
                stop()
                this._pulseTweens = this._pulseTweens.filter(item => item.key !== keyItem)
            }
        }
    }


    /** intrnal  ******************************** */

    _create (data) {
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

const lerp = (x1, x2, t) => x1 * (1 - t) + x2 * t

const interpolateTwoVals = (x1, x2, x3, x4, t) => {
    const v1 = (1-t)**3 * x1;
    const v2 = 3 * (1-t)**2 * t * x2
    const v3 = 3 * (1-t)*(t**2) * x3
    const v4 = t**3 * x4
    return v1 + v2 + v3 + v4
}

const C4 = (2 * Math.PI) / 3
const easeOutElastic = x =>
    x === 0
      ? 0
      : x === 1
        ? 1
        : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * C4) + 1
