<template>
    <div class="content">
        <div class="md-layout">
            <div @click="runs"

                    class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50 "
            >
                <chart-card
                        :chart-data="dailySalesChart.data"
                        :chart-options="dailySalesChart.options"
                        :chart-type="'Line'"
                        data-background-color="blue"
                >
                    <template slot="content">
                        <h4 class="title">Jobs Completed</h4>
                        <p class="category">
              <span class="text-success"
              >7 completed today (3 with errors)
              </span>

                        </p>
                    </template>

                    <template slot="footer">
                        <div class="stats">
                            <md-icon>access_time</md-icon>
                            updated 4 minutes ago
                        </div>
                    </template>
                </chart-card>
            </div>
            <div @click="lastrun"
                    class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
            >
                <chart-card
                        :chart-data="emailsSubscriptionChart.data"
                        :chart-options="emailsSubscriptionChart.options"
                        :chart-responsive-options="emailsSubscriptionChart.responsiveOptions"
                        :chart-type="'Bar'"
                        data-background-color="purple"
                >
                    <template slot="content">
                        <h4 class="title">Last Successful Job</h4>
                        <p class="category">
                            TestNoContractC : Underwriting Profit
                        </p>
                    </template>

                    <template slot="footer">
                        <div class="stats">
                            <md-icon>access_time</md-icon>
                            completed an hour ago.
                        </div>
                    </template>
                </chart-card>
            </div>
            <div
                    class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33"
            >
                <stats-card data-background-color="green">
                    <template slot="header">
                        <md-icon>store</md-icon>
                    </template>

                    <template slot="content">
                        <p class="category">Agents Running</p>
                        <h3 class="title">8/20<i style="font-size:20px;" class="fas fa-long-arrow-alt-up"></i></h3>
                    </template>

                    <template slot="footer">
                        <div class="stats">
                            <md-icon>date_range</md-icon>
                            12 available
                        </div>
                    </template>
                </stats-card>
            </div>
            <div
                    class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33"
            >
                <stats-card data-background-color="orange">
                    <template slot="header">
                        <md-icon>content_copy</md-icon>
                    </template>

                    <template slot="content">
                        <p class="category">Jobs in Queue</p>
                        <h3 class="title">
                            14
                        </h3>
                    </template>

                    <template slot="footer">
                        <div class="stats">
                            currently running Job ABC
                        </div>
                    </template>
                </stats-card>
            </div>
            <div
                    class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-33"
            >
                <stats-card data-background-color="red">
                    <template slot="header">
                        <md-icon>info_outline</md-icon>
                    </template>

                    <template slot="content">
                        <p class="category">Last Run</p>
                        <h3 class="title">4 errors</h3>
                    </template>

                    <template slot="footer">
                        <div class="stats">
                            <md-icon>local_offer</md-icon>
                            Job ABC (2 hours ago)
                        </div>
                    </template>
                </stats-card>
            </div>


            <md-button class="run-now md-fab" @click="config">
                    <md-tooltip md-direction="right">Schedule Run...</md-tooltip>
                    <md-icon class="">directions_run</md-icon>
            </md-button>

        </div>
    </div>
</template>

<script>
    import {
        StatsCard,
        ChartCard,
        NavTabsCard,
        NavTabsTable,
        OrderedTable
    } from "@/components";

    export default {
        components: {
            StatsCard,
            ChartCard,
            NavTabsCard,
            NavTabsTable,
            OrderedTable
        },
        methods: {
            config() {
                let item = {
                        name: "Current Configuration",
                        model: "1.0",
                        author: "John Doe",
                        simulations: 1000,
                        modified: "",
                        description: ""
                    }
                this.$router.push(
                    {
                        name: 'Data Import',
                        params: {item: item}
                    }
                )
            },
            runs() {
                this.$router.push('/jobruns')
            },
            lastrun() {
                let item = {
                    date: "March 27,2019  9:13",
                    config: "TestNoContractC",
                    status: "running",
                    archived: false,
                    version: "2.1"
                }
                this.$router.push(
                    {
                        name: 'Job Results',
                        params: {item: item}
                    }
                )
            }
        },
        data() {
            return {
                dailySalesChart: {
                    data: {
                        labels: ["M", "T", "W", "T", "F", "S", "S"],
                        series: [
                            [12, 17, 7, 17, 23, 5, 0],
                            [2, 7, 3, 11, 3, 4, 0]
                        ]
                    },
                    options: {
                        lineSmooth: this.$Chartist.Interpolation.cardinal({
                            tension: 0
                        }),
                        low: 0,
                        high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                        chartPadding: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }
                    }
                },

                emailsSubscriptionChart: {
                    data: {
                        labels: [
                            "0",
                            "10",
                            "20",
                            "30",
                            "40",
                            "50",
                            "60",
                            "70",
                            "80",
                            "90",
                            "100",
                        ],
                        series: [[336,
                            335,
                            314,
                            293,
                            51,
                            19,
                            1,
                            1,
                            1,
                            1,
                        ]]
                    },
                    options: {
                        axisX: {
                            showGrid: false
                        },
                        low: 0,
                        high: 500,
                        chartPadding: {
                            top: 0,
                            right: 5,
                            bottom: 0,
                            left: 0
                        }
                    },
                    responsiveOptions: [
                        [
                            "screen and (max-width: 640px)",
                            {
                                seriesBarDistance: 5,
                                axisX: {
                                    labelInterpolationFnc: function (value) {
                                        return value[0];
                                    }
                                }
                            }
                        ]
                    ]
                }
            };
        }
    };
</script>


<style scoped>
    .md-card-actions i.md-icon.md-theme-default.md-icon-font {
        color: #828282 !important;
    }

    .run-now {
        margin-top:50px;
        height:75px;
        width:75px;
        background: #d9d9dd !important;
    }
    .run-now i {
        font-size:40px !important;
        /*color: #6792ff !important;*/
    }
    </style>
<style>
    .card-chart {
        cursor:pointer;
        filter:saturate(.8)
    }
    .card-chart:hover {
        filter:saturate(1)
    }
</style>
