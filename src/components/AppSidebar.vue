<script setup lang="ts">

import SidebarButton from './SidebarButton.vue'

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

defineEmits<{
  setActiveButton: [id: string]
}>()
defineProps<{activeButton: string}>()



</script>

<template>
  <div class="bg-darkest-black w-16 h-screen flex flex-col gap-20 items-center  fixed">
    <div class="flex h-16"><img src="/public/logo-white.svg" class="p-3" alt="" /></div>

    <div class="flex flex-col gap-3 w-full">
      <SidebarButton
        v-for="button in buttons"
        @click="$emit('setActiveButton', button.id)"
        :active="activeButton === button.id"
        :key="button.id"
        :img_black="button.img_black"
        :img_white="button.img_white"
      />
    </div>

    <img src="/public/logout 3.svg" class="p-3 mx-auto absolute bottom-30" alt="" />
  </div>
</template>

<style scoped></style>
