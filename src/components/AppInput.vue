<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template>
  <input type="text" :placeholder="text" class="rounded-2xl border-black border-1 w-full px-5 py-4" />
</template>

<style scoped></style>
