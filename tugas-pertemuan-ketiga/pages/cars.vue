<template>
  <main class="min-h-screen bg-[#f5f5f5] pt-[94px] pb-10 px-10">
    <div class="flex flex-col justify-center items-center gap-10">
      <div
        class="flex flex-wrap justify-between items-center w-full gap-5 md:gap-0"
      >
        <div>
          <h1 class="text-3xl font-semibold">Cars Showcase</h1>
          <p class="text-gray-500">Find your dream car</p>
        </div>
        <div class="flex items-center gap-3">
          <p class="text-gray-500">Filter by Merk</p>
          <select
            v-model="selectedCategory"
            class="border border-gray-300 rounded-lg px-3 py-2"
          >
            <option
              v-for="category in uniqueCategories"
              :key="category"
              :value="category"
            >
              {{ category }}
            </option>
          </select>
        </div>
      </div>
      <div class="flex flex-wrap justify-center items-center gap-5">
        <div
          v-for="car in filteredCars"
          :key="car.id"
          class="bg-white rounded-lg shadow-lg p-5 sm:p-10 md:w-[300px] lg:w-[400px] flex flex-col items-center"
        >
          <div>
            <img
              :src="car.image"
              :alt="car.name"
              class="w-full h-[175px] mb-4 rounded-lg"
            />
          </div>
          <div class="mb-4 w-full">
            <p class="text-right text-gray-600 text-sm">
              Price: ${{ car.price }}
            </p>
            <h3 class="text-xl font-semibold text-[#333]">{{ car.name }}</h3>
            <p class="text-gray-500 text-sm">{{ car.category }}</p>
          </div>
          <button
            class="bg-[#333] text-white py-2 px-4 rounded-lg hover:bg-orange-400 transition-colors duration-300 ease-in-out"
          >
            Get Detail
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { linkContact } from '@/helpers/linkData'
import heroImage from '@/static/images/hero/mobil-motor.webp'
import carsData from '@/helpers/carsDataDummy'

export default {
  name: 'Cars',
  data() {
    return {
      heroImage,
      linkContact,
      carsData,
      selectedCategory: 'All',
    }
  },
  computed: {
    uniqueCategories() {
      const categories = ['All']
      this.carsData.forEach((car) => {
        if (!categories.includes(car.category)) {
          categories.push(car.category)
        }
      })
      return categories
    },
    filteredCars() {
      if (this.selectedCategory === 'All') {
        return this.carsData
      }
      return this.carsData.filter(
        (car) => car.category === this.selectedCategory
      )
    },
  },
}
</script>

<style scoped></style>
