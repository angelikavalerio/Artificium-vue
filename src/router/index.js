import Register from '../layout/register'
import Dashboard from '../layout/dashboard'
import HelloWorld from '../components/HelloWorld.vue'
import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    { path: '/', component: HelloWorld },
    { path: '/register', component: Register },
    { path: '/dashboard', component: Dashboard }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router