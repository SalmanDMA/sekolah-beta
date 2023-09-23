<template>
  <main
    class="min-h-screen flex flex-col justify-center items-center p-10 gap-5 bg-[#f5f5f5]"
  >
    <div class="w-full">
      <img :src="heroImage" alt="hero image mobil dan motor" class="w-full" />
    </div>
    <div class="text-center">
      <h1 class="text-4xl font-extrabold text-[#333] mb-4 uppercase">
        Renting cars and motorcycles has never been easier
      </h1>
      <p class="text-lg text-gray-700 mb-4">
        The RentHere team is ready to serve and assist you.
      </p>
      <nuxt-link
        :to="linkContact"
        class="bg-[#333] text-white py-2 px-4 rounded-lg hover:bg-orange-400 transition-colors duration-300 ease-in-out"
      >
        Get Started
      </nuxt-link>
    </div>
  </main>
</template>

<script>
import { linkContact } from '@/helpers/linkData'
import heroImage from '@/static/images/hero/mobil-motor.webp'

export default {
  name: 'IndexPage',
  data() {
    return {
      heroImage,
      linkContact,
    }
  },
}
</script>

<style scoped></style>
