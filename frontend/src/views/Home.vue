<template>
  <div class="container p-5 home">
    <h1>Products</h1>
    <div>
      <router-link :to="{name: 'ProductAdd'}">Add New Product</router-link>
    </div>
    <br>
    <div id="main" class="py-5">
      <h1>Attributes</h1>
      <ul class="text-white transition duration-700 ease-in-out bg-gray-600 border rounded-md shadow-md hover:bg-gray-400">
        <li v-for="(product, index) in products" :key="index" :class="{ active: product.id === currentId }">
          <a class="cursor-pointer" @click="setCurrentId(product.id)">{{ product.attributes }}</a>
          <router-link :to="{name: 'ProductEdit' , params: {id: product.id}}"
          class="px-3 text-indigo-600 hover:text-indigo-900">Edit</router-link>
          <button class="ml-1 text-red-600 hover:text-red-900 text-uppercase" @click="deleteProduct(product)">Delete</button>
        </li>
      </ul>
    </div>
    <div class="">
      <h1>Details</h1>
      <div id="item-description" class="text-white transition duration-700 ease-in-out bg-gray-600 border rounded-md shadow-md hover:bg-gray-400">
        {{ currentDetails }}
      </div>
    </div>
  </div>
</template>

<script>

import {mapGetters , mapActions} from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
      currentId: null
    }
  },
  computed: {
      ...mapGetters({
          products: 'products/products'
      }),
      currentProduct() {
          if (this.currentId !== null) {
              const currentProductInArray = this.products.filter(product => {
                return product.id === this.currentId;
              });
              if (currentProductInArray.length === 1) {
                  return currentProductInArray[0];
              }
          }
          return null;
      },
      currentDetails() {
          if (this.currentProduct !== null) {
              return this.currentProduct.details;
          }
          return null;
      }
  },
  methods: {
      setCurrentId(id) {
          this.currentId = id;
      },
      ...mapActions({
          getProducts: 'products/getProducts',
          deleteProductAction: 'products/deleteProduct'
      }),
      deleteProduct(product) {
          this.$swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
              if (result.isConfirmed) {
                  this.deleteProductAction(product.id)
                  this.$swal.fire(
                      'Deleted!',
                      'Product has been Deleted.',
                      'success'
                  )
              }
          })
      }
  },
  created() {
      this.getProducts();
  }
}
</script>
