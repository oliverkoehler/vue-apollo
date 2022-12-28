<template>
  <div class="bg-red-800 ml-3 p-4 rounded-xl text-red-400 font-bold w-fit sticky top-[90vh]">
    Code: {{code}} | {{message}}
  </div>
</template>

<script setup>
  import { useErrorsStore } from '@/stores/useErrors';
  import { storeToRefs } from 'pinia';

  const { message, code } = storeToRefs(useErrorsStore())
</script>