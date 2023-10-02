<template>
  <section
    class="min-h-screen bg-[#f5f5f5] pt-[94px] sm:pt-[65px] pb-10 px-10 sm:px-0"
  >
    <div class="relative">
      <img :src="background" alt="background image" class="hidden sm:block" />
      <div
        class="sm:absolute sm:top-[40%] sm:left-[35%] sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 flex flex-col gap-5 sm:mr-16 justify-center sm:justify-start"
      >
        <h2
          class="text-3xl lg:text-6xl text-center text-[#333] sm:text-white font-bold sm:text-start"
        >
          Get in touch
        </h2>
        <p class="text-md lg:text-xl text-gray-500 sm:text-white md:max-w-xl">
          Want to rent a car or motorbike? Let us know how we can help you.
          Here's how you can reach us...
        </p>
      </div>
    </div>
    <div class="relative my-8 md:my-0 md:-top-32 w-full top-0">
      <div
        class="flex justify-center items-center gap-5 mx-0 sm:mx-10 flex-wrap md:flex-nowrap"
      >
        <div
          class="bg-white shadow-xl rounded-xl p-10 flex flex-col justify-center items-center gap-5 text-center"
        >
          <fa :icon="['fas', 'phone']" class="text-5xl text-[#333]" />
          <h3 class="text-xl font-semibold text-[#333]">Talk to Sales</h3>
          <p class="text-gray-500">
            Interested in a car or motorbike? Or curious about how we work?
            Simply call to chat with a member of our sales team.
          </p>
          <p
            class="text-gray-500 transition-colors duration-300 hover:text-gray-700 hvr-underline-from-left"
          >
            <a href="tel:02112345678">021-1234-5678</a>
          </p>
        </div>
        <div
          class="bg-white shadow-xl rounded-xl p-10 flex flex-col justify-center items-center gap-5 text-center"
        >
          <fa :icon="['fas', 'people-robbery']" class="text-5xl text-[#333]" />
          <h3 class="text-xl font-semibold text-[#333]">Our Social Media</h3>
          <p class="text-gray-500">
            Find more information and new activities on social media, follow us
            and become our new friend.
          </p>
          <ul
            class="list-unstyled flex flex-col flex-wrap gap-1 justify-center items-center"
          >
            <li
              v-for="(socialMedia, index) in socialMediaData"
              :key="index"
              class="text-gray-500 transition-colors duration-300 hover:text-gray-700 hvr-underline-from-left max-w-max"
            >
              <fa :icon="socialMedia.icon" />
              <a :href="socialMedia.url">{{ socialMedia.name }}</a>
            </li>
          </ul>
        </div>
        <div
          class="bg-white shadow-xl rounded-xl p-10 flex flex-col justify-center items-center gap-5 text-center"
        >
          <fa :icon="['fas', 'message']" class="text-5xl text-[#333]" />
          <h3 class="text-xl font-semibold text-[#333]">Chat with Sales</h3>
          <p class="text-gray-500">
            ashamed to ask directly? calm down, you can contact our sales via
            chat to find out complete information.
          </p>
          <p
            class="text-gray-500 transition-colors duration-300 hover:text-gray-700 hvr-underline-from-left"
          >
            <a :href="whatsappLink" target="_blank">+62 21 1234 5678</a>
          </p>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col justify-center items-center gap-8 mx-0 sm:mx-10 mb-5"
    >
      <h2 class="text-3xl lg:text-5xl text-center text-[#333] font-bold">
        Connect with our offices
      </h2>
      <div class="w-full">
        <office-location />
      </div>
    </div>
  </section>
</template>

<script>
import background from '@/static/images/contact/background.webp'
import socialMediaData from '@/helpers/socialMediaData'

export default {
  data() {
    return {
      background,
      socialMediaData,
    }
  },
  computed: {
    whatsappLink() {
      const phoneNumber = '+622112345678'
      const message =
        'Halo, dengan Customer Service RentHere disini, ada yang bisa kami bantu ? '

      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`

      return whatsappURL
    },
  },
}
</script>

<style scoped>
.hvr-underline-from-left {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}
.hvr-underline-from-left:before {
  content: '';
  position: absolute;
  z-index: -1;
  left: 0;
  right: 100%;
  bottom: 0;
  background: rgba(51, 65, 85, 0.5);
  height: 3px;
  -webkit-transition-property: right;
  transition-property: right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-underline-from-left:hover:before,
.hvr-underline-from-left:focus:before,
.hvr-underline-from-left:active:before {
  right: 0;
}
</style>
