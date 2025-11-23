<script setup lang="ts">
const emit = defineEmits(['click'])

import AppSidebar from '@/components/AppSidebar.vue'
import UserBooks from '@/components/UserBooks.vue'
import UserStat from '@/components/UserStat.vue'

import { computed, onMounted, ref } from 'vue'

const activeButton = ref<string>('1')

function makeActive(id: string) {
  activeButton.value = id
}

</script>



<template>
  <div class="flex h-screen">
    <!-- sidebar -->

    <AppSidebar @set-active-button="makeActive" :active-button="activeButton" />

    <div class="flex flex-col ml-16 w-full h-screen">
      <!-- nav -->
      <div class="flex w-full h-16 justify-between items-center p-3">
        <div class="flex gap-3">
          <img class="" src="/public/user.svg" alt="" />
          <div class="flex flex-col">
            <h1>Имя</h1>
            <h1>Никнейм</h1>
          </div>
        </div>
        <div class="flex gap-2">
          <div class="flex flex-col border-r-2 px-2">
            <h1 class="self-start">12:29</h1>
            <h1>Сент 03,2025</h1>
          </div>
          <img src="/public/settings.svg" alt="" />
        </div>
      </div>

      <!-- main -->
      <div class="flex-1">
        <UserStat v-if="activeButton === '1'" class="flex bg-main-bg w-full h-full" />
        <UserBooks v-if="activeButton === '2'" class="flex bg-main-bg w-full h-full" />
        <div v-if="activeButton === '3'" class="flex bg-main-bg w-full h-full">3</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
