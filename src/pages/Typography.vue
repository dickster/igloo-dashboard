<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Job Configurations</h4>
          </md-card-header>
          <md-card-content>

          </md-card-content>
        </md-card>
      </div>

      <md-button> Back to Job Results</md-button>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  }
};
</script>
