<template lang='pug'>
  transition(name='slide-fade')
    .modal-container(role='dialog' v-if="visible")
      .modal-close(@click.self='hideModal')
        label ESC
      .modal-body
        component(:is='component')
</template>

<script>
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'AppModal',

  data () {
    return {
      component: null,
    }
  },

  created () {
    const escapeHandler = (e) => {
      if (e.key === 'Escape' && this.visible) {
        this.hideModal();
      }
    }

    document.addEventListener('keydown', escapeHandler)
    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', escapeHandler)
    })
  },

  computed: {
    ...mapState({
      visible: 'modalVisible',
      modalComponent: 'modalComponent'
    }),
  },

  methods: {
    ...mapMutations(['hideModal']),
  },

  watch: {
    modalComponent(componentName) {
      if (!componentName) return

      Vue.component(componentName, () => import(`./settings/${componentName}`))

      this.component = componentName
    }
  }
}
</script>

<style lang='stylus' scoped>
closeBgColor = #f1f1f1
closeBarBgColor = #3C3C3C
closeBgHoverColor = #000
closeBarBgHoverColor = #fff

.modal-container
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  z-index 9998
  background var(--bg-color)
  overflow auto
  transition all .3s ease

.modal-body
  height 100%

.modal-close
  position absolute
  top 25px
  right 38px
  height 40px
  width 40px
  background-color closeBgColor
  -webkit-tap-highlight-color: transparent
  border-radius 50%
  cursor pointer

  &:before,
  &:after
    content: ''
    position absolute
    top 19px
    left 14px
    width 12px
    height 2.5px
    background-color closeBarBgColor
    transform-origin 50%
    transform rotate(-45deg)
    transition all .3s ease-out

  &:after
    transform rotate(45deg)

  &:hover
    background closeBgHoverColor
    &:before,
    &:after
      background-color closeBarBgHoverColor
      transform rotate(180deg)

  label
    position absolute
    top 44px
    left 10px
    font-size 13px
    pointer-events none

.slide-fade-enter-active
  transition: all .3s ease

.slide-fade-leave-active
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.slide-fade-enter, .slide-fade-leave-to
  opacity: 0
  transform: translateX(-100%)

</style>