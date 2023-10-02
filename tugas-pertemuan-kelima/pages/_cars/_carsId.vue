<template>
  <main class="min-h-screen bg-[#f5f5f5] pt-[94px] pb-10 px-10">
    <div class="flex flex-col gap-5">
      <section v-if="car !== null" class="bg-white rounded-lg shadow-lg p-5">
        <div class="mb-6">
          <img
            :src="car.image"
            :alt="car.name"
            class="w-full h-full object-cover object-center rounded-lg"
          />
        </div>
        <div class="mb-4">
          <h1 class="text-2xl font-semibold text-[#333]">{{ car.name }}</h1>
          <p class="text-gray-500 text-sm">{{ car.category }}</p>
        </div>
        <div class="mb-6">
          <p class="text-[#333]">{{ car.description }}</p>
        </div>
        <div class="mb-4">
          <p class="text-gray-600">Price: ${{ car.price }}</p>
        </div>
        <div class="mb-6">
          <p class="text-gray-600">Available Quantity: {{ car.qty }}</p>
        </div>
        <button
          class="bg-[#333] text-white py-2 px-4 rounded-lg hover:bg-orange-400 transition-colors duration-300 ease-in-out"
        >
          Add to Cart
        </button>
      </section>
      <section
        v-if="recommendations?.length > 0"
        class="bg-white rounded-lg shadow-lg p-5"
      >
        <h2 class="text-xl font-semibold mb-3">Rekomendasi Mobil</h2>
        <div class="flex gap-5 flex-wrap justify-evenly lg:flex-nowrap">
          <article
            v-for="recommendation in recommendations"
            :key="recommendation.id"
            class="mb-4 h-full max-h-[300px]"
          >
            <img
              :src="recommendation.image"
              :alt="recommendation.name"
              class="w-full max-w-[200px] h-[150px] object-cover rounded-lg"
            />
            <div class="mt-2">
              <h3
                class="text-lg w-full max-w-[180px] font-semibold text-[#333] truncate"
              >
                {{ recommendation.name }}
              </h3>
              <p class="text-gray-600 mb-3">
                Price: ${{ recommendation.price }}
              </p>
              <nuxt-link
                :to="linkCars + '/' + recommendation.id"
                class="bg-[#333] text-white py-2 px-4 rounded-lg hover:bg-orange-400 transition-colors duration-300 ease-in-out"
              >
                Get Detail
              </nuxt-link>
            </div>
          </article>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import carsData from '@/helpers/carsDataDummy'
import { linkCars } from '@/helpers/linkData'

export default {
  name: 'CarsId',
  async asyncData({ params }) {
    const paramId = Number(params.carsId)
    const copyCarsData = JSON.parse(JSON.stringify(carsData))
    const car = await copyCarsData.find((car) => car.id === paramId)
    if (!car) {
      return {
        notFound: true,
        car: null,
        recommendations: null,
      }
    }

    const shuffledCars = copyCarsData.sort(() => Math.random() - 0.5)
    const recommendations = shuffledCars.slice(0, 5)

    return {
      car,
      recommendations,
    }
  },
  data() {
    return {
      linkCars,
    }
  },
  head() {
    return {
      title: this.car ? this.car.name : 'Car Not Found',
    }
  },
  mounted() {
    if (this.notFound) {
      this.$router.push('/error')
    }
  },
}
</script>
