<!-- ProductStatistic.vue -->
<script setup lang="ts">
import Chart from '../chart/Chart.vue';
import { FaChevronDown, FaTv, FaGamepad, FaCouch, FaBullseye } from 'vue-icons-plus/fa';

// Define target value for the chart (e.g., assume 100% is 5000)
const targetValue = 5000;

// Data for each individual product category with percentage calculation
const electronicData = {
    labels: ['Achieved', 'Remaining'],
    datasets: [
        {
            data: [2487, targetValue - 2487],
            backgroundColor: ['#4e73df', '#d1d5db'], // Primary color + light gray for remaining
            hoverBackgroundColor: ['#2e59d9', '#d1d5db'],
            borderWidth: 0,
        },
    ],
};

const gamesData = {
    labels: ['Achieved', 'Remaining'],
    datasets: [
        {
            data: [1822, targetValue - 1822],
            backgroundColor: ['#1cc88a', '#d1d5db'],
            hoverBackgroundColor: ['#17a673', '#d1d5db'],
            borderWidth: 0,
        },
    ],
};

const furnitureData = {
    labels: ['Achieved', 'Remaining'],
    datasets: [
        {
            data: [1463, targetValue - 1463],
            backgroundColor: ['#e74a3b', '#d1d5db'],
            hoverBackgroundColor: ['#be2617', '#d1d5db'],
            borderWidth: 0,
        },
    ],
};

// Options for each chart with varying cutout settings
const chartOptions = (cutout) => ({
    responsive: true,
    cutout: cutout,
    plugins: {
        legend: { display: false },
        tooltip: {
            callbacks: {
                label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw.toLocaleString()}`,
            },
        },
    },
});
</script>

<template>
    <div class="w-full p-5 px-6 rounded-3xl bg-white flex flex-col gap-5">
        <div class="flex items-center justify-between">
            <div>
                <h3 class="text-2xl font-bold text-gray-800">
                    Product Statistic
                </h3>
                <p class="text-gray-700">Track your product sales</p>
            </div>
            <div class="flex items-center gap-3">
                <span>Today</span>
                <button class="w-7 h-7 flex items-center justify-center bg-gray-100 rounded-full">
                    <FaChevronDown class="text-gray-800 size-3" />
                </button>
            </div>
        </div>

        <!-- Container for nested doughnut charts with gaps -->
        <div class="relative w-72 h-72 mx-auto">
            <!-- Outer chart for "Electronic" with some inset for spacing -->
            <div class="absolute inset-0">
                <Chart type="doughnut" :data="electronicData" :options="chartOptions('75%')" />
            </div>

            <!-- Middle chart for "Games" with increased inset for spacing -->
            <div class="absolute inset-12">
                <Chart type="doughnut" :data="gamesData" :options="chartOptions('80%')" />
            </div>

            <!-- Inner chart for "Furniture" with further increased inset for spacing -->
            <div class="absolute inset-20">
                <Chart type="doughnut" :data="furnitureData" :options="chartOptions('85%')" />
            </div>

            <!-- Icon and text in the middle -->
            <div class="absolute inset-0 flex flex-col items-center justify-center text-center gap-2">
                <!-- Target Icon -->
                <FaBullseye class="text-yellow-500 size-8" />
                <!-- Target 100% Text -->
                <span class="text-sm text-gray-800 font-semibold">Target 100%</span>
            </div>
        </div>



        <!-- Display the percentage completion for each category below the chart -->
        <div class="mt-4 flex flex-col gap-2 text-center">
            <div class="flex items-center justify-between text-lg">
                <span class="flex items-center gap-2 text-gray-950 font-semibold text-base">
                    <FaTv class="text-blue-600 size-5" /> Electronic
                </span>
                <span class="font-semibold text-gray-100 bg-blue-600 px-2 rounded-full text-sm">49.74%</span>
            </div>
            <div class="flex items-center justify-between text-lg">
                <span class="flex items-center gap-2 text-gray-950 font-semibold text-base">
                    <FaGamepad class="text-green-600 size-5" /> Games
                </span>
                <span class="font-semibold text-gray-100 bg-green-600 px-2 rounded-full text-sm">36.44%</span>
            </div>
            <div class="flex items-center justify-between text-lg">
                <span class="flex items-center gap-2 text-gray-950 font-semibold text-base">
                    <FaCouch class="text-red-600 size-5" /> Furniture
                </span>
                <span class="font-semibold text-gray-100 bg-red-600 px-2 rounded-full text-sm">29.26%</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* You can remove the <style> block if you don't need additional custom styling */
</style>
