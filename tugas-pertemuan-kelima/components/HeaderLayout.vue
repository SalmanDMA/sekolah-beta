<template>
  <header class="navbar px-4 fixed z-50 w-full">
    <section class="container mx-auto flex items-center justify-between py-4">
      <div class="">
        <nuxt-link to="/">
          <h1
            class="text-center md:text-start text-3xl font-bold text-white hover:scale-110 transition-all duration-300 ease-in-out"
          >
            Rent<span class="text-orange-400">Here</span>
          </h1>
        </nuxt-link>
      </div>
      <nav class="hidden lg:flex space-x-4">
        <nuxt-link
          v-for="(link, index) in navigationData"
          :key="index"
          :to="link.to"
          class="nav-link"
          :class="{
            'nuxt-link-exact-active': isCarsRoute && link.to === '/cars',
          }"
        >
          {{ link.text }}
        </nuxt-link>
      </nav>
      <nuxt-link :to="linkLogin">
        <button type="button" class="hidden lg:block login-button">
          Login
        </button>
      </nuxt-link>
      <button
        type="button"
        class="flex lg:hidden hamburger"
        title="Menu"
        @click="toggleSidebar"
      >
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </button>
    </section>
    <section v-if="showSidebar" class="sidebar" :class="sidebarClasses">
      <button type="button" class="sidebar-close" @click="toggleSidebar">
        <fa :icon="['fas', 'xmark']" />
      </button>
      <nav class="sidebar-links">
        <nuxt-link
          v-for="(link, index) in navigationData"
          :key="index"
          :to="link.to"
          class="sidebar-link"
          :class="{ active: isCarsRoute && link.to === '/cars' }"
        >
          {{ link.text }}
        </nuxt-link>
        <nuxt-link :to="linkLogin">
          <button type="button" class="sidebar-login-button">Login</button>
        </nuxt-link>
      </nav>
    </section>
    <section
      v-if="showOverlay"
      class="overlay"
      @click="toggleSidebar"
    ></section>
  </header>
</template>

<script>
import { linkHome, linkLogin } from '@/helpers/linkData'
import navigationData from '@/helpers/navigationData'
export default {
  data() {
    return {
      showSidebar: false,
      showOverlay: false,
      showAnimation: false,
      linkHome,
      linkLogin,
      navigationData,
    }
  },
  computed: {
    sidebarClasses() {
      return this.showAnimation ? 'active' : 'deactive'
    },
    isCarsRoute() {
      return this.$route.path.startsWith('/cars/')
    },
  },
  methods: {
    toggleSidebar() {
      if (this.showAnimation) {
        this.showAnimation = !this.showAnimation
        setTimeout(() => {
          this.showSidebar = !this.showSidebar
          this.showOverlay = !this.showOverlay
        }, 400)
        return
      }
      this.showAnimation = !this.showAnimation
      this.showSidebar = !this.showSidebar
      this.showOverlay = !this.showOverlay
    },
  },
}
</script>

<style scoped>
.nav-link.nuxt-link-exact-active,
.sidebar-link.nuxt-link-exact-active {
  @apply text-orange-400 border-b border-b-orange-400;
}
/* Navbar styles */
.navbar {
  background-color: #333;
  color: white;
}

.nav-link {
  text-decoration: none;
  color: white;
  @apply duration-300 transition-colors;
}

.nav-link:hover,
.sidebar-link:hover {
  @apply hover:text-orange-400;
}

.login-button {
  background-color: transparent;
  border: 1px solid white;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  @apply duration-300 transition-colors;
}

.login-button:hover,
.sidebar-login-button:hover {
  @apply hover:text-orange-400 hover:border border-orange-400;
}

.hamburger {
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 24px;
}

.bar {
  background-color: white;
  display: flex;
  gap: 5px;
  height: 4px;
  width: 100%;
}

/* Sidebar styles */
.sidebar {
  position: fixed;
  top: 0;
  width: 250px;
  height: 100%;
  background-color: #333;
  color: white;
  z-index: 10;
}

.sidebar.active {
  animation: slideIn 0.5s ease-in-out forwards;
}

.sidebar.deactive {
  animation: slideOut 0.5s ease-in-out forwards;
}

@keyframes slideIn {
  from {
    left: -100%;
  }
  to {
    left: 0;
  }
}

@keyframes slideOut {
  from {
    left: 0;
  }
  to {
    left: -100%;
  }
}

.sidebar-close {
  background-color: transparent;
  @apply cursor-pointer absolute top-4 right-4 text-2xl border-0 text-white;
}

.sidebar-links {
  @apply flex flex-col p-8;
}

.sidebar-link {
  @apply text-white mb-4 no-underline duration-300 transition-colors;
}

.sidebar-login-button {
  @apply text-white border border-white py-2 px-4 rounded-md cursor-pointer w-full duration-300 transition-colors;
  background-color: transparent;
}
.overlay {
  @apply fixed top-0 left-0 w-full h-full cursor-pointer;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
