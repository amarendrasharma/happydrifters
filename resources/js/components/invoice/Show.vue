<template>
  <div class="py-4">
    <b-row>
      <b-col sm="12" class>
        <div class="d-flex align-items-center justify-content-end mb-4">
          <!-- <h4 class="mb-0"># {{order.invoice_no}}</h4>  -->
          <button
            class="btn btn-primary btn-sm mr-3"
            @click="showCollapse = !showCollapse"
            :class="showCollapse ? 'collapsed' : null"
            aria-controls="collapse-archive"
            :aria-expanded="showCollapse ? 'true' : 'false'"
            v-if="balance != 0"
          >
            <!-- <span class="mr-2 text-white">
							<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M18 18v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2H4a2 2 0 0 1-2-2v-6c0-1.1.9-2 2-2h2V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v4h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2zm0-2h2v-6H4v6h2v-2c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v2zm-2-8V4H8v4h8zm-8 6v6h8v-6H8z"/></svg>
            </span>-->
            <span>Receive Payment</span>
          </button>
          <button class="btn btn-primary btn-sm" @click.prevent="printInvoice()">
            <span class="mr-2 text-white">
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  class="heroicon-ui"
                  d="M18 18v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2H4a2 2 0 0 1-2-2v-6c0-1.1.9-2 2-2h2V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v4h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2zm0-2h2v-6H4v6h2v-2c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v2zm-2-8V4H8v4h8zm-8 6v6h8v-6H8z"
                />
              </svg>
            </span>
            <span>Print Invoice</span>
          </button>
        </div>
        <invoice-print :uuid="this.$route.params.uuid"></invoice-print>
      </b-col>

      <b-modal
        v-model="showCollapse"
        id="collapse-archive"
        class="mb-4"
        :title="`Create Receipt`"
        centered
      >
        <div class="row">
          <div class="col-md-12">
            <b-form-group label="Payment Amount" label-for="tender_amount" class="text-gray-600">
              <b-form-input v-numeric-float min="0" id="tender_amount" v-model="tender_amount"></b-form-input>
            </b-form-group>
          </div>
        </div>
        <p class="d-flex justify-content-between align-items-center">
          <span>Total Amount:</span>
          <span>{{ invoiceAmount | currency('&#8377;')}}</span>
        </p>
        <p class="d-flex justify-content-between align-items-center">
          <span>Pending Amount:</span>
          <!-- <span>
						{{balance | currency('&#8377;')}}
          </span>-->
        </p>
        <!-- <p v-if="parseFloat(tender_amount) > balance">Pending Amount: {{parseFloat(tender_amount) - balance}}</p> -->
        <!-- <p v-if="parseFloat(tender_amount) < balance">Balance left: {{balanceLeft}}</p> -->

        <!-- <div class="mt-2" slot="modal-footer">
					<b-button variant="outline-secondary" class="mr-2" @click="cancelBalance">Cancel</b-button>
					<b-button
						variant="primary"
						@click="balanceStore($event)" 
						ref="balanceButton"
					>Receive Payment</b-button>
        </div>-->
      </b-modal>
      <!-- <b-col sm="6" class="text-md-right"> 
      </b-col>-->
    </b-row>
    <!-- <template v-if="balances.length > 1">
			<h5 class="my-4">All Balances</h5> 
			<b-card no-body :class="{'spinner spinner-md spinner-green': isBusy}">
				<table class="table w-full table-custom">
					<thead>
						<tr>  
							<th class="text-left">Receipt No</th> 
							<th class="text-left">Receipt Date</th> 
							<th class="text-right">Paid Amount</th>
							<th class="text-right">Amount Due</th> 
						</tr>
					</thead>
					<tbody>
						<template v-for="(balance, index) in balances">
							<tr :key="balance.id" v-if="index != balances.length - 1"> 
								<td class="small">
									{{balance.receipt_no}}
								</td>
								<td class="small">{{ balance.created_at | formattedDate}}</td>
								<td class="small text-right">{{ balance.amount_paid }}</td>
								<td class="small text-right text-success">&#8377; {{ balance.balance_left}}</td> 
						
							</tr>
						</template>
					</tbody>
				</table> 
			</b-card>  
    </template>-->
  </div>
</template>

<script>
import ContentPlaceholderTable from "../ui/ContentPlaceholderTable.vue";
import Zondicon from "vue-zondicons";
import InvoicePrint from "./Print.vue";
import { EventBus } from "../../event-bus";

export default {
  components: {
    Zondicon,
    InvoicePrint
  },

  data() {
    return {
      isBusy: false,
      balance: 0,
      showCollapse: false,
      tender_amount: 0,
      balances: [],
      invoiceAmount: ""
    };
  },

  mounted() {
    EventBus.$on("invoice-amount", this.handleInvoiceAmount);
  },

  methods: {
    handleInvoiceAmount(amount) {
      this.invoiceAmount = amount;
    },

    printInvoice() {
      EventBus.$emit("print-invoice");
    }

    // getBalance() {
    // 	axios
    // 		.get(`/invoices/${this.$route.params.uuid}/balance`)
    // 		.then( response => {
    // 			this.balance = response.data.data.balance
    // 			this.balances = response.data.data.balances
    // 		})
    // },

    // cancelBalance() {
    //   this.showCollapse = !this.showCollapse;
    //   this.tender_amount = 0;
    // },

    // balanceStore() {
    //   if (this.tender_amount > this.balance) {
    //     this.cancelBalance();
    //     this.$snack.danger({
    //       text: "Paid amount should not be more then pending amount!",
    //       button: "OK"
    //     });
    //     return;
    //   }
    //   this.$refs.balanceButton.classList.add("spinner");
    //   this.$refs.balanceButton.setAttribute("disabled", true);

    //   let obj = {
    //     balance: this.balance,
    //     tender_amount: parseFloat(this.tender_amount).toFixed(2),
    //     balance_left: parseFloat(this.balanceLeft).toFixed(2)
    //   };

    //   axios
    //     .post(`/invoices/${this.$route.params.uuid}/balance`, obj)
    //     .then(response => {
    //       this.getBalance();
    //       this.cancelBalance();
    //       this.$snack.success({
    //         text: "Balance has been updated successfully!",
    //         button: "OK"
    //       });

    //       this.$refs.balanceButton.classList.remove("spinner");
    //       this.$refs.balanceButton.removeAttribute("disabled", true);
    //     });
    // }
  },

  computed: {
    // balanceLeft() {
    //   if (parseFloat(this.tender_amount) >= this.balance) {
    //     return 0;
    //   }
    //   return this.balance - parseFloat(this.tender_amount);
    // }
  }
};
</script>

<style scoped>
</style>