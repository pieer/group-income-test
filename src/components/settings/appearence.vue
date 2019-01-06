<template lang='pug'>
  .container
    h1.title Appearance

    section
      h2.subtitle Theme

      SelectorTheme

    section
      h2.subtitle Text settings

      SelectorFontSize
      
      .preview
        h3.title Text size preview
        p.para Group Income (n) is an efficient, fair, decentralized Basic Income system for you and your friends.

</template>

<script>
import SelectorTheme from '../selectors/theme.vue'
import SelectorFontSize from '../selectors/fontSize.vue'

export default {
  name: 'SettingsAppearence',

  components: {
    SelectorTheme,
    SelectorFontSize
  }
}
</script>

<style lang='stylus' scoped>
.container
  padding-left 26px

.title
  margin 9px 0 24px 0px

.subtitle
  font-size 1.8rem
  margin-top 5px
  margin-bottom: 24px

.preview
  padding-top 2px

  .title
    font-size 1.4rem
    margin 0 0 6px 0

  .para
    font-size 1.4rem
    line-height 20px
    letter-spacing .1px
    margin 0 0 50px 0
    width 450px
    max-width calc(100% - 45px)

@media screen and (max-width: 600px)
  .title
    margin 14px 0 24px 28px

  .preview .title
    margin-left 0
</style>