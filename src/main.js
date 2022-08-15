import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Store from './store'
import './assets/main.css'

const app = createApp(App);
app
    .use(router)
    .use(Store)
    .mount('#app')
