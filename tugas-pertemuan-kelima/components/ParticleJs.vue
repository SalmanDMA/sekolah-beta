<!-- components/Particle.vue -->
<template>
  <div class="app">
    <particles-bg
      type="cobweb"
      color="#ffffff"
      :speed="0.5"
      :opacity="0.5"
      :responsive="true"
      num="100"
      :bg="true"
      :canvas="{ backgroundColor: '#1D243D', zIndex: 1 }"
    />
  </div>
</template>

<script>
export default {
  name: 'ParticleJS',
  data() {
    return {
      config: {
        zIndex: 1,
      },
    }
  },
}
</script>

<style scoped></style>
