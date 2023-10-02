<template>
  <form class="w-full flex flex-col gap-10" @submit.prevent="submitForm">
    <section class="flex flex-col gap-5">
      <div>
        <input
          v-model="input.email"
          type="text"
          placeholder="Email"
          class="w-full bg-[#262e49] py-4 px-3 rounded-md text-[#d6d6d6] outline-none border-none placeholder:text-[#565f79] focus:outline-1 focus:outline-[#79a6fe]"
        />
      </div>
      <div class="relative">
        <input
          v-model="input.password"
          :type="show ? 'text' : 'password'"
          placeholder="Password"
          class="w-full bg-[#262e49] py-4 px-3 rounded-md text-[#d6d6d6] outline-none border-none placeholder:text-[#565f79] focus:outline-1 focus:outline-[#79a6fe]"
        />
        <fa
          v-if="show"
          :icon="['fas', 'eye']"
          class="absolute text-xl text-[#3b476b] cursor-pointer right-3 top-1/2 -translate-y-1/2 bg-[#262e49]"
          @click="showPassword"
        />
        <fa
          v-else
          :icon="['fas', 'eye-slash']"
          class="absolute text-xl text-[#3b476b] cursor-pointer right-3 top-1/2 -translate-y-1/2 bg-[#262e49]"
          @click="showPassword"
        />
      </div>
      <div class="flex items-center justify-between">
        <div class="custom-checkbox">
          <input id="myCheckbox" type="checkbox" />
          <label for="myCheckbox">Remember me</label>
        </div>
        <div>
          <a href="#" class="text-[#79a6fe] text-sm">Forgot password ?</a>
        </div>
      </div>
    </section>
    <section class="flex flex-col items-center gap-5">
      <button
        class="w-full bg-[#7f5feb] py-3 border-0 text-[#dfdeee] rounded-[100px] text-lg transition-colors duration-300 ease-in-out hover:bg-[#5d33e6]"
      >
        Sign in
      </button>
      <p class="text-[#79a6fe] text-sm cursor-pointer" @click="handleRegister">
        Don't have an account ? Sign up
      </p>
    </section>
  </form>
</template>

<script>
export default {
  name: 'LoginInput',
  data() {
    return {
      show: false,
      input: {
        email: '',
        password: '',
      },
      errors: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    handleRegister() {
      this.$emit('register')
    },
    showPassword() {
      this.show = !this.show
    },
    handleResetForm() {
      this.input = {
        email: '',
        password: '',
      }
      this.errors = {
        email: '',
        password: '',
      }
    },
    submitForm() {
      this.$emit('submit', this.input)
      this.handleResetForm()
    },
  },
}
</script>

<style scoped>
.custom-checkbox input[type='checkbox'] {
  display: none;
}

.custom-checkbox label {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  color: #dfdeee;
  font-size: 14px;
}

.custom-checkbox label::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border: 2px solid #464d64;
}

.custom-checkbox input[type='checkbox']:checked + label::after {
  content: '✔';
  position: absolute;
  left: 4px;
  top: -8px;
  font-family: FontAwesome;
  font-size: 24px;
  color: #896cec;
  width: 20px;
}
</style>
