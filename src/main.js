import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import routes from './js/routes';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './scss/main.scss';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

createApp(App).use(router).mount('#app');
