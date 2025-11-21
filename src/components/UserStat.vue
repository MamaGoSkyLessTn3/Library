<script setup lang="ts">
import UserStatBlock from './UserStatBlock.vue'
</script>

<template>
  <div class="flex p-6 px-8 gap-6">
    <div class="w-2/3 flex flex-col justify-around">
      <div class="flex gap-6">
        <UserStatBlock text="Ваши текущие книги" img="/public/borrowed_books.svg"></UserStatBlock>
        <UserStatBlock text="Возвращенные книги" img="/public/returned_books.svg"></UserStatBlock>
      </div>
      <div class="flex">
        <UserStatBlock
          text="Давайте по ищем новые книги"
          img="/public/browse_books.svg"
        ></UserStatBlock>
      </div>

      <div class="flex flex-col rounded-2xl p-10 bg-total-white relative">
        <h1 class="text-3xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere nesciunt neque
          labore ipsa ducimus recusandae! Qui earum blanditiis quaerat odit minus. Placeat dolore
          vel provident impedit laborum possimus ex. 
        </h1>
        <h1 class="self-end">автор цитаты</h1>
        
      </div>
    </div>
    <div class="flex-1"></div>
  </div>
</template>

<style scoped></style>
