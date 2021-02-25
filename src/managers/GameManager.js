export class GameManager {

    /** public **************************************************** */

    startStairsPlay (appData, onComplete) {
        this._appData = appData
        this._pulseTweens = []

        const {
            btnHummer,
            btnStairs01,
            btnStairs02,
            btnStairs03,
            btnConfirm,
            stairs00,
            stairs01,
            stairs02,
            stairs03,
            messageFinal,
            btnContinue,
        } = this._appData.components


        /** **********************************
         * STAIRS PLAY
         ********************************** */

        pause(700, () => {

            /** show hummer */
            this._toggleView(btnHummer, 1)
            this._dropDown(btnHummer, 'spr', 70)
        })
        .then(pause.bind(null, 300, () => {
            this._startPulse(btnHummer, 'spr', .2)}
        ))
        .then(waitForClick.bind(this, btnHummer))
        .then(pause.bind(null, 0, () => {

            /** hide old stairs */
            this._stopPulse('btnHummer')
            btnHummer.disable()
            this._toggleView(btnHummer, 0)
            this._toggleView(stairs00, 0)

            /** show stairs buttons */
            this._toggleView(btnStairs01, 1)
            this._dropDown(btnStairs01, 'spr', 70)

            this._toggleView(btnStairs02, 1)
            this._dropDown(btnStairs02, 'spr', 70)

            this._toggleView(btnStairs03, 1)
            this._dropDown(btnStairs03, 'spr', 70)
        }))
        .then(this._selectFromElements.bind(this, [ btnStairs01, btnStairs02, btnStairs03 ], btnConfirm, clickedKey => {

            /** hide current and show selected stairs */
            stairs01.container.renderable = false
            stairs02.container.renderable = false
            stairs03.container.renderable = false

            let stairs = null
            if (clickedKey === 'btnStairs01') stairs = stairs01
            if (clickedKey === 'btnStairs02') stairs = stairs02
            if (clickedKey === 'btnStairs03') stairs = stairs03

            this._toggleView(stairs, 1)
            this._dropDown(stairs, 'sprites', 140)
        }))
        .then(pause.bind(null, 0, () => {

            /** disable buttons */
            btnStairs01.disable()
            btnStairs02.disable()
            btnStairs03.disable()
            btnConfirm.disable()

            /** show final message */
            this._toggleView(messageFinal, 1)
            this._toggleView(btnContinue, 1)
            this._dropDown(btnContinue, 'spr', 70)
        }))
        .then(pause.bind(null, 300, () => {

            /** add pulse to continue button */
            this._startPulse(btnContinue, 'spr', .3)
        }))
        .then(waitForClick.bind(this, btnContinue))
        .then(pause.bind(null, 0, () => {

            /** hide continue button */
            this._stopPulse('btnContinue')
            this._toggleView(btnContinue, 0)

            /** stop all pulses if any forgot */
            this._pulseTweens.forEach(item => item.stop())

            /** game complete */
            let { stairsPlayed } = this._appData
            onComplete({ stairsPlayed: ++stairsPlayed || 1 })
        }))
    }


    resetToStart (appData, onComplete) {
        this._appData = appData
        const { startComponentsData } = this._appData

        /** reset all items */
        for (let i = 0; i < startComponentsData.length; ++i) {
            const { key, isStartRender } = startComponentsData[i]
            this._appData.components[key].container.renderable = isStartRender
        }

        let { restarted } = this._appData
        onComplete({ restarted: ++restarted || 1 })
    }


    /** internal **************************************************** */

    _selectFromElements (items, confirmItem, onSelect) {
        let currentItem = null

        items.forEach(item => item.onClick(key => {
            currentItem = key
            this._toggleView(confirmItem, 1)
            this._dropDown(confirmItem, 'spr', 90)

            item.container.addChild(confirmItem.container)
            items.forEach(item => item.clearCurrent())
            item.setCurrent()
            onSelect(key)
        }))

        return new Promise(resolve => confirmItem.onClick(resolve))
    }

 
    _toggleView(item, toValue) {
        const { tween } = this._appData

        let fromValue = 1
        if (toValue === 1) {
            fromValue = 0
            item.container.alpha = 0
            item.container.renderable = true
        }

        const show = tween.create({
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


    _dropDown(item, key, size) {
        const { tween } = this._appData

        const drop = sp => {
            const show = tween.create({
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


    _startPulse( item, key, size ) {
        const { tween } = this._appData

        const pulseFunction = () => {
            let isNext = true
            let move = null

            const iterate = () => {
                move = tween.create({
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

    _stopPulse (keyItem) {
        for(let i = 0; i < this._pulseTweens.length; ++i) {
            const { key, stop } = this._pulseTweens[i]
            if (key === keyItem) {
                stop()
                this._pulseTweens = this._pulseTweens.filter(item => item.key !== keyItem)
            }
        }
    }
}





/** helpers ********************************************* */

const waitForClick = item => new Promise(resolve => item.onClick(resolve))

const pause = (time, callback) => {
    return new Promise(resolve => {
        setTimeout(() => {
            callback()
            resolve()
        }, time)
    })
}
