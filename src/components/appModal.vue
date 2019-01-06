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
.modal-container
  background var(--bg-color)
  position fixed
  z-index 9998
  top 0
  left 0
  width 100%
  height 100%
  transition all .3s ease
  overflow auto

.modal-body
  height 100%

.modal-close
  -webkit-tap-highlight-color: transparent
  background-color #f1f1f1
  border-radius 50%
  position absolute
  top 25px
  right 38px
  height 40px
  width 40px
  cursor pointer

  &:before,
  &:after
    content: ''
    width 12px
    height 2.5px
    top 19px
    left 14px
    transform-origin 50%
    background #3C3C3C
    position absolute
    transform rotate(-45deg)
    transition all .3s ease-out

  &:after
    transform rotate(45deg)

  &:hover
    background #000
    &:before,
    &:after
      background-color #fff
      transform rotate(180deg)

  label
    position absolute
    font-size 13px
    top 44px
    left 10px
    pointer-events none

.slide-fade-enter-active
  transition: all .3s ease

.slide-fade-leave-active
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.slide-fade-enter, .slide-fade-leave-to
  transform: translateX(-100%)
  opacity: 0

</style>