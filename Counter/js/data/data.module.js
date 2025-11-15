export const data = {
    maxValue: 10,
    currentValue: 0
}

let changeDataCallback = function () {}
export function setChangeDataCallback(newCallBack) {
    changeDataCallback = newCallBack
}

export function increment() {
    if (data.currentValue < data.maxValue) {
        data.currentValue = data.currentValue + 1        
    }
    changeDataCallback()
}

export function reset() {
    data.currentValue = 0
    changeDataCallback()
}

// setInterval(increment, 1000)