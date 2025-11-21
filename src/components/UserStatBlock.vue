<script setup lang="ts">
defineProps<{
  text: string;
  img:string
}>();
</script>

<template>
  <div class="flex p-4 rounded-2xl justify-items-center bg-total-white h-32">
    <div class="flex px-4 border-l-2 items-center justify-items-center gap-3">
      <div class="flex rounded-xl bg-accent-grey h-full aspect-square p-4"><img :src= "img"  alt=""></div>
      <span class="flex"><h1 class="font-bold text-xl" >{{ text }}</h1></span>
    </div>
  </div>
</template>

<style scoped>
  
</style>
