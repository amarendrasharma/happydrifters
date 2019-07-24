<template>
	<div class="py-4">
		<h4 class="mb-4">Categories</h4>  
		<b-row>
			<b-col sm="6">
				<b-input-group class="mb-4">
					<b-input-group-text slot="prepend">
						<Zondicon icon="search" class="fill-current text-muted" width="20"/>
					</b-input-group-text>
					<b-form-input
						v-model.lazy="searchInput"
						placeholder="Search by category name..."
						class="rounded-left-0 rounded-right mr-2"
                        @input="getCategories(1)"
					/>
					<!-- <b-btn :disabled="!searchInput" @click="searchInput = ''">Clear</b-btn> -->
				</b-input-group>
			</b-col>
			<b-col sm="6" class="text-md-right">
				<b-button variant="primary" to="/category/generate">
					<Zondicon icon="add-outline" class="fill-current mr-2" width="20"/>New Category
				</b-button>
			</b-col>
		</b-row>

		<b-card no-body :class="{'spinner spinner-md spinner-green': isBusy}">
			<table class="table w-full table-custom">
                <thead>
                    <tr> 
                        <th class="text-left">Category Name</th>
                        <th class="text-left">Date Created</th>
                        <th class="text-left">Last Updated</th>   
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td>
                            <router-link
                            :to="{ name: 'showcategory', params: { uuid: product.uuid, product: product } }"
                            class="no-underline text-red hover:text-red-dark" title="view details">{{ product.category_name }} 
                            <span>&rarr;</span>
                            </router-link>
                        </td> 
                        <td class="small">{{ product.created_at | formattedDate }}</td>
                        <td class="small">{{ product.updated_at | formattedDate }}</td> 
                    </tr>
                </tbody>
            </table>

            <div class="d-flex justify-content-end align-items-center bg-light p-3">
                <paginate 
                    :prev-url="prevUrl" 
                    :next-url="nextUrl"
                    :click-handler="getCategories"
                ></paginate>
            </div>
		</b-card>
        <!-- <template v-if="searchInput && products.length == 0 || products.length == 0">
            <not-found no-shadow>
                <p class="mb-0 mt-3 text-muted">No records found</p>
            </not-found>
        </template>  -->
	</div>
</template>

<script>  
import ContentPlaceholderTable from "../ui/ContentPlaceholderTable.vue";
import Paginate from "../ui/Paginate.vue";
import Zondicon from "vue-zondicons";
// import NavbarHeader from "../components/NavbarHeader.vue";
import NotFound from "../ui/NotFound.vue";

export default {
	components: {  
        ContentPlaceholderTable,
        Paginate,
		Zondicon,
		NotFound
	},

	data() {
		return { 
			isBusy: false,
			products: [],
            prevUrl: null,
            nextUrl: null,
            searchInput: ''
		};
	},

	mounted() {
        this.getCategories()
    },

	methods: {
        getCategories(page = 1) {

            let url = `/category`;

            let params = {}

            if (this.searchInput) {

                params = {
                    page: page,
                    search: this.searchInput,
                    size: 10
                } 
            } else {
                params = {
                    page: page, 
                    size: 10
                }  
            }

            this.getAllCategories(url, params)
        },

        getAllCategories(url, params = null) {
            let _this = this
            return axios.get(url, {params: params})
                .then(response => {   
                    let dataRetured = response.data.data;
					// if (typeof dataRetured === "object") {
					// 	dataRetured = Object.values(dataRetured);
					// } 
					_this.products = dataRetured;  
                    _this.nextUrl = response.data.next_page_url
                    _this.prevUrl = response.data.prev_page_url
                })
        }
	}
};
</script>

<style scoped>
</style>