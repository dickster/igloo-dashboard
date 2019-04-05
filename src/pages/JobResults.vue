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
                    <md-card-expand>

                        <md-card-actions md-alignment="space-between">

                            <md-card-expand-trigger>
                                <md-button class="md-icon-button">
                                    <md-icon>keyboard_arrow_down</md-icon>
                                </md-button>
                            </md-card-expand-trigger>
                        </md-card-actions>
                        <md-card-expand-content>
                            <md-card-content>
                                <md-radio v-model="profit" :value="0">By LOB</md-radio>
                                <md-radio v-model="profit" :value="1">By Portfolio</md-radio>
                                <md-radio v-model="profit" :value="2">By Contract</md-radio>
                            </md-card-content>
                        </md-card-expand-content>
                    </md-card-expand>
                </md-card>
            </div>
            <div class="md-layout-item md-size-50">
                <md-card>
                    <md-card-header data-background-color="green">
                        <h4 class="title">Correlation Matrix</h4>

                    </md-card-header>
                    <md-card-content>
                        <div>
                            <apexchart width="500" type="heatmap" :options="heatmapOptions"
                                       :series="computedScatter"></apexchart>
                        </div>
                    </md-card-content>
                    <md-card-expand>

                        <md-card-actions md-alignment="space-between">

                            <md-card-expand-trigger>
                                <md-button class="md-icon-button">
                                    <md-icon>keyboard_arrow_down</md-icon>
                                </md-button>
                            </md-card-expand-trigger>
                        </md-card-actions>
                        <md-card-expand-content>
                            <md-card-content>
                                <div>Filter layers:</div>
                                <md-checkbox v-model="layer1">Layer 1</md-checkbox>
                                <md-checkbox v-model="upc">UPC_FHCF</md-checkbox>
                                <md-checkbox v-model="acic">ACIC_FHCF</md-checkbox>
                                <md-checkbox v-model="fs">FS_FHCF</md-checkbox>
                                <md-checkbox v-model="knockout">Knockout</md-checkbox>
                            </md-card-content>
                        </md-card-expand-content>
                    </md-card-expand>
                </md-card>
            </div>

            <div class="md-layout-item md-size-50">
                <md-card>
                    <md-card-header data-background-color="green">
                        <h4 class="title">Profit By Contract</h4>

                    </md-card-header>
                    <md-card-content>
                        <div>
                            <donut-chart ref="donut"
                                         :width="500"
                                         :options="donutOptions"
                                         :chartdata="donutData">

                            </donut-chart>
                        </div>
                    </md-card-content>
                    <md-card-expand>

                        <md-card-actions md-alignment="space-between">

                            <md-card-expand-trigger>
                                <md-button class="md-icon-button">
                                    <md-icon>keyboard_arrow_down</md-icon>
                                </md-button>
                            </md-card-expand-trigger>
                        </md-card-actions>
                        <md-card-expand-content>
                            <md-card-content >
                                <md-radio @change= "updatePortfolio" v-model="portfolio" :value="0">Average Losses</md-radio>
                                <md-radio @change= "updatePortfolio" v-model="portfolio" :value="1">Average Loss Ratio</md-radio>
                                <md-radio @change= "updatePortfolio" v-model="portfolio" :value="2">Prob of Profit</md-radio>
                            </md-card-content>
                        </md-card-expand-content>
                    </md-card-expand>
                </md-card>
            </div>

            <div v-if="showContracts" class="md-layout-item md-size-50">
                <md-card>
                    <md-card-header data-background-color="green">
                        <h4 class="title">Contract Chart here</h4>

                    </md-card-header>
                    <md-card-content>
                        <div>
