<script setup lang="ts">
import { _isClickEvent } from 'chart.js/helpers'
import { ref } from 'vue'
import AppInput from './AppInput.vue'
import BorrowedBooks from './BorrowedBooks.vue'
import ReturnedBooks from './ReturnedBooks.vue'

const tabs = [
  {
    id: '1',
    text: 'Еще читаю',
    class: 'rounded-l-2xl',
  },
  {
    id: '2',
    text: 'Уже вернул',
    class: 'rounded-r-2xl',
  },
]
const isActive = ref<string>('1')
</script>

<template>
  <div class="flex flex-col p-6 gap-6">
    <div class="flex justify-between">
      <div class="flex gap-2">
        <div
          v-for="tab in tabs"
          :key="tab.id"
          @click="isActive = tab.id"
          :class="[
            'flex items-center text-center  px-4 py-2 cursor-pointer transition-all',
            tab.class,
            isActive === tab.id
              ? 'bg-darkest-black text-total-white font-semibold'
              : 'bg-tab-inActive text-black',
          ]"
        >
          <h1>{{ tab.text }}</h1>
        </div>
      </div>
      <div class="relative max-w-1/6">
        <AppInput class="pl-16" text="Искать по названию" />
        <img
          class="absolute left-4 top-1/2 transform -translate-y-1/2"
          src="/browse_books.svg"
          alt=""
        />
      </div>
    </div>
    <BorrowedBooks v-if="isActive === '1'"/>
    <ReturnedBooks v-else/>
  </div>
</template>

<style scoped></style>
