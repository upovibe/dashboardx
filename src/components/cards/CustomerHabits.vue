<script setup lang="ts">
import Chart from '../chart/Chart.vue';
import { FaChevronDown } from 'vue-icons-plus/fa';

const customerHabitsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
        {
            label: 'Seen Product',
            backgroundColor: 'rgb(48, 48, 224)',
            borderColor: 'rgba(54, 162, 235, 1)',
            data: [10000, 20000, 30000, 25000, 27000, 32000, 30000],
            fill: false,
        },
        {
            label: 'Sales',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            data: [8000, 15000, 20000, 18000, 19000, 25000, 24000],
            fill: false,
        },
    ],
};

const customerHabitsOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        tooltip: {
            callbacks: {
                label: (tooltipItem) => `${tooltipItem.dataset.label}: ${tooltipItem.raw.toLocaleString()}`,
            },
        },
    },
};
</script>

<template>
    <div class="w-full p-5 px-6 rounded-3xl bg-white flex flex-col gap-5">
        <div class="flex items-center justify-between">
            <div>
                <h3 class="text-2xl font-bold text-gray-800">
                    Customer Habits
                </h3>
                <p class="text-gray-700">Track your Customer Habits</p>
            </div>
            <div class="flex items-center gap-3">
                <span>This year</span>
                <button class="size-7 flex items-center justify-center bg-gray-100 rounded-full">
                    <FaChevronDown class="size-3 text-gray-800" />
                </button>
            </div>
        </div>
        <div class="w-full h-full min-h-full min-w-screen">            
        <Chart type="bar" :data="customerHabitsData" :options="customerHabitsOptions" />
        </div>
    </div>
</template>

<style scoped>
</style>