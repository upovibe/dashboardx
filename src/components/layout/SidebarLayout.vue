<script setup lang="ts">
import SidebarMenu from '../navigations/SidebarMenu.vue';
import {
  FaHome,
  FaFileAlt,
  FaBox,
  FaUsers,
  FaExchangeAlt,
  FaFileInvoice,
  FaCog,
  FaPenSquare,
  FaQuestionCircle,
} from 'vue-icons-plus/fa';

// Example items with icons passed directly as components, labels, and links
const sidebarItems = [
  { customElements: '<span>MENU</span>' },
  { label: 'Home', customIcon: FaHome, link: '/home' },
  { label: 'Report', customIcon: FaFileAlt, link: '/report' },
  { label: 'Product', customIcon: FaBox, link: '/product' },
  { label: 'Customer', customIcon: FaUsers, link: '/customer' },
  { customElements: '<span>FINANCIAL</span>' },
  { label: 'Transaction', customIcon: FaExchangeAlt, link: '/transaction' },
  { label: 'Invoice', customIcon: FaFileInvoice, link: '/invoice' },
  { customElements: '<span>TOOLS</span>' },
  { label: 'Settings', customIcon: FaCog, link: '/settings' },
  { label: 'Feedback', customIcon: FaPenSquare, link: '/feedback' },
  { label: 'Help', customIcon: FaQuestionCircle, link: '/help' },
];
</script>

<template>
  <div class="flex min-h-screen">
    <!-- Sidebar with dynamic items and custom actions -->
    <SidebarMenu :items="sidebarItems">
      <template #actions>
        <div class="action-card text-white w-full rounded-3xl flex flex-col items-start p-5">
          <div class="p-2 bg-white rounded-lg">
            <img src="../../assets/svgs/comments-icon.svg" alt="support" class="size-3" />
          </div>
          <h2 class="font-semibold text-xl my-2">Upgrade Pro</h2>
          <p class="leading-tight text-sm">Discover the benefits of an upgraded account</p>
          <button
            class="bg-blue-600 text-white font-semibold w-full flex items-center justify-center h-12 rounded-2xl mt-4">Upgrade
            $30</button>
        </div>
      </template>
    </SidebarMenu>
  </div>
</template>


<style scoped>
.action-card {
  position: relative;
  background-image: url('../../assets/images/upgrade-bg-image.webp');
  background-size: cover;
  background-position: center;
  background-color: #b66060;
  overflow: hidden;
}

/* Dark overlay */
.action-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.712);
  z-index: 1;
}

.action-card>* {
  position: relative;
  z-index: 2;
}
</style>
