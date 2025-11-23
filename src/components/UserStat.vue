<script setup lang="ts">
import BlackLogoText from './BlackLogoText.vue';
import UserPie from './UserPie.vue';
import UserStatBlock from './UserStatBlock.vue'
import UserStatMenu from './UserStatMenu.vue';
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
        <h1 class="text-3xl font-semibold text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere nesciunt neque
          labore ipsa ducimus recusandae! Qui earum blanditiis quaerat odit minus. Placeat dolore
          vel provident impedit laborum possimus ex. 
        </h1>
        <h1 class="self-end">автор цитаты</h1>
        
      </div>
    </div>
    <div class="flex-1 flex flex-col items-center justify-between p-10">
      <UserPie/>
      <UserStatMenu />
    </div>
  </div>
</template>

<style scoped></style>
