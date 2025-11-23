<script setup lang="ts">
import { computed, onMounted , ref} from 'vue';
import BlackLogoText from './BlackLogoText.vue';
import UserPie from './UserPie.vue';
import UserStatBlock from './UserStatBlock.vue'
import UserStatMenu from './UserStatMenu.vue';
import type { Quote } from '@/types/common.types';
import axios from 'axios';

const quotes = ref<Quote[]>([])
const currentQuote = ref<Quote | null>(null)


// const currentQuote = computed(() => {
//   if (quotes.value.length === 0) return null
//   const randomIndex = Math.floor(Math.random() * quotes.value.length)
//   return quotes.value[randomIndex]
// })

const getRandomQuote =(quotes: Quote[]):Quote =>{
  if (quotes.length === 0) return {
    id: '1',
    author: 'Булат кадиев',
  quote: 'Яички'
} 
  const randomIndex = Math.floor(Math.random() * quotes.length)
  return quotes[randomIndex] 


}



 onMounted(fetchQuotes)
 async function fetchQuotes() {
  try {
    const { data  } = await axios.get<Quote[]>('https://raw.githubusercontent.com/Up-11/-/refs/heads/main/quotes.json')
    // quotes.value = data
    currentQuote.value = getRandomQuote(data)
      console.log(quotes)
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="flex p-6 px-8 gap-6">
    <div class="w-3/5 flex flex-col justify-around">
      <div class="flex gap-6">
        <UserStatBlock text="Ваши текущие книги" img="/public/borrowed_books.svg"></UserStatBlock>
        <UserStatBlock text="Возвращенные книги" img="/public/return_book_black.svg"></UserStatBlock>
      </div>
      <div class="flex items-center justify-between gap-20">
        <UserStatBlock
          text="Давайте по ищем новые книги"
          img="/public/browse_books.svg"
        ></UserStatBlock>
     <BlackLogoText/>
      </div>

      <div class="flex flex-col rounded-2xl p-10 bg-total-white relative">
        <!-- <p>Загрузка...</p> -->
        <h1 class="text-3xl font-semibold text-center">
        {{ currentQuote?.quote}}
        </h1>
        <h1 class="self-end">{{ currentQuote?.author }}</h1>
        
      </div>
    </div>
    <div class="flex-1 flex flex-col items-center justify-between p-10">
      <UserPie/>
      <UserStatMenu />
    </div>
  </div>
</template>

<style scoped></style>
