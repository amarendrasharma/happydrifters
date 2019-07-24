<template>
  <div>
    <b-container>
      <b-card class="mb-5"> 
          <ul class="list-group">
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
              v-for="(due,key,index) in dues"
              :key="index"
            >
              {{key}}
              <span class="badge badge-primary badge-pill">{{due}}</span>
            </li>
          </ul> 
      </b-card>

      <b-card class="font-weight-bold mb-5" header="Add Payment" v-show="dues['Pending Amount'] != 0">  
        <div class="row">
          <div class="col">
            <input
              v-numeric-float
              v-model="newTransac.payment_made"
              class="form-control"
              required
              placeholder="Paid amount"
            >
          </div>
          <div class="col">
            <input v-model="newTransac.product" class="form-control" required placeholder="Note">
          </div>
          <b-button
            type="submit" @click="makeTransaction()" class="btn btn-primary" variant="primary" ref="submitButton">Pay</b-button>
        </div> 
      </b-card> 

      <template v-show="transactions && transactions.transaction_list.length > 0">
        <h4>Transactions</h4>
        <b-card no-body>
          <table class="table w-full table-custom">
            <thead>
              <tr>
                <th>Paid Amount</th>
                <th>Date</th>
                <th>Note</th>
              </tr>
              <!-- <th>Customer</th> -->
              <!-- <th>Product</th> -->
            </thead>
            <tbody class="font-weight-normal">
              <tr v-for="(transaction,index) in transactions.transaction_list" :key="index">
                <td>{{transaction.payment_made}}</td>
                <td>{{transaction.created_at | dateparse}}</td>
                <td>{{transaction.product}}</td>
                <!-- <td>{{transaction.oldcustomer_id}}</td> -->
              </tr>
            </tbody>
          </table> 
        </b-card>
      </template>
      
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      transactions: "",
      newTransac: {},
      dues: []
    };
  },
  mounted() {
    this.getTransaction();
    this.getDues();
  },
  filters: {
    dateparse(takedate) {
      let event = new Date(Date.parse(takedate));

      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };

      return event.toLocaleDateString("en-EN", options);
    }
  },

  methods: {
    getDues() {
      console.log("sdsd", this.$route.params.id);

      axios.get(`/oldcustomers/getdues/${this.$route.params.id}`).then(res => {
        this.dues = res.data.data;
      });
    },
    getTransaction() {
      console.log(this.$route.params.id);
      axios.get(`/oldcustomers/payments/${this.$route.params.id}`).then(res => {
        this.transactions = res.data.data;
      });
    },
    makeTransaction() {
      if(this.newTransac.payment_made > this.dues['Pending Amount']) { 
        this.$snack.danger({
          text: 'Paid amount should not be more then pending amount!',
					button: 'OK', 
				}) 
				return
      } 
      this.$refs.submitButton.classList.add("spinner");
      this.$refs.submitButton.setAttribute("disabled", true);
      this.newTransac.oldcustomer_id = this.$route.params.id;
      // console.log("okk");
      axios
        .post("/oldcustomers/payment", this.newTransac)
        .then(res => { 
          this.$snack.success({
            text: "Payment has been saved successfully!",
            button: "OK"
          });
          this.newTransac = {}
          // setTimeout(() => {
            this.getTransaction();
            this.getDues();
            // this.$router.push(
            //   `/oldcustomers/transaction/${this.$route.params.id}`
            // );
          // }, 2000);
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

<style>
</style>
