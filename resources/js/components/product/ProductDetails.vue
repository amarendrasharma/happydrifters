<template>
	<div>
		<template v-if="loading">
			<content-placeholder></content-placeholder>
		</template>
		<template v-else>
			<b-card>
				<div slot="header">
					<div class="d-flex align-items-center justify-content-between">
						<h6 class="mb-0 h5 text-truncate">Product Details</h6>
						<template>
							<b-button
								variant="link"
								class="font-weight-500 mb-0"
								@click="editGarden"
								v-if="!editGardenDetails"
							>Edit</b-button>
						</template>
						<div v-if="editGardenDetails">
							<b-button
								variant="primary"
								class="font-weight-500 mb-0"
								@click="updateProductDetail"
								:disabled="spinner"
								:class="{'spinner' : spinner == true}"
							>Update</b-button>
							<b-button
								variant="link"
								class="border font-weight-500 mb-0 ml-2 text-gray-600"
								@click="cancelEdit"
							>Cancel</b-button>
						</div>
					</div>
				</div>
				<div>
					<ul class="list-group list-group-flush">
						<li
							class="list-group-item border-0 pl-0"
							v-for="(gardendetail, index) in gardendetails"
							:key="index"
						>
							<div class="row align-items-center">
								<div class="col-12 col-sm-4">
									<p class="text-muted mb-1 mb-md-0 text-sm text-md-right">{{ gardendetail.label }}</p>
									<!-- <div class="flex-fill ml-3" style="border-bottom: 1px dashed #ddd"></div> -->
								</div>
								<div class="col-12 col-sm-5">
									<template v-if="!editGardenDetails">
										<h6
											class="mb-0"
											v-if="gardendetail.name == 'category_id'"
										>{{ productdata.category.category_name ? productdata.category.category_name : '' }}</h6>
										<h6 class="mb-0" v-else>{{ productdata[gardendetail.name] }}</h6>
									</template>

									<template v-if="editGardenDetails">
										<b-form-input
											v-if="gardendetail.type == 'text'"
											v-model="productdata[gardendetail.name]"
											:state="errors[gardendetail.name] ? false : null"
											@keydown.native="delete errors[gardendetail.name]"
										></b-form-input>

										<b-form-radio-group
											v-if="gardendetail.type == 'radio' && gardendetail.name == 'garden_subsidy_avail_state'"
											buttons
											size="sm"
											button-variant="outline-secondary"
											:options="['Yes', 'No']"
											v-model="productdata[gardendetail.name]"
											:state="errors[gardendetail.name] ? false : null"
											@change.native="delete errors[gardendetail.name]"
										/>

										<b-form-radio-group
											v-if="gardendetail.type == 'radio' && gardendetail.name == 'garden_subsidy_avail_tb'"
											buttons
											size="sm"
											button-variant="outline-secondary"
											:options="['Yes', 'No']"
											v-model="productdata[gardendetail.name]"
											:state="errors[gardendetail.name] ? false : null"
											@change.native="delete errors[gardendetail.name]"
										/>

										<b-form-radio-group
											v-if="gardendetail.type == 'radio' && gardendetail.name == 'garden_nature_of_ownership'"
											buttons
											size="sm"
											button-variant="outline-secondary"
											:options="['Propritorship', 'Joint', 'Partnership']"
											v-model="productdata[gardendetail.name]"
											:state="errors[gardendetail.name] ? false : null"
											@change.native="delete errors[gardendetail.name]"
											name="garden_nature_of_ownership"
										/>

										<b-form-select
											v-if="gardendetail.type == 'select' && gardendetail.name == 'category_id'"
											v-model="productdata[gardendetail.name]"
											:options="categories"
											:state="errors[gardendetail.name] ? false : null"
											class="mb-0"
										></b-form-select>

										<b-form-select
											v-if="gardendetail.type == 'select' && gardendetail.name == 'garden_district'"
											v-model="productdata[gardendetail.name]"
											:options="districts"
											:state="errors[gardendetail.name] ? false : null"
											class="mb-0"
										></b-form-select>

										<b-form-invalid-feedback>{{ errors[gardendetail.name] ? errors[gardendetail.name][0] : '' }}</b-form-invalid-feedback>
									</template>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</b-card>
		</template>
	</div>
</template>

<script>
import ContentPlaceholder from "../ui/ContentPlaceholder.vue";
export default {
	components: {
		ContentPlaceholder
	},

	props: {
		uuid: {
			type: String,
			required: true
		}
	},

	data() {
		return {
			loading: true,
			spinner: false,
			productdata: {},
			gardendetails: [],
			editGardenDetails: false,
			categories: [],
			districts: [],
			errors: {}
		};
	},

	mounted() {
		this.gardendetails = [
			{
				name: "product_name",
				type: "text",
				edit: false,
				label: "Product Name"
			},
			// {
			// 	name: "hsn_code",
			// 	type: "text",
			// 	edit: false,
			// 	label: "HSN Code"
			// },
			// {
			// 	name: "state_id",
			// 	type: "select",
			// 	edit: false,
			// 	label: "State"
			// },
			// {
			// 	name: "garden_district",
			// 	type: "select",
			// 	edit: false,
			// 	label: "District"
			// },
			// {
			// 	name: "manufacturer",
			// 	type: "text",
			// 	edit: false,
			// 	label: "Manufacturer"
			// },
			{
				name: "category_id",
				type: "select",
				edit: false,
				label: "Category"
			},
			{
				name: "uom",
				type: "text",
				edit: false,
				label: "UOM"
			},
			{
				name: "gst",
				type: "text",
				edit: false,
				label: "GST"
			}
		];
	},

	watch: {
		uuid: {
			deep: true,
			immediate: true,
			handler: "loadProductData"
		}
	},

	methods: {
		loadProductData() {
			if (this.uuid) { 
				axios
					.all([axios.get(`/products/${this.uuid}`), axios.get('/category')])
					.then(axios.spread( (product_response, category_response) => {
						this.loading = false;
						this.productdata = product_response.data.data; 
						
						category_response.data.map(category => {
							let Obj = {}
							Obj.value = category.id
							Obj.text = category.category_name
							this.categories.push(Obj)
						})
					}))
					// .catch(error => {
					// 	this.loading = false;
					// });
			}
		},

		editGarden() {
			this.editGardenDetails = !this.editGardenDetails;
			this._beforeEditData = Object.assign({}, this.productdata);
		},

		cancelEdit() {
			this.editGardenDetails = !this.editGardenDetails;
			Object.assign(this.productdata, this._beforeEditData);
		},

		updateProductDetail() {
			this.spinner = true;
			console.log(this.productdata);
			axios
				.post(`/products/${this.uuid}`, this.productdata)
				.then(response => {
					this.spinner = false;
					// this.loadProductData();

					this.$snack.success({
						text: "Product details updated",
						button: "Ok"
					});

					this.editGardenDetails = !this.editGardenDetails;
				})
				.catch(error => {
					this.spinner = false;
					this.errors = error.response.data.errors;
				});
		}
	}
};
</script>

<style scoped>
</style>