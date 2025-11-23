<script setup lang="ts">
defineProps<{
  text: string;
  img:string
}>();
</script>

<template>
  <div class="flex p-6 rounded-2xl justify-items-center bg-total-white h-40">
    <div class="flex px-4 border-l-2 items-center justify-items-center gap-3 ">
      <div class="flex rounded-2xl bg-accent-grey h-full aspect-square p-4 "><img :src= "img"  alt=""></div>
      <div class="flex"><h1 class="font-bold text-3xl ">{{ text }}</h1></div>
    </div>
  </div>
</template>

<style scoped>
  
</style>
