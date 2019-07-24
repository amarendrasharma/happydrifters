<template>
	<div>
		<b-card
			class="text-center py-3 d-flex w-100 align-items-center justify-content-center flex-row"
			:class="{'shadow-none': noShadow == true}"
			:style="{'min-height': height}"
		>
			<img src="../../../assets/NotFound.png" alt="Not Found" width="128" :class="{'d-none': noImage }">
			<slot></slot>
		</b-card>
	</div>
</template>
 
<script>
export default {
	props: {
		noShadow: {
			type: Boolean,
			default: false
		},
		noImage: {
			type: Boolean,
			default: false
		},
		height: {
			type: String,
			default: "400px"
		}
	}
};
</script>

<style scoped>
</style>	