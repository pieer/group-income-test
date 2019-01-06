<template lang='pug'>
v-style.
  :root {
    --bg-color: {{colors.bg}};
    --main-hexa: {{colors.mainHexa}};
    --nav-color: {{colors.nav}};
    --font-size: {{fontSize}}%;
    --font-color: {{colors.font}};
    --main-color: {{colors.main}};
    --action-color: {{colors.action}};
    --border-color: {{colors.border}};
    --placeholder-color: {{colors.placeholder}};
  }
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppStyles',
  computed: {
    ...mapGetters([
      'fontSize',
      'colors'
    ]),
  },
}
</script>

<style lang='stylus'>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700')

@font-face
  font-family 'Source Sans Pro Local Fallback'
  src url('../assets/fonts/SourceSansPro-Regular.ttf') format('truetype')
  font-style normal
  font-weight normal


@font-face
  font-family 'Source Sans Pro Local Fallback'
  src url('../assets/fonts/SourceSansPro-Bold.ttf') format('truetype')
  font-style normal
  font-weight normal


:root
  font-size: var(--font-size)
  color: var(--font-color)

body
  font-family 'Source Sans Pro', 'Source Sans Pro Local Fallback', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  margin: 0
  font-size: 1.6rem
</style>
