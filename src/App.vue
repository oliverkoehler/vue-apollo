<template>
  <Suspense>
    <div
      class="text-brown bg-primary h-screen font-wishbone"
    >
      <div class="h-[100vh]" style="background-color: rgba(1, 1, 1, 0.0)">
        <AppLoginForm v-if="!loggedIn" />
        <AppDashboard v-else>
        </AppDashboard>
        <AppError v-if="message" />
      </div>
    </div>
  </Suspense>
</template>

<script setup>
import AppLoginForm from './components/General/AppLoginForm.vue';
import AppDashboard from './components/General/AppDashboard.vue';
import AppError from './components/General/AppError.vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from './stores/user';
import { useErrorsStore } from './stores/useErrors';
import './assets/tailwind.css';

const { loggedIn } = storeToRefs(useUserStore());
const { message, code } = storeToRefs(useErrorsStore());
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
