<template>
    <div>
        <md-table v-model="users" :table-header-color="tableHeaderColor">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Name">
                    <router-link :to="getTableRoute(item)">{{ item.name }}</router-link>
                </md-table-cell>
                <md-table-cell md-label="Type">{{ item.type }}</md-table-cell>
                <md-table-cell md-label="Rows">{{ item.rows }}</md-table-cell>
                <md-table-cell md-label="Usage"><a>used in {{ item.usage }} configurations</a></md-table-cell>
                <md-table-cell md-label="Status">{{ item.status }}</md-table-cell>
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
            getTableRoute(item) {
                return {
                    name:'Table Preview',
                    params:{item:item}
                }
            }
        },
        data() {
            return {
                selected: [],
                users: [
                    {
                        name: "CAT",
                        rows: "12,564",
                        status: "importing...",
                        type: "CAT",
                        usage: 14
                    },
                    {
                        name: "Data A",
                        rows: "5,384",
                        status: "ok",
                        type: "DB",
                        usage: 8
                    },
                    {
                        name: "Table XYZ",
                        rows: "987,564",
                        status: "33 errors",
                        type: "Excel",
                        usage: 19
                    },
                    {
                        name: "More Data",
                        rows: "195,564",
                        status: "ok",
                        type: "DB",
                        usage: 14
                    },
                    {
                        name: "Doris Greene",
                        status: "ok",
                        usage: 1,
                        rows: "1,289,486",
                        type: "DB",
                    }
                ]
            };
        }
    };
</script>
