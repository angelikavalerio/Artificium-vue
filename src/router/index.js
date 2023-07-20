import Register from '../layout/register'
import Dashboard from '../layout/dashboard'
import HelloWorld from '../components/HelloWorld.vue'
import Artificium from '../views/dashboard-artificium.vue'
import Chat from '../views/dashboard-chat.vue'
import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    { path: '/', component: HelloWorld },
    { path: '/register', component: Register },
    { path: '/dashboard',
        component: Dashboard,
      children: [{
        path: 'artificium',
        component: Artificium
      },
      {
        path: 'chat',
        component: Chat
      },
      {
        path: 'library',
        component: Chat
      }
    ]

    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router