<template>
  <div class="py-4">
    <!-- <h4 class="mb-4">All lots for {{product_name}}</h4>  -->
    <b-row class="mb-4">
      <b-col sm="6"></b-col>
      <b-col sm="6" class="text-md-right"></b-col>
    </b-row>

    <product-details :uuid="$route.params.uuid"></product-details>
  </div>
</template>

<script>
import ProductDetails from "./ProductDetails.vue";
import ContentPlaceholderTable from "../ui/ContentPlaceholderTable.vue";
import Paginate from "../ui/Paginate.vue";
import Zondicon from "vue-zondicons";
// import NavbarHeader from "../components/NavbarHeader.vue";
import NotFound from "../ui/NotFound.vue";
import AlertBox from "../ui/AlertBox.vue";

export default {
  components: {
    ContentPlaceholderTable,
    Paginate,
    Zondicon,
    NotFound,
    AlertBox,
    ProductDetails
  },

  data() {
    return {
      lot: {},
      showCollapse: false,
      isBusy: false,
      products: [],
      prevUrl: null,
      nextUrl: null,
      searchInput: ""
    };
  },

  mounted() {},

  computed: {
    lotFieldCheck() {
      return Object.values(this.lot).reduce((sum, lot) => {
        if (lot.length > 0) {
          sum++;
        }
        return sum;
      }, 0);
    }
  },

  methods: {}
};
</script>

<style scoped>
</style>