<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                <md-card>
                    <md-card-header data-background-color="green">
                        <h4 class="title">My Table </h4>
                        <p class="category">Preview of table contents here....</p>
                    </md-card-header>
                    <md-card-content>
                        <nav-tabs-table></nav-tabs-table>
                    </md-card-content>
                </md-card>
            </div>
        </div>
        <router-link tag="md-button" to="/ILS" class="back md-raised md-primary">
            <md-icon>reply</md-icon>Back to Data Import
        </router-link>
    </div>

</template>

<script>
    import {SimpleTable, OrderedTable, NavTabsTable} from "@/components";

    export default {
        props: ['item'],
        components: {
            OrderedTable,
            NavTabsTable,
            SimpleTable
        }
    };
</script>
