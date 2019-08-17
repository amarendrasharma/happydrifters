<template>
	<div>
		<vue-status>
			<div slot="online">
				<transition name="fade" mode="out-in">
					<div class="row d-flex">
						<div class="col-md-5">
                            <div class="card card-body border-0 mb-4">
                                <input type="text" class="form-control" v-model="search" placeholder="Search By Product Name or Category">
                            </div>
							<div class="card border-0">
                                <vue-scrollbar class="my-scrollbar w-100" ref="Scrollbar" style="height: calc(100vh - 200px);">
                                    <div class="rounded list-group list-group-flush d-block" v-if="searchableItems.length">
                                        <div 
                                            class="list-group-item list-group-item-action d-flex justify-content-between align-items-center p-0"
                                            v-for="item in searchableItems" 
                                            :key="item.id"      
                                        >  

                                            <!-- @click.prevent="addToCart(item.id)" -->
                                            <div class="w-100">
                                                <div class="media align-items-center p-3">  
													<a href="#"   class="d-flex media-body justify-content-between align-items-center" @click.prevent="addToCart(item.id)">
														<div class="flex-grow-1">
															<small class="d-block font-weight-bold tracking-wide text-dark">{{ item.item_name }}   @{{item.base_price}}</small>
															<span class="text-black-50">
																{{ item.category.category_name }}
															</span>
														</div>
														<svg width="24" height="24" fill="#cccccc" class="icon icon-chevron-bottom" viewBox="0 0 32 32" aria-hidden="true"><path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"/></svg>
													</a> 
                                                </div>
                                               
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div v-else>
                                        
                                        <div v-for="i in 7" class="border-bottom" :key="i">
                                            <svg class="fill-current" style="color: #eee" height="82">
                                                <rect x="20" y="10" rx="4" ry="4" width="64" height="64"/>
                                                <rect x="100" y="23" rx="4" ry="4" width="200" height="13" />
                                                <rect x="100" y="47" rx="4" ry="4" width="100" height="8" />
                                            </svg>
                                        </div>
                                    </div>
                                </vue-scrollbar>
							</div>
						</div>
						<div class="col-md-7">
							<div class="card border-0 h-100">
								<div v-if="inCart.length || step === 3">
									<div class="card-body">
										<div class="card-title">
											<span class="text-muted">Cart</span>
											<span class="badge badge-primary badge-pill float-right">{{ cart.length }} {{ cart.length | pluralize('item')}} </span>
										</div>
										<div class="mt-3 d-flex justify-content-between align-items-center" v-if="inCart.length || step === 3">
											<p class="mb-0 font-weight-bold text-grey small" :class="{ 'text-primary': step === 1 || step === 2 || step === 3 }"><span class="rounded-circle border d-inline-flex align-items-center justify-content-center" style="width: 32px; height: 32px;">1</span> Cart Items</p>
											<p style="height: 4px; width: 100px"
												:class="{ 'bg-primary-light': step === 2 || step === 3, 'bg-light': step === 1 }"
												class="mb-0 rounded"
											></p>
											<p class="mb-0 font-weight-bold text-grey small" :class="{ 'text-primary': step === 2 || step === 3 }"><span class="rounded-circle border d-inline-flex align-items-center justify-content-center" style="width: 32px; height: 32px;">2</span> Payments</p>
											<p class="mb-0 rounded" style="height: 4px; width: 100px"
												:class="{ 'bg-primary-light': step === 3, 'bg-light': step === 1 || step === 2}"
											></p>
											<p class="mb-0 font-weight-bold text-grey small" :class="{ 'text-primary': step === 3 }"><span class="rounded-circle border d-inline-flex align-items-center justify-content-center" style="width: 32px; height: 32px;">3</span> Complete</p>
										</div>
									</div>
									<vue-scrollbar classes="my-scrollbar w-100" ref="Scrollbar" style="height: calc(100vh - 270px);overflow-y:scroll;">
										<transition name="fade" mode="out-in">
											<ul v-if="step === 1" class="list-group mb-0 list-group-flush d-block">
												<li class="list-group-item d-flex flex-fill justify-content-between align-items-center"
													v-for="(cartitem, index) in cart" :key="cartitem.id"
												>
                                                    
													<div class="container px-0">
														<div class="row no-gutters">
															<div class="col-md-8">
																<div class="row no-gutters">
																	<div class="col col-md-6">
																		<h6 class="my-0">{{ cartitem.name | truncate(28) }}</h6>
																	
                                                                        <span class="font-weight-bold small">{{cartitem.product_name}} </span>
                                                                      
                                                                        <!-- <small class="text-muted">  {{cartitem.product_name}}</small>  -->
																	</div>
																	<div class="col-md-6 text-right">
																		<div>
																			<a href="#" class="text-primary" @click="decrementItemFromCart(cartitem.id)">
																				<svg class="fill-current" width="24" viewBox="0 0 20 20">
																					<path d="M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z M13.388,9.624H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h6.775c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z"></path>
																				</svg>
																			</a>
																			<span class="d-inline-block mx-2 p-1 border rounded text-center" style="width: 35px">{{ parseInt(cartitem.quantity) }}</span>
																			<a href="#" class="text-primary" @click.prevent="incrementItemFromCart(cartitem.id)">
																				<svg class="fill-current" width="24" viewBox="0 0 20 20">
																					<path d="M13.388,9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,6.405,9.624,6.613v3.01H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h3.011v3.01c0,0.208,0.168,0.378,0.376,0.378s0.376-0.17,0.376-0.378v-3.01h3.011c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"></path>
																				</svg>
																			</a>
																		</div>
																	</div>
																</div>
															</div>
															<div class="col-md-4 text-md-right">
																<span>{{ parseInt(cartitem.quantity) * cartitem.base_price | currency('&#8377;') }}</span>
																<a href="#" style="width: 100px" class="ml-3 text-danger no-underline fill-current" @click.prevent="removeFromCart(index)">
																	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"/><path d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"/><path d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z"/></svg>
																</a>
															</div>
														</div>
													</div>
												</li> 
												<li class="list-group-item d-flex align-items-center justify-content-between">
													<span>Discount in percentage</span>
													<input type="number" class="form-control form-control-sm text-right" step="0.01" v-model="discountPercentage" style="width: 100px" min="0" max="100">
												</li>
												<li class="list-group-item d-flex justify-content-between">
													<span>Total</span>
													<strong>{{ total | currency('&#8377;') }}</strong>
												</li>
												<li class="list-group-item d-flex justify-content-between" v-if="discountPercentage > 0"> 
													<span>Discount</span>
													<strong>- {{ discountAmount | currency('&#8377;') }}</strong>
												</li>
                                                <li class="list-group-item d-flex justify-content-between"> 
													<span>Total GST</span>
													<strong>{{ netGst | currency('&#8377;') }}</strong>
												</li> 
                                                <li class="list-group-item d-flex justify-content-between"> 
													<span>Sub Total</span>
													<strong>{{ netAmount | currency('&#8377;') }}</strong>
												</li> 
                                                	<li class="list-group-item d-flex align-items-center justify-content-between">
													<span>In {{getDays}} <b-form-input type="date" v-model="checkin"></b-form-input></span>
													<span>Out <b-form-input type="date" v-model="checkout"></b-form-input></span>
												</li>
												<!-- <li class="list-group-item d-flex justify-content-between bg-light">
													<span class="font-weight-bold">Amount Payable</span>
													<strong>{{ netAmount | currency('&#8377;') }}</strong>
													<strong>{{ netRoundedAmount | currency('&#8377;') }}</strong> 
												</li> -->
											</ul>
										
											<div v-if="step === 2">
												<div class="card-body py-0">
                                                    <div class="mb-2">
														<p class="mb-1 font-weight-bold">Customer Details</p>
                                                        <div class="row">
                                                             <div class="col-md-6">
                                                                <b-form-group
                                                                    id="customer_phone"
                                                                    label="Phone No"
                                                                    label-for="customer_phone"
                                                                    :state="errors.customer_phone ? false : null"
                                                                    :invalid-feedback="errors.customer_phone ? errors.customer_phone[0] : ''"
                                                                >
                                                                    <b-form-input
                                                                        id="customer_phone"
                                                                        v-model.trim="customer.customer_phone"
                                                                        :state="errors.customer_phone ? false : null"
                                                                        @keydown.native="delete errors.customer_phone"
                                                                    ></b-form-input>
                                                                </b-form-group>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <b-form-group
                                                                    id="customer_name"
                                                                    label="Name"
                                                                    label-for="customer_name"
                                                                    :state="errors.customer_name ? false : null"
                                                                    :invalid-feedback="errors.customer_name ? errors.customer_name[0] : ''"
                                                                >
                                                                    <b-form-input
                                                                        id="customer_name"
                                                                        v-model.trim="customer.customer_name"
                                                                        :state="errors.customer_name ? false : null"
                                                                        @keydown.native="delete errors.customer_name"
                                                                    ></b-form-input>
                                                                </b-form-group>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <b-form-group
                                                                    id="customer_address"
                                                                    label="Address"
                                                                    label-for="customer_address"
                                                                    :state="errors.customer_address ? false : null"
                                                                    :invalid-feedback="errors.customer_address ? errors.customer_address[0] : ''"
                                                                >
                                                                    <b-form-input
                                                                        id="customer_address"
                                                                        v-model.trim="customer.customer_address"
                                                                        :state="errors.customer_address ? false : null"
                                                                        @keydown.native="delete errors.customer_address"
                                                                    ></b-form-input>
                                                                </b-form-group>
                                                            </div> 
															<div class="col-md-6">
                                                                <b-form-group
                                                                    id="customer_gstin"
                                                                    label="GSTIN"
                                                                    label-for="customer_gstin"
                                                                    :state="errors.customer_gstin ? false : null"
                                                                    :invalid-feedback="errors.customer_gstin ? errors.customer_gstin[0] : ''"
                                                                >
                                                                    <b-form-input
                                                                        id="customer_gstin"
                                                                        v-model.trim="customer.customer_gstin"
                                                                        :state="errors.customer_gstin ? false : null"
                                                                        @keydown.native="delete errors.customer_gstin"
                                                                    ></b-form-input>
                                                                </b-form-group>
                                                            </div>
                                                        </div> 
													</div>  

													<!-- <div class="mb-4">
														<p class="mb-1 font-weight-bold">Payment Type</p>
														<div class="form-check form-check-inline border rounded px-3 py-2"
															v-for="(dtype, index) in paymenttypes"
															:key="dtype"
															:class="{'border-primary': paymenttype == dtype}"
														>
															<input class="form-check-input mr-2" type="radio" :id="'paymenttype' +index" :value="dtype" v-model="paymenttype">
															<label class="form-check-label" :for="'paymenttype' +index">{{ dtype }}</label>
														</div>
													</div>  -->

                                                    <!-- <div class="mb-2"> 
														<div class="row">
                                                            <div class="col-md-6">
                                                                <b-form-group
                                                                    id="tender_amount"
                                                                    label="Tender Amount"
                                                                    label-for="tender_amount"
                                                                    :state="errors.tender_amount ? false : null"
                                                                    :invalid-feedback="errors.tender_amount ? errors.tender_amount[0] : ''"
                                                                >
                                                                    <b-form-input
                                                                        id="tender_amount"
                                                                        v-model.trim="tender_amount"
                                                                        :state="errors.tender_amount ? false : null"
                                                                        @keydown.native="delete errors.tender_amount"
                                                                    ></b-form-input>
                                                                </b-form-group>
                                                                <p v-if="tender_amount > netRoundedAmount">Amount to be Return: {{tender_amount - netRoundedAmount}}</p>
                                                                <p v-if="tender_amount < netRoundedAmount">Balance left: {{balanceLeft}}</p>
                                                            </div>
                                                        </div>
                                                    </div> -->
												</div>
											</div>

											<div v-if="step === 3"> 
												<invoice-print :uuid="invoiceuuid" v-if="invoiceuuid.length > 0"></invoice-print>
											</div>
										</transition>
									</vue-scrollbar>
									<ul class="list-group mb-0 list-group-flush d-block" v-if="step === 1 || step === 2">
										<li class="list-group-item d-flex justify-content-between bg-light">
											<span class="font-weight-bold">Amount Payable</span>
											<strong>{{ netRoundedAmount | currency('&#8377;') }}</strong> 
										</li>
									</ul>
									<div class="d-table w-100 px-4 py-3 bg-light rounded-bottom border-top">
										<div class="d-table-cell">
											<button class="btn btn-secondary" @click.prevent="prev()" :disabled="step === 1" v-if="step !== 3">
												<span class="mr-2 text-white">
													<svg class="fill-current icon icon--sm" viewBox="0 0 20 20">
														<path d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
													</svg>
												</span>
											<span>Previous</span></button>
											<button class="btn btn-secondary"
												@click.prevent="goToHome()"
												v-if="step === 3"
											>
												<span class="mr-2 text-white">
													<svg class="fill-current icon icon--sm" viewBox="0 0 20 20">
														<path d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
													</svg>
												</span>
												<span>Back To Home</span> 
											</button>
										</div>
										<div class="d-table-cell text-right">
											<button class="btn btn-primary"
												@click.prevent="next()" 
												v-if="step === 1"
											>
												<span>Next</span>
												<span class="ml-2 text-white">
													<svg class="fill-current icon icon--sm" viewBox="0 0 20 20">
														<path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
													</svg>
												</span>
											</button>

											<button class="btn btn-primary"
												@click.prevent="completeOrder()" 
												v-if="step === 2"
												:class="{ 'btn-spinner': loading}" 
												:disabled="loading || !showComplete"
											>
												<span>Complete Order</span>
												<span class="ml-2 text-white">
													<svg class="fill-current icon icon--sm" viewBox="0 0 20 20">
														<path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
													</svg>
												</span>
											</button> 

											<button v-if="step === 3" class="btn btn-primary mr-2 btn-sm" @click.prevent="printInvoice()">
												<span class="mr-2 text-white">
													<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M18 18v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2H4a2 2 0 0 1-2-2v-6c0-1.1.9-2 2-2h2V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v4h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2zm0-2h2v-6H4v6h2v-2c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v2zm-2-8V4H8v4h8zm-8 6v6h8v-6H8z"/></svg>
												</span>
												<span>
													Print Receipt
												</span>
											</button>
										</div>
									</div>

								</div> 
								<div v-else class="card-body text-center d-flex flex-column align-items-center justify-content-center">
									<img src="../../../assets/svg/shopping-cart.svg" height="40"/>
									<p class="text-muted mt-4 small">Your cart is empty. Please try adding new product.</p>
								</div> 
							</div>
						</div>
					</div>
				</transition>
			</div>
			<div slot="offline">
				<transition name="fade" mode="out-in">
					<div class="card border-0 p-5 text-center">
						<img src="../../../assets/svg/offline.svg"/>
						<h4 class="mt-3">Oops, seems like you're offline!</h4>
						<p class="mb-0">Please check your internet connectivity.</p>
					</div>
				</transition>
			</div>
		</vue-status>
	</div>
