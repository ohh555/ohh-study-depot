import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './config/router'
import './styles/clearStyle.css'
import 'element-plus/dist/index.css'

const pinia = createPinia()

let app = createApp(App);

app.use(router);
app.use(pinia);
app.mount('#app');
