import { createApp } from 'vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import './assets/style.css';
import App from './App.vue';
import '@coreui/coreui/dist/css/coreui.min.css'
const app = createApp(App);
app.use(Toast);
app.mount('#app');
