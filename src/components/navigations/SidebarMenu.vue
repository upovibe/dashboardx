<script setup lang="ts">
import { ref } from 'vue';
import Logo from '../Logo.vue';
import { FaChevronLeft, FaChevronRight } from 'vue-icons-plus/fa';

type MenuItem = {
    customIcon?: any;
    label: string;
    link?: string;
    customElements?: any;
};

// State to track sidebar collapse/expand
const isCollapsed = ref(false);
// State to track sidebar visibility
const isVisible = ref(true);
// State to track the currently active item
const activeItem = ref<string | null>(null);

function toggleSidebar() {
    isCollapsed.value = !isCollapsed.value;
}

function toggleVisibility() {
    isVisible.value = !isVisible.value;
}

defineProps<{
    items: MenuItem[];
    actions?: string;
}>();
</script>

<template>
  <!-- Conditionally render sidebar based on visibility -->
  <div v-if="isVisible" :class="[
        'bg-white h-screen p-5 rounded-3xl overflow-hidden flex flex-col transition-all duration-300 relative mr-5',
        isCollapsed ? 'w-20' : 'w-64'
    ]">
    <!-- Sidebar Header with Logo and Buttons -->
    <div class="flex items-center justify-between mb-6">
      <div v-if="!isCollapsed" class="flex items-center gap-5">
        <Logo />
      </div>
      <button
          @click="toggleSidebar"
          class="rounded-xl hover:bg-gray-200 transition-all duration-200 p-1"
          :class="{ 'mx-auto': isCollapsed }"
      >
        <img
            src="../../assets/svgs/dashboard-svgrepo-com%20(1).svg"
            alt="icon"
            class="size-6"
        />
      </button>
    </div>

    <!-- Menu Items -->
    <div class="flex-1">
      <div
          v-for="(item, index) in items"
          :key="index"
          class="transition-opacity duration-300"
          @click="setActiveItem(item.label)"
      >
        <!-- Render custom elements if provided, hide them when collapsed -->
        <template v-if="item.customElements">
          <div v-if="!isCollapsed" class="my-3 text-sm text-gray-600" v-html="item.customElements"></div>
        </template>

        <!-- Menu Items with Custom Icon Component and Label -->
        <template v-else>
          <a v-if="item.link" :href="item.link"
             class="flex items-center w-full font-semibold text-gray-700 no-underline gap-3 p-4 hover:bg-blue-600 hover:text-white duration-100 ease-linear hover:shadow-xl rounded-2xl cursor-pointer"
             :class="{ 'justify-center py-3': isCollapsed, 'active linked': activeItem === item.label }"
          >
            <!-- Render custom icon component if provided -->
            <div v-if="item.customIcon">
              <component :is="item.customIcon" class="size-4" />
            </div>

            <!-- Show label only if sidebar is expanded -->
            <span v-if="!isCollapsed">{{ item.label }}</span>
          </a>
          <div v-else
               class="flex items-center w-full font-semibold text-gray-700 no-underline gap-3 p-4 hover:bg-blue-600 hover:text-white duration-100 ease-linear hover:shadow-xl rounded-2xl cursor-pointer"
               :class="{ 'justify-center': isCollapsed, 'active linked': activeItem === item.label }"
          >
            <!-- Render custom icon component if provided -->
            <div v-if="item.customIcon">
              <component :is="item.customIcon" class="size-4" />
            </div>

            <!-- Show label only if sidebar is expanded -->
            <span v-if="!isCollapsed">{{ item.label }}</span>
          </div>
        </template>
      </div>
    </div>

    <!-- Custom Actions Slot -->
    <div v-if="$slots.actions && !isCollapsed" class="mt-auto transition-opacity duration-300">
      <slot name="actions"></slot>
    </div>
  </div>

  <!-- Button to hide/show sidebar, always on the right when collapsed -->
  <div class="absolute top-1/2 left-0 transform -translate-y-1/2 z-50">
    <!-- Show Chevron Right when sidebar is hidden -->
    <button
        @click="toggleVisibility"
        v-if="!isVisible"
        class="transition-opacity duration-300 ease-linear"
    >
      <FaChevronRight class="text-gray-400 size-4" />
    </button>

    <!-- Show Chevron Left when sidebar is collapsed -->
    <button
        @click="toggleVisibility"
        v-if="isVisible && isCollapsed"
        class="transition-opacity duration-300 ease-linear"
    >
      <FaChevronLeft class="text-gray-400 size-4" />
    </button>
  </div>
</template>

