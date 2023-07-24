import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/style.css'
import './styles/main.scss'
import ButtonSubmit from './components/ButtonSubmit.vue'
import router from './router'
import './assets/icons/icons.js'
import FontAwesomeIcon from './assets/icons/icons.js'


const app = createApp(App)

app.use(ElementPlus)

app.use(router)
app.component("ButtonSubmit", ButtonSubmit)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
