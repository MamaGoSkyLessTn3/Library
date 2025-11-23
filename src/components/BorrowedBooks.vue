<script setup lang="ts">
import type { BookType } from '@/types/book.types'
import BookCard from './BookCard.vue';

const mockBooks: BookType[] = [
  {
    key: '/works/OL1234567W',
    title: 'Преступление и наказание',
    authors: [
      {
        key: '/authors/OL12345A',
        name: 'Фёдор Достоевский',
      },
    ],
    first_publish_year: 1866,

    cover_url: 'https://covers.openlibrary.org/b/id/1234567-M.jpg',

    number_of_pages_median: 671,
    subjects: ['Russian fiction', 'Psychological fiction', 'Crime'],
    description:
      'Роман о бывшем студенте Родионе Раскольникове, который совершает убийство и затем борется с муками совести.',
    // Новые поля для карточки
    taken_date: '2024-01-15',
    return_date: '2024-02-15',
  },
  {
    key: '/works/OL7654321W',
    title: 'Мастер и Маргарита',
    authors: [
      {
        key: '/authors/OL54321A',
        name: 'Михаил Булгаков',
      },
    ],
    first_publish_year: 1967,

    cover_url: 'https://covers.openlibrary.org/b/id/7654321-M.jpg',

    number_of_pages_median: 480,
    subjects: ['Russian fiction', 'Fantasy fiction', 'Satire', 'Soviet Union'],
    description:
      'Мистический роман, сочетающий сатиру на советское общество с философскими размышлениями о добре и зле.',
    // Новые поля для карточки
    taken_date: '2024-01-20',
    return_date: '2024-02-20',
  },
]
</script>

<template>
  <div class="flex flex-col flex-1 px-34 gap-4">
    <div
      v-for="book in mockBooks"
      :key="book.key"
      class="flex flex-col gap-4 px-8 py-12 rounded-2xl bg-total-white"
    >
      <BookCard :book="book"/>
    </div>
  </div>
</template>

<style scoped></style>
