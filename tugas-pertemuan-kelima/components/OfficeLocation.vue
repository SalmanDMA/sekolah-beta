<template>
  <gmap-map :center="center" :zoom="zoom" class="w-full h-[600px]">
    <!-- Menambahkan marker -->
    <gmap-marker :position="center" @click="showInfoWindow" />

    <!-- Menambahkan info window -->
    <gmap-info-window
      :position="positionInfoWindow"
      :opened="infoWindowOpen"
      class="bg-white border border-gray-300 p-10 rounded-lg shadow-md max-w-md"
      @closeclick="closeInfoWindow"
    >
      <div class="flex flex-col gap-3 justify-center items-center">
        <h2 class="text-xl text-[#333] font-semibold">RentHere</h2>
        <p class="text-gray-700 mb-1">Street Nyengseret Indah blok b5 no 2</p>
      </div>
    </gmap-info-window>
  </gmap-map>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: -6.927558, lng: 107.600102 },
      positionInfoWindow: { lat: -6.9273, lng: 107.600102 },
      zoom: 15,
      infoWindowOpen: false,
    }
  },
  methods: {
    showInfoWindow() {
      this.infoWindowOpen = true
    },
    closeInfoWindow() {
      this.infoWindowOpen = false
    },
  },
}
</script>
