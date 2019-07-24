<template>
	<div>
		<b-form @submit.prevent="changePassword">
            <div class="row">
                <div class="col-md-5">
                    <b-card class="my-4">
                        <div class="row"> 
                            <div class="col-md-12"> 
                                <div class="d-flex flex-column align-items-center w-full border-bottom border-grey p-4">
                                    <vue-avatar :username="User.name" :size="70" class="mb-3"></vue-avatar>  
                                    <h5 class="mb-2 text-sm text-red">{{User.name}}</h5>  
                                    <h6>{{User.email}}</h6> 
                                </div>
                                <div class="d-flex justify-content-end pt-4">
                                    <b-button
                                        variant="primary"
                                        type="submit"
                                        :disabled="spinner" 
                                        :class="{'spinner': spinner == true}"
                                    >Edit</b-button>
                                </div>
                                <div class="d-flex flex-column pb-4">  
                                    <h6 class="mb-1">Address</h6>
                                    <p class="text-sm mb-4">{{User.address}}</p> 
                                    <h6 class="mb-1">Phone</h6>
                                    <p class="text-sm mb-4">{{User.phone_no}}</p>
                                    <h6 class="mb-1">GSTIN</h6>
                                    <p class="text-sm mb-4">{{User.manager_name}}</p> 
                                    <h6 class="mb-1">Tax Invoice Format</h6>
                                    <p class="text-sm mb-4">{{User.manager_name}}</p> 
                                </div> 
                                <!-- <b-form-group
                                    id="current"
                                    label="Current Password"
                                    label-for="current"
                                    :state="errors.old ? false : null"
                                    :invalid-feedback="errors.old ? errors.old[0] : ''"
                                >
                                    <b-form-input
                                        type="password"
                                        id="current"
                                        v-model.trim="user.old"
                                        :state="errors.old ? false : null"
                                    ></b-form-input>
                                </b-form-group>

                                <b-form-group
                                    id="password"
                                    label="Password"
                                    label-for="password"
                                    :state="errors.password ? false : null"
                                    :invalid-feedback="errors.password ? errors.password[0] : ''"
                                >
                                    <b-form-input
                                        type="password"
                                        id="password"
                                        v-model.trim="user.password"
                                        :state="errors.password ? false : null"
                                    ></b-form-input>
                                </b-form-group>

                                <b-form-group
                                    id="password_confirmation"
                                    label="Password Confirmation"
                                    label-for="password_confirmation"
                                    :state="errors.password_confirmation ? false : null"
                                    :invalid-feedback="errors.password_confirmation ? errors.password_confirmation[0] : ''"
                                >
                                    <b-form-input
                                        type="password"
                                        id="password_confirmation"
                                        :state="errors.password_confirmation ? false : null"
                                        v-model.trim="user.password_confirmation"
                                    ></b-form-input>
                                </b-form-group> -->
                            </div>
                        </div> 

                        <b-alert variant="success" show v-if="successMessage" class="mt-4">{{ successMessage }}</b-alert>
                    </b-card>
                </div>
            </div>
		</b-form>
	</div>
</template>

<script>
export default {
	name: "Profile",

	data() {
		return {
			spinner: false,
			User: this.$root.user,
			errors: {},
			successMessage: ""
		};
	},

	methods: {
		changePassword() {
			this.spinner = true;
			axios
				.post("password/change", {
					old: this.user.old,
					password: this.user.password,
					password_confirmation: this.user.password_confirmation
				})
				.then(response => {
					this.spinner = false;
					this.successMessage = response.data.message;
					this.user = {};
				})
				.catch(error => {
					this.spinner = false;
					this.errors = error.response.data.errors;
					this.successMessage = "";
				});
		}
	}
};
</script>

<style scoped>
</style>