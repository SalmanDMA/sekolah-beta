<template>
  <section class="flex flex-col justify-center items-center gap-10">
    <div
      class="flex flex-wrap justify-between items-center w-full gap-5 md:gap-0"
    >
      <div>
        <h2 class="text-3xl font-bold">Cars Showcase</h2>
        <p class="text-gray-500">Find your dream car</p>
      </div>
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-3">
          <p class="text-gray-500">Filter by Merk</p>
          <select
            v-model="localSelectedCategory"
            class="border border-gray-300 rounded-lg px-3 py-2"
            @change="emitCategoryChange"
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
        <div>
          <input
            v-model="localSearchQuery"
            type="text"
            placeholder="Search cars by name here..."
            class="border border-gray-300 rounded-lg px-3 py-2"
            @input="emitSearchQueryChange"
          />
        </div>
      </div>
    </div>
    <div v-if="cardNotFound" class="flex justify-center">
      <h3 class="text-2xl font-semibold text-[#333]">Cars Not Found</h3>
    </div>
    <div v-else class="flex flex-wrap justify-center items-center gap-5">
      <div
        v-for="car in paginatedCars"
        :key="car.id"
        class="bg-white rounded-lg shadow-lg p-5 sm:p-10 lg:w-[300px] xl:max-w-[400px] flex flex-col items-center"
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
          <h3 class="text-xl font-semibold text-[#333] truncate">
            {{ car.name }}
          </h3>
          <p class="text-gray-500 text-sm">{{ car.category }}</p>
        </div>
        <nuxt-link
          :to="linkCars + '/' + car.id"
          class="text-white py-2 px-4 rounded-lg bg-[#333] hover:bg-orange-400 transition-colors duration-300 ease-in-out"
        >
          Get Detail
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VehicleList',
  props: {
    paginatedCars: {
      type: Array,
      required: true,
    },
    linkCars: {
      type: String,
      required: true,
    },
    searchQuery: {
      type: String,
      default: '',
    },
    uniqueCategories: {
      type: Array,
      required: true,
    },
    selectedCategory: {
      type: String,
      default: '',
    },
    cardNotFound: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      localSearchQuery: this.searchQuery,
      localSelectedCategory: this.selectedCategory,
    }
  },
  methods: {
    emitCategoryChange() {
      this.$emit('category-change', this.localSelectedCategory)
    },
    emitSearchQueryChange() {
      this.$emit('search-query-change', this.localSearchQuery)
    },
  },
}
</script>

<style></style>
