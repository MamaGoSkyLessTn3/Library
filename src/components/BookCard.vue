<script setup lang="ts">
import type { BookType } from '@/types/book.types';

defineProps<{
  book:BookType
}>()
</script>

<template>
  <div class="flex justify-between gap-4 h-46">
    <img class="rounded-2xl h-full" :src="book.cover_url" alt="" />
    <div class="flex gap-2 max-w-1/3 justify-items-center">
      <div class="flex flex-col gap-2 text-xl text-darkest-black">
        <span class="flex justify-between gap-2">
          <span>Название:</span>
          <span class="text-lg text-diagram-grey underline underline-offset-6 hover:decoration-2">{{
            book.title
          }}</span>
        </span>

        <span class="flex justify-between gap-2">
          <span class="text-darkest-black">Автор: </span
          ><span v-for="author in book.authors" :key="author.key" class="text-lg text-diagram-grey">
            {{ author.name }}
          </span></span
        >

        <h1>Описание:</h1>
        <h2 class="text-lg line-clamp-2 text-diagram-grey">{{ book.description }}</h2>
      </div>
    </div>

    <div class="flex flex-col gap-4 text-xl pr-8 border-r-2 justify-between max-w-1/3">
      <div class="flex flex-col">
        <span class="flex justify-between gap-4">
          <span>Cтраницы:</span><span class="text-lg">{{ book.number_of_pages_median }}</span></span
        >
        <span class="flex justify-between gap-4">
          <span>Год издания:</span>
          <span class="text-lg">{{ book.first_publish_year }}</span></span
        >
      </div>
      <div class="flex gap-2 items-center justify-between">
        <span>Жанры:</span>
        <div class="flex gap-2 flex-wrap">
          <div
            v-for="subject in book.subjects"
            class="flex rounded-2xl bg-darkest-black px-2 py-1 text-total-white text-sm text-center text-nowrap"
          >
            {{ subject }}
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-4 justify-between font-semibold">
      <div class="flex flex-col gap-2 text-sm text-nowrap">
        <span class="flex gap-2 bg-main-bg rounded-2xl px-4 py-2 justify-between">
          <span>Взял :</span>
          <span>{{ book.taken_date }}</span>
        </span>
        <span class="flex gap-4 bg-darkest-black text-white rounded-2xl px-4 py-2 justify-between">
          <span>Вернуть к :</span>
          <span>{{ book.return_date }}</span>
        </span>
      </div>

      <span
        class="bg-accent-hollow text-white rounded-2xl px-4 py-2 text-center hover:bg-darkest-black hover:cursor-pointer transition-colors duration-400"
        >Подробнее</span
      >
    </div>
  </div>
</template>

<style scoped></style>
