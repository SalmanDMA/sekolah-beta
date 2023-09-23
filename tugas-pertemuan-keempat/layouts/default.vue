<template>
  <div>
    <HeaderLayout />
    <nuxt-child />
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from '~/components/HeaderLayout.vue'
import FooterLayout from '~/components/FooterLayout.vue'
export default {
  name: 'Default',
  components: { HeaderLayout, FooterLayout },
}
</script>

<style></style>
