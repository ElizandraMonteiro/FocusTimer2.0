import { sound } from "./sounds.js"
import { selector } from "./querySelect.js"
import { main } from "./main.js"

let timerTimeOut
let minutesDisplay = selector.minutesDisplay
let secondsDisplay = selector.secondsDisplay
let minutes = Number(minutesDisplay.textContent)

export const timer = {
  startCountDown() {
    timerTimeOut = setTimeout(function() {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0
  
      timer.updateDisplay(minutes, 0)
  
      if(isFinished) {
        main.buttonReset()
        sound.kitchenTimer.play()
        return
      }
  
      if(seconds <= 0) {
        seconds = 60
        --minutes
      }
  
      timer.updateDisplay(minutes, String(seconds - 1))
  
      timer.startCountDown()
    }, 1000) 
  },

  updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  },

  updateMinutes(newMinutes) {
    minutes = newMinutes
  },

  pause() {
    clearTimeout(timerTimeOut)
  },

  encrement() {
    let newMinutes = Number(minutesDisplay.textContent) + 5
    timer.updateDisplay(newMinutes)
    timer.updateMinutes(newMinutes)
  },

  decrement() {
    if(Number(minutesDisplay.textContent) > 5) {
      let newMinutes = Number(minutesDisplay.textContent) - 5
      timer.updateDisplay(newMinutes)
      timer.updateMinutes(newMinutes)
    }
  }
}