<md-icon class="chart-icon">show_chart</md-icon>
                        </div>
                    </md-card-content>
                    <md-card-expand>

                        <md-card-actions md-alignment="space-between">

                            <md-card-expand-trigger>
                                <md-button class="md-icon-button">
                                    <md-icon>keyboard_arrow_down</md-icon>
                                </md-button>
                            </md-card-expand-trigger>
                        </md-card-actions>
                        <md-card-expand-content>
                            <md-card-content >
                                <md-field style="margin-top:-40px;">
                                    <label>NAV</label>
                                    <md-select  v-model="nav" md-dense>
                                        <md-option >Simulated Fund NAV</md-option>
                                        <md-option >Fund NAV Funnel</md-option>
                                        <md-option >Simulated Contract NAV</md-option>
                                        <md-option >Contract NAV Funnel</md-option>
                                    </md-select>
                                </md-field>
                            </md-card-content>
                        </md-card-expand-content>
                    </md-card-expand>
                </md-card>
            </div>
            <div v-if="showContracts" class="md-layout-item md-size-50">
                <md-card>
                    <md-card-header data-background-color="green">
                        <h4 class="title">Yet another contract Chart here</h4>

                    </md-card-header>
                    <md-card-content>
                        <div>
                            <md-icon class="chart-icon">pie_chart</md-icon>
                        </div>
                    </md-card-content>
                    <md-card-expand>

                        <md-card-actions md-alignment="space-between">

                            <md-card-expand-trigger>
                                <md-button class="md-icon-button">
                                    <md-icon>keyboard_arrow_down</md-icon>
                                </md-button>
                            </md-card-expand-trigger>
                        </md-card-actions>
                        <md-card-expand-content>
                            <md-card-content >
                                <md-checkbox>some chart option</md-checkbox>
                            </md-card-content>
                        </md-card-expand-content>
                    </md-card-expand>
                </md-card>
            </div>
            <div v-if="showFunds" class="md-layout-item md-size-50">
                <md-card>
                    <md-card-header data-background-color="green">
                        <h4 class="title">A Fund Related Chart</h4>

                    </md-card-header>
                    <md-card-content>
                        <div>
                            <md-icon class="chart-icon">bubble_chart</md-icon>
                        </div>
                    </md-card-content>
                    <md-card-expand>

                        <md-card-actions md-alignment="space-between">

                            <md-card-expand-trigger>
                                <md-button class="md-icon-button">
                                    <md-icon>keyboard_arrow_down</md-icon>
                                </md-button>
                            </md-card-expand-trigger>
                        </md-card-actions>
                        <md-card-expand-content>
                            <md-card-content >

                            </md-card-content>
                        </md-card-expand-content>
                    </md-card-expand>
                </md-card>
            </div>
            <div v-if="showFunds" class="md-layout-item md-size-50">
                <md-card>
                    <md-card-header data-background-color="green">
                        <h4 class="title">What? Another Fund Chart?</h4>

                    </md-card-header>
                    <md-card-content>
                        <div>
                            <md-icon class="chart-icon">bar_chart</md-icon>
                        </div>
                    </md-card-content>
                    <md-card-expand>

                        <md-card-actions md-alignment="space-between">

                            <md-card-expand-trigger>
                                <md-button class="md-icon-button">
                                    <md-icon>keyboard_arrow_down</md-icon>
                                </md-button>
                            </md-card-expand-trigger>
                        </md-card-actions>
                        <md-card-expand-content>
                            <md-card-content>

                            </md-card-content>
                        </md-card-expand-content>
                    </md-card-expand>
                </md-card>
            </div>

            <div class="md-layout-item md-size-100">
                <md-button @click="showContracts=!showContracts">Show charts relating to Contracts</md-button>
                <md-button @click="showFunds=!showFunds">Show charts relating to Funds</md-button>
                <md-button>(group charts into sections...etc...)</md-button>
            </div>

            <router-link tag="md-button" to="/jobruns" class="back md-raised md-primary">
                <md-icon>reply</md-icon>
                Back to Job Runs
            </router-link>

        </div>
        <div class="md-layout"></div>

    </div>
</template>

