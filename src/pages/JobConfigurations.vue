<template>
    <div class="content">
        <div class="md-layout">

            <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                <md-card>
                    <md-card-header data-background-color="green">
                        <h4 class="title">Saved Data Import Settings</h4>
                    </md-card-header>
                    <md-card-content>
                        <job-configs-table :configs="configs"></job-configs-table>
                    </md-card-content>
                </md-card>
            </div>

            <!--<md-button @click="addConfiguration" class="md-fab md-primary md-fab-bottom-left">-->
                <!--<md-icon>add</md-icon>-->
            <!--</md-button>-->
        </div>
    </div>

</template>

<script>
    import JobConfigsTable from "../components/Tables/JobConfigurationsTable";

    export default {
        components: {JobConfigsTable},
        methods: {
            addConfiguration() {
                this.configs.push({
                        name: "NewConfig",
                        model: "1.0",
                        simulations: 1000,
                        author: "me",
                        modified: "now",
                        description: ""
                    },
                )
            }
        },
        data() {
            return {
                configs: [
                    {
                        name: "Prod_Jan",
                        model: "1.0",
                        author: "John Doe",
                        simulations: 1000,
                        modified: "2 days ago",
                        description: "final release 2019"
                    },
                    {
                        name: "Test_Jan",
                        model: "1.0",
                        simulations: 1000,
                        author: "John Doe",
                        modified: "9 days ago",
                        description: "test simulations"
                    },
                    {
                        name: "OlderModelTest",
                        model: "0.9",
                        simulations: 500,
                        author: "Sally Smith",
                        modified: "2 months ago",
                        description: "compare results with older model"
                    },
                ]
            }
        }


    };
</script>
