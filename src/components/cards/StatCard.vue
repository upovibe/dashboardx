<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps<{
  title: string;
  value: string | number;
  percentageChange: string;
  percentagePositive: boolean;
  subtext: string;
}>();

// Compute the color based on whether the percentage change is positive or negative
const percentageColor = computed(() => (props.percentagePositive ? 'bg-green-500 text-gray-100 px-2 rounded-full' : 'bg-red-500 text-gray-100 px-2 rounded-full'));
</script>

<template>
  <div class="w-full p-5 pb-8 rounded-3xl bg-white flex flex-col gap-2 cursor-pointer hover:bg-blue-600 transition-colors duration-300 group">
    <!-- Icon and Percentage Change -->
    <div class="flex justify-between items-center mb-3">
      <div class="icon bg-gray-100 p-2 rounded-2xl group-hover:bg-white">
        <slot name="icon"></slot>
      </div>
      <span :class="['text-sm font-semibold', percentageColor]">
        {{ props.percentageChange }}
      </span>
    </div>

    <!-- Main Statistic Value and Title -->
    <div class="text-gray-500 text-sm font-bold mb-1 group-hover:text-gray-100">
      <p>{{ props.title }}</p>
    </div>

    <!-- Optional Subtext -->
    <div class="flex items-start gap-3">
      <h3 class="text-4xl font-bold leading-none text-gray-900 group-hover:text-gray-100">
        {{ props.value }}
      </h3>
      <div v-if="props.subtext" class="text-base w-2/3 leading-none text-gray-400 group-hover:text-gray-50">
        {{ props.subtext }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
