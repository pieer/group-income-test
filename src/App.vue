<template lang='pug'>
  #app(:class='colors.theme')
    AppButton(:action='showModal' args='wrapper') Open Settings
    
    AppStyles
    AppModal
</template>

<script>
import AppStyles from './components/appStyles.vue'
import AppModal from './components/appModal.vue'
import AppButton from './components/appButton.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'app',

  components: {
    AppModal,
    AppStyles,
    AppButton
  },

  computed: {
    // Get the current theme name Used to add a class for css
    ...mapGetters(['colors'])
  },

  methods: {
    ...mapMutations(['showModal'])
  }
}
</script>

<style lang='stylus'>
html,
body,
#app
  height 100%

#app
  background var(--nav-color)
  display flex
  justify-content center
  align-items center

</style>
