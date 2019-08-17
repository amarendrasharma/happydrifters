<template>
  <div class="card card-body bg-white" v-if="order != null">
    <div
      class="container rounded"
      style="position: relative; border: 1px dashed #e5e5e5"
      v-if="2 == layout"
    >
      <div class="row">
        <div class="col-md-12">
          <div ref="printTable">
            <div class="px-3 py-3 w-100">
              <ul class="small list-inline text-center mb-1 pb-1">
                <li class="text-right text-uppercase">ph. no. +91-69001-43733</li>
                <li class="text-left text-uppercase" style="margin-top:-25px;">
                  <img src="/images/logo1.png" height="50" class="mt-m25" />
                </li>
                <li
                  class="text-uppercase text-underline mt-m40"
                  style="margin-top:-40px;"
                >Tax invoice</li>
                <li
                  class="h6 title my-1 text-center text-uppercase fw-bold font-weight-bold"
                >The Eagle's Nest Happy Drifters</li>
                <li>Travellers Home</li>
                <li
                  class="text-uppercase"
                >Metsikchulung, Behind SNM Hospital Leh Jammu and Kashmir, 194101</li>
                <li>hello@happydrifters.com</li>
              </ul>
              <ul class="small list-inline text-xs-left text-uppercase mb-2 pb-1">
                <li class="small d-flex justify-content-between align-items-center">
                  <span>invoice mno: {{ order.invoice_no }}</span>
                  <span class="float-right">date: {{ order.checkin }}</span>
                </li>
              </ul>
              <ul class="small list-inline mb-1 p-2 w-100" style="border: 1px solid #222">
                <li class="small d-flex align-items-center">
                  <span style="width:100px;">Guest Name</span>
                  <span>: {{ order.customer.customer_name }}</span>
                </li>
                <li class="small d-flex align-items-center">
                  <span style="width:100px;">Address</span>
                  <span>: {{ order.customer.address }}</span>
                </li>
                <li class="small d-flex align-items-center">
                  <span style="width:100px;">Phone</span>
                  <span>: {{ order.customer.phone }}</span>
                </li>
                <li class="small d-flex align-items-center">
                  <span style="width:100px;">GSTIN</span>
                  <span
                    class="text-uppercase"
                  >:{{ JSON.parse(order.invoice_address).customer_gstin ? JSON.parse(order.invoice_address).customer_gstin : ""}}</span>
                </li>
                <span style="color:red"></span>

                <!-- <li class="small d-flex align-items-center">
                                    <span style="width:100px;">
                                        Place of Supply
                                    </span>
                                    <span>
                                        : {{ order.customer.billing_address }}
                                    </span>
                </li>-->
              </ul>

              <table class="w-100 mb-1 p-2" style="border: 1px solid #222">
                <thead>
                  <tr class="small">
                    <th
                      rowspan="2"
                      style="font-weight:500;font-size:80%;"
                      class="border p-1"
                    >Sl. No.</th>
                    <th
                      rowspan="2"
                      style="font-weight:500;font-size:60%;"
                      class="border p-1"
                    >Description of Item</th>
                    <th
                      rowspan="2"
                      style="font-weight:500;font-size:80%;"
                      class="border p-1"
                    >Checkin</th>
                    <th
                      rowspan="2"
                      style="font-weight:500;font-size:80%;"
                      class="border p-1"
                    >Checkout</th>
                    <th
                      rowspan="2"
                      style="font-weight:500;font-size:80%;"
                      class="text-xs-center text-center border p-1"
                    >Qnty.</th>
                    <th
                      rowspan="2"
                      style="font-weight:500;font-size:80%;"
                      class="text-right border p-1"
                    >Rate</th>
                    <th
                      rowspan="2"
                      style="font-weight:500;font-size:80%;"
                      class="text-right border p-1"
                    >Amount</th>
                    <th
                      rowspan="2"
                      style="font-weight:500;font-size:80%;"
                      class="text-right border p-1"
                    >Discount</th>
                    <th
                      colspan="2"
                      style="font-weight:500;font-size:80%;"
                      class="text-center border p-1"
                    >SGST</th>
                    <th
                      colspan="2"
                      style="font-weight:500;font-size:80%;"
                      class="text-center border p-1"
                    >CGST</th>
                    <th
                      rowspan="2"
                      style="font-weight:500;font-size:80%;"
                      class="text-right border p-1"
                    >Total Amount</th>
                  </tr>
                  <tr class="small">
                    <th style="font-weight:500;font-size:80%;" class="text-center border p-1">Rate</th>
                    <th style="font-weight:500;font-size:80%;" class="text-center border p-1">Amount</th>
                    <th style="font-weight:500;font-size:80%;" class="text-center border p-1">Rate</th>
                    <th style="font-weight:500;font-size:80%;" class="text-center border p-1">Amount</th>
                  </tr>
                </thead>
                <tbody class="mb1 small">
                  <tr v-for="(item, index) in order.invoicedetails" :key="item.id" class="small">
                    <td class="border-right p-1">{{index + 1}}</td>
                    <td class="border-right p-1">{{ item.product_name }}</td>
                    <td class="border-right p-1">{{ order.checkin }}</td>
                    <td class="border-right p-1">{{ order.checkout }}</td>

                    <td
                      class="border-right p-1 text-xs-center text-center"
                    >{{item.product_quantity}}</td>
                    <td class="border-right p-1 text-right">{{ item.product_price }}</td>
                    <td
                      class="border-right p-1 text-right"
                    >{{ item.base_amount | formattedCurrency }}</td>
                    <td
                      class="border-right p-1 text-right"
                    >{{ item.discount_amount | formattedCurrency }}</td>
                    <td class="border-right p-1 text-right">{{ item.sgst_per }}</td>
                    <td
                      class="border-right p-1 text-right"
                    >{{ item.sgst_value | formattedCurrency }}</td>
                    <td class="border-right p-1 text-right">{{ item.cgst_per }}</td>
                    <td
                      class="border-right p-1 text-right"
                    >{{ item.cgst_value | formattedCurrency }}</td>
                    <td
                      class="border-right p-1 text-right"
                    >{{ item.total_amount | formattedCurrency }}</td>
                  </tr>
                  <template v-if="order.invoicedetails.length < 12">
                    <tr v-for="i in 9" :key="i">
                      <td class="border-right" height="20px"></td>
                      <td class="border-right" height="20px"></td>
                      <td class="border-right" height="20px"></td>
                      <td class="border-right" height="20px"></td>
                      <td class="border-right" height="20px"></td>
                      <td class="border-right" height="20px"></td>
                      <td class="border-right" height="20px"></td>
                      <td class="border-right" height="20px"></td>
                      <td class="border-right" height="20px"></td>
                      <td class="border-right" height="20px"></td>
                      <td class="border-right" height="20px"></td>
                      <td class="border-right" height="20px"></td>
                      <td class="border-right" height="20px"></td>
                    </tr>
                  </template>
                  <tr class="small">
                    <td colspan="2" rowspan="2" class="px-1 py-2 border">
                      <ul class="list-inline">
                        <li class="text-uppercase text-underline">terms of sale</li>
                        <li class>Goods & service once sold cannot be taken back</li>
                        <li class>All transactions are done in Indian Rupees (&#8377;)</li>
                      </ul>
                    </td>
                    <td colspan="3" class="border">Total Invoice Amount</td>
                    <td class="border text-right p-1">{{order.base_amount}}</td>
                    <td class="border text-right p-1">{{ order.discount_amount }}</td>
                    <td class="border text-right p-1"></td>
                    <td class="border text-right p-1"></td>
                    <td
                      class="border text-right p-1"
                    >{{ order.total_gst_amount /2 | formattedCurrency }}</td>
                    <td class="border text-right p-1"></td>
                    <td
                      class="border text-right p-1"
                    >{{ order.total_gst_amount /2 | formattedCurrency }}</td>
                    <td class="border text-right p-1">
                      <!-- <div style="text-decoration: line-through;">
                                                {{ parseFloat(order.total_amount_payable) | formattedCurrency }}
                      </div>-->
                      <div>{{ parseFloat(order.total_amount) | formattedCurrency }}</div>
                    </td>
                  </tr>
                  <tr class="small">
                    <td colspan="3" class="border">Tax payable on reverse charge</td>
                    <td colspan="7" class="border"></td>
                    <td colspan="7" class="border"></td>
                  </tr>
                  <tr class="small">
                    <td colspan="2" class="px-1 py-2">
                      <p
                        class="text-center mb-2"
                      >Cerified that the particulars given above are true &amp; Correct</p>
                      <p
                        class="text-center mb-0 title fw-bold font-weight-bold"
                      >For: HAPPY DRIFTERS LLP</p>
                    </td>
                    <td
                      colspan="14"
                      class="border text-center"
                    >Rupees {{parseFloat(order.total_amount) | toWords | titleCase}} only</td>
                  </tr>
                  <tr class="small">
                    <td colspan="2" class="px-1 py-2" style="vertical-align:bottom;">
                      <p class="text-center mb-0">Authorised Signatory</p>
                    </td>
                    <td colspan="14" class="border p-1">
                      <ul class="list-inline mb-0">
                        <li class="d-flex align-items-center">
                          <span style="width:100px;">
                            <!-- Registered Office   -->
                          </span>
                        </li>
                        <li class="d-flex align-items-center">
                          <span style="width:100px;">Registered Office</span>
                          <span>: Happy Drifters LLP</span>
                        </li>
                        <li class="d-flex align-items-center">
                          <span style="width:100px;">Address</span>
                          <span>: House No-99, GNB Road, Silpukhuri</span>
                        </li>
                        <li class="d-flex align-items-center">
                          <span style="width:100px;">GSTIN NO</span>
                          <span>: 18AALFH9921N1ZM</span>
                        </li>

                        <li class="d-flex align-items-center">
                          <span style="width:100px;">
                            <!-- Branch Name -->
                          </span>
                          <span>
                            <!-- : -->
                          </span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- <p class="small text-uppercase">thanks for shoping. please visit again.</p>  -->
            </div>
            <div class="break"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../../event-bus";

export default {
  data() {
    return {
      order: {},
      layout: 2
    };
  },

  props: {
    uuid: {
      type: String,
      required: true
    }
  },

  watch: {
    uuid: {
      deep: true,
      immediate: true,
      handler: "getInvoiceDetails"
    }
  },

  mounted() {
    EventBus.$on("print-invoice", this.printOrder);
  },

  methods: {
    getInvoiceDetails() {
      let _this = this;
      let url = `/invoices/${this.uuid}`;
      return axios.get(url).then(response => {
        _this.order = response.data.data;
        let x = JSON.stringify(_this.order);
        console.log("order", x);
        EventBus.$emit(
          "invoice-amount",
          response.data.data.total_rounded_amount_payable
        );
      });
    },

    printOrder() {
      let divToPrint = this.$refs.printTable;

      let htmlToPrint = `
				<style>
					html {
						// font-size: 12px;
					}
					body {
						margin: 5px;
						padding: 5px;
						font-family: Roboto, sans-serif;
						position: relative;
						-webkit-region-break-inside: avoid;
					}
					.break {
						page-break-after: always;
						position: relative;
					}
					.table-wrapper {
						max-width: 100%;
						box-sizing: border-box;
					}
					.brand-logo {
						display: block;
						margin-left: auto;
						margin-right: auto;
						margin-bottom: 0.5em;
						height: 60px !important
					}
					.mb1 {
						margin-bottom: 1.5em;
                    }
                    .p-2 {
                        padding: 0.5em !important;
                    }
                    .p-1 {
                        padding: 0.25em !important;
                    }
                    .pb-2, .py-2 {
                        padding-bottom: 0.5rem !important;
                    }
                    .pt-2, .py-2 {
                        padding-top: 0.5rem !important;
                    }
                    .pl-1, .px-1 {
                        padding-left: 0.25rem !important;
                    }

                    .pr-1, .px-1 {
                        padding-right: 0.25rem !important;
                    }
					small, .small {
                        font-size: 90%;
                        font-weight: 400;
                    }
					table {
						width: 100%;
						border-collapse: collapse;
						text-align: left;
						font-size: 12px;
					}

					.border-dashed{
						border-bottom: dashed 1px #222;
                    }
                    .border{
						border: solid 1px #222;
                    }
                    .border-right {
                        border-right: 1px solid #222 !important;
                    }
					.bt-1 {
						border-top: 1px dashed #ddd;
					}
					.text-center {
						text-align: center !important;
					}
					.text-right {
						text-align: right !important;
					}
					.mt-4 {
						margin-top: 4em;
					}
					.fw-bold {
						font-weight: bold;
					}
					.list-inline {
						margin: 0;
						padding: 0;
						list-style-type: none; 
						width: 100%;
						overflow: hidden;  
					}
					.mb-1 {
						margin-bottom: 0.25rem !important;
					}
					.pb-1 {
						padding-bottom: 0.25rem !important; 
					}
					.list-inline li {
						float: left;
						width: 100%;
						// text-transform:uppercase;
					}
					.text-muted {
						color: #aaa;
					}
					td {
						// padding-top: 5px;
						// padding-bottom: 5px;
					}
					.border-bottom-dashed {
						border-bottom: dashed 1px #222; 
					}
					.store_title { 
						text-transform: uppercase !important; 
						text-align: center !important; 
						margin-bottom: 0.25rem !important; 
						font-size: 1rem;  
						font-family: inherit;
						font-weight: 500;
						line-height: 1.2;
						color: inherit; 
					}
					.float-right {
						float:right;
					}
					.text-uppercase {
						text-transform: uppercase;
                    }
                    .text-underline {  
                        text-decoration:underline solid #222;
                    }
                    .mt-m25 {
    margin-top: 10px;
                    }
                    .mt-m40 {
                    margin-top: 20px;
                    }
                    .text-left{
                        text-align:left;
                    }
				</style>
				`;

      htmlToPrint += divToPrint.outerHTML;

      let newWin = window.open("");
      newWin.document.write(htmlToPrint);
      newWin.print();
      newWin.close();
    }
  }
};
</script>

<style scoped>
.border {
  border: 1px solid #222 !important;
}
.border-right {
  border-right: 1px solid #222 !important;
}
.text-underline {
  text-decoration: underline solid #222;
}
</style>