</template>

<script>
import { Tabs, Tab } from "vue-tabs-component";
import VueStatus from "vue-status";
import VueScrollbar from "vue2-scrollbar";
import "vue2-scrollbar/dist/style/vue2-scrollbar.css"
import InvoicePrint from "./Print.vue"; 
import {EventBus} from '../../event-bus'
import {moment} from "moment";
export default {
    components: {
        VueScrollbar,
        VueStatus,
        Tabs,
		Tab,
		InvoicePrint
    },
    data() {
        return {
            search: "",
            step: 1,
            customer: {},
            errors: {},
            paymenttypes: ["Cash", "Debit/Credit Card", "Cheque"], 
            paymenttype: "Cash", 
            order: null,
            loading: false,
			discountPercentage: 0,
            invoiceuuid: "",
            checkin:"",
            checkout:""
            // tender_amount: 0
        };
    },

    mounted() {
        this.getItems();
    },

    methods: { 
        showModal() {
			this.$refs.myModalRef.show()
        },
        hideModal() {
            this.$refs.myModalRef.hide()
        },
        goToHome() {
            this.step = 1;
        },
        prev() {
            this.step--;
        },
        next() {
            this.step++;
        },
        addToCart(invId) {
            console.log(invId);
            this.$store.dispatch("addToCart", invId); 
            this.$snack.success({
                text: 'Item added to cart!',
                button: 'OK', 
            })
        },

        removeFromCart(index) {
            this.$store.dispatch("removeFromCart", index); 
            this.$snack.success({
                text: 'Item removed from cart!',
                button: 'OK', 
            })
        },

        decrementItemFromCart(index) {
            this.$store.dispatch("decrementItemFromCart", index);
        },

        incrementItemFromCart(index) {
            this.$store.dispatch("incrementItemFromCart", index);
        },
        getItems() {
            return axios
                .get("/items")
                .then(response => {
                    console.log(response.data);
                    this.$store.dispatch("addItems", response.data); 
                })
                .catch(error => {
                    console.log(error);
                });
		},
		
        completeOrder() {
            this.loading = true;
            let order = {   
				payment_type: this.paymenttype,  
                customer_phone: this.customer.customer_phone,  
                customer_address: this.customer.customer_address,  
                customer_name: this.customer.customer_name,
				customer_phone: this.customer.customer_phone,
				customer_gstin: this.customer.customer_gstin ? this.customer.customer_gstin : "",
				base_amount: parseFloat(this.baseTotal).toFixed(2),
                discount_amount: parseFloat(this.discountAmount).toFixed(2),
                discount_percentage: parseFloat(this.discountPercentage).toFixed(2),
				gst_amount: parseFloat(this.netGst).toFixed(2),
                net_amount: parseFloat(this.netAmount).toFixed(2),
                rounded_amount: parseFloat(this.netRoundedAmount).toFixed(2),	
                // tender_amount: parseFloat(this.tender_amount).toFixed(2),	
                // balance_left: parseFloat(this.balanceLeft).toFixed(2),		
                products: this.cart,
                checkin: this.checkin,
                checkout: this.checkout
			}; 
            console.log('order',order);
            axios
				.post("/invoice", order)
                .then(response => {
                    this.loading = false;
                    this.invoiceuuid = response.data.data; 
					this.$store.dispatch("clearCart");
                    this.$router.push(`/invoices/${this.invoiceuuid}`)
					this.step = 3;
					this.getItems();
                })
                .catch(error => {
					if(error.response.status == 400) { 
						this.$snack.danger({
							text: error.response.data.message,
							button: 'OK', 
						})
					} 
					if(error.response.status == 422) {
						this.errors = error.response.data.errors 

						this.$snack.danger({
							text: 'Please fix the errors and try again',
							button: 'OK', 
						})
					} 
                    this.loading = false;
                });
        },

        printInvoice() {
            EventBus.$emit('print-invoice')
        }
    },
    computed: {
		showComplete() {
			return this.customer.customer_phone && this.customer.customer_name && this.customer.customer_address
		},

        searchableItems() {
            var matcher = new RegExp(this.search, "i");
            return this.items.filter(item => {
                return matcher.test(
                    [item.item_name, item.category.category_name].join()
                );
            });
        }, 

        items() {
            return this.$store.getters.items;
        }, 

        inCart() {
            return this.$store.getters.inCart;
        },

        cart() {
            return this.$store.getters.cartItems;
        },

        total() {
            return this.cart.reduce(
                (accum, item) => accum + item.base_price * item.quantity,
                0
            );
        },

        baseTotal() {
            return this.cart.reduce(
                (accum, item) => accum + item.base_price * item.quantity,
                0
            );
        },

        discountAmount() {
            return this.total * this.discountPercentage / 100;
        }, 

        netAmount() {
            return this.total - this.discountAmount + this.netGst
		},
		
		netRoundedAmount() {
			return this.$root.$options.filters.roundedOff(this.netAmount)
        },

        netGst() {
            return this.cart.reduce(
                (accum, item) => {
                    let base_amount = item.base_price * item.quantity
                    let discount_amount = base_amount * this.discountPercentage/100
                    let taxable_amount = base_amount - discount_amount
                    let total_gst = taxable_amount * (item.product_gst/100)

                    return accum + total_gst;
                },
                0
            );
        }
        
        // balanceLeft() {
        //     if(this.tender_amount >= this.netRoundedAmount) {
        //         return 0
        //     }
        //     return this.netRoundedAmount - this.tender_amount
        // }
    }
};
</script>

