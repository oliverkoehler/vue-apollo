<template lang="">
  <slot />
  <div class="text-left flex">
    <AppSideNavi />
    <div class="w-[85vw] m-2">
    </div>
  </div>
</template>

<script setup>
import { useDashboardStore } from '@/stores/useDashboard';
import { storeToRefs } from 'pinia';

const { currentPage } = storeToRefs(useDashboardStore())

</script>
