import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css';
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { ValidationProvider } from 'vee-validate';


Vue.config.productionTip = false
axios.defaults.baseURL = "http://localhost:8000/"

Vue.use(VueSweetalert2);
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')