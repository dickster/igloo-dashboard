<template>
    <div>
        <md-table v-model="configs" table-header-color="green">

            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Date">
                    <router-link :to="getRoute(item)">
                        <a>{{item.name}}</a>
                    </router-link>
                </md-table-cell>
                <md-table-cell md-label="Model">
                    {{item.model}}
                </md-table-cell>
                <md-table-cell md-label="Author">{{ item.author}}</md-table-cell>
                <md-table-cell md-label="Last Modified">{{ item.modified }}</md-table-cell>
                <md-table-cell md-label="Description">{{item.description}}</md-table-cell>
                <md-table-cell md-label="Action             .">
                    <md-menu md-direction="bottom-end" md-size="small"  :md-offset-x="-135" :md-offset-y="-42" >
                        <md-button class="md-icon-button" md-menu-trigger>
                            <md-icon>menu</md-icon>
                        </md-button>


                        <md-menu-content>
                            <md-menu-item>
                                <router-link :to="run(item)">
                                    <md-icon>directions_run</md-icon>
                                    Run
                                </router-link>
                            </md-menu-item>

                            <md-menu-item>
                                <router-link :to="copy(item)">
                                    <md-icon>file_copy</md-icon>
                                    Make a copy
                                </router-link>
                            </md-menu-item>

                            <md-menu-item>
                                <router-link :to="run(item)">
                                    <md-icon>edit</md-icon>
                                    Edit
                                </router-link>
                            </md-menu-item>
                        </md-menu-content>
                    </md-menu>
                </md-table-cell>
            </md-table-row>
        </md-table>


    </div>



</template>

<script>

    export default {
        name: "job-configs-table",
        components: {},
        props: ['configs'],
        methods: {
            copy(item) {
                return {name: 'Data Import', params: {item}}
            },
            run(item) {
                return {name: 'Job Runs', params: {item}}
            },
            save(item) {
                return {name: 'Data Import', params: {item}}
            },
            edit(item) {
                return {name: 'Data Import', params: {item}}
            },
            getRoute(item) {
                return {name: 'Data Import', params: {item}}
            }
        },
        computed: {},
        data() {
            return {
                selected: [],

            };
        }
    };
</script>

<style>

    button.md-button.md-fab {
        background: #29a2e4 !important;
    }

    .md-speed-dial-content > button:nth-child(1) {
        background: #f0b330 !important;
    }

    .md-speed-dial-content > button:nth-child(2) {
        background: #f08348 !important;
    }

    .md-speed-dial-content > button:nth-child(3) {
        background: #eb4642 !important;
    }

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

    /*.md-table {*/
        /*min-height: 350px;*/
    /*}*/

    .md-menu-item a {
        display:inline-block;
        text-transform: none !important;
    }

</style>
