import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from "@/views/WelcomePage.vue";
import CreateRule from "@/views/CreateRule.vue";
import AuthorizationView from "@/views/AuthorizationView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import EmailApproved from "@/views/EmailApproved.vue";
import ControlPanel from "@/views/ControlPanel.vue";
import AddExchange from "@/views/AddExchange.vue";

const routes = [
    {
        path: '/',
        component: WelcomePage
    },
    {
        path: '/create_rule',
        component: CreateRule
    },
    {
        path: '/signin',
        component: AuthorizationView
    },
    {
        path: '/register',
        component: RegistrationView
    },
    {
        path: '/email_approved',
        component: EmailApproved
    },
    {
        path: '/control_panel',
        component: ControlPanel
    },
    {
        path: '/add_exchange',
        component: AddExchange
    },

]

const router = createRouter(
    {
        routes,
        history: createWebHistory(import.meta.env.BASE_URL)
    }
)

export default router;