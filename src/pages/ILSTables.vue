<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Tables/Excel (vernacular?)</h4>
            <p class="category">specify DB, Excel, CAT data to be used by model</p>
          </md-card-header>
          <md-card-content>
            <simple-table table-header-color="green"></simple-table>
          </md-card-content>
        </md-card>
      </div>

    </div>



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
