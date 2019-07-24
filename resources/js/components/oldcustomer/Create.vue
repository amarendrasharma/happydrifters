<template>
  <div class="home">
    <b-form @submit.prevent="generateCustomer">
      <b-card title="Add old customer">
        <b-form-group id="input-group-2" label="Customer Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="customer.customerName"
            required
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Address:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="customer.address"
            required
            placeholder="Enter Customer address"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Customer GSTN:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="customer.gstn" 
            placeholder="Enter Customer GSTN"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Mobile:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="customer.mobile"
            required
            placeholder="Enter Customer Mobile"
          ></b-form-input>
        </b-form-group>

        <!-- <b-form-group id="input-group-2" label="Product Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="customer.product"
            required
            placeholder="Enter Customer Product"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Product Quantity:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="customer.quantity"
            required
            placeholder="Enter Product Quantity"
          ></b-form-input>
        </b-form-group>-->

        <b-form-group id="input-group-2" label="Total Amount:" label-for="input-2">
          <b-form-input
          v-numeric-float
            id="input-2"
            v-model="customer.baseprice"
            required
            placeholder="Enter total amount"
          ></b-form-input>
        </b-form-group>

        <!-- <b-form-group id="input-group-2" label="Paid Amount:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="customer.paidamount"
            required
            placeholder="Enter Paid Amount"
          ></b-form-input>
        </b-form-group>-->

        <b-form-group id="input-group-2" label="Date:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="customer.date"
            type="date"
            required
            placeholder="Enter Date"
          ></b-form-input>
        </b-form-group>
        <div slot="footer" class="text-right py-2">
          <b-button
            type="submit"
            ref="submitButton"
            size="lg"
            variant="primary"
            class="mb-0"
          >Add Customer</b-button>
        </div>
      </b-card>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customer: {},
      errors: {},
      categories: []
    };
  },

  mounted() {
    console.log("kela");
    this.getAllCategories();
  },

  methods: {
    generateCustomer() {
      this.$refs.submitButton.classList.add("spinner");
      this.$refs.submitButton.setAttribute("disabled", true);

      axios
        .post(`/oldcustomers`, this.customer)
        .then(response => {
          this.product = {};
          this.$snack.success({
            text: "Customer has been created successfully!",
            button: "OK"
          });
          setTimeout(() => {
            this.$router.push("/customers/old");
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
