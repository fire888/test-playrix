import { pipe, waitForClick, pause, action } from '../helpers/flowHelpers' 
import { tween } from '../helpers/Tween'


export const startStairsPlay = (appData, onComplete) => {
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
    } = appData.elements


    pipe([
        pause(700, () => {


            /** show hummer */
            tween.showDrop(btnHummer, 'spr', 70)


        }),
        pause(300, () => {


            tween.startPulse(btnHummer, 'spr', .2)


        }),
        waitForClick(btnHummer),
        action(() => {


            /** hide old stairs */
            tween.toggleView(stairs00, 0)

            /** hide button hummer */
            tween.stopPulse('btnHummer')
            btnHummer.disable()
            tween.toggleView(btnHummer, 0)

            /** show stairs buttons */
            tween.showScale(btnStairs01, 'spr', 1)


        }),
        pause(150, () => {


            tween.showScale(btnStairs02, 'spr', 1)


        }),
        pause(150, () => {


            tween.showScale(btnStairs03, 'spr', 1)


        }),
        action(() => {


            /** choise from elements */
            const buttonsStairs = [btnStairs01, btnStairs02, btnStairs03]
            buttonsStairs.forEach(item => item.onClick(key => {

                /** select button */
                buttonsStairs.forEach(item => item.clearCurrent())
                item.setCurrent()

                /** show button ok on select icon */
                tween.showDrop(btnConfirm, 'spr', 80)
                item.container.addChild(btnConfirm.container)

                /** hide current and show selected stairs */
                stairs01.container.renderable = false
                stairs02.container.renderable = false
                stairs03.container.renderable = false

                let stairs = null
                if (key === 'btnStairs01') stairs = stairs01
                if (key === 'btnStairs02') stairs = stairs02
                if (key === 'btnStairs03') stairs = stairs03

                tween.showDrop(stairs, 'sprites', 140)
            }))


        }),
        waitForClick(btnConfirm),
        action(() => {


            /** disable buttons */
            btnStairs01.disable()
            btnStairs02.disable()
            btnStairs03.disable()
            btnConfirm.disable()

            tween.toggleView(btnConfirm, 0)


        }),
        pause(150, () => {


            tween.hideScale(btnStairs01, 'spr')


        }),
        pause(150, () => {


            tween.hideScale(btnStairs02, 'spr')


        }),
        pause(150, () => {


            tween.hideScale(btnStairs03, 'spr')


        }),
        pause(150, () => {
        

            /** show final message */    
            tween.toggleView(messageFinal, 1)


        }),
        pause(150, () => {


            /** show continue button */
            tween.showDrop(btnContinue, 'spr', 70)


        }),
        pause(150, () => {


            tween.startPulse(btnContinue, 'spr', .3)


        }),
        waitForClick(btnContinue),
        action(() => {


            /** hide continue button */
            tween.stopPulse('btnContinue')
            tween.toggleView(btnContinue, 0)
            btnContinue.disable()

            /** game complete */
            let { stairsPlayed } = appData
            onComplete({ stairsPlayed: ++stairsPlayed || 1 })


        }),
    ])
}
