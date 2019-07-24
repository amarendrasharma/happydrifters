<template>
	<div>
		<b-form @submit.prevent="changePassword">
			<b-card title="Change Password" class="my-4">
				<div class="row"> 
					<div class="col-md-5">
						<b-form-group
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
						</b-form-group>
					</div>
				</div>

				<div slot="footer" class="py-2 text-right">
					<b-button
						variant="primary"
						type="submit"
						:disabled="spinner"
						:class="{'spinner': spinner == true}"
					>Change Password</b-button>
				</div>

				<b-alert variant="success" show v-if="successMessage" class="mt-4">{{ successMessage }}</b-alert>
			</b-card>
		</b-form>
	</div>
</template>

<script>
export default {
	name: "PasswordChange",

	data() {
		return {
			spinner: false,
			user: {},
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