<template>
    <div>
        <md-table v-model="users" :table-header-color="tableHeaderColor">
            <md-table-row slot="md-table-row" slot-scope="{ item }">

                <md-table-cell md-label="Name">
                    <router-link :to="edit(item)">{{ item.name }}</router-link>
                </md-table-cell>
                <md-table-cell md-label="">
                    <md-menu md-direction="bottom-end" md-size="small"  :md-offset-x="119" :md-offset-y="-42" >
                        <md-button class="md-icon-button" md-menu-trigger>
                            <md-icon>save_alt</md-icon>
                        </md-button>


                        <md-menu-content>
                            <md-menu-item>
                                <router-link :to="cat(item)">Import from CAT db</router-link>
                            </md-menu-item>
                            <md-menu-item>
                                <router-link :to="excel(item)">Import from Excel file</router-link>
                            </md-menu-item>
                            <md-menu-item >
                                <router-link :to="db(item)">Import from Database</router-link>
                            </md-menu-item>
                        </md-menu-content>
                    </md-menu>

                </md-table-cell>
                <md-table-cell md-label="Type">{{ item.description }}</md-table-cell>
                <md-table-cell md-label="Source">{{ item.type}}</md-table-cell>
                <md-table-cell md-label="Imported">{{ item.imported}}</md-table-cell>
                <md-table-cell md-label="Rows">{{ item.rows }}</md-table-cell>
                <md-table-cell md-label="Status">{{ item.status }}</md-table-cell>
                <md-table-cell md-label="Used By">{{ item.usedBy }}</md-table-cell>
            </md-table-row>
        </md-table>
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
            edit(item) {
                return {
                    name:'Table Preview',
                    params:{item:item}
                }
            },
            excel(item) {
                return {
                    name:'Table Preview',
                    params:{item:item}
                }
            },
            db(item) {
                return {
                    name:'Table Preview',
                    params:{item:item}
                }

            },
            cat(item) {
                return {
                    name:'Table Preview',
                    params:{item:item}
                }

            },
        },
        data() {
            return {
                selected: [],
                users: [
                    {
                        name: "ILS_Table1",
                        description: "blah blah blah ",
                        type: "CAT",
                        source:"table:foo",
                        imported:"by @JohnSmith 2 months ago",
                        rows: "12,564",
                        status: "importing...",
                        usedBy: "18 contracts/4 modules/1 portfolio"
                    },
                    {
                        name: "ILS_Table2",
                        description: "yadda yadda yadda ",
                        type: "Excel/CSV",
                        source:"local file:TomsData",
                        imported:"by @SallyJones last year",
                        rows: "992,639",
                        status: "9 errors",
                        usedBy: "18 contracts/4 modules/1 portfolio"
                    },
                    {
                        name: "ILS_Table4",
                        description: "...",
                        source:"wtwdata/SallyData:MyTable",
                        type: "DB",
                        imported:"by @TonyGronkowski 3 weeks ago",
                        rows: "1,862,954",
                        status: "ok",
                        usedBy: "19 contracts..."
                    },
                    {
                        name: "ILS_Table5",
                        description: "",
                        imported:"",
                        type: "(not imported)",
                        rows: "",
                        status: "",
                        usedBy: ""
                    },
                ]
            };
        }
    };
</script>
