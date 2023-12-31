import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'


const pinia = createPinia()

createApp(App)
    .use(pinia)
    .use(VueSweetalert2)
    .mount('#app')
