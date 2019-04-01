<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>

          <md-card-header data-background-color="green">
            <h4 class="title">Job Runs </h4>
            <p class="category">note that older job runs will be deleted unless you <a>archive</a>
              <md-icon>archive</md-icon>them</p>
          </md-card-header>
          <md-card-content>
            <job-runs-table table-header-color="green"></job-runs-table>
          </md-card-content>
        </md-card>
      </div>

      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <!--<md-card class="md-card-plain">-->
          <!--<md-card-header data-background-color="green">-->
            <!--<h4 class="title">Table on Plain Background</h4>-->
            <!--<p class="category">Here is a subtitle for this table</p>-->
          <!--</md-card-header>-->
          <!--<md-card-content>-->
            <!--<ordered-table></ordered-table>-->
          <!--</md-card-content>-->
        <!--</md-card>-->
      </div>
    </div>
  </div>
</template>

<script>
import { SimpleTable, JobRunsTable, OrderedTable } from "@/components";

export default {
  components: {
    OrderedTable,
    SimpleTable,
    JobRunsTable
  }
};
</script>

<style>
  .category .md-icon.md-icon-font.md-theme-default {
    font-size:16px !important;
    color:white;
    margin-top:-14px;
    margin-left:-2px;
  }
</style>
