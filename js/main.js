import { timer } from "./countDown.js"
import { sound } from "./sounds.js"
import { selector } from "./querySelect.js"
import { controls } from "./controlButtons.js"

export const main = {
  buttonPlay() {
    controls.play()
    timer.startCountDown()

    sound.buttonPressAudio.play()
  },
  buttonPause() {
    controls.pause()
    timer.pause()

    sound.buttonPressAudio.play()
  },
  buttonReset() {
    main.buttonPause()
    timer.updateDisplay()
  },
  buttonEncrement() {
    timer.encrement()

    sound.buttonPressAudio.play()
  },
  buttonDecrement() {
    timer.decrement()

    sound.buttonPressAudio.play()
  },
  buttonForest() {
    controls.forest()
  },
  buttonRain() {
    controls.rain()
  },
  buttonCoffe() {
    controls.coffeShop()
  },
  buttonCampFire() {
    controls.campFire()
  },
  lightMode() {
    controls.darkMode()
  },
  darkMode() {
    controls.lightMode()
  },
  forestVolume() {
    let inputValeuSound = selector.forestSlider.value
    sound.lofiAudioForest.volume = inputValeuSound

    controls.forest()
  },
  rainVolume() {
    let inputValeuSound = selector.rainSlider.value
    sound.lofiAudioRain.volume = inputValeuSound

    controls.rain()
  },
  coffeVolume() {
    let inputValeuSound = selector.coffeSlider.value
    sound.lofiAudioCoffe.volume = inputValeuSound

    controls.coffeShop()
  },
  fireVolume() {
    let inputValeuSound = selector.fireSlider.value
    sound.lofiAudioCampFire.volume = inputValeuSound

    controls.campFire()
  },
}

selector.buttonPlay.addEventListener('click', main.buttonPlay)
selector.buttonPause.addEventListener('click', main.buttonPause)
selector.buttonStop.addEventListener('click', main.buttonReset)
selector.buttonEncrement.addEventListener('click', main.buttonEncrement)
selector.buttonDecrement.addEventListener('click', main.buttonDecrement)

selector.buttonLightMode.addEventListener('click', main.lightMode)
selector.buttonDarkMode.addEventListener('click', main.darkMode)

selector.buttonSoundForest.addEventListener('click', main.buttonForest)
selector.buttonSoundRain.addEventListener('click', main.buttonRain)
selector.buttonSoundCoffe.addEventListener('click', main.buttonCoffe)
selector.buttonSoundCampFire.addEventListener('click', main.buttonCampFire)

selector.forestSlider.addEventListener('input', main.forestVolume)
selector.rainSlider.addEventListener('input', main.rainVolume)
selector.coffeSlider.addEventListener('input', main.coffeVolume)
selector.fireSlider.addEventListener('input', main.fireVolume)