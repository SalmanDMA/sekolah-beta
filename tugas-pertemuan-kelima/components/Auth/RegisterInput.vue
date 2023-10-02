<template>
  <form class="w-full flex flex-col gap-10" @submit.prevent="submitForm">
    <section class="flex flex-col gap-5">
      <div>
        <input
          v-model="input.name"
          type="text"
          placeholder="Name"
          class="w-full bg-[#262e49] py-4 px-3 rounded-md text-[#d6d6d6] outline-none border-none placeholder:text-[#565f79] focus:outline-1 focus:outline-[#79a6fe]"
          :class="{ 'focus:outline-red-500': hasError('name') }"
          @input="validateInput('name')"
        />
      </div>
      <div>
        <input
          v-model="input.email"
          type="text"
          placeholder="Email"
          class="w-full bg-[#262e49] py-4 px-3 rounded-md text-[#d6d6d6] outline-none border-none placeholder:text-[#565f79] focus:outline-1 focus:outline-[#79a6fe]"
          :class="{ 'focus:outline-red-500': hasError('email') }"
          @input="validateInput('email')"
        />
      </div>
      <div class="relative">
        <input
          v-model="input.password"
          :type="show ? 'text' : 'password'"
          placeholder="Password"
          class="w-full bg-[#262e49] py-4 px-3 rounded-md text-[#d6d6d6] outline-none border-none placeholder:text-[#565f79] focus:outline-1 focus:outline-[#79a6fe]"
          :class="{ 'focus:outline-red-500': hasError('password') }"
          @input="validateInput('password')"
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
      <div class="relative">
        <input
          v-model="input.confirmPassword"
          :type="showConfirm ? 'text' : 'password'"
          placeholder="Confirm Password"
          class="w-full bg-[#262e49] py-4 px-3 rounded-md text-[#d6d6d6] outline-none border-none placeholder:text-[#565f79] focus:outline-1 focus:outline-[#79a6fe]"
          :class="{ 'focus:outline-red-500': hasError('confirmPassword') }"
          @input="validateInput('confirmPassword')"
        />
        <fa
          v-if="showConfirm"
          :icon="['fas', 'eye']"
          class="absolute text-xl text-[#3b476b] cursor-pointer right-3 top-1/2 -translate-y-1/2 bg-[#262e49]"
          @click="showConfirmPassword"
        />
        <fa
          v-else
          :icon="['fas', 'eye-slash']"
          class="absolute text-xl text-[#3b476b] cursor-pointer right-3 top-1/2 -translate-y-1/2 bg-[#262e49]"
          @click="showConfirmPassword"
        />
      </div>
      <p v-if="displayAllErrors" class="text-red-500 text-sm">
        {{ displayAllMessageErrors }}
      </p>
    </section>
    <section class="flex flex-col items-center gap-5">
      <button
        class="w-full bg-[#7f5feb] py-3 border-0 text-[#dfdeee] rounded-[100px] text-lg transition-colors duration-300 ease-in-out hover:bg-[#5d33e6] disabled:cursor-not-allowed disabled:bg-gray-400"
        :disabled="isFormInvalid"
        type="submit"
      >
        Sign up
      </button>
      <p class="text-[#79a6fe] text-sm cursor-pointer" @click="handleRegister">
        Have an account ? Sign in
      </p>
    </section>
  </form>
</template>

<script>
export default {
  name: 'RegisterInput',
  data() {
    return {
      show: false,
      showConfirm: false,
      input: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      errors: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    }
  },
  computed: {
    isFormInvalid() {
      return (
        !!this.errors.name ||
        !!this.errors.email ||
        !!this.errors.password ||
        !!this.errors.confirmPassword
      )
    },
    displayAllErrors() {
      return (
        this.hasError('name') ||
        this.hasError('email') ||
        this.hasError('password') ||
        this.hasError('confirmPassword')
      )
    },
    displayAllMessageErrors() {
      return (
        this.getError('name') ||
        this.getError('email') ||
        this.getError('password') ||
        this.getError('confirmPassword')
      )
    },
  },
  methods: {
    handleRegister() {
      this.$emit('register')
    },
    showPassword() {
      this.show = !this.show
    },
    showConfirmPassword() {
      this.showConfirm = !this.showConfirm
    },
    validateForm() {
      for (const inputName in this.input) {
        this.validateInput(inputName)
      }

      return !Object.values(this.errors).some((error) => error !== null)
    },
    validateInput(inputName) {
      const value = this.input[inputName]
      if (!value) {
        this.errors[inputName] = `${inputName} is required`
      } else if (inputName === 'email') {
        if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
            this.input[inputName]
          )
        ) {
          this.errors[inputName] = 'Invalid email address'
        } else {
          this.errors[inputName] = null
        }
      } else if (inputName === 'password') {
        if (
          !/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/.test(
            value
          )
        ) {
          this.errors[inputName] =
            'Password must contain at least 1 letter, 1 number, and 1 special character, and be at least 8 characters long'
        } else {
          this.errors[inputName] = null
        }
      } else if (inputName === 'confirmPassword') {
        if (value !== this.input.password) {
          this.errors[inputName] = 'Passwords do not match'
        } else {
          this.errors[inputName] = null
        }
      } else if (inputName === 'name') {
        if (value.length < 5) {
          this.errors[inputName] = 'Name must be at least 5 characters long'
        } else {
          this.errors[inputName] = null
        }
      } else {
        this.errors[inputName] = null
      }
    },
    hasError(inputName) {
      return !!this.errors[inputName]
    },
    getError(inputName) {
      return this.errors[inputName]
    },
    handleResetForm() {
      this.input = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }
      this.errors = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }
    },
    submitForm() {
      if (this.validateForm()) {
        this.$emit('submit', this.input)
        this.handleResetForm()
      }
    },
  },
}
</script>

<style scoped></style>
