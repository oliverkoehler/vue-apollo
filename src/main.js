import { createApp } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { createPinia } from "pinia";
import apolloClient from "./plugins/apollo";
import App from "./App";
import './assets/tailwind.css'

createApp(App)
  .provide(DefaultApolloClient, apolloClient)
  .use(createPinia())
  .mount("#app")