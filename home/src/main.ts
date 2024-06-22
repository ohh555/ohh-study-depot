import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './config/router'
import './styles/clearStyle.css'

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
