import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from "@/views/WelcomePage.vue";
import CreatePackage from "@/views/CreatePackage.vue";
import AuthorizationView from "@/views/AuthorizationView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import EmailApproved from "@/views/EmailApproved.vue";
import ControlPanel from "@/views/ControlPanel.vue";
import AddExchange from "@/views/AddExchange.vue";
import CreateLogic from "@/views/CreateLogic.vue";

const routes = [
    {
        path: '/',
        component: WelcomePage
    },
    {
        path: '/create_package',
        component: CreatePackage
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
    {
        path: '/create_logic',
        component: CreateLogic
    },

]

const router = createRouter(
    {
        routes,
        history: createWebHistory(import.meta.env.BASE_URL)
    }
)

export default router;