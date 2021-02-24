export class GameManager {
    constructor (appData) {
        this._appData = appData
        this._onPlayComplete = null
    }


    startPlay (callback) {
        this._onPlayComplete = callback

        console.log(this._appData)

        const { BTN_CONTINUE, BTN_HUMMER } = this._appData.components

        setTimeout(() => this._show(BTN_CONTINUE, 'spr'), 1000)
        setTimeout(() => this._startPulse(BTN_CONTINUE, 'spr', .2), 1000)

        setTimeout(() => this._show(BTN_HUMMER), 2000)
        setTimeout(() => this._dropDown(BTN_HUMMER, 'spr', 70), 2000)
        setTimeout(() => this._startPulse(BTN_HUMMER, 'spr', .2), 2000)
    }

 
    _show(item) {
        const { tween } = this._appData

        item.container.alpha = 0
        item.container.renderable = true
        const show = tween.create({
            tweenType: 'linear',
            fromValue: 0,
            toValue: 1,
            duration: 100,
            actionWithValue: val => item.container.alpha = val,
        })
        show.start()
    } 


    _dropDown(item, key, size) {
        const { tween } = this._appData

        item.container.alpha = 0
        item.container.renderable = true
        const show = tween.create({
            tweenType: 'eraseTween',
            fromValue: 0,
            toValue: 1,
            duration: 500,
            actionWithValue: val => item[key].y = val * size,
        })
        show.start()
    }


    _startPulse( item, key, size ) {
        const { tween } = this._appData

        const iterate = () => {
            const move = tween.create({
                tweenType: 'autoUpdateColumnTwoVals',
                fromValue: 0,
                middleValueOne: -.5,
                middleValueTwo: .5,
                toValue: 0.001,
                duration: 500,
                actionWithValue: val => item[key].scale.set(1 + val * size),
            })
            move.start()
                .then(iterate)
        }
        
        iterate()
    }
}
