<template> 
    <div class="bg-white shadow rounded w-full h-full">
        <canvas id="myChart" style="width:100%; height:100%;" class="p-3"></canvas>
    </div> 
</template>

<script>
import Chart from 'chart.js';
export default {
    props: ['sales'],

    data(){
        return {  

        }
    },
    mounted(){
        this.loadChart()
    },

    methods: {
        loadChart()
        {
            // console.log(this.chartOptions)
            // console.log(this.sales) 
            let labels = []
            let datasets = []
            Object.entries(this.sales).forEach(function([key,value]) {
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
    
}
</script>
