<template>
  <section>
    <h2 class="text-[40px] text-[#fff] font-bold">
      Rent<span class="text-orange-400">Here</span>
    </h2>
    <p class="text-[#a1a4ad] text-lg font-semibold">{{ description }}</p>
  </section>
</template>

<script>
export default {
  name: 'AuthTitle',
  props: {
    description: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
