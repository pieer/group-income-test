<template lang='pug'>
  button.button(@click="action(args)")
    slot
</template>


<script>
export default {
  name: 'AppButton',

  props: {
    action: Function,
    args: String
  }
}
</script>

<style lang='stylus'>
.button
  position relative
  height 70px
  width 270px
  max-width 90%
  outline none
  -webkit-tap-highlight-color: transparent
  font-size 1.2rem
  text-transform uppercase
  letter-spacing 1px
  font-weight 700
  color var(--action-color)
  background none
  border 3px solid var(--action-color)
  cursor pointer
  z-index 0

  &:after
    content ''
    position absolute
    top 0
    left 0
    z-index -1
    height 100%
    width 0%
    background var(--action-color)
    transition all 0.3s
  
  &:hover
    color var(--nav-color)

    &:after
      width 100%
</style>
