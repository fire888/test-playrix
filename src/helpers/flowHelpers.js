/** MAIN PIPE *************************/ 

export const pipe = (arr, i = 0) => arr[i] && arr[i](() => pipe(arr, ++i))





/** PIPE OPERATORS ********************/

export const waitForClick = item => callback => item.onClick(callback)

export const pause = (time, f) => callback => setTimeout(() => {
    requestAnimationFrame(() => {
        f()
        callback()
    })
}, time)

export const action = f => callback => {
    f()
    callback()
}

export const actionAfter = f => callback => f(callback)
