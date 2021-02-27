export const exec = (arr, i = 0) => arr[i] && arr[i](() => exec(arr, ++i))  

export const waitForClick = item => callback => item.onClick(callback)

export const pause = (time, f) => callback => setTimeout(() => {
    f()
    callback()
}, time)

export const action = f => callback => {
    f()
    callback()
}
