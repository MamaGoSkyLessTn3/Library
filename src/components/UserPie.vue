<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'


ChartJS.register(ArcElement, Tooltip, Legend)



const data = {

  datasets: [
    {
      backgroundColor: ['#000000', '#3d3e3e',],
      data: [10, 20],
    },
  ],
}

const options = {
  responsive: true,
  maintainAspectRatio: true,
}
</script>

<template>
  <Pie :data="data" :options="options" />
</template>

<style scoped></style>
