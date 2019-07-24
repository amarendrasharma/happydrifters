<template>
  <div class="py-4">
    <h4 class="mb-4">Old Customers</h4>
    <b-row>
			<b-col sm="6">
				<b-input-group class="mb-4">
					<b-input-group-text slot="prepend">
						<Zondicon icon="search" class="fill-current text-muted" width="20"/>
					</b-input-group-text>
					<b-form-input
						v-model.lazy="searchInput"
						placeholder="Search by customer name..."
						class="rounded-left-0 rounded-right mr-2"
                        @input="getProducts(1)"
					/>
					<!-- <b-btn :disabled="!searchInput" @click="searchInput = ''">Clear</b-btn> -->
				</b-input-group>
			</b-col>
			<b-col sm="6" class="text-md-right">
				<b-button variant="primary" to="/oldcustomer/create">
					<Zondicon icon="add-outline" class="fill-current mr-2" width="20"/>Old Customer
				</b-button>
			</b-col>
		</b-row> 

    <b-card no-body>
      <div>
        <table class="table w-full table-custom">
          <thead>
            <tr>
              <th v-for="field in fields" :key="field">{{field}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in items" v-bind:key="index">
              <td class="small">{{item.customerName}}</td>
              <td class="small">{{item.gstn}}</td>
              <td class="small">{{item.mobile}}</td>
              <td class="small">{{item.address}}</td>
              <td class="small">{{item.date}}</td>
              <td class="small">
                 <router-link
                :to="{ name: 'OldcustomerTransac', params:{
                  id:item.id
                }}"
                class="no-underline text-red hover:text-red-dark"
                title="view details"
              >
                show details
                <span>&rarr;</span>
              </router-link>
            </td>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </b-card>
    <!-- <template v-if="searchInput && products.length == 0 || products.length == 0">
            <not-found no-shadow>
                <p class="mb-0 mt-3 text-muted">No records found</p>
            </not-found>
    </template>-->
  </div>
</template>

<script>
import ContentPlaceholderTable from "../ui/ContentPlaceholderTable.vue";
import Zondicon from "vue-zondicons";
// import NavbarHeader from "../components/NavbarHeader.vue";
import NotFound from "../ui/NotFound.vue";

export default {
  components: {
    ContentPlaceholderTable,
    Zondicon,
    NotFound
  },

  data() {
    return {
      fields: [
        "Customer Name",
        "GSTN",
        "Mobile",
        "Address",
        "Date",
        "Action"
      ],
      x: "",
      infoModal: {
        id: "info-modal",
        title: "",
        content: ""
      },
      dues: [],
      items: []
      // items: [
      //   {
      //     isActive: true,
      //     age: 40,
      //     Customer: "Dickerson",
      //     Mobile: "Macdonald",
      //     Address: "dshsjd sjdbsd sdbsd",
      //     Date: ""
      //   },
      //   { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
      //   {
      //     isActive: false,
      //     age: 89,
      //     first_name: "Geneva",
      //     last_name: "Wilson",
      //     _showDetails: true
      //   },
      //   { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" }
      // ]
    };
  },

  mounted() {
    this.getOldcustomers();
    // this.getDues();
  },
  computed: {},
  methods: {

    getDues(id) {
      console.log(id);
      axios.get(`/oldcustomers/getdues/${id}`).then(res => {
        this.dues = res.data.data;
      });
    },
    getOldcustomers() {
      axios
        .get("/oldcustomers")
        .then(res => {
          this.items = res.data.data;
          console.log(`fuck-----------${this.items}`);
        })
        .catch(err => {});
    }
  }
};
</script>

<style scoped>
</style>