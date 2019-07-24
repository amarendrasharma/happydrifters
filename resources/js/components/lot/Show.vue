<template>
	<div class="py-4">  
        <lot-details :uuid="$route.params.uuid"></lot-details>  
	</div>
</template>

<script>  
import LotDetails from "./LotDetails.vue";
import ContentPlaceholderTable from "../ui/ContentPlaceholderTable.vue";
import Paginate from "../ui/Paginate.vue";
import Zondicon from "vue-zondicons";
// import NavbarHeader from "../components/NavbarHeader.vue";
import NotFound from "../ui/NotFound.vue";
import AlertBox from "../ui/AlertBox.vue";

export default { 
	components: {  
        ContentPlaceholderTable,
        Paginate,
		Zondicon,
        NotFound,
        AlertBox,
        LotDetails
	},

	data() {
		return { 
            lot: {},
            showCollapse: false, 
			isBusy: false,
			products: [],
            prevUrl: null,
            nextUrl: null,
            searchInput: '',
            product_name: ''
		};
	},

	mounted() {
        // this.getLots()
    },

    computed: {
        lotFieldCheck() {
            return Object.values(this.lot).reduce((sum, lot) => {  
                if( lot.length > 0) {
                   sum++  
                }
                return sum
            }, 0); 
        }
    },

	methods: { 
	}
};
</script>

<style scoped>
</style>