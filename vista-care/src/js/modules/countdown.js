export default class Countdown {
  constructor({ timerSelector, deadlineSelector } = {}) {
    this.timer = document.querySelector(timerSelector)
    this.deadlineSpan = document.querySelector(deadlineSelector)
    this.days = this.timer.querySelector('#days')
    this.hours = this.timer.querySelector('#hours')
    this.minutes = this.timer.querySelector('#min')
    this.seconds = this.timer.querySelector('#sec')
    this.deadline = this.calculateDeadline()
    this.timeInterval = null
    this.setDeadlineHtml()
    this.updateClock()
  }

  calculateDeadline() {
    const currentDate = new Date()
    const newDeadline = new Date(
      currentDate.getTime() + 7 * 24 * 60 * 60 * 1000
    )
    return newDeadline.toISOString().split('T')[0]
  }

  setDeadlineHtml() {
    const dateObject = new Date(this.deadline)
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    const monthName = monthNames[dateObject.getMonth()]
    const day = dateObject.getDate()
    this.deadlineSpan.textContent = `${monthName} ${day}th`
  }

  getZero(num) {
    if (num >= 0 && num < 10) {
      return '0' + num
    } else {
      return num
    }
  }

  getTimeRemaining() {
    const t = Date.parse(this.deadline) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24)

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }
  }

  updateClock() {
    const t = this.getTimeRemaining()
    this.days.style.setProperty('--value', this.getZero(t.days))
    this.hours.style.setProperty('--value', this.getZero(t.hours))
    this.minutes.style.setProperty('--value', this.getZero(t.minutes))
    this.seconds.style.setProperty('--value', this.getZero(t.seconds))

    if (t.total <= 0) {
      clearInterval(this.timeInterval)
    }
  }

  init() {
    this.timeInterval = setInterval(() => this.updateClock(), 1000)
  }
}
