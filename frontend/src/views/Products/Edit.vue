<template>
    <div>
        <header class="flex bg-white shadow">
            <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <router-link :to="{name: 'Home'}" class="font-bold text-gray-900">
                Home
                </router-link>
            </div>

            <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h1 class="font-bold text-gray-900">
                Edit Product
                </h1>
            </div>
        </header>
        <main class="py-6">
            <div class="py-6 mx-auto bg-gray-200 max-w-7xl sm:px-6 lg:px-8">
                <!-- Replace with your content -->
                <div class="px-4 py-6 sm:px-0">
                    <form @submit="updateProduct">
                        <div class="px-4 py-5 sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="attributes" class="block text-sm font-medium text-gray-700">Attributes</label>
                                    <input type="text" v-model="form.attributes" name="attributes" id="attributes" class="block w-full h-full p-3 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="details" class="block text-sm font-medium text-gray-700">Details</label>
                                    <textarea  type="text" v-model="form.details" name="details" id="details" class="block w-full h-full p-3 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>
                        </div>
                        <br><br>
                        <div class="text-left sm:px-6">
                            <button type="submit" class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                        </div>
                    </form>
                </div>
                <!-- /End replace -->
            </div>
        </main>
    </div>
</template>


<script>
import {mapActions , mapGetters} from 'vuex'
import axios from 'axios'
export default {
    name: "EditProduct",
    data() {
        return {
            form: {
              attributes: null,
              details: null,
              id : this.$route.params.id
            },
        }
    },
    computed: {
        ...mapGetters({
            product: 'products/product',
        })
    },
    created() {
        this.id = this.$route.params.id
        this.getProduct(this.id)
        axios.get(`api/products/${this.$route.params.id}`).then((response) => {
            this.form = response.data.data;
        });
    },

    methods: {
        ...mapActions({
            getProduct: 'products/getProduct',
            editProductAction: 'products/editProduct'
        }),

         updateProduct() {
            this.editProductAction(this.form)
            this.$swal({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                type: "success",
                icon: "success",
                title: "Product has been Updated!",
            });
            this.$router.push({ name: "Home" });
        }
    },
}
</script>