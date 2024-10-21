import { createApp } from 'vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import './assets/style.css';
import App from './App.vue';
import '@coreui/coreui/dist/css/coreui.min.css'
import { createRouter, createWebHistory } from 'vue-router'
import AboutExpense from './components/AboutExpense.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/about', component: AboutExpense },
    ]
});

const app = createApp(App);
app.use(Toast);
app.use(router);
app.mount('#app');
