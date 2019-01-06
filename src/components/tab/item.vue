<template lang='pug'>
  transition(:name='transitionName')
    div(v-show='isActive' class='tab-item')
      slot
</template>

<script>
export default {
  name: 'TabItem',

  data () {
    return {
      isActive: false,
      transitionName: null
    }
  },

  methods: {
    /**
     * Activate tab, alter animation name based on the index.
     */
    activate(oldIndex, index) {
      this.transitionName = index < oldIndex
        ? 'slide-next'
        : 'slide-prev'
      this.isActive = true
    },
    /**
     * Deactivate tab, alter animation name based on the index.
     */
    deactivate(oldIndex, index) {
      this.transitionName = index < oldIndex
        ? 'slide-next'
        : 'slide-prev'
      this.isActive = false
    }
  },

  created () {
    this.$parent.tabItems.push(this)
  },

  beforeDestroy () {
    const index = this.$parent.tabItems.indexOf(this)
    if (index >= 0) {
      this.$parent.tabItems.splice(index, 1)
    }
  }
}
</script>

<style lang='stylus' scoped>
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active
  transition all .3s cubic-bezier(0.785, 0.135, 0.150, 0.860)
  position absolute

.slide-prev-leave-to, .slide-next-enter
  transform translate3d(0, -100%, 0)
  opacity 0

.slide-prev-enter, .slide-next-leave-to
  transform translate3d(0, 100%, 0)
  opacity 0
</style>