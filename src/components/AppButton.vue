<script setup lang="ts">
defineProps<{
  text: string
  color: string
  outlined?:boolean
}>()
</script>

<template>
  <button 
  :class="color, outlined ? 'border border-white' : '' "
  
   class="w-full rounded-2xl text-center text-white py-4 cursor-pointer  hover:w-11/12 duration-200 " 
  >
    {{ text }}
  </button>
</template>

<style scoped></style>
