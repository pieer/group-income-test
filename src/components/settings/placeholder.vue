<template lang='pug'>
  .container
    h1.title TODO:
    p 
      | Implement 
      strong "{{name}}"
      |  settings page
</template>

<script>
export default {
  name: 'PlaceHolder',

  props: {
    name: String
  }
}
</script>

<style lang='stylus' scoped>
.container
  padding-left 25px

@media screen and (max-width: 600px)
  .title
    margin: 15px 28px -4px 28px;
</style>