<template>
  <section v-if="totalPages > 1" class="flex justify-center">
    <ul class="flex space-x-2">
      <li>
        <button
          :disabled="currentPage === 1"
          :class="{
            ' text-white rounded-lg': currentPage === 1,
          }"
          class="p-3 hover:bg-orange-400 rounded-lg transition-colors duration-300 ease-in-out disabled:bg-gray-300 disabled:cursor-not-allowed disabled:pointer-events-none"
          @click="goToPage(currentPage - 1)"
        >
          <fa :icon="['fas', 'chevron-left']" />
        </button>
      </li>
      <li v-for="page in totalPages" :key="page">
        <button
          :class="{
            'bg-[#333] p-3 text-white rounded-lg': page === currentPage,
          }"
          class="p-3 hover:bg-orange-400 rounded-lg transition-colors duration-300 ease-in-out"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>
      </li>
      <li>
        <button
          :class="{
            ' p-3 text-white rounded-lg': currentPage === totalPages,
          }"
          class="p-3 hover:bg-orange-400 rounded-lg transition-colors duration-300 ease-in-out disabled:bg-gray-300 disabled:cursor-not-allowed disabled:pointer-events-none"
          :disabled="currentPage === totalPages"
          @click="goToPage(currentPage + 1)"
        >
          <fa :icon="['fas', 'chevron-right']" />
        </button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'PaginationLayout',
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    goToPage: {
      type: Function,
      required: true,
    },
  },
}
</script>

<style></style>
