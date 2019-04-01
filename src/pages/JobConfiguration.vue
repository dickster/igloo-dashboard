<template>
    <div class="content">
        <div class="md-layout">
            <div
                    class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
            >
                <md-card>
                    <md-card-header data-background-color="green">
                        <h4 class="title">{{item.name}}</h4>
                        <p class="category">{{item.description}}</p>
                    </md-card-header>
                    <md-card-content>
                        <form novalidate>


                            <div class="md-layout md-gutter">
                                <div class="md-layout-item md-size-100">
                                    <md-field>
                                        <label>Name</label>
                                        <md-input v-model="item.name"/>
                                    </md-field>
                                </div>
            <div class="md-layout-item md-size-100">
                                    <md-field>
                                        <label>Description</label>
                                        <md-input v-model="item.description"/>
                                    </md-field>
                                </div>

                                <div class="md-layout-item md-size-25">
                                    <md-field>
                                        <label>Model Version</label>
                                        <md-select>
                                            <md-option>2.0</md-option>
                                            <md-option>3.0</md-option>
                                            <md-option>3.1</md-option>
                                        </md-select>
                                    </md-field>
                                </div>
                            </div>

                            <div class="md-layout md-gutter">
                                <div class="md-layout-item md-size-25">
                                    <md-field>
                                        <label>Simulations</label>
                                        <md-input type="number" v-model="item.simulations"/>
                                    </md-field>
                                </div>


                            </div>

                            <div class="md-layout md-gutter row">

                                <label class="md-layout-item md-size-25">ILS Tables</label>
                                <router-link class="md-layout-item md-size-75" :to="tables(item)">
                                    35 Tables used (5 have errrors)
                                </router-link>

                            </div>
                            <div class="md-layout md-gutter row">


                                <label class="md-layout-item md-size-25">Risk Measures</label>
                                <router-link class="md-layout-item md-size-75" :to="riskMeasures(item)">
                                    North Atlantic Hurricane, Japanese Windstorm and 2 others
                                </router-link>
                            </div>
                            <div class="md-layout md-gutter row">

                                <label class="md-layout-item md-size-25">Contracts</label>
                                <router-link class="md-layout-item md-size-75" :to="contracts(item)">
                                    12 Contracts (1 excluded) used in 2 Portfolios
                                </router-link>
                            </div>
                            <div class="md-layout md-gutter row">
                                <label class="md-layout-item md-size-25">Historical Losses</label>
                                <router-link class="md-layout-item md-size-75" :to="losses(item)">
                                    Market Loss of 200M in 2 Programs
                                </router-link>

                            </div>

                            <md-card-actions>
                                <router-link tag="md-button" to="/configurations" class="back md-raised md-primary">
                                    <md-icon>reply</md-icon>Back to Job Configurations
                                </router-link>
                            </md-card-actions>


                        </form>
                    </md-card-content>
                </md-card>
            </div>

        </div>
    </div>

</template>

<script>


    export default {
        props: ['item'],
        data: () => ({
        }),
        methods: {

            contracts(item) {
                return {
                    name:'Contracts',
                    params:{item:item}
                }

            },
            losses(item) {
                return {
                    name:'Historical Losses',
                    params:{item:item}
                }

            },
            riskMeasures(item) {
                return {
                    name:'Risk Measures',
                    params:{item:item}
                }

            },
            tables(item) {
                return {
                    name:'ILS',
                    params:{item:item}
                }

            }
        },
        components: {}
    };
</script>

<style scoped>

    .md-layout-item.md-size-25 {
        min-width: 15% !important;
        flex: 0 1 15% !important;
    }

    form .md-layout.row {
        margin-bottom:24px;
    }
</style>
