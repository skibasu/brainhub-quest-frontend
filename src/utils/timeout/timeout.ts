export default class TimeOut {
    timer: any
    delay: number

    constructor(delay: number) {
        this.delay = delay
    }
    setTime(callback: () => void) {
        this.timer = setTimeout(() => callback(), this.delay)
    }
    clearTime() {
        clearTimeout(this.timer)
    }
}
