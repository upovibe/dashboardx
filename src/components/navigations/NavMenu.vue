<script setup lang="ts">
import { FaComment, FaBell } from 'vue-icons-plus/fa';
</script>

<template>
    <div class="flex items-center justify-between gap-4">
        <!-- Title -->
        <div class="title flex flex-col items-start gap-1">
            <h3 class="font-semibold text-2xl">Sales Report</h3>
            <p class="text-sm">Friday, December 15th 2023</p>
        </div>

        <div class="flex items-center gap-3">
            <!-- Action Icons -->
            <div class="flex items-center gap-3">
                <!-- Comment Icon with Avatar -->
                <a href="#"
                    class="group bg-white rounded-full p-3 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300">
                    <FaComment class="size-3 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <!-- Bell Icon -->
                <a href="#"
                    class="group bg-white rounded-full p-3 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300">
                    <FaBell class="size-3 group-hover:scale-110 transition-transform duration-300" />
                </a>
            </div>

            <!-- User Info with Avatar Image -->
            <div class="flex items-center gap-3">                
                <!-- Avatar Image -->
                <img src="../../assets/images/Avatar-Profile.jpg" alt="User Avatar" class="rounded-full w-10 h-10 object-cover border-2 border-gray-300" />
                <!-- User Info -->
                <div class="flex items-start flex-col">
                    <h4 class="font-semibold leading-none text-gray-900">Ferra Alexandra</h4>
                    <span class="text-sm text-gray-700">Admin Store</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* No external styling needed, using Tailwind CSS classes directly in the template */
</style>
