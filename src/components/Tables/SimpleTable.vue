<template>
    <div>

        <md-table v-model="users" :table-header-color="tableHeaderColor">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Source">
                    <router-link :to="preview(item)">{{ item.source}}</router-link>
                </md-table-cell>
                <md-table-cell md-label="">

                    <md-icon class="rotating" v-if="item.status=='loading'">
                        <md-tooltip md-direction="right">Data is being imported...</md-tooltip>
                        data_usage
                    </md-icon>
                    <md-icon v-if="item.status=='ok'">thumb_up</md-icon>
                    <md-icon style="color:#c93e34" v-if="item.status.indexOf('error')>=0"><md-tooltip md-direction="right">{{item.status}}</md-tooltip>warning</md-icon>

                </md-table-cell>
                <md-table-cell md-label="Type">{{ item.type }}</md-table-cell>
                <md-table-cell md-label="Rows">{{ item.rows }}</md-table-cell>
                <md-table-cell md-label="">
                    <md-button v-if="item.dirty" class="md-icon-button" @click="doImport(item)">
                        <md-tooltip md-direction="right">
                            <div>Data has changed since last</div>
                            <div>import. You will need to refresh</div>
                            <div>to use new values etc....</div>
                        </md-tooltip>
                        <md-icon>refresh</md-icon>
                    </md-button>
                </md-table-cell>
            </md-table-row>
        </md-table>



        <md-speed-dial md-direction="top" class="md-bottom-right md-accent">
            <md-speed-dial-target>
                <md-tooltip md-direction="left">Add a new data source</md-tooltip>
                <md-icon>add</md-icon>
            </md-speed-dial-target>

            <md-speed-dial-content>
                <md-button id="#custom" @click="showDialog=true" class="md-raised md-primary md-icon-button">
                    <md-tooltip md-direction="left">Add CAT</md-tooltip>
                    <md-icon class="speed-cat">pie_chart</md-icon>
                </md-button>

                <md-button @click="showDialog=true" tag="md-button" class="md-raised md-primary md-icon-button">
                    <md-tooltip md-direction="left">Add Excel</md-tooltip>
                    <md-icon class="speed-excel">insert_drive_file</md-icon>
                </md-button>

                <md-button @click="showDialog=true" tag="md-button" class="md-raised md-primary md-icon-button">
                    <md-tooltip md-direction="left">Add Database</md-tooltip>
                    <md-icon class="speed-db">view_day</md-icon>
                </md-button>
            </md-speed-dial-content>
        </md-speed-dial>

        <md-dialog :md-active.sync="showDialog" md-open-from="#custom" md-close-to="#custom" ref="dialog1">
            <md-dialog-title>Add Data Source...</md-dialog-title>

            <md-tabs :md-active-tab="tab" md-dynamic-height>
                <md-tab md-label="Database">
                    <form novalidate>

                        <div class="md-layout md-gutter">

                            <div class="md-layout-item md-size-50">
                                <md-field>
                                    <label>URL</label>
                                    <md-input v-model="url"></md-input>
                                </md-field>
                            </div>
                            <div class="md-layout-item md-size-50">
                                <md-field>
                                    <label>Password</label>
                                    <md-input ></md-input>
                                </md-field>
                            </div>
                        </div>
                            <div class="md-layout-item md-size-100">
                            blah blah blah...put DB configuration here.  (Test Connection?)
                            </div>


                    </form>
                </md-tab>

                <md-tab :md-active="tab==1"  md-label="CAT">
                    <form novalidate>


                        <div class="md-layout md-gutter">

                            <div class="md-layout-item md-size-50">
                                <md-field>
                                    <label>URL</label>
                                    <md-input v-model="cat"></md-input>
                                </md-field>
                            </div>
                            <div class="md-layout-item md-size-50">
                                <md-field>
                                    <label>Other Stuff...</label>
                                    <md-input></md-input>
                                </md-field>
                            </div>
                        </div>

                    </form>
                </md-tab>

                <md-tab :md-active="tab==2"  md-label="Excel">
                    <div class="md-layout md-gutter">

                        <div class="md-layout-item md-size-50">
                            <md-field>
                                <label>Excel File</label>
                                <md-file v-model="file" />
                            </md-field>
                        </div>

                        <div class="md-layout-item md-size-50">
                            <p>The excel file must follow ILS database schema.</p>
                            <i>ed note:app should validate when importing?</i>
                        </div>

                    </div>
                </md-tab>
            </md-tabs>
            <md-dialog-actions>
                <md-button class=" " @click="showDialog=false">Cancel</md-button>
                <md-button class="md-raised" @click="addItem">Ok</md-button>
            </md-dialog-actions>

        </md-dialog>


        <md-snackbar :md-duration="3000" :md-active.sync="showSnackbar" md-persistent>
            <span>Importing data from {{newDataDetails()}}</span>
            <md-button class="md-primary" @click="showSnackbar = false">Retry</md-button>
        </md-snackbar>

    </div>


