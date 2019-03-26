<template>
    <div>
        <md-table v-model="filteredUsers" :table-header-color="tableHeaderColor">

            <md-table-toolbar class=" ">
                <div class="md-toolbar-row">
                    <div class="md-toolbar-section-start">
                        <h4 class="md-66">5 total (1 running, 1 fail)</h4></div>

                    <div class="md-toolbar-section-end">

                        <!--<md-button v-model="filter" class="md-icon-button">-->
                        <!--<md-icon>filter_list</md-icon>-->
                        <!--</md-button>-->


                        <drop-down>
                            <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="material-icons">filter_list</i>
                                <!--<span class="notification">5</span>-->
                                <!--<p class="hidden-lg hidden-md">Notifications</p>-->
                            </a>
                            <ul class="dropdown-menu dropdown-menu-right">
                                <li>
                                    <md-checkbox v-model="failed">Failed</md-checkbox>
                                </li>
                                <li>
                                    <md-checkbox v-model="running">Running</md-checkbox>
                                </li>
                                <li>
                                    <md-checkbox v-model="success">Success</md-checkbox>
                                </li>
                                <li>
                                    <md-checkbox v-model="archived">archived</md-checkbox>
                                </li>
                            </ul>
                        </drop-down>

                        <!--<md-switch v-model="filter" class="md-primary">Hide Incomplete Jobs</md-switch>-->
                    </div>
                </div>

            </md-table-toolbar>
            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Date">
                    <router-link :to="getRoute(item)">
                        <a>{{ item.date }}</a>
                    </router-link>
                </md-table-cell>
                <md-table-cell md-label="Archived">
                    <md-switch v-model="item.archived" class="md-primary md-small"></md-switch>
                    <md-icon v-if="item.archived" style="margin-top: -12px;">archive</md-icon>
                </md-table-cell>
                <md-table-cell md-label="Config">{{ item.config }}</md-table-cell>
                <md-table-cell md-label="Status">{{ item.status }}</md-table-cell>
                <md-table-cell md-label="Model Version">{{item.version}}</md-table-cell>
            </md-table-row>
        </md-table>

    </div>
</template>

<script>

    export default {
        name: "job-runs-table",
        components: {},
        props: {
            tableHeaderColor: {
                type: String,
                default: ""
            }
        },
        methods: {
            getRoute(item) {
                return {name:'Job Results', params: {item}}
            }
        },
        computed: {
            filteredUsers() {
                let that = this
                return this.users.filter(function (x) {
                    if (that.archived && !x.archived) return false
                    switch (x.status) {
                        case 'success':
                            return that.success
                        case 'fail':
                            return that.failed
                        case 'running':
                            return that.running

                    }
                })
            }
        },
        data() {
            return {
                failed: true,
                archived: false,
                running: true,
                success: true,
                filter: true,
                search: "",
                selected: [],
                users: [
                    {
                        date: "March 27,2019  9:13",
                        config: "TestNoContractC",
                        status: "running",
                        archived: false,
                        version: "2.1"
                    },
                    {
                        date: "June 9,2019  12:53",
                        config: "NoWindstorm",
                        archived: false,
                        status: "success",
                        version: "2.1"
                    },
                    {
                        date: "August 17,2018  11:35",
                        config: "MilestoneA",
                        archived: false,
                        status: "fail",
                        version: "2.01"
                    },
                    {
                        date: "Dec 4,2018  10:03",
                        config: "TestSimulations500",
                        archived: true,
                        status: "success",
                        version: "2.31"
                    },
                    {
                        date: "April 27,2019  9:53",
                        config: "ProdJan",
                        status: "success",
                        archived: false,
                        version: "2.0"
                    }
                ]
            };
        }
    };
</script>

<style>
    .md-table-cell .md-switch.md-theme-default.md-checked.md-primary .md-switch-thumb {
        background-color: #ab6cd2 !important;
    }

    .md-table-head-container.md-ripple.md-disabled {
        z-index: 0;
    }

    .md-table-cell a:hover {
        text-decoration: underline !important;
        cursor: pointer;
    }

    .dropdown-menu.dropdown-menu-right {
        padding-left: 5px;
    }

    .md-table {
        min-height: 300px;
    }


</style>
