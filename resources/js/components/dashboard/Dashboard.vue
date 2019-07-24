<template>
	<div class="my-4">
		<b-card :title="`${greeting()}, ${$root.user.name}`" class="mb-4">
			<div class="row w-100">
				<div class="col-md-12">
					<p class="mb-4 text-muted">Today is {{new Date()}}</p>
					<!-- <p class="my-2 h5">The world needs more lovers, peacemakers and forgivers. Let's be one!</p> -->
					<p class="lead text-muted mt-5 mb-4">Here's your summary of total sales</p>

					<div class="row">
						<div class="col-6 col-md-3 mb-4 mb-md-0">
							<h4 class="font-weight-bold">{{sales.daily_sales}}</h4>
							<span class="d-block text-muted text-xs text-uppercase tracking-wide text-truncate">Today</span>
						</div>
						<div class="col-6 col-md-3 mb-4 mb-md-0 border-left">
							<h4 class="font-weight-bold">{{sales.weekly_sales}}</h4>
							<span class="d-block text-muted text-xs text-uppercase tracking-wide text-truncate">Last Week</span>
						</div>
						<div class="col-6 col-md-3 mb-4 mb-md-0 border-left">
							<h4 class="font-weight-bold">{{sales.monthly_sales}}</h4>
							<span
								class="d-block text-muted text-xs text-uppercase tracking-wide text-truncate"
							>Last Month</span>
						</div>
						<div class="col-6 col-md-3 mb-4 mb-md-0 border-left">
							<h4 class="font-weight-bold">{{sales.total_sales}}</h4>
							<span
								class="d-block text-muted text-xs text-uppercase tracking-wide text-truncate"
							>Total Sales</span>
						</div>
					</div>
				</div> 
			</div>
			<!-- <div class="d-none d-lg-block bg-holder bg-card" style="background-image: url('/images/bg2.08871118.png');"></div> -->
		</b-card> 
		<b-card class="mb-4" > 
			<div class="d-flex justify-content-between">
				<h4 class="mb-0">
					Sales
				</h4>
				<!-- <div class="flex items-center"> 
					<v-date-picker  
						:available-dates='{ start: null, end: new Date() }'
						mode='range' 
						show-caps
						v-model='date_range' 
						:input-props='{ class: "form-control", readonly: true }'
					>
					</v-date-picker> 
					<a class="ml-3 fill-current text-blue flex items-center" :href="`/invoices?start=${convertDateToMysqlDateFormat(date_range.start)}&end=${convertDateToMysqlDateFormat(date_range.end)}`"> 
						<svg height="20" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
						<path style="fill:#ECEFF1;" d="M496,432.011H272c-8.832,0-16-7.168-16-16s0-311.168,0-320s7.168-16,16-16h224
							c8.832,0,16,7.168,16,16v320C512,424.843,504.832,432.011,496,432.011z"/>
						<g>
							<path style="fill:#388E3C;" d="M336,176.011h-64c-8.832,0-16-7.168-16-16s7.168-16,16-16h64c8.832,0,16,7.168,16,16
								S344.832,176.011,336,176.011z"/>
							<path style="fill:#388E3C;" d="M336,240.011h-64c-8.832,0-16-7.168-16-16s7.168-16,16-16h64c8.832,0,16,7.168,16,16
								S344.832,240.011,336,240.011z"/>
							<path style="fill:#388E3C;" d="M336,304.011h-64c-8.832,0-16-7.168-16-16s7.168-16,16-16h64c8.832,0,16,7.168,16,16
								S344.832,304.011,336,304.011z"/>
							<path style="fill:#388E3C;" d="M336,368.011h-64c-8.832,0-16-7.168-16-16s7.168-16,16-16h64c8.832,0,16,7.168,16,16
								S344.832,368.011,336,368.011z"/>
							<path style="fill:#388E3C;" d="M432,176.011h-32c-8.832,0-16-7.168-16-16s7.168-16,16-16h32c8.832,0,16,7.168,16,16
								S440.832,176.011,432,176.011z"/>
							<path style="fill:#388E3C;" d="M432,240.011h-32c-8.832,0-16-7.168-16-16s7.168-16,16-16h32c8.832,0,16,7.168,16,16
								S440.832,240.011,432,240.011z"/>
							<path style="fill:#388E3C;" d="M432,304.011h-32c-8.832,0-16-7.168-16-16s7.168-16,16-16h32c8.832,0,16,7.168,16,16
								S440.832,304.011,432,304.011z"/>
							<path style="fill:#388E3C;" d="M432,368.011h-32c-8.832,0-16-7.168-16-16s7.168-16,16-16h32c8.832,0,16,7.168,16,16
								S440.832,368.011,432,368.011z"/>
						</g>
						<path style="fill:#2E7D32;" d="M282.208,19.691c-3.648-3.04-8.544-4.352-13.152-3.392l-256,48C5.472,65.707,0,72.299,0,80.011v352
							c0,7.68,5.472,14.304,13.056,15.712l256,48c0.96,0.192,1.952,0.288,2.944,0.288c3.712,0,7.328-1.28,10.208-3.68
							c3.68-3.04,5.792-7.584,5.792-12.32v-448C288,27.243,285.888,22.731,282.208,19.691z"/>
						<path style="fill:#FAFAFA;" d="M220.032,309.483l-50.592-57.824l51.168-65.792c5.44-6.976,4.16-17.024-2.784-22.464
							c-6.944-5.44-16.992-4.16-22.464,2.784l-47.392,60.928l-39.936-45.632c-5.856-6.72-15.968-7.328-22.56-1.504
							c-6.656,5.824-7.328,15.936-1.504,22.56l44,50.304L83.36,310.187c-5.44,6.976-4.16,17.024,2.784,22.464
							c2.944,2.272,6.432,3.36,9.856,3.36c4.768,0,9.472-2.112,12.64-6.176l40.8-52.48l46.528,53.152
							c3.168,3.648,7.584,5.504,12.032,5.504c3.744,0,7.488-1.312,10.528-3.968C225.184,326.219,225.856,316.107,220.032,309.483z"/>
						<g>
						</g> 
						</svg>

					</a>
				</div> -->
			</div>
			<canvas id="myChart" style="width:100%; height:300px;"></canvas>	
		</b-card> 
	</div>
