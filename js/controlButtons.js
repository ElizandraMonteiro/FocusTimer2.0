import { selector } from "./querySelect.js"
import { sound } from "./sounds.js"

const forest = sound.lofiAudioForest
const rain = sound.lofiAudioRain
const coffe = sound.lofiAudioCoffe
const fire = sound.lofiAudioCampFire


export const controls = {
  play() {
    selector.buttonPlay.classList.add('hide')
    selector.buttonPause.classList.remove('hide')
  },

  pause() {
    selector.buttonPlay.classList.remove('hide')
    selector.buttonPause.classList.add('hide')
  },

  forest() {
    sound.buttonPressAudio.play()

    sound.lofiAudioForest.play()
    sound.lofiAudioForest.loop = true
    
    let selected = selector.buttonSoundForest.classList.contains('selected')
    if(selected) {
      sound.lofiAudioForest.pause()
    } 
    
    selector.buttonSoundForest.classList.toggle('selected')
  },

  rain() {
    sound.buttonPressAudio.play()

    sound.lofiAudioRain.play()
    sound.lofiAudioRain.loop = true

    let selected = selector.buttonSoundRain.classList.contains('selected')
    if(selected) {
      sound.lofiAudioRain.pause()
    } 

    selector.buttonSoundRain.classList.toggle('selected')
  },

  coffeShop() {
    sound.buttonPressAudio.play()

    sound.lofiAudioCoffe.play()
    sound.lofiAudioCoffe.loop = true

    let selected = selector.buttonSoundCoffe.classList.contains('selected')
    if(selected) {
      sound.lofiAudioCoffe.pause()
    } 

    selector.buttonSoundCoffe.classList.toggle('selected')
  },

  campFire() {
    sound.buttonPressAudio.play()
    
    sound.lofiAudioCampFire.play()
    sound.lofiAudioCampFire.loop = true

    let selected = selector.buttonSoundCampFire.classList.contains('selected')
    if(selected) {
      sound.lofiAudioCampFire.pause()
    } 

    selector.buttonSoundCampFire.classList.toggle('selected')
  },

  lightMode() {
    selector.buttonLightMode.classList.remove('hide')
    selector.buttonDarkMode.classList.add('hide')

    selector.body.classList.remove('dark')
  },

  darkMode() {
    selector.buttonLightMode.classList.add('hide')
    selector.buttonDarkMode.classList.remove('hide')

    selector.body.classList.add('dark')
  },
}