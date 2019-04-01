<template>
  <div class="content">
    <div class="md-layout">
      <div
              class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>

          <md-card-header data-background-color="green">

            <md-toolbar data-background-color="green"  style="color:white;box-shadow:none;">
              <h3 class="md-title" style="flex: 1">Contracts</h3>

              <md-button :style="!listMode?'background:#007500':''" class="md-button" @click="program">
                <md-icon style="color:white;" >import_contacts</md-icon>
                By Portfolio
              </md-button>

              <md-button  :style="listMode?'background:#007500;':''" class="md-button" @click="list">
                <md-icon style="color:white;">view_headline</md-icon>
                List
              </md-button>

            </md-toolbar>
          </md-card-header>

          <md-card-content>

            <md-table v-if="listMode" v-model="contracts">

              <md-table-row id="contractsList" slot="md-table-row" slot-scope="{ item }" :class="item.model?'':'excluded'">
                <md-table-cell md-label=""><md-checkbox v-model="item.model"></md-checkbox></md-table-cell>
                <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
                <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Type">{{ item.type }}</md-table-cell>
                <md-table-cell md-label="Program">{{ item.program }}</md-table-cell>
              </md-table-row>
            </md-table>


            <md-table v-if="!listMode" v-model="contractsByPortfolio">

              <md-table-row id="contractsByPortfolio" slot="md-table-row" slot-scope="{ item }" >
                <md-table-cell md-label="Contract">{{item.name}}</md-table-cell>
                <md-table-cell md-label="Portfolio A"><md-checkbox v-model="item.a"></md-checkbox> </md-table-cell>
                <md-table-cell md-label="Portfolio B"><md-checkbox v-model="item.b"></md-checkbox></md-table-cell>
              </md-table-row>
            </md-table>


          </md-card-content>
        <md-card-actions>
          <router-link tag="md-button" to="/configurations" class="back md-raised md-primary">
            <md-icon>reply</md-icon>Back to Job Configurations
          </router-link>
        </md-card-actions>
        </md-card>


      </div>


    </div>
  </div>
</template>

<script>
    import {SimpleTable, JobRunsTable, OrderedTable} from "@/components";

    export default {
        data()  {
            return {
                contracts:[
                    {
                        model:true,
                        id:101,
                        name:'Contract 1',
                        type:'Stop Loss',
                        program:'Program A'
                    },
                    {
                        model:true,
                        id:102,
                        name:'Contract 2',
                        type:'XoL',
                        program:'Program A'
                    },
                    {
                        model:true,
                        id:103,
                        name:'Contract 3',
                        type:'QS',
                        program:'Program B'
                    },
                    {
                        model:true,
                        id:104,
                        name:'Contract 4',
                        type:'Surplus',
                        program:'Program B'
                    },
                ],
                contractsByPortfolio:[
                    {
                        name:'Contract 1',
                        a:true,
                        b:false
                    },
                    {
                        name:'Contract 1',
                        a:true,
                        b:false
                    },
                    {
                        name:'Contract 2',
                        a:true,
                        b:true
                    },
                    {
                        name:'Contract 3',
                        a:false,
                        b:true
                    },
                    {
                        name:'Contract 4',
                        a:true,
                        b:true
                    },
                    {
                        name:'Contract 5',
                        a:true,
                        b:false
                    },
                    {
                        name:'Contract 6',
                        a:false,
                        b:true
                    },

                ],
                listMode:false,
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

  .md-table-row.excluded {
    text-decoration: line-through;
  }
</style>
