<template>
  <main
    class="min-h-screen h-full flex flex-col justify-center items-center pt-[94px] pb-10 px-10 bg-[#f5f5f5]"
  >
    <div class="w-full">
      <img :src="heroImage" alt="hero image mobil dan motor" class="w-full" />
    </div>
    <div class="text-center">
      <h1 class="text-xl md:text-4xl font-extrabold text-[#333] mb-4 uppercase">
        Renting cars and motorcycles has never been easier
      </h1>
      <p class="text-base md:text-lg text-gray-700 mb-4">
        The RentHere team is ready to serve and assist you.
      </p>
      <nuxt-link
        :to="linkContact"
        class="bg-[#333] text-white py-2 px-4 rounded-lg hover:bg-orange-400 transition-colors duration-300 ease-in-out"
      >
        Get Started
      </nuxt-link>
    </div>
    <div
      class="w-full flex flex-wrap gap-3 mt-12 justify-center lg:flex-nowrap"
    >
      <div
        class="flex flex-wrap items-center gap-3 bg-orange-400 rounded-lg p-5 w-full max-w-[200px]"
      >
        <div class="bg-[#f5f5f5] rounded-full p-2">
          <fa :icon="['fas', 'house']" class="text-orange-400 text-xl" />
        </div>
        <div>
          <h3 class="text-2xl text-[#f5f5f5] font-semibold">150+</h3>
          <p class="text-lg text-[#f5f5f5]">Branches</p>
        </div>
      </div>
      <div
        class="flex flex-wrap items-center gap-3 bg-orange-400 rounded-lg p-5 w-full max-w-[200px]"
      >
        <div class="bg-[#f5f5f5] rounded-full p-2">
          <fa :icon="['fas', 'car']" class="text-orange-400 text-xl" />
        </div>
        <div>
          <h3 class="text-2xl text-[#f5f5f5] font-semibold">150+</h3>
          <p class="text-lg text-[#f5f5f5]">Cars</p>
        </div>
      </div>
      <div
        class="flex flex-wrap items-center gap-3 bg-orange-400 rounded-lg p-5 w-full max-w-[200px]"
      >
        <div class="bg-[#f5f5f5] rounded-full p-2">
          <fa :icon="['fas', 'motorcycle']" class="text-orange-400 text-xl" />
        </div>
        <div>
          <h3 class="text-2xl text-[#f5f5f5] font-semibold">150+</h3>
          <p class="text-lg text-[#f5f5f5]">Motorbikes</p>
        </div>
      </div>
      <div
        class="flex flex-wrap items-center gap-3 bg-orange-400 rounded-lg p-5 w-full max-w-[200px]"
      >
        <div class="bg-[#f5f5f5] rounded-full p-2">
          <fa :icon="['fas', 'retweet']" class="text-orange-400 text-xl" />
        </div>
        <div>
          <h3 class="text-2xl text-[#f5f5f5] font-semibold">150+</h3>
          <p class="text-lg text-[#f5f5f5]">Rented</p>
        </div>
      </div>
      <div
        class="flex flex-wrap items-center gap-3 bg-orange-400 rounded-lg p-5 w-full max-w-[200px]"
      >
        <div class="bg-[#f5f5f5] rounded-full p-2">
          <fa
            :icon="['fas', 'face-laugh-squint']"
            class="text-orange-400 text-xl"
          />
        </div>
        <div>
          <h3 class="text-2xl text-[#f5f5f5] font-semibold">150+</h3>
          <p class="text-lg text-[#f5f5f5]">Customers</p>
        </div>
      </div>
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
