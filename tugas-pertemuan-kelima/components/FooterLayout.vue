<template>
  <footer class="bg-[#333] text-center text-white p-4">
    <div class="container py-4 mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <!--Grid column 1-->
        <div class="mb-4">
          <router-link :to="linkHome">
            <h1
              class="text-center md:text-start text-3xl font-bold text-white mb-4 hover:scale-110 transition-all duration-300 ease-in-out"
            >
              Rent<span class="text-orange-400">Here</span>
            </h1>
          </router-link>
          <p class="text-center md:text-start text-base italic">
            Your Trusted Companion <br />
            for Embarking on Adventures
          </p>
        </div>
        <!--Grid column 1-->

        <!--Grid column 2-->
        <div class="mb-4">
          <h5 class="text-uppercase mb-2 text-white text-xl font-bold">
            Features
          </h5>
          <ul
            class="list-disc pl-6 flex flex-col flex-wrap justify-center items-center gap-2"
          >
            <li class="text-gray-300 max-w-max">
              Rentals
              <ul
                class="list-disc pl-6 text-gray-300 flex flex-col flex-wrap justify-center items-center gap-2"
              >
                <li class="max-w-max">Cars</li>
                <li class="max-w-max">Bikes</li>
              </ul>
            </li>
            <li class="text-gray-300 max-w-max">Services</li>
          </ul>
        </div>

        <!--Grid column 2-->

        <!--Grid column 3-->
        <div class="mb-4">
          <h5 class="text-uppercase mb-2 text-white text-xl font-bold">
            Navigation
          </h5>
          <ul class="flex flex-col flex-wrap justify-center items-center gap-2">
            <li
              v-for="(item, index) in navigationData"
              :key="index"
              class="text-slate-300 transition-colors duration-300 hover:text-white hvr-underline-from-left max-w-max"
            >
              <router-link :to="item.to" class="text-white">{{
                item.text
              }}</router-link>
            </li>
          </ul>
        </div>
        <!--Grid column 3-->

        <!--Grid column 4-->
        <div class="mb-4">
          <h5 class="text-uppercase mb-2 text-white text-xl font-bold">
            Contact
          </h5>
          <ul
            class="list-unstyled flex flex-col flex-wrap gap-1 justify-center items-center"
          >
            <li
              class="text-slate-300 transition-colors duration-300 hover:text-white hvr-underline-from-left max-w-max"
            >
              <p>
                <fa :icon="['fas', 'map-pin']" />
                <span> Jl. Nyengseret Indah blok b5 no 2 </span>
              </p>
            </li>
            <li
              v-for="(socialMedia, index) in socialMediaData"
              :key="index"
              class="text-gray-300 transition-colors duration-300 hover:text-white hvr-underline-from-left max-w-max"
            >
              <fa :icon="socialMedia.icon" />
              <a :href="socialMedia.url">{{ socialMedia.name }}</a>
            </li>
          </ul>
        </div>
        <!--Grid column 4-->
      </div>
      <!--Grid row-->

      <div class="text-center mt-8 text-base text-slate-400">
        &copy; 2023 Made By
        <fa :icon="['fas', 'code']" /> SalmanDMA
        <fa :icon="['fas', 'code']" /> . All rights reserved.
      </div>
    </div>
    <!-- Grid container -->
  </footer>
</template>

<script>
import { linkHome } from '@/helpers/linkData'
import navigationData from '@/helpers/navigationData'
import socialMediaData from '@/helpers/socialMediaData'

export default {
  name: 'FooterLayout',
  data() {
    return {
      linkHome,
      socialMediaData,
      navigationData,
    }
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
  background: #fff;
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
