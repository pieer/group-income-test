import Vue from 'vue'
import Vuex from 'vuex'
import Colors from './data/colors.json'

Vue.use(Vuex)

const state = {
  modalVisible: false,
  modalComponent: null,
  fontSize: parseFloat(localStorage.getItem('fontSize')) || 62.5,
  colors: Colors[localStorage.getItem('theme') || 'blue']
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
      localStorage.setItem('fontSize', size)
    }
  },

  setTheme(state, colors) {
    state.colors = colors
    if (typeof(Storage) !== 'undefined') {
      // Store the theme in local storage
      localStorage.setItem('theme', colors.name)
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