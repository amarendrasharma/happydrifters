<template>
	<div>
		<b-alert show class="shadow-sm d-flex align-items-start py-3 bg-white" :class="variantClass">
			<div class="mr-3">
				<slot name="media">
					<Zondicon
						icon="information-solid"
						class="fill-current svg-icon h4 mb-0"
						v-if="this.variant == 'info'"
					/>
					<Zondicon
						icon="minus-solid"
						class="fill-current svg-icon h4 mb-0"
						v-if="this.variant == 'danger'"
					/>
					<Zondicon
						icon="checkmark-outline"
						class="fill-current svg-icon h4 mb-0"
						v-if="this.variant == 'success'"
					/>
				</slot>
			</div>
			<slot name="content"></slot>
		</b-alert>
	</div>
</template>

<script>
import Zondicon from "vue-zondicons";
export default {
	name: "AlertBox",
	components: {
		Zondicon
	},

	props: {
		variant: {
			type: String,
			default: "info"
		}
	},

	computed: {
		variantClass() {
			return {
				"border-top-info text-info": this.variant == "info",
				"border-top-success text-success": this.variant == "success",
				"border-top-danger text-danger": this.variant == "danger"
			};
		}
	}
};
</script>

<style scoped>
</style>