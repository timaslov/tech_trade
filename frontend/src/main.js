import './assets/tailwind.css'
import router from "@/router";

import { createApp } from 'vue'
import App from './App.vue'

import { VueFire, VueFireAuth } from 'vuefire';
import { firebaseApp} from "../firebaseConfig";

const app = createApp(App)

app.use(router)

app.use(VueFire, { firebaseApp, modules: [ VueFireAuth(), ], })

app.mount('#app')
