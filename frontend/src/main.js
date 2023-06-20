import './assets/tailwind.css'
import router from "@/router";

import { createApp } from 'vue'
import App from './App.vue'

import { VueFire, VueFireAuth } from 'vuefire';
import { firebaseApp} from "../firebaseConfig";

import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(router)

app.use(VueFire, { firebaseApp, modules: [ VueFireAuth(), ], })
app.use(pinia)

app.mount('#app')
