<template>
  <div class="py-4">
    <h4 class="mb-4">Products</h4>
    <b-row>
      <b-col sm="6">
        <b-input-group class="mb-4">
          <b-input-group-text slot="prepend">
            <Zondicon icon="search" class="fill-current text-muted" width="20" />
          </b-input-group-text>
          <b-form-input
            v-model.lazy="searchInput"
            placeholder="Search by product name..."
            class="rounded-left-0 rounded-right mr-2"
            @input="getProducts(1)"
          />
          <!-- <b-btn :disabled="!searchInput" @click="searchInput = ''">Clear</b-btn> -->
        </b-input-group>
      </b-col>
      <b-col sm="6" class="text-md-right">
        <b-button variant="primary" to="/products/generate">
          <Zondicon icon="add-outline" class="fill-current mr-2" width="20" />New Product
        </b-button>
      </b-col>
    </b-row>

    <b-card no-body :class="{'spinner spinner-md spinner-green': isBusy}">
      <table class="table w-full table-custom">
        <thead>
          <tr>
            <th class="text-left">Product Name</th>
            <th class="text-left">Date created</th>
            <th class="text-left">last updated</th>
            <th class="text-left">category</th>
            <!-- <th class="text-right">total stock</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>
              <router-link
                :to="{ name: 'showproduct', params: { uuid: product.uuid, product: product } }"
                class="no-underline text-red hover:text-red-dark"
                title="view details"
              >
                {{ product.product_name }}
                <span>&rarr;</span>
              </router-link>
            </td>
            <td class="small">{{ product.created_at | formattedDate }}</td>
            <td class="small">{{ product.updated_at | formattedDate }}</td>
            <td class="small" v-if="product.category">{{ product.category.category_name }}</td>
            <!-- <td
              class="small text-right"
            >{{ product.lot_quantity_left ? product.lot_quantity_left : 'Not available'}}</td>-->
          </tr>
        </tbody>
      </table>

      <div class="d-flex justify-content-end align-items-center bg-light p-3">
        <paginate :prev-url="prevUrl" :next-url="nextUrl" :click-handler="getProducts"></paginate>
      </div>
    </b-card>
    <!-- <template v-if="searchInput && products.length == 0 || products.length == 0">
            <not-found no-shadow>
                <p class="mb-0 mt-3 text-muted">No records found</p>
            </not-found>
    </template>-->
  </div>
</template>

<script>
import ContentPlaceholderTable from "../ui/ContentPlaceholderTable.vue";
import Paginate from "../ui/Paginate.vue";
import Zondicon from "vue-zondicons";
// import NavbarHeader from "../components/NavbarHeader.vue";
import NotFound from "../ui/NotFound.vue";

export default {
  components: {
    ContentPlaceholderTable,
    Paginate,
    Zondicon,
    NotFound
  },

  data() {
    return {
      isBusy: false,
      products: [],
      prevUrl: null,
      nextUrl: null,
      searchInput: ""
    };
  },

  mounted() {
    this.getProducts();
  },

  methods: {
    getProducts(page = 1) {
      if (this.searchInput) {
        let url = `/products`;

        let params = {
          page: page,
          search: this.searchInput
        };

        this.getInvoices(url, params);
      } else {
        let url = `/products?page=${page}`;
        this.getInvoices(url);
      }
    },

    getInvoices(url, params = null) {
      let _this = this;
      return axios.get(url, { params: params }).then(response => {
        let dataRetured = response.data.data;
        // if (typeof dataRetured === "object") {
        // 	dataRetured = Object.values(dataRetured);
        // }
        _this.products = dataRetured;
        _this.nextUrl = response.data.next_page_url;
        _this.prevUrl = response.data.prev_page_url;
      });
    }
  }
};
</script>

<style scoped>
</style>