import Register from '../layout/register'
import Dashboard from '../layout/dashboard'
import HelloWorld from '../components/HelloWorld.vue'
import Artificium from '../views/dashboard-artificium.vue'
import Chat from '../views/dashboard-chat.vue'
import Library from '../views/dashboard-library.vue'
import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    { path: '/', component: Register },
    { path: '/dashboard',
        component: Dashboard,
      children: [{
        path: 'artificium',
        component: Artificium,
        name: Artificium
      },
      {
        path: 'chat',
        component: Chat
      },
      {
        path: 'library',
        component: Library
      }
    ]

    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router