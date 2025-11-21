<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div class="flex flex-col gap-4 items-center text-black">
    <img src="/logo-black.svg" alt="logo" />
    <h1 class="text-3xl">{{ text }}</h1>
  </div>
</template>

<style scoped></style>
