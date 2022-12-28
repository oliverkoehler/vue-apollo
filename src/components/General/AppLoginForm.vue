<template lang="">
  <div>
    <div class="flex justify-center" v-if="!register || registrationSuccess">
      <form
        @submit.prevent="onSubmit"
        class="p-4 bg-secondary border-brown-medium border-4 shadow-2xl mt-10"
      >
        <input
          type="text"
          placeholder="Benutzername"
          v-model="username"
          class="bg-secondary w-36 p-1 mr-2 border-2 border-brown-medium placeholder-brown-medium font-semibold rounded"
        />

        <input
          type="password"
          placeholder="Passwort"
          v-model="password"
          class="bg-secondary w-36 p-1 mr-2 border-2 border-brown-medium placeholder-brown-medium font-semibold rounded"
        /><br />

        <div class="border-green-700 border-2 bg-primary font-bold text-sm mt-3" v-if="registrationSuccess">
          Account erfolgreich registriert!
        </div>

        <AppButton @click="loginBtnClicked">Einloggen</AppButton>
        <AppButton @click="registerUserForm" class="ml-3">Account erstellen</AppButton>
        <div class="mt-2">Passwort vergessen</div>
      </form>
      <!-- <div v-if="error">Etwas ging schief</div> -->
    </div>
    <div class="flex justify-center" v-else>
      <form
        @submit.prevent="onSubmit"
        class="p-4 bg-secondary border-brown-medium border-4 shadow-2xl"
      >
        <input
          type="text"
          placeholder="Benutzername"
          v-model="username"
          class="bg-secondary w-36 p-1 mr-2 border-2 border-brown-medium placeholder-brown-medium font-semibold rounded"
        />

        <input
          type="password"
          placeholder="Passwort"
          v-model="password"
          class="bg-secondary w-36 p-1 mr-2 border-2 border-brown-medium placeholder-brown-medium font-semibold rounded"
        /><br />
        
        <input
          type="email"
          placeholder="E-Mail"
          v-model="email"
          class="bg-secondary mt-2 p-1 mr-2 border-2 border-brown-medium placeholder-brown-medium font-semibold rounded w-50"
        /><br />
        
        <AppButton @click="backToLoginBtnClicked">Doch einloggen</AppButton>
        <AppButton @click="registerBtnClicked" class="ml-3">Account erstellen</AppButton>
      </form>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useUserStore } from '../../stores/user';

import AppButton from './AppButton.vue';

const { login, createUser } = useUserStore();
const { registrationSuccess } = storeToRefs(useUserStore())

const username = ref('admin');
const password = ref('test123');
const email = ref('admin@test.de');

const register = ref(false);

const loginBtnClicked = () => {
  login({
    username: username.value,
    password: password.value,
    platform: 'PC',
  });
};

const registerUserForm = () => {
  register.value = !register.value
}

const registerBtnClicked = () => {
  createUser({
    username: username.value,
    password: password.value,
    email: email.value
  });
};

const backToLoginBtnClicked = () => {
    register.value = !register.value;
  }
</script>
