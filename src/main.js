import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/style.css'
import ButtonSubmit from './components/ButtonSubmit.vue'
import router from './router'

const app = createApp(App)

app.use(ElementPlus)

app.use(router)
app.component("ButtonSubmit", ButtonSubmit)
app.mount('#app')