import axios from "axios";

export default {
    namespaced: true,
    state: {
        products: [],
        updateProduct: null,
        product: []
    },
    getters: {
        products(state) {
            return state.products
        },
        product(state) {
            return state.product
        },
    },
    mutations: {
        SET_PRODUCTS(state, value) {
            state.products = value
        },

        SHOW_PRODUCT(state, value) {
            state.product = value
        },

        ADD_PRODUCT(state, product) {
            state.products = [product, ...state.products]
        },
        EDIT_PRODUCT(state, product) {
            state.updateProduct = product
        },
        REMOVE_PRODUCT(state, id) {
            state.products = state.products.filter(product => product.id !== id)
        }
    },
    actions: {
        async getProducts({ commit }) {
            let response = await axios.get('api/products')
            commit('SET_PRODUCTS', response.data.data)
        },

        //Add new Product
        async addProduct({ commit }, form) {
            let response = await axios.post('api/products', form)
            commit("ADD_PRODUCT", response.data.data)
        },

        //Edit Product
        async editProduct({ commit }, form) {
            let response = await axios.put(`api/products/${form.id}`, form)
            commit('EDIT_PRODUCT', response.data.data)
        },

        //Show Product by id
        async getProduct({ commit }, id) {
            let response = await axios.get(`api/products/${id}`)
            commit('SHOW_PRODUCT', response.data.data)
        },


        async deleteProduct({ commit }, id) {
            await axios.delete(`api/products/${id}`)

            commit('REMOVE_PRODUCT', id)
        }
    }
}