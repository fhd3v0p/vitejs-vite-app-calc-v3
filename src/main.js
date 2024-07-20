// src/main.js
import { createApp } from 'vue';
import { Quasar } from 'quasar';
import AppMain from './AppMain.vue';
import quasarUserOptions from './quasar-user-options';
import './styles.css';

createApp(AppMain)
  .use(Quasar, quasarUserOptions)
  .mount('#app');
