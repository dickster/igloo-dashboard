<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Tables </h4>
            <p class="category">Used in All Job Configurations</p>
          </md-card-header>
          <md-card-content>
            <simple-table table-header-color="green"></simple-table>
          </md-card-content>
        </md-card>
      </div>

      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >

      </div>
    </div>

    <md-speed-dial class="md-bottom-right md-accent">
      <md-speed-dial-target >
        <md-icon >add</md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <router-link tag="md-button"  to="/data/cat" class="md-raised md-primary md-icon-button">
          <md-tooltip md-direction="right">Add CAT</md-tooltip>
          <md-icon class="speed-cat">pie_chart</md-icon>
        </router-link>

        <router-link tag="md-button"  to="/data/excel" class="md-raised md-primary md-icon-button">
          <md-tooltip md-direction="right">Add Excel</md-tooltip>
          <md-icon class="speed-excel">insert_drive_file</md-icon>
        </router-link>

        <router-link tag="md-button"  to="/data/db" class="md-raised md-primary md-icon-button">
          <md-tooltip md-direction="right">Add Database</md-tooltip>
          <md-icon class="speed-db">view_day</md-icon>
        </router-link>
      </md-speed-dial-content>
    </md-speed-dial>
  </div>
</template>

<script>
import { SimpleTable, OrderedTable } from "@/components";

export default {
  components: {
    OrderedTable,
    SimpleTable
  }
};
</script>

<style scoped>
  .md-speed-dial> button {
    background: #29a2e4 !important;

  }
  .md-speed-dial-content >button:nth-child(1) {
    background: #f0b330 !important;

  }.md-speed-dial-content >button:nth-child(2) {
    background: #f08348 !important;

  }.md-speed-dial-content >button:nth-child(3) {
    background: #eb4642 !important;

  }


</style>
