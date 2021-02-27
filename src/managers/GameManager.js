export class GameManager {

    /** public **************************************************** */

    startStairsPlay (appData, onComplete) {
        this._appData = appData

        const { tween, elements } = this._appData

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
        } = elements




        /** **********************************
         * STAIRS PLAY
         ********************************** */

        pause(700, () => {

            /** show hummer */
            tween.showDrop(btnHummer, 'spr', 70)
        })
        .then(pause.bind(null, 300, () => {

            tween.startPulse(btnHummer, 'spr', .2)
        }))
        .then(waitForClick.bind(null, btnHummer))
        .then(pause.bind(null, 0, () => {

            /** hide old stairs */
            tween.toggleView(stairs00, 0)

            /** hide button hummer */
            tween.stopPulse('btnHummer')
            btnHummer.disable()
            tween.toggleView(btnHummer, 0)

            /** show stairs buttons */
            tween.showScale(btnStairs01, 'spr', 1)
        }))
        .then(pause.bind(null, 150, () => {

            tween.showScale(btnStairs02, 'spr', 1)
        }))
        .then(pause.bind(null, 150, () => {

            tween.showScale(btnStairs03, 'spr', 1)
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

            tween.showDrop(stairs, 'sprites', 140)
        }))
        .then(pause.bind(null, 0, () => {

            /** disable buttons */
            btnStairs01.disable()
            btnStairs02.disable()
            btnStairs03.disable()
            btnConfirm.disable()

            tween.toggleView(btnConfirm, 0)
        }))
        .then(pause.bind(null, 150, () => {

            tween.hideScale(btnStairs01, 'spr')
        }))
        .then(pause.bind(null, 150, () => {

            tween.hideScale(btnStairs02, 'spr')
        }))
        .then(pause.bind(null, 150, () => {

            tween.hideScale(btnStairs03, 'spr')
        }))
        .then(pause.bind(null, 150, () => {
            
            /** show final message */    
            tween.toggleView(messageFinal, 1)
        }))
        .then(pause.bind(null, 150, () => {

            /** show continue button */
            tween.showDrop(btnContinue, 'spr', 70)
        }))
        .then(pause.bind(null, 150, () => {

            tween.startPulse(btnContinue, 'spr', .3)
        }))
        .then(waitForClick.bind(null, btnContinue))
        .then(pause.bind(null, 0, () => {

            /** hide continue button */
            tween.stopPulse('btnContinue')
            tween.toggleView(btnContinue, 0)
            btnContinue.disable()

            /** game complete */
            let { stairsPlayed } = this._appData
            onComplete({ stairsPlayed: ++stairsPlayed || 1 })
        }))
    }


    resetToStart (appData, onComplete) {
        this._appData = appData
        const { elementsData, elements } = this._appData

        /** reset all items */
        for (let i = 0; i < elementsData.length; ++i) {
            const { key, isStartRender } = elementsData[i]
            elements[key].container.renderable = isStartRender
        }

        /** onComplete */
        let { restarted } = this._appData
        onComplete({ restarted: ++restarted || 1 })
    }


    /** internal **************************************************** */

    _selectFromElements (items, confirmItem, onSelect) {
        const { tween } = this._appData

        items.forEach(item => item.onClick(key => {
            tween.showDrop(confirmItem, 'spr', 80)
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

const pause = (time, callback) => new Promise(resolve => setTimeout(() => {
    callback()
    resolve()
}, time))
