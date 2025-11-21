<script setup lang="ts">
defineProps<{
  active?: boolean
  img_white: string
  img_black: string
}>()
</script>

<template>
  
  <div :class="active ? 'bg-total-white' : 'bg-darkest-black'"  class="w-full px-5 py-1 ">
    <img :src="active ? img_black : img_white" alt="">
  </div>
</template>

<style scoped></style>
