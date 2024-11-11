  <script setup lang="ts">
  import { defineProps, computed } from 'vue';
  import { Line, Bar, Pie, Doughnut, Radar, PolarArea, Bubble } from 'vue-chartjs';
  import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement, RadialLinearScale, Filler, BubbleController } from 'chart.js';
  
  // Register chart.js components
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    RadialLinearScale,
    Filler,
    BubbleController
  );
  
  // Define supported chart types
  const chartTypes = {
    line: Line,
    bar: Bar,
    pie: Pie,
    doughnut: Doughnut,
    radar: Radar,
    polarArea: PolarArea,
    bubble: Bubble,
  };
  
  // Define props for the chart component
  const props = defineProps<{
    type: keyof typeof chartTypes;
    data: any;
    options?: any;
  }>();
  
  // Compute the chart component dynamically based on the `type` prop
  const Chart = computed(() => chartTypes[props.type]);
  </script>

<template>
    <div class="relative w-full h-full mx-auto">
      <component :is="Chart" :data="data" :options="options" />
    </div>
  </template>
  
  <style scoped>
  /* Add any specific styles you need for the chart component */
  </style>
  