<template>
  <main
    class="min-h-screen bg-[#f5f5f5] pt-[94px] pb-10 px-10 flex justify-center items-center"
  >
    <div class="w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <h1 class="text-2xl md:text-4xl font-bold mb-4">Add New Card</h1>
      <div class="bg-white rounded-xl p-10 form-wrapper shadow-xl">
        <form @submit.prevent="submitForm">
          <!-- Nama -->
          <div class="mb-4 flex items-center gap-5 border-b-2 pb-5">
            <label for="name" class="font-medium text-gray-700 flex-[2]"
              >Name :</label
            >
            <input
              id="name"
              v-model="formData.name"
              type="text"
              class="w-full p-2 border rounded-md border-gray-300 flex-[4]"
              :class="{ 'error-input': hasError('name') }"
              @input="validateInput('name')"
            />
          </div>
          <p v-if="hasError('name')" class="text-red-500 text-sm mt-1">
            {{ getError('name') }}
          </p>

          <!-- Image URL -->
          <div class="mb-4 flex items-center gap-5 border-b-2 pb-5">
            <label for="image" class="font-medium text-gray-700 flex-[2]"
              >Image URL :</label
            >
            <input
              id="image"
              v-model="formData.image"
              type="text"
              class="w-full p-2 border rounded-md border-gray-300 flex-[4]"
              :class="{ 'error-input': hasError('image') }"
              @input="validateInput('image')"
            />
          </div>
          <p v-if="hasError('image')" class="text-red-500 text-sm mt-1">
            {{ getError('image') }}
          </p>

          <!-- Category -->
          <div class="mb-4 flex items-center gap-5 border-b-2 pb-5">
            <label for="category" class="font-medium text-gray-700 flex-[2]"
              >Category :</label
            >
            <input
              id="category"
              v-model="formData.category"
              type="text"
              class="w-full p-2 border rounded-md border-gray-300 flex-[4]"
              :class="{ 'error-input': hasError('category') }"
              @input="validateInput('category')"
            />
          </div>
          <p v-if="hasError('category')" class="text-red-500 text-sm mt-1">
            {{ getError('category') }}
          </p>

          <!-- Description -->
          <div class="mb-4 flex items-center gap-5 border-b-2 pb-5">
            <label for="description" class="font-medium text-gray-700 flex-[2]"
              >Description :</label
            >
            <textarea
              id="description"
              v-model="formData.description"
              class="w-full p-2 border rounded-md border-gray-300 flex-[4]"
              :class="{ 'error-input': hasError('description') }"
              rows="4"
              @input="validateInput('description')"
            ></textarea>
          </div>
          <p v-if="hasError('description')" class="text-red-500 text-sm mt-1">
            {{ getError('description') }}
          </p>

          <!-- Quantity -->
          <div class="mb-4 flex items-center gap-5 border-b-2 pb-5">
            <label for="qty" class="font-medium text-gray-700 flex-[2]"
              >Quantity :</label
            >
            <input
              id="qty"
              v-model="formData.qty"
              type="text"
              class="w-full p-2 border rounded-md border-gray-300 flex-[4]"
              :class="{ 'error-input': hasError('qty') }"
              @input="validateInput('qty')"
            />
          </div>
          <p v-if="hasError('qty')" class="text-red-500 text-sm mt-1">
            {{ getError('qty') }}
          </p>

          <!-- Price -->
          <div class="mb-4 flex items-center gap-5 border-b-2 pb-5">
            <label for="price" class="font-medium text-gray-700 flex-[2]"
              >Price :</label
            >
            <input
              id="price"
              v-model="formData.price"
              type="text"
              class="w-full p-2 border rounded-md border-gray-300 flex-[4]"
              :class="{ 'error-input': hasError('price') }"
              @input="validateInput('price')"
            />
          </div>
          <p v-if="hasError('price')" class="text-red-500 text-sm mt-1">
            {{ getError('price') }}
          </p>

          <!-- Tombol Submit -->
          <div class="mt-6">
            <button
              type="submit"
              class="bg-[#333] text-white px-4 py-2 rounded-md hover:bg-orange-400 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-300"
              :disabled="isFormInvalid"
            >
              Add Card
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import carsData from '~/helpers/carsDataDummy'

export default {
  data() {
    return {
      formData: {
        name: '',
        image: '',
        category: '',
        description: '',
        qty: '',
        price: '',
      },
      carsData,
      errors: {
        name: '',
        image: '',
        category: '',
        description: '',
        qty: '',
        price: '',
      },
    }
  },
  head() {
    return {
      title: 'Form Data',
    }
  },
  computed: {
    isFormInvalid() {
      return (
        !!this.errors.name ||
        !!this.errors.image ||
        !!this.errors.category ||
        !!this.errors.description ||
        !!this.errors.qty ||
        !!this.errors.price
      )
    },
  },
  methods: {
    hasError(inputName) {
      return !!this.errors[inputName]
    },
    getError(inputName) {
      return this.errors[inputName]
    },
    validateInput(inputName) {
      const value = this.formData[inputName]
      if (!value) {
        this.errors[inputName] = `${
          inputName.charAt(0).toUpperCase() + inputName.slice(1)
        } is required`
      } else if (
        inputName === 'image' &&
        !/^https?:\/\/(?:\S+\.)?(jpeg|jpg|gif|png|webp)(?:\?\S*)?$/i.test(value)
      ) {
        this.errors[inputName] =
          'Image URL must point to a valid image format (jpg, jpeg, gif, png, webp)'
      } else if (
        (inputName === 'qty' || inputName === 'price') &&
        (!/^\d+$/.test(value) || parseInt(value) <= 0)
      ) {
        this.errors[inputName] = `${inputName} must be a positive number`
      } else {
        this.errors[inputName] = null
      }
    },
    validateForm() {
      for (const inputName in this.formData) {
        this.validateInput(inputName)
      }

      return !Object.values(this.errors).some((error) => error !== null)
    },
    submitForm() {
      if (this.validateForm()) {
        const newData = {
          id: +new Date(),
          name: this.formData.name,
          image: this.formData.image,
          category: this.formData.category,
          description: this.formData.description,
          qty: Number(this.formData.qty),
          price: parseFloat(this.formData.price),
        }
        this.carsData.push(newData)
        this.$router.push('/cars')
        for (const inputName in this.formData) {
          this.formData[inputName] = ''
        }
      }
    },
  },
}
</script>

<style scoped>
.form-wrapper {
  position: relative;
}
.form-wrapper::before {
  bottom: 100%;
  left: 75px;
  border: solid transparent;
  content: '';
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: transparent;
  border-bottom-color: #fff;
  border-width: 10px;
  box-shadow: inset 0 10px 10px -10px rgba(0, 0, 0, 0.5);
}
</style>
