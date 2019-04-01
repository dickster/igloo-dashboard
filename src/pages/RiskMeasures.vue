<template>
    <div class="content">
        <div class="md-layout">
            <div
                    class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
            >
                <md-card>

                    <md-card-header data-background-color="green">

                            <md-toolbar data-background-color="green"  style="color:white;box-shadow:none;">
                                <h3 class="md-title" style="flex: 1">Risk Measures</h3>

                                    <md-button :style="!listMode?'background:#007500':''" class="md-button" @click="program">
                                        <md-icon style="color:white;" >import_contacts</md-icon>
                                        By Program
                                    </md-button>

                                    <md-button  :style="listMode?'background:#007500;':''" class="md-button" @click="list">
                                        <md-icon style="color:white;">view_headline</md-icon>
                                        List
                                    </md-button>

                            </md-toolbar>
                        <!--<p class="category">change modes to view Risks by Program</p>-->
                    </md-card-header>
                    <!--<md-card-header data-background-color="green">-->
                        <!--<h4 class="title">Risk Measures </h4>-->
                        <!--<p class="category">change modes to view Risks by Program-->

                        <!--</p>-->
                    <!--</md-card-header>-->
                    <md-card-content>



                        <div v-if="listMode" class="md-content md-table md-theme-default" table-header-color="green">
                            <div class="md-toolbar md-table-toolbar md-transparent   md-theme-default md-elevation-0">



                            </div>

                            <div class="md-content md-table-content md-scrollbar md-theme-default">
                                <table>
                                    <thead>
                                    <tr><!---->
                                        <th class="md-table-head">
                                            <div class="md-table-head-container md-ripple md-disabled">
                                                <div class="md-table-head-label"><!---->

                                                    Risk Measure

                                                    <!----></div> <!----></div>
                                        </th>
                                        <th class="md-table-head">
                                            <div class="md-table-head-container md-ripple md-disabled">
                                                <div class="md-table-head-label"><!---->

                                                    Risk Measure Type

                                                    <!----></div> <!----></div>
                                        </th>
                                        <th class="md-table-head">
                                            <div class="md-table-head-container md-ripple md-disabled">
                                                <div class="md-table-head-label"><!---->

                                                    Risk Frequency Load

                                                    <!----></div> <!----></div>
                                        </th>
                                        <th class="md-table-head">
                                            <div class="md-table-head-container md-ripple md-disabled">
                                                <div class="md-table-head-label"><!---->


                                                    <!----></div> <!----></div>
                                        </th>

                                    </tr>
                                    <tr><!---->
                                        <th class="md-table-head">
                                            <div class="md-table-head-container md-ripple md-disabled">
                                                <div class="md-table-head-label"></div> <!----></div>
                                        </th>
                                        <th class="md-table-head">
                                            <div class="md-table-head-container md-ripple md-disabled">
                                                <div class="md-table-head-label"></div> <!----></div>
                                        </th>
                                        <th class="md-table-head">
                                            <div class="md-table-head-container md-ripple md-disabled">

                                                North Atlantic Hurricane<!---->
                                            </div>
                                        </th>
                                        <th class="md-table-head">
                                            <div class="md-table-head-container md-ripple md-disabled">
                                                 <!---->
                                                Japanese Windstorm
                                            </div>
                                        </th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="md-table-row"><!---->
                                        <td class="md-table-cell">
                                            <div class="md-table-cell-container">
                                                Real World
                                            </div>
                                        </td>
                                        <td class="md-table-cell">
                                            <div class="md-table-cell-container">
                                                Frequency/Severity
                                            </div>
                                        </td>
                                        <td class="md-table-cell">
                                            <div class="md-table-cell-container">
                                                <md-field>
                                                    <md-input v-model="hurricane" type="number" min="0" max="2" step=".1" />
                                                </md-field>
                                            </div>
                                        </td>
                                        <td class="md-table-cell">
                                            <div class="md-table-cell-container">
                                                <md-field>
                                                <md-input v-model="windstorm" type="number" min="0" max="2" step=".1" />
                                                </md-field>
                                            </div>
                                        </td>


                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div v-if="!listMode" class="md-content md-table md-theme-default" table-header-color="green">
                            <div class="md-toolbar md-table-toolbar md-transparent   md-theme-default md-elevation-0">
                            </div>

                            <div class="md-content md-table-content md-scrollbar md-theme-default">
                                <table>
                                    <thead>
                                    <tr><!---->
                                        <th class="md-table-head">
                                            <div class="md-table-head-container md-ripple md-disabled">
                                                <div class="md-table-head-label"><!---->

                                                    Risk Measure

                                                    <!----></div> <!----></div>
                                        </th>
                                        <th class="md-table-head">
                                            <div class="md-table-head-container md-ripple md-disabled">
                                                <div class="md-table-head-label"><!---->

                                                    Program

                                                    <!----></div> <!----></div>
                                        </th>
                                        <th class="md-table-head">
                                            <div class="md-table-head-container md-ripple md-disabled">
                                                <div class="md-table-head-label"><!---->

                                                    North Atlantic Hurricane

                                                    <!----></div> <!----></div>
                                        </th>
                                        <th class="md-table-head">
                                            <div class="md-table-head-container md-ripple md-disabled">
                                                <div class="md-table-head-label"><!---->

                                                    Japanese Windstorm

                                                    <!----></div> <!----></div>
                                        </th>
                                        <th class="md-table-head">
                                            <div class="md-table-head-container md-ripple md-disabled">
                                                <div class="md-table-head-label"><!---->


                                                    <!----></div> <!----></div>
                                        </th>

                                    </tr>

                                    </thead>
                                    <tbody>
                                    <tr class="md-table-row"><!---->
                                        <td class="md-table-cell">
                                            <div class="md-table-cell-container">
                                                Real World
                                            </div>
                                        </td>
                                        <td class="md-table-cell">
                                            <div class="md-table-cell-container">
                                                Program A
                                            </div>
                                        </td>
                                        <td class="md-table-cell">
                                            <div class="md-table-cell-container">
                                                <md-field>
                                                    <md-input v-model="hurricane0" type="number" min="0" max="2" step=".1" />
                                                </md-field>
                                            </div>
                                        </td>
                                        <td class="md-table-cell">
                                            <div class="md-table-cell-container">
                                                <md-field>
                                                <md-input v-model="windstorm0" type="number" min="0" max="2" step=".1" />
                                                </md-field>
                                            </div>
                                        </td>


                                    </tr>
                                    <tr class="md-table-row"><!---->
                                        <td class="md-table-cell">
                                            <div class="md-table-cell-container">

                                            </div>
                                        </td>
                                        <td class="md-table-cell">
                                            <div class="md-table-cell-container">
                                                Program B
                                            </div>
                                        </td>
                                        <td class="md-table-cell">
                                            <div class="md-table-cell-container">
                                                <md-field>
                                                    <md-input v-model="hurricane1" type="number" min="0" max="2" step=".1" />
                                                </md-field>
                                            </div>
                                        </td>
                                        <td class="md-table-cell">
                                            <div class="md-table-cell-container">
                                                <md-field>
                                                <md-input v-model="windstorm1" type="number" min="0" max="2" step=".1" />
                                                </md-field>
                                            </div>
                                        </td>


                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>


                    </md-card-content>
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
        data()  {
            return {
                listMode:false,
                hurricane:1.000,
                windstorm:1.000,
                hurricane0:1.000,
                windstorm0:1.000,
                hurricane1:1.000,
                windstorm1:1.000

        }},
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
    .md-card.md-theme-default .md-card-header .md-toolbar>button.md-button {
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
