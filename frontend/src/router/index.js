import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductAdd from '../views/Products/Add.vue'
import ProductEdit from '../views/Products/Edit.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },

    { path: "/products/add", name: "ProductAdd", component: ProductAdd },
    { path: "/products/:id/edit", name: "ProductEdit", component: ProductEdit },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router