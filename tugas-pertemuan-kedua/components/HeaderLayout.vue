<template>
  <header class="navbar px-4">
    <div class="container mx-auto flex items-center justify-between py-4">
      <div class="">
        <router-link to="/">
          <h1 class="text-center md:text-start text-3xl font-bold text-white">
            Rent<span class="text-orange-400">Here</span>
          </h1>
        </router-link>
      </div>
      <nav class="hidden lg:flex space-x-4">
        <router-link :to="linkHome" class="nav-link">Home</router-link>
        <router-link :to="linkCars" class="nav-link">Cars</router-link>
        <router-link :to="linkBikes" class="nav-link">Bikes</router-link>
        <router-link :to="linkServices" class="nav-link">Services</router-link>
        <router-link :to="linkTestimonials" class="nav-link"
          >Testimonials</router-link
        >
        <router-link :to="linkContact" class="nav-link">Contact</router-link>
      </nav>
      <router-link to="/login">
        <button type="button" class="hidden lg:block login-button">
          Login
        </button>
      </router-link>
      <button class="flex lg:hidden hamburger" @click="toggleSidebar">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </button>
    </div>
    <div v-if="showSidebar" class="sidebar" :class="sidebarClasses">
      <button class="sidebar-close" @click="toggleSidebar">X</button>
      <nav class="sidebar-links">
        <router-link :to="linkHome" class="sidebar-link">Home</router-link>
        <router-link :to="linkCars" class="sidebar-link">Cars</router-link>
        <router-link :to="linkBikes" class="sidebar-link">Bikes</router-link>
        <router-link :to="linkServices" class="sidebar-link"
          >Services</router-link
        >
        <router-link :to="linkTestimonials" class="sidebar-link"
          >Testimonials</router-link
        >
        <router-link :to="linkContact" class="sidebar-link"
          >Contact</router-link
        >
        <router-link :to="linkLogin">
          <button type="button" class="sidebar-login-button">Login</button>
        </router-link>
      </nav>
    </div>
    <div v-if="showOverlay" class="overlay" @click="toggleSidebar"></div>
  </header>
</template>

<script>
import {
  linkHome,
  linkContact,
  linkCars,
  linkBikes,
  linkServices,
  linkTestimonials,
  linkLogin,
} from '@/helpers/linkData'
export default {
  data() {
    return {
      showSidebar: false,
      showOverlay: false,
      linkHome,
      linkContact,
      linkCars,
      linkBikes,
      linkServices,
      linkTestimonials,
      linkLogin,
    }
  },
  computed: {
    sidebarClasses() {
      return this.showSidebar ? 'active' : 'deactive'
    },
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar
      this.showOverlay = !this.showOverlay
    },
  },
}
</script>

<style scoped>
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
  border: none;
  color: white;
  font-size: 24px;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
}

.sidebar-links {
  padding: 32px;
  display: flex;
  flex-direction: column;
}

.sidebar-link {
  text-decoration: none;
  color: white;
  margin-bottom: 16px;
  @apply duration-300 transition-colors;
}

.sidebar-login-button {
  background-color: transparent;
  border: 1px solid white;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  @apply duration-300 transition-colors;
}

/* Overlay styles */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}
</style>
