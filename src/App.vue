<script setup lang="ts">
import SidebarLayout from './components/layout/SidebarLayout.vue';
import HeaderLayout from './components/layout/HeaderLayout.vue';
import MainLayout from './components/layout/MainLayout.vue';
</script>

<template>
  <div class="flex min-h-screen p-5 bg-blue-50">
    <!-- Sidebar with dynamic items and custom actions -->
    <SidebarLayout />
    <!-- content area -->
    <div class="flex-1 flex flex-col gap-6">
      <!-- Header with dynamic items and custom actions -->
      <HeaderLayout />
      <!-- Main content area -->
      <MainLayout />
    </div>
  </div>
</template>

<style scoped></style>
