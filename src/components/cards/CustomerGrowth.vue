<script setup lang="ts">
import Chart from '../chart/Chart.vue';
import { FaChevronDown } from 'vue-icons-plus/fa';

const customerGrowthsData = {
    labels: ['United States', 'Germany', 'Australia', 'France'],
    datasets: [
        {
            label: 'Customer Growth',
            backgroundColor: ['#3B82F6', '#F87171', '#34D399', '#A78BFA'],
            data: [2417, 812, 2281, 287],
        },
    ],
};

const customerHabitsOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'buttom',
        },
        tooltip: {
            callbacks: {
                label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw.toLocaleString()} customers`,
            },
        },
    },
};
</script>
<template>
    <div class="w-full p-5 px-6 rounded-3xl bg-white flex flex-col gap-5">
        <div class="flex items-center justify-between">
            <div>
                <h3 class="text-xl font-bold text-gray-800">
                    Customer Growth
                </h3>
                <p class="text-gray-700">Track Customer Growth</p>
            </div>
            <div class="flex items-center gap-3">
                <span>This year</span>
                <button class="size-7 flex items-center justify-center bg-gray-100 rounded-full">
                    <FaChevronDown class="size-3 text-gray-800" />
                </button>
            </div>
        </div>
        <!-- Chart component -->
        <div>
            <div class="relative w-72 h-72 mx-auto">
                <Chart type="polarArea" :data="customerGrowthsData" :options="customerHabitsOptions" />
            </div>
            <div class="flex flex-col gap-4 mt-4">
                <!-- United States -->
                <div class="flex items-center gap-3">
                    <img class="size-10 object-cover rounded-full" src="../../assets/svgs/flag-us.svg" alt="US Flag">
                    <div class="flex flex-col gap-1 w-full">
                        <span class="text-sm font-bold flex gap-2 items-center">United States
                            <small class="text-sm text-gray-600">(2417 customers)</small>
                        </span>
                        <div class="progress-bar-wrapper bg-light-blue-200">
                            <div class="progress-bar bg-blue-500"></div>
                        </div>
                    </div>
                </div>
                <!-- Germany -->
                <div class="flex items-center gap-3">
                    <img class="size-10 object-cover rounded-full" src="../../assets/svgs/flag-germany.svg" alt="Germany Flag">
                    <div class="flex flex-col gap-1 w-full">
                        <span class="text-sm font-bold flex gap-2 items-center">Germany
                            <small class="text-sm text-gray-600">(812 customers)</small>
                        </span>
                        <div class="progress-bar-wrapper bg-gray-300">
                            <div class="progress-bar bg-red-500"></div>
                        </div>
                    </div>
                </div>
                <!-- Australia -->
                <div class="flex items-center gap-3">
                    <img class="size-10 object-cover rounded-full" src="../../assets/svgs/flag-australia.svg" alt="Australia Flag">
                    <div class="flex flex-col gap-1 w-full">
                        <span class="text-sm font-bold flex gap-2 items-center">Australia
                            <small class="text-sm text-gray-600">(2281 customers)</small>
                        </span>
                        <div class="progress-bar-wrapper bg-light-green-200">
                            <div class="progress-bar bg-green-400"></div>
                        </div>
                    </div>
                </div>
                <!-- France -->
                <div class="flex items-center gap-3">
                    <img class="size-10 object-cover rounded-full" src="../../assets/svgs/flag-france.svg" alt="France Flag">
                    <div class="flex flex-col gap-1 w-full">
                        <span class="text-sm font-bold flex gap-2 items-center">France
                            <small class="text-sm text-gray-600">(287 customers)</small>
                        </span>
                        <div class="progress-bar-wrapper bg-light-purple-200">
                            <div class="progress-bar bg-purple-400"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.progress-bar-wrapper {
    width: 100%; /* Full width of the bar */
    height: 6px; /* Adjust as needed */
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.progress-bar {
    height: 100%;
    border-radius: 4px;
    /* The width should represent the current data value as a percentage */
}

.bg-light-blue-200 {
    background-color: #DBEAFE; /* Lighter blue for the "previous" state */
}

.bg-light-green-200 {
    background-color: #D1FAE5; /* Lighter green */
}

.bg-light-purple-200 {
    background-color: #EDE9FE; /* Lighter purple */
}

.bg-gray-300 {
    background-color: #D1D5DB; /* Light gray for Germany */
}

.bg-blue-500 {
    width: 100%; /* Represents maximum value */
}
.bg-red-500 {
    width: 34%; /* Adjust based on data */
}
.bg-green-400 {
    width: 94%; /* Adjust based on data */
}
.bg-purple-400 {
    width: 12%; /* Adjust based on data */
}
</style>


