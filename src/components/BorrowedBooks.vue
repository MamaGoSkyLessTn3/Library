<script setup lang="ts">
const mockBooks = [
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
    cover_edition_key: 'OL1234567M',
    cover_i: 1234567,
    cover_url: 'https://covers.openlibrary.org/b/id/1234567-M.jpg',
    isbn: ['9785171202824', '5171202825'],
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
    cover_edition_key: 'OL7654321M',
    cover_i: 7654321,
    cover_url: 'https://covers.openlibrary.org/b/id/7654321-M.jpg',
    isbn: ['9785170900042', '5170900048'],
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
  <div class="flex flex-col flex-1 bg-total-white px-8 py-12 rounded-2xl gap-4">
    <hr />
    <div v-for="book in mockBooks" :key="book.key" class="flex flex-col gap-4 px-8">
      <div class="flex justify-between">
        <img class="rounded-2xl" :src="book.cover_url" alt="" />
        <div class="flex flex-col gap-2 max-w-2/3 text-2xl">
          <h1>
            Описание:
            <h2 class="text-lg">{{ book.description }}</h2>
          </h1>
          <h1>Автор:</h1>
          <h2 v-for="author in book.authors" :key="author.key" class="text-lg">
            {{ author.name }}
          </h2>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<style scoped></style>