</template>

<script>
    export default {
        name: "simple-table",
        props: {
            tableHeaderColor: {
                type: String,
                default: ""
            }
        },
        methods: {
            addItem() {
                this.showDialog=false
              this.users.push({
                    source: this.cat?this.cat:
                        this.url?this.url:
                            JSON.stringify(this.file),
                    type: this.url?'DB':this.cat?'CAT':'Excel',
                    status:'loading',
                    rows: Math.floor(Math.random()*10000),
              })
                this.url = this.cat = this.file = null
                this.showSnackbar = true
                setTimeout(()=>this.users[this.users.length-1].status = 'ok',8000)
            },
            iconFor(item) {
                switch (item.status) {
                    case 'ok':
                        return 'thumbs_up'
                    default:
                        return 'warning'
                }
            },
            doImport(item) {
                item.dirty = false
                this.loading = true
                setTimeout(x => this.loading = false, 1200)

            },
            preview(item) {
                return {
                    name: 'Table Preview',
                    params: {item: item}
                }
            },
            edit(item) {
                return {
                    name: 'Table Preview',
                    params: {item: item}
                }
            },
            excel(item) {
                return {
                    name: 'Table Preview',
                    params: {item: item}
                }
            },
            db(item) {
                return {
                    name: 'Table Preview',
                    params: {item: item}
                }

            },
            cat(item) {
                return {
                    name: 'Table Preview',
                    params: {item: item}
                }

            },
            newDataDetails() {
                return this.users[this.users.length-1].source
            }
        },
        data() {
            return {
                showSnackbar:false,
                tab: 1,
                cat:null,
                url:null,
                file:null,
                showDialog: false,
                loading: false,
                selected: [],
                users: [
                    {
                        source: "BobsData",
                        type: "Excel",
                        status:'ok',
                        rows: "12,564",
                    },
                    {
                        source: "Peril2018",
                        dirty: true,
                        status:'4 errors',
                        type: "Excel",
                        rows: "196564",
                    },
                    {
                        source: "/stats/info: xyz-2017",
                        status:'ok',
                        type: "DB",
                        rows: "2,934,237",
                    },
                    {
                        source: "newCAT",
                        status:'ok',
                        type: "CAT",
                        rows: "149,654",
                    }
                ]
            };
        }
    };
</script>


<style>
    .md-dialog-container .md-tabs-navigation {
        box-shadow:none;
    }

    .md-dialog-container {
        padding:15px;
    }

    .md-dialog-title {
        margin-bottom:50px !important;
    }

    .md-dialog-actions button {
        /*background:blue;*/
    }

    .md-dialog-actions button.md-button.md-raised.md-theme-default {
        background: #c6c3c7;
    }

    @keyframes rotating
    {
        from
        {
            transform: rotate(0deg);
            -o-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
        }
        to
        {
            transform: rotate(360deg);
            -o-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes rotating
    {
        from
        {
            transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
        }
        to
        {
            transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
        }
    }
    .rotating
    {
        -webkit-animation: rotating 1s linear infinite;
        -moz-animation: rotating 1s linear infinite;
        -ms-animation: rotating 1s linear infinite;
        -o-animation: rotating 1s linear infinite;
        animation: rotating 1s linear infinite;
    }


    .md-table td.md-table-cell:nth-child(1) {
        width:250px;
    }

    .md-table td.md-table-cell:nth-child(2) {
        width:70px;
    }
   .md-table td.md-table-cell:nth-child(3) {
        width:170px;
    }

</style>
