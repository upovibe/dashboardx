<script setup lang="ts">
import CustomerGrowth from '../cards/CustomerGrowth.vue';
import CustomerHabbits from '../cards/CustomerHabits.vue';
import ProductStatistic from '../cards/ProductStatistic.vue';
import StatCard from '../cards/StatCard.vue';
import { FaDollarSign, FaShoppingCart, FaUser } from 'vue-icons-plus/fa';
</script>

<template>
    <main class="flex-1">
        <div class="flex items-start justify-between flex-col lg:flex-row gap-5">
            <!-- Sec1 -->
            <div class="flex flex-col gap-5 w-full lg:w-8/12 ">
                <!-- Cards for Key Statistics -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                    <!-- Total Sales Card -->
                    <StatCard title="Total Sales" :value="'$612.917'" :percentageChange="'2.08%'"
                        :percentagePositive="true" subtext="Products vs last month">
                        <template #icon>
                            <FaDollarSign class="size-5" />
                        </template>
                    </StatCard>

                    <!-- Total Orders Card -->
                    <StatCard title="Total Orders" :value="34.760" :percentageChange="'4.21%'"
                        :percentagePositive="true" subtext="Orders vs last month">
                        <template #icon>
                            <FaShoppingCart class="size-5" />
                        </template>
                    </StatCard>

                    <!-- Visitors Card -->
                    <StatCard title="Visitors" :value="14.987" :percentageChange="'-2.08%'" :percentagePositive="false"
                        subtext="Users vs last month">
                        <template #icon>
                            <FaUser class="size-5" />
                        </template>
                    </StatCard>

                    <!-- Additional Card if needed -->
                    <StatCard title="Sold Products" :value="12.87" :percentageChange="'12.1%'"
                        :percentagePositive="true" subtext="Products vs last month">
                        <template #icon>
                            <FaShoppingCart class="size-5" />
                        </template>
                    </StatCard>
                </div>
                <!-- Bar Chart for Key Statistics for Habits -->
                <CustomerHabbits />
            </div>

            <!-- Sec2: Another section for additional content or cards -->
            <div class="w-full lg:w-4/12 flex flex-col gap-5">
                <!-- Polar Area Chart for Key Statistics for Habits -->
                <CustomerGrowth />
                <!-- Doughnut Chart for Key Statistics for Habits -->
                <ProductStatistic />
            </div>
        </div>
    </main>
</template>

<style scoped>
/* Add any necessary custom styles here */
</style>