</template>

<script>
import DashboardSalesChart from "./DashboardSalesChart.vue";
import Zondicon from "vue-zondicons";
import Chart from 'chart.js';
// import Calendar from 'v-calendar'; 
// import 'v-calendar/lib/v-calendar.min.css'; 

export default {
	name: "Dashboard",
	components: { 
		DashboardSalesChart,
		Zondicon
	},
	data() {
		return {
			sales: {},
			date_range: {
				start: new Date(),
				end: new Date()
			}, 
			// formats: {
			// 	title: 'MMMM YYYY',
			// 	weekdays: 'W',
			// 	navMonths: 'MMM',
			// 	input: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'], // Only for `v-date-picker`
			// 	dayPopover: 'L', // Only for `v-date-picker`
			// },
		};
	},
	mounted() {
		axios.get('/sales')
			.then(response => {
				this.sales = response.data.data
				this.loadChart()
			})
	},

	methods: {
		convertDateToMysqlDateFormat (date) {
			let MONTH = date.getMonth() + 1;         // 0
			let DATE = date.getDate();          // 31
			let YEAR = date.getFullYear();     // 1980
			return YEAR +'-'+ MONTH +'-'+ DATE;
		},

		greeting() {
			let thehours = new Date().getHours();
			let themessage;
			let morning = ('Good morning');
			let afternoon = ('Good afternoon');
			let evening = ('Good evening');

			if (thehours >= 0 && thehours < 12) {
				themessage = morning;

			} else if (thehours >= 12 && thehours < 17) {
				themessage = afternoon;

			} else if (thehours >= 17 && thehours < 24) {
				themessage = evening;
			} 

			return themessage
		},

		loadChart()
        { 
            let labels = []
            let datasets = []
            Object.entries(this.sales.sales).forEach(function([key,value]) { 
                // var value = this.sales[key];
                labels.push(key) 

                datasets.push(value) 
            }); 
            let ctx = document.getElementById("myChart").getContext("2d");
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: '# sales in Rs.',
                        data: datasets,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            })
        }
	}
};
</script>

<style scoped>
</style>