<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item md-size-100">
                <h3> {{item.config}}</h3>
            </div>
            <div class="md-layout-item md-size-50">
                <md-card>
                    <md-card-header data-background-color="green">
                        <h4 class="title">Underwriting Profit by LOB</h4>
                    </md-card-header>
                    <md-card-content>
                        <basic-chart
                                :width="300"
                                :height="300"
                                :options="options"
                                :chartdata="chartdata">
                        </basic-chart>
                    </md-card-content>
                </md-card>
            </div>
            <div class="md-layout-item md-size-50">
                <md-card>
                    <md-card-header data-background-color="green">
                        <h4 class="title">Correlation Matrix</h4>

                    </md-card-header>
                    <md-card-content>
                        <div>
                            <apexchart width="500" type="heatmap" :options="heatmapOptions" :series="data"></apexchart>
                        </div>
                    </md-card-content>
                </md-card>
            </div>


            <router-link tag="md-button" to="/jobruns" class="back md-raised md-primary">
                <md-icon>reply</md-icon>Back to Job Runs
            </router-link>
        </div>
    </div>
</template>

<script>
    import {BasicChart, BarChart, ScatterChart, SimpleTable, JobRunsTable, OrderedTable} from "@/components";
    import {ApexChart} from "apexcharts"

    export default {
        props: ['item'],
        components: {
            ApexChart,
            OrderedTable,
            BasicChart,
            BarChart,
            ScatterChart,
            SimpleTable,
            JobRunsTable
        },
        methods: {
            getRandomInt() {
                return Math.floor(Math.random() * (50 - 5 + 1)) + 5
            }
        },
        data() {
            return {

                data: [
                    {
                        name: 'UPC_FHCF',
                        data: [
                            {x: 'UPC_FHCF', y: 100},
                            {x: 'ACIC_FHCF', y: 72},
                            {x: 'FS_FHCF', y: 72},
                            {x: 'Knockout', y: 26},
                            {x: 'Layer 1', y: 39},
                            {x: 'Layer 2', y: 48},
                            {x: 'Layer 3', y: 53},
                            {x: 'Layer 4', y: 45},
                            {x: 'Layer 5', y: 36},
                        ]
                    },
                    {
                        name: 'ACIC_FHCF',
                        data: [

                        {x: 'UPC_FHCF', y: 72},
                            {x: 'ACIC_FHCF', y: 100},
                            {x: 'FS_FHCF', y: 46},
                            {x: 'Knockout', y: 19},
                            {x: 'Layer 1', y: 29},
                            {x: 'Layer 2', y: 37},
                            {x: 'Layer 3', y: 43},
                            {x: 'Layer 4', y: 41},
                            {x: 'Layer 5', y: 34},
                        ]
                    },
                    {
                        name: 'FS_FHCF',
                        data: [
                                {x: 'UPC_FHCF', y: 72},
                                {x: 'ACIC_FHCF', y: 46},
                                {x: 'FS_FHCF', y: 100},
                                {x: 'Knockout', y: 33},
                                {x: 'Layer 1', y: 47},
                                {x: 'Layer 2', y: 54},
                                {x: 'Layer 3', y: 51},
                                {x: 'Layer 4', y: 42},
                                {x: 'Layer 5', y: 36},
                            ]
                    },
                    {
                        name: 'Knockout',
                        data: [


                            {x: 'UPC_FHCF', y: 26},
                            {x: 'ACIC_FHCF', y: 19},
                            {x: 'FS_FHCF', y: 33},
                            {x: 'Knockout', y: 100},
                            {x: 'Layer 1', y: 86},
                            {x: 'Layer 2', y: 66},
                            {x: 'Layer 3', y: 54},
                            {x: 'Layer 4', y: 47},
                            {x: 'Layer 5', y: 44},
                        ]
                    },
                    {
                        name: 'Layer 1',
                    data: [
                            {x: 'UPC_FHCF', y: 39},
                            {x: 'ACIC_FHCF', y: 29},
                            {x: 'FS_FHCF', y: 47},
                            {x: 'Knockout', y: 86},
                            {x: 'Layer 1', y: 100},
                            {x: 'Layer 2', y: 85},
                            {x: 'Layer 3', y: 71},
                            {x: 'Layer 4', y: 61},
                            {x: 'Layer 5', y: 57},
                        ]
                    },
                    {
                        name: 'Layer 2',

                    data: [
                            {x: 'UPC_FHCF', y: 48},
                            {x: 'ACIC_FHCF', y: 37},
                            {x: 'FS_FHCF', y: 54},
                            {x: 'Knockout', y:66 },
                            {x: 'Layer 1', y: 85},
                            {x: 'Layer 2', y: 100},
                            {x: 'Layer 3', y: 84},
                            {x: 'Layer 4', y: 72},
                            {x: 'Layer 5', y: 66},
                        ]
                    },
                    {
                        name: 'Layer 3',
                        data: [
                            {x: 'UPC_FHCF', y: 53},
                            {x: 'ACIC_FHCF', y: 43},
                            {x: 'FS_FHCF', y: 51 },
                            {x: 'Knockout', y: 54},
                            {x: 'Layer 1', y: 71},
                            {x: 'Layer 2', y: 84},
                            {x: 'Layer 3', y:100},
                            {x: 'Layer 4', y: 88},
                            {x: 'Layer 5', y: 81},
                        ]
                    },
                    {
                        name: 'Layer 4',
                        data: [

                            {x: 'UPC_FHCF', y: 72},
                            {x: 'ACIC_FHCF', y: 41},
                            {x: 'FS_FHCF', y:  42},
                            {x: 'Knockout', y: 47},
                            {x: 'Layer 1', y: 61},
                            {x: 'Layer 2', y: 72},
                            {x: 'Layer 3', y: 88},
                            {x: 'Layer 4', y:100},
                            {x: 'Layer 5', y: 93},
                        ]
                    },
                    {
                        name: 'Layer 5',
                        data: [
                            {x: 'UPC_FHCF', y: 36},
                            {x: 'ACIC_FHCF', y: 34},
                            {x: 'FS_FHCF', y: 36 },
                            {x: 'Knockout', y: 44},
                            {x: 'Layer 1', y: 57},
                            {x: 'Layer 2', y: 66},
                            {x: 'Layer 3', y: 81},
                            {x: 'Layer 4', y: 93},
                            {x: 'Layer 5', y:100},
                        ]
                    },
                ],
                heatmapOptions: {
                    plotOptions: {
                        heatmap: {
                            shadeIntensity: 0.5,

                            colorScale: {
                                ranges: [{
                                    from: 0,
                                    to: 25,
                                    name: 'low',
                                    color: '#00A100'
                                },
                                    {
                                        from: 26,
                                        to: 50,
                                        name: 'medium',
                                        color: '#128FD9'
                                    },
                                    {
                                        from: 51,
                                        to: 75,
                                        name: 'high',
                                        color: '#FFB200'
                                    },
                                    {
                                        from: 76,
                                        to: 100,
                                        name: 'extreme',
                                        color: '#FF0000'
                                    }
                                ]
                            }
                        }
                    },
                    chart: {
//                        height: 450,
                        type: 'heatmap',
                    },
                    dataLabels: {
                        enabled: false
                    },

                    series: this.data,
                    xaxis: {
                        type: 'category',
                        categories: [
                            'UPC_FHCF',
                            'ACIC_FHCF',
                            'FS_FHCF',
                            'Knockout',
                            'Layer 1',
                            'Layer 2',
                            'Layer 3',
                            'Layer 4',
                            'Layer 5',
                        ]
                    },
                    title: {
                        text: ''
                    },
                },
                options: {
                    onClick: function (evt, item) {
                        // var label = item[0]['_model'].label
                        // console.log(JSON.stringify(item[0]['_model'].label))
                        //console.log(label)
                    },
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: 'Underwriting Profit'
                    },
                },
                chartdata: {

                    labels: [this.getRandomInt(), this.getRandomInt()],

                    datasets:
                        [
                            {
                                label: 'Portfolio One',
                                backgroundColor: 'pink',
                                data: [this.getRandomInt(), this.getRandomInt()]
                            },
                            {
                                label: 'Portfolio Two',
                                backgroundColor: 'orange',
                                data: [this.getRandomInt(), this.getRandomInt()]
                            }]

                },
                scatterdata: {

                    labels: [this.getRandomInt(), this.getRandomInt()],

                    datasets:
                        [
                            {
                                label: 'Portfolio One',
                                backgroundColor: 'purple',
                                data: [
                                    {x: 13, y: 15},
                                    {x: 22, y: 27},
                                    {x: 33, y: 55},
                                    {x: 42, y: 33},
                                    {x: 53, y: 20},
                                    {x: 62, y: 49},
                                    {x: 73, y: 61},
                                    {x: 82, y: 89}
                                ]
                            },
                            {
                                label: 'Portfolio Two',
                                backgroundColor: 'cyan',
                                data: [
                                    {x: 13, y: 25},
                                    {x: 22, y: 87},
                                    {x: 33, y: 75},
                                    {x: 42, y: 93},
                                    {x: 53, y: 10},
                                    {x: 62, y: 29},
                                    {x: 73, y: 31},
                                    {x: 82, y: 59}
                                ]
                            }]

                }
            }
        },
    };
</script>

<style>

</style>


data.reverse()

var

colors.reverse()


