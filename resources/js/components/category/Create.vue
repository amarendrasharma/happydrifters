<template>
		<div class="home"> 
		<b-form @submit.prevent="generateProduct">
			<b-card title="Add a new Category">  
				<div> 
					<hr class="mx-n4">

					<div class="row py-3">
						<div class="col-md-4">
							<h6 class="text-uppercase tracking-wide">Category Details</h6>
							<p class="text-black-50 mb-0">Enter basic details of the Category.</p> 
						</div> 
						<div class="col-md-8">
							<div class="row">
								<div class="col-md-6">
									<b-form-group
										id="category_name"
										label="Category Name"
										label-for="category_name"
										:state="errors.category_name ? false : null"
										:invalid-feedback="errors.category_name ? errors.category_name[0] : ''"
									>
										<b-form-input
											id="category_name"
											v-model.trim="product.category_name"
											:state="errors.category_name ? false : null"
											@keydown.native="delete errors.category_name"
										></b-form-input>
									</b-form-group>
								</div> 
							</div>
						</div>
					</div>   
				</div>

				<div
					slot="footer"
					class="text-right py-2" 
				>
					<b-button type="submit" ref="submitButton" size="lg" variant="primary" class="mb-0">Add Category</b-button>
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
			errors: {}
		}
	},

	methods: {
		generateProduct() {  
			this.$refs.submitButton.classList.add("spinner");
			this.$refs.submitButton.setAttribute("disabled", true);
            
            axios.post(`/category`, this.product)
                .then(response => {    
					this.product = {}
                    this.$snack.success({
                        text: 'Category has been created successfully!',
                        button: 'OK', 
					})  
					setTimeout( () => {
						this.$router.push('/category')
					}, 2000)
				})
				.catch(errors => {
					this.errors = errors.response.data.errors; 

					this.$refs.submitButton.classList.remove("spinner");
                    this.$refs.submitButton.setAttribute("disabled", false);
				})
				.then(() => {
                    this.$refs.submitButton.classList.remove("spinner");
                    this.$refs.submitButton.setAttribute("disabled", false);
				}); 
				 
		},
	}
}
</script>
