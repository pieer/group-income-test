<template lang='pug'>
  .settings-container
    TabWrapper(:tabNav='settings' v-model='activeTab')
      TabItem
        TabPlaceholder(name='My account')
      TabItem
        TabPlaceholder(name='Privacy & Safety')
      TabItem
        TabPlaceholder(name='Notifications')
      TabItem
        SettingsAppearence
      TabItem
        TabPlaceholder(name='Changelog')
      TabItem
        TabPlaceholder(name='Log Out')

</template>

<script>
import TabItem from '../tab/item.vue'
import TabWrapper from '../tab/wrapper.vue'
import TabPlaceholder from './placeholder.vue'
import SettingsAppearence from './appearence.vue'
import settings from '../../data/settings.json'

export default {
  name: 'SettingsWrapper',

  components: {
    TabWrapper,
    TabItem,
    SettingsAppearence,
    TabPlaceholder
  },

  data () {
    return settings
  }
}
</script>

<style lang='stylus' scoped>
.settings-container
  opacity 1
  height 100%
</style>