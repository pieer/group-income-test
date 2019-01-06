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
  -webkit-tap-highlight-color: transparent
  border 3px solid var(--action-color)
  color var(--action-color)
  font-size 1.2rem
  text-transform uppercase
  letter-spacing 1px
  font-weight 700
  height 70px
  width 270px
  max-width 90%
  outline none
  background none
  position relative
  cursor pointer
  z-index 0

  &:after
    width 0%
    height 100%
    top 0
    left 0
    background var(--action-color)
    content ''
    position absolute
    z-index -1
    transition all 0.3s
  
  &:hover
    color var(--nav-color)

    &:after
      width 100%
</style>
