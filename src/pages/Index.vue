<script setup lang="ts">
import SidebarButton from '@/components/SidebarButton.vue'
import UserStat from '@/components/UserStat.vue'
import { ref } from 'vue'

const buttons = [
  {
    id: '1',
    img_black: '/public/user_stat_black.svg',
    img_white: '/public/user_stat_white.svg',
  },
  {
    id: '2',

    img_black: '/public/return_book_black.svg',
    img_white: '/public/return_book_white.svg',
  },
  {
    id: '3',

    img_black: '/public/library_black.svg',
    img_white: '/public/library_white.svg',
  },
]

const activeButton = ref<string>('1')
</script>

<template>
  <div class="flex h-screen">
    <!-- sidebar -->
    <div class="bg-darkest-black w-16 h-screen flex flex-col gap-20 items-center relative">
      <div class="flex h-16"><img src="/public/logo-white.svg" class="p-3" alt="" /></div>

      <div class="flex flex-col gap-3 w-full">
        <SidebarButton
          v-for="button in buttons"
          @click="activeButton = button.id"
          :active="activeButton === button.id"
          :key="button.id"
          :img_black="button.img_black"
          :img_white="button.img_white"
        />
      </div>
      duv
      <img src="/public/logout 3.svg" class="p-3 mx-auto absolute bottom-30" alt="" />
    </div>

    <div class="flex flex-col w-full h-screen">
      <!-- nav -->
      <div class="flex w-full h-16 justify-between items-center p-3 ">
        <div class="flex gap-3">
          <img class="" src="/public/user.svg" alt="" />
          <div class="flex flex-col"><h1>Имя</h1><h1>Никнейм</h1></div>
        </div>
        <div class="flex"></div>
      </div>

      <!-- main -->
      <div class="flex-1">
        <UserStat v-if="activeButton === '1'" class="flex bg-main-bg w-full h-full"/>
        <div v-if="activeButton === '2'" class="flex bg-main-bg w-full h-full">2</div>
        <div v-if="activeButton === '3'" class="flex bg-main-bg w-full h-full">3</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
