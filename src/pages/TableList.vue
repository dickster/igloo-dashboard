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
      <md-speed-dial-target>
        <md-icon>add</md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <md-button class="md-icon-button">
          <md-tooltip md-direction="left">Add CAT</md-tooltip>
          <md-icon>pie_chart</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-tooltip md-direction="left">Add Excel</md-tooltip>
          <md-icon>insert_drive_file</md-icon>
        </md-button>

        <md-button class=" md-icon-button">
          <md-tooltip md-direction="left">Add Database</md-tooltip>
          <md-icon>view_day</md-icon>
        </md-button>
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
    background: #ab69e4 !important;

  }
  .md-speed-dial-content >button {
    background: #d7f6c2 !important;

  }

</style>