<style>
.tabs-component-tabs {
    border-radius: 6px;
    margin-bottom: 5px;
}

@media (min-width: 700px) {
    .tabs-component-tabs {
        border: 0;
        align-items: center;
        display: flex !important;
        flex-wrap: wrap !important;
        margin-right: 0.2rem;
        padding: 10px;
    }
}

.tabs-component-tab {
    color: #999;
    font-size: 14px;
    font-family: inherit;
    font-weight: 500;
    margin-right: 0;
    list-style: none;
    margin-bottom: 0.5em;
    border-radius: 6px;

    flex-direction: row;
    flex-grow: 1;
}

.tabs-component-tab:hover {
    color: #666;
}

.tabs-component-tab.is-active {
    background-color: #17a2b8;
    color: white;
    border-color: inherit;
}

.tabs-component-tab.is-active .tabs-component-tab-a:hover {
    color: white !important;
    text-decoration: none;
}

.tabs-component-tab.is-disabled * {
    color: #cdcdcd;
    cursor: not-allowed !important;
}

@media (min-width: 700px) {
    .tabs-component-tab {
        border: solid 1px #ddd;
        margin-right: 0.5em;
        display: inline-block !important;
    }
}

.tabs-component-tab-a {
    align-items: center;
    color: inherit;
    display: flex;
    padding: 0.35em 0.65em;
    text-decoration: none;
    justify-content: center;
}
.tabs-component-tab-a:hover {
    text-decoration: none;
    color: #17a2b8;
}

.tabs-component-panels {
	background-color: #fff;
	border-top: solid 1px #ddd;
	border-radius: 6px;
	box-shadow: none !important;
}
.fill-current {
	fill: currentColor;
}
.btn .icon {
    -ms-flex-negative: 0;
    color: inherit;
    flex-shrink: 0;
}
.icon--sm {
    font-size: 24px;
}
.icon {
    -ms-flex-negative: 0;
    color: inherit;
    flex-shrink: 0;
    height: 1em;
    line-height: 1;
    width: 1em;
}
.btn span, .icon {
    vertical-align: middle;
}
svg {
    overflow: hidden;
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
.list-group-item-action:hover, .list-group-item-action:focus {
    z-index: 0; 
}
.text-grey {
	color: #6c757d;
}
</style>