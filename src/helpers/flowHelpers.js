export const exec = (arr, i = 0) => arr[i] && arr[i](() => exec(arr, ++i))  

export const waitForClick = item => callback => item.onClick(callback)

export const pause = (time, action) => callback => setTimeout(() => {
    action()
    callback()
}, time)

export const action = action => callback => {
    action()
    callback()
}
