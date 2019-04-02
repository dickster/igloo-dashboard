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

                                <div class="md-layout-item md-size-25">
                                    <md-field>
                                        <label>Model Version</label>
                                        <md-select v-model="item.model">
                                            <md-option value="0.9">0.9</md-option>
                                            <md-option value="1.0">1.0</md-option>
                                            <md-option value="2.0">2.0</md-option>
                                        </md-select>
                                    </md-field>
                                </div>
                                <div class="md-layout-item md-size-25">
                                    <md-field>
                                        <label>Simulations</label>
                                        <md-input type="number" v-model="item.simulations"/>
                                    </md-field>
                                </div>
                            </div>


                            <div class="md-layout md-gutter row">

                                <label class="md-layout-item md-size-25">Data Import</label>
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

                            <div class="md-layout md-gutter row">
                                <div class="md-layout-item md-size-33" style="min-height:95px;">
                                <md-checkbox v-model="save" >Save these data import settings so it can be
                                    re-run later
                                </md-checkbox>
                                </div>

                                <div class="md-layout-item md-size-50">
                                <md-field v-if="save">
                                    <label>Name</label>
                                    <md-input v-model="item.name"/>
                                </md-field>
                                </div>
                            </div>

                            <div class="md-layout md-gutter row">

                            </div>

                            <md-button class="run-now md-fab" click="runNow">
                                <md-tooltip md-direction="right">Run now..</md-tooltip>
                                <md-icon class="">play_arrow</md-icon>
                            </md-button>


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
            save: false
        }),
        methods: {

            runNow() {
                this.$router.push('/jobruns')
            },
            contracts(item) {
                return {
                    name: 'Contracts',
                    params: {item: item}
                }

            },
            losses(item) {
                return {
                    name: 'Historical Losses',
                    params: {item: item}
                }

            },
            riskMeasures(item) {
                return {
                    name: 'Risk Measures',
                    params: {item: item}
                }
            },
            tables(item) {
                return {
                    name: 'ILS',
                    params: {item: item}
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

    label.md-size-25 {
        font-size:22px;
    }

    form .md-layout.row {
        margin-bottom: 24px;
    }
</style>
