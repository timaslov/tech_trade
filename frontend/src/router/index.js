import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from "@/views/WelcomePage.vue";
import CreateRule from "@/views/CreateRule.vue";

const routes = [
    {
        path: '/',
        component: WelcomePage
    },
    {
        path: '/create_rule',
        component: CreateRule
    },

]

const router = createRouter(
    {
        routes,
        history: createWebHistory(import.meta.env.BASE_URL)
    }
)

export default router;