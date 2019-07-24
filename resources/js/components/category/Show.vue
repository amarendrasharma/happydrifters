<template>
	<div class="py-4">  
        <category-details :uuid="$route.params.uuid"></category-details> 
	</div>
</template>

<script>  
import CategoryDetails from "./CategoryDetails.vue"; 

export default { 
	components: {   
        CategoryDetails
	},

	data() {
		return {  
		};
	},  
};
</script>

<style scoped>
</style>