<template>
    <div class="content">
        <div class="md-layout">
            <div
                    class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
            >
                <md-card>

                    <md-card-header data-background-color="green">

                        <md-toolbar data-background-color="green" style="color:white;box-shadow:none;">
                            <h3 class="md-title" style="flex: 1">Historical Losses</h3>
                        </md-toolbar>

                    </md-card-header>

                    <md-card-content>



                        <div class="md-content md-table md-theme-default" table-header-color="green">
                            <div class="md-toolbar md-table-toolbar md-transparent   md-theme-default md-elevation-0">
                            </div>

                            <div class="md-content md-table-content md-scrollbar md-theme-default">
                                <table>
                                    <thead>
                                    <tr><!---->
                                        <th class="md-table-head">
                                            <div class="md-table-head-container md-ripple md-disabled">
                                                <div class="md-table-head-label"><!---->

                                                    Loss IDs

                                                    <!----></div> <!----></div>
                                        </th>
                                        <th class="md-table-head">
                                            <div class="md-table-head-container md-ripple md-disabled">
                                                <div class="md-table-head-label"><!---->

                                                    Loss Peril

                                                    <!----></div> <!----></div>
                                        </th>
                                        <!--<th class="md-table-head">-->
                                            <!--<div class="md-table-head-container md-ripple md-disabled">-->
                                                <!--<div class="md-table-head-label">&lt;!&ndash;&ndash;&gt;-->

                                                    <!--Occurrence Date-->

                                                    <!--&lt;!&ndash;&ndash;&gt;</div> &lt;!&ndash;&ndash;&gt;</div>-->
                                        <!--</th>-->
                                        <!--<th class="md-table-head">-->
                                            <!--<div class="md-table-head-container md-ripple md-disabled">-->
                                                <!--<div class="md-table-head-label">&lt;!&ndash;&ndash;&gt;-->

                                                    <!--Reporting Date-->
                                                    <!--&lt;!&ndash;&ndash;&gt;</div> &lt;!&ndash;&ndash;&gt;</div>-->
                                        <!--</th>-->
                                        <th class="md-table-head">
                                            <div class="md-table-head-container md-ripple md-disabled">
                                                <div class="md-table-head-label"><!---->

                                                    Market Loss
                                                    <!----></div> <!----></div>
                                        </th>
                                        <th class="md-table-head">
                                            <div class="md-table-head-container md-ripple md-disabled">
                                                <div class="md-table-head-label"><!---->

                                                    Max Development Length
                                                    <!----></div> <!----></div>
                                        </th>
  <th class="md-table-head">
                                            <div class="md-table-head-container md-ripple md-disabled">
                                                <div class="md-table-head-label"><!---->

                                                    Programs
                                                    <!----></div> <!----></div>
                                        </th>


                                    </tr>

                                    </thead>
                                    <tbody>
                                    <tr class="md-table-row"><!---->
                                        <td class="md-table-cell">
                                            <div class="md-table-cell-container">
                                                1:Loss 1
                                            </div>
                                        </td>
                                        <td class="md-table-cell">
                                            <div class="md-table-cell-container">
                                                Japanese Windstorm
                                                <md-tooltip md-delay="400" md-direction="top">
                                                    <div>Date Occurrence : 1/1/2015</div><div>Loss Reporting Date : 1/3/2015</div>
                                                </md-tooltip>
                                            </div>
                                        </td>
                                        <!--<td class="md-table-cell">-->
                                            <!--<div class="md-table-cell-container">-->
                                                <!--<md-datepicker></md-datepicker>-->
                                            <!--</div>-->
                                        <!--</td>-->
                                        <!--<td class="md-table-cell">-->
                                            <!--<div class="md-table-cell-container">-->
                                                <!--<md-datepicker></md-datepicker>-->
                                            <!--</div>-->
                                        <!--</td>-->
                                        <td class="md-table-cell">
                                            <div class="md-table-cell-container">
                                                <md-field><md-input v-model="loss0" type="number"></md-input></md-field>
                                            </div>
                                        </td>
                                        <td class="md-table-cell">
                                            <div class="md-table-cell-container">
                                               <md-field> <md-input v-model="development0" type="number"></md-input></md-field>
                                            </div>
                                        </td>
                                        <td class="md-table-cell">
                                            <div class="md-table-cell-container">
                                                <md-field>
                                                <md-select  multiple v-model="items0">
                                                    <md-option value="A">Program A</md-option>
                                                    <md-option value="B">Program B</md-option>
                                                </md-select>
                                                </md-field>
                                            </div>
                                        </td>

                                    </tr>
                                    <tr class="md-table-row"><!---->
                                        <td class="md-table-cell">
                                            <div class="md-table-cell-container">
                                                2:Loss 2
                                            </div>
                                        </td>
                                        <td class="md-table-cell">
                                            <div class="md-table-cell-container">
                                                Japanese Windstorm
                                                <md-tooltip md-delay="400" md-direction="top">
                                                    <div>Date Occurrence : 1/1/2015</div>
                                                    <div>Loss Reporting Date : 1/3/2015</div>
                                                </md-tooltip>
                                            </div>
                                        </td>
                                        <!--<td class="md-table-cell">-->
                                            <!--<div class="md-table-cell-container">-->
                                                <!--<md-datepicker></md-datepicker>-->
                                            <!--</div>-->
                                        <!--</td>-->
                                        <!--<td class="md-table-cell">-->
                                            <!--<div class="md-table-cell-container">-->
                                                <!--<md-datepicker></md-datepicker>-->
                                            <!--</div>-->
                                        <!--</td>-->
                                        <td class="md-table-cell">
                                            <div class="md-table-cell-container">
                                                <md-field><md-input v-model="loss1" type="number"></md-input></md-field>
                                            </div>
                                        </td>
                                        <td class="md-table-cell">
                                            <div class="md-table-cell-container">
                                               <md-field> <md-input v-model="development1" type="number"></md-input></md-field>
                                            </div>
                                        </td>
                                        <td class="md-table-cell">
                                            <div class="md-table-cell-container">
                                                <md-field>
                                                <md-select  multiple v-model="items1">
                                                    <md-option value="A">Program A</md-option>
                                                    <md-option value="B">Program B</md-option>
                                                </md-select>
                                                </md-field>
                                            </div>
                                        </td>

                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>


                    </md-card-content>
                    <md-card-actions>
                        <router-link tag="md-button" to="/configurations" class="back md-raised md-primary">
                            <md-icon>reply</md-icon>Back to Job Configurations
                        </router-link>
                    </md-card-actions>
                </md-card>
            </div>

            <div
                    class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
            >

            </div>
        </div>
    </div>
</template>

<script>
    import {SimpleTable, JobRunsTable, OrderedTable} from "@/components";

    export default {
        data() {
            return {
                options:[
                    { id: 1, name: 'Program A' },
                    { id: 2, name: 'Program B' },
                   ],
                items0:['A', 'B'],
                items1:['B'],
                loss0: 100000,
                loss1: 250000,
                development0: 12,
                development1: 24,
            }
        },
        methods: {
            list() {
                this.listMode = true;
            },
            program() {
                this.listMode = false;
            }
        },
        components: {
            OrderedTable,
            SimpleTable,
            JobRunsTable
        }
    };
</script>

<style>
    .md-card.md-theme-default .md-card-header .md-toolbar > button.md-button {
        color: white !important;
        font-size: 10px;

    }

    .category .md-icon.md-icon-font.md-theme-default {
        font-size: 16px !important;
        color: white;
        margin-top: -14px;
        margin-left: -2px;
    }
</style>