<script>
    import {
        BasicChart,
        DonutChart,
        BarChart,
        ScatterChart,
        SimpleTable,
        JobRunsTable,
        OrderedTable
    } from "@/components";
    import {ApexChart} from "apexcharts"

    export default {
        props: ['item'],
        components: {
            ApexChart,
            OrderedTable,
            BasicChart,
            DonutChart,
            BarChart,
            ScatterChart,
            SimpleTable,
            JobRunsTable
        },
        computed: {

            computedScatter() {
                return this.data.filter(x => !(
                    x.name == 'UPC_FHCF' && this.upc ||
                    x.name == 'Knockout' && this.knockout ||
                    x.name == 'FS_FHCF' && this.fs ||
                    x.name == 'ACIC_FHCF' && this.acic))
            },

        },
        methods: {
            updatePortfolio() {
                switch (this.portfolio) {
                    case 0:
                        this.donutOptions.title.text = 'Average Losses'
                        this.donutData.datasets[0].data = [
                            10179985,
                            6996990,
                            1044273,
                            16798282,
                            66301226,
                            48947406,
                            31884117,
                            18114784,
                            12829809,

                        ]
                        break
                    case 1:
                        this.donutOptions.title.text = 'Average Loss Ratio'
                        this.donutData.datasets[0].data = [
                            21544942,
                            14808444,
                            2210102,
                            16798282,
                            66301226,
                            48947406,
                            31884117,
                            18114784,
                            12829809,
                        ]
                        break
                    case 2:
                        this.donutOptions.title.text = 'Probability of Profit'
                        this. donutData.datasets[0].data = [
                            93,
                            96,
                            90,
                            39,
                            51,
                            77,
                            89,
                            94,
                            97,

                        ]
                        break
                }
                this.$refs.donut.renderChart(this.donutData, this.donutOptions)
            },

            getRandomInt() {
                return Math.floor(Math.random() * (50 - 5 + 1)) + 5
            }
        },
        data() {
            return {
                nav:'Simulated Fund NAV',
                showContracts:false,
                showFunds:false,
                donutData : {
                    labels: ['UPC_FHCF', 'ACIC_FHCF', 'FS_FHCF', 'Knockout', 'Layer 1', 'Layer 2', 'Layer 3', 'Layer 4', 'Layer 5'],
                    datasets: [
                        {
                            backgroundColor: ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'cyan', 'magenta', 'yellow'],
                            data: [33,
                                6996990,
                                1044273,
                                16798282,
                                66301226,
                                48947406,
                                31884117,
                                18114784,
                                12829809
                            ]
                        }
                    ]
                },
                portfolio: 0,
                donutOptions: {
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: {
                        animateRotate: false
                    },
                    title: {
                        display: true,
                        text: 'Underwriting Profit'
                    },
                },

                layer1: false,
                upc: false,
                profit: 1,
                acic: false,
                fs: false,
                knockout: false,

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
                            {x: 'Knockout', y: 66},
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
                            {x: 'FS_FHCF', y: 51},
                            {x: 'Knockout', y: 54},
                            {x: 'Layer 1', y: 71},
                            {x: 'Layer 2', y: 84},
                            {x: 'Layer 3', y: 100},
                            {x: 'Layer 4', y: 88},
                            {x: 'Layer 5', y: 81},
                        ]
                    },
                    {
                        name: 'Layer 4',
                        data: [

                            {x: 'UPC_FHCF', y: 72},
                            {x: 'ACIC_FHCF', y: 41},
                            {x: 'FS_FHCF', y: 42},
                            {x: 'Knockout', y: 47},
                            {x: 'Layer 1', y: 61},
                            {x: 'Layer 2', y: 72},
                            {x: 'Layer 3', y: 88},
                            {x: 'Layer 4', y: 100},
                            {x: 'Layer 5', y: 93},
                        ]
                    },
                    {
                        name: 'Layer 5',
                        data: [
                            {x: 'UPC_FHCF', y: 36},
                            {x: 'ACIC_FHCF', y: 34},
                            {x: 'FS_FHCF', y: 36},
                            {x: 'Knockout', y: 44},
                            {x: 'Layer 1', y: 57},
                            {x: 'Layer 2', y: 66},
                            {x: 'Layer 3', y: 81},
                            {x: 'Layer 4', y: 93},
                            {x: 'Layer 5', y: 100},
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
                    responsive: true,

                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: 'Underwriting Profit'
                    },
                },
                chartdata: {

                    labels: [
                        this.getRandomInt(),
                        this.getRandomInt(),
                        this.getRandomInt(),
                        this.getRandomInt(),
                        this.getRandomInt(),
                        this.getRandomInt(),
                        this.getRandomInt(),
                        this.getRandomInt(),
                        this.getRandomInt(),
                        this.getRandomInt(),
                        this.getRandomInt(),
                        this.getRandomInt(),
                        this.getRandomInt(),
                        this.getRandomInt(),
                        this.getRandomInt(),
                        this.getRandomInt(),
                        this.getRandomInt(),
                        this.getRandomInt(),
                        this.getRandomInt(),
                        this.getRandomInt()
                    ],

                    datasets:
                        [
                            {
                                label: 'Portfolio One',
                                backgroundColor: 'pink',
                                data: [
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt()
                                ]
                            },
                            {
                                label: 'Portfolio Two',
                                backgroundColor: 'orange',
                                data: [
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt(),
                                    this.getRandomInt()
                                ]
                            }
                        ]

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

<style >
.chart-icon {
    width:300px;
    height:190px;
    font-size:240px !important;
}
</style>




