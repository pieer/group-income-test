import Vue from 'vue'
import Vuex from 'vuex'
import Colors from './data/colors.json'

Vue.use(Vuex)
let fontSize = 62.5
let color = 'blue'
try {
  fontSize = parseFloat(localStorage.getItem('fontSize'))
  color = localStorage.getItem('theme')
} catch(err) {
  // eslint-disable-next-line
  console.log(err)
}

const state = {
  modalVisible: false,
  modalComponent: null,
  fontSize: fontSize,
  colors: Colors[color]
}

const mutations = {
  showModal(state, componentName) {
    state.modalVisible = true
    // Load dynamic content in the modal
    state.modalComponent = componentName
  },

  hideModal(state) {
    state.modalVisible = false
  },

  setFontSize(state, size) {
    state.fontSize = size
    if (typeof(Storage) !== 'undefined') {
      // Store the font size in local storage
      try {
        localStorage.setItem('fontSize', size)
      } catch (error) {
        // eslint-disable-next-line
        console.log(error)
      }
      
    }
  },

  setTheme(state, colors) {
    state.colors = colors
    if (typeof(Storage) !== 'undefined') {
      // Store the theme in local storage
      try {
        localStorage.setItem('theme', colors.name)
      } catch (error) {
        // eslint-disable-next-line
        console.log(error)
      }
    }
  }
}

const getters = {
  fontSize: state => state.fontSize,
  colors: state => state.colors
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})