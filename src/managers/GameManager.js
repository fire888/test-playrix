export class GameManager {

    /** public **************************************************** */

    startStairsPlay (appData, onComplete) {
        this._appData = appData

        const { tween, components } = this._appData

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
        } = components




        /** **********************************
         * STAIRS PLAY
         ********************************** */

        pause(700, () => {

            /** show hummer */
            tween.toggleView(btnHummer, 1)
            tween.dropDown(btnHummer, 'spr', 70)
        })
        .then(pause.bind(null, 300, () => {
            tween.startPulse(btnHummer, 'spr', .2)}
        ))
        .then(waitForClick.bind(this, btnHummer))
        .then(pause.bind(null, 0, () => {

            /** hide old stairs */
            tween.stopPulse('btnHummer')
            btnHummer.disable()
            tween.toggleView(btnHummer, 0)
            tween.toggleView(stairs00, 0)

            /** show stairs buttons */
            tween.toggleView(btnStairs01, 1)
            tween.showScale(btnStairs01)
        }))
        .then(pause.bind(null, 150, () => {

            tween.toggleView(btnStairs02, 1)
            tween.showScale(btnStairs02)
        }))
        .then(pause.bind(null, 150, () => {

            tween.toggleView(btnStairs03, 1)
            tween.showScale(btnStairs03)
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

            tween.toggleView(stairs, 1)
            tween.dropDown(stairs, 'sprites', 140)
        }))
        .then(pause.bind(null, 0, () => {

            /** disable buttons */
            btnStairs01.disable()
            btnStairs02.disable()
            btnStairs03.disable()
            btnConfirm.disable()

            tween.toggleView(btnStairs01, 0)
            tween.toggleView(btnStairs02, 0)
            tween.toggleView(btnStairs03, 0)
            tween.toggleView(btnConfirm, 0)

            /** show final message */
            tween.toggleView(messageFinal, 1)
            tween.toggleView(btnContinue, 1)
            tween.dropDown(btnContinue, 'spr', 70)
        }))
        .then(pause.bind(null, 300, () => {

            /** add pulse to continue button */
            tween.startPulse(btnContinue, 'spr', .3)
        }))
        .then(waitForClick.bind(this, btnContinue))
        .then(pause.bind(null, 0, () => {

            /** hide continue button */
            tween.stopPulse('btnContinue')
            tween.toggleView(btnContinue, 0)

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

        // TODO: very bad... move to config
        /** show broken stairs again */
        this._appData.components['stairs00'].container.alpha = 1

        /** onComplete */
        let { restarted } = this._appData
        onComplete({ restarted: ++restarted || 1 })
    }


    /** internal **************************************************** */

    _selectFromElements (items, confirmItem, onSelect) {
        const { tween } = this._appData
        //let currentItem = null

        items.forEach(item => item.onClick(key => {
            //currentItem = key
            tween.toggleView(confirmItem, 1)
            tween.dropDown(confirmItem, 'spr', 100)

            item.container.addChild(confirmItem.container)
            items.forEach(item => item.clearCurrent())
            item.setCurrent()
            onSelect(key)
        }))

        return new Promise(resolve => confirmItem.onClick(resolve))
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
