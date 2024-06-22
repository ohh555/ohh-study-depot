import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/js/rem';


createApp(App).use(router).mount('#app')
