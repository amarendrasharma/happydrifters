<template>
  <div class="home">
    <b-form @submit.prevent="generateProduct">
      <b-card title="Add a new Product">
        <div>
          <hr class="mx-n4" />

          <div class="row py-3">
            <div class="col-md-4">
              <h6 class="text-uppercase tracking-wide">Product Details</h6>
              <p class="text-black-50 mb-0">Enter basic details of the Product.</p>
              <small class="text-muted">if gst is not available, please mark it as 0.</small>
            </div>
            <div class="col-md-8">
              <div class="row">
                <div class="col-md-6">
                  <b-form-group
                    id="product_name"
                    label="Product Name"
                    label-for="product_name"
                    :state="errors.product_name ? false : null"
                    :invalid-feedback="errors.product_name ? errors.product_name[0] : ''"
                  >
                    <b-form-input
                      id="product_name"
                      v-model.trim="product.product_name"
                      :state="errors.product_name ? false : null"
                      @keydown.native="delete errors.product_name"
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group
                    id="product_name"
                    label="Product Price"
                    label-for="product_price"
                    :state="errors.product_price ? false : null"
                    :invalid-feedback="errors.product_price ? errors.product_price[0] : ''"
                  >
                    <b-form-input
                      id="product_price"
                      v-model.trim="product.product_price"
                      :state="errors.product_price ? false : null"
                      @keydown.native="delete errors.product_price"
                    ></b-form-input>
                  </b-form-group>
                </div>

                <div class="col-md-6">
                  <b-form-group
                    id="category"
                    label="Category"
                    label-for="category"
                    :state="errors.category ? false : null"
                    :invalid-feedback="errors.category ? errors.category[0] : ''"
                  >
                    <b-form-select
                      id="category"
                      v-model.trim="product.category"
                      :options="categories"
                      :state="errors.category ? false : null"
                      @change.native="delete errors.category"
                    >
                      <template slot="first">
                        <option value="null" selected disabled>Please select an category</option>
                      </template>
                    </b-form-select>
                  </b-form-group>
                </div>

                <div class="col-md-6">
                  <b-form-group
                    id="uom"
                    label="UOM"
                    label-for="uom"
                    :state="errors.uom ? false : null"
                    :invalid-feedback="errors.uom ? errors.uom[0] : ''"
                  >
                    <b-form-input
                      id="uom"
                      v-model.trim="product.uom"
                      :state="errors.uom ? false : null"
                      @keydown.native="delete errors.uom"
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group
                    id="gst"
                    label="GST"
                    label-for="gst"
                    :state="errors.gst ? false : null"
                    :invalid-feedback="errors.gst ? errors.gst[0] : ''"
                  >
                    <b-form-input
                      id="gst"
                      v-model.trim="product.gst"
                      :state="errors.gst ? false : null"
                      @keydown.native="delete errors.gst"
                    ></b-form-input>
                  </b-form-group>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div slot="footer" class="text-right py-2">
          <b-button
            type="submit"
            ref="submitButton"
            size="lg"
            variant="primary"
            class="mb-0"
          >Add Product</b-button>
        </div>
      </b-card>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      errors: {},
      categories: []
    };
  },

  mounted() {
    this.getAllCategories();
  },

  methods: {
    getAllCategories(url) {
      let _this = this;
      axios.get("/category").then(response => {
        response.data.map(category => {
          let Obj = {};
          Obj.value = category.id;
          Obj.text = category.category_name;
          this.categories.push(Obj);
        });
      });
    },

    generateProduct() {
      this.$refs.submitButton.classList.add("spinner");
      this.$refs.submitButton.setAttribute("disabled", true);

      axios
        .post(`/products`, this.product)
        .then(response => {
          this.product = {};
          this.$snack.success({
            text: "Product has been created successfully!",
            button: "OK"
          });
          setTimeout(() => {
            this.$router.push("/products");
          }, 2000);
        })
        .catch(errors => {
          this.errors = errors.response.data.errors;

          this.$refs.submitButton.classList.remove("spinner");
          this.$refs.submitButton.removeAttribute("disabled");
        })
        .then(() => {
          this.$refs.submitButton.classList.remove("spinner");
          this.$refs.submitButton.removeAttribute("disabled");
        });
    }
  }
};
</script>
