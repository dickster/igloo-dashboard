<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-50">
        <md-card>
          <md-card-header data-background-color="green">
              <h4 class="title"><md-icon>notifications</md-icon>Notifications</h4>
            <p class="category">

            </p>
          </md-card-header>
          <md-card-content>
            <div class="md-layout ">
              <div class="md-layout-item md-medium-size-100">
                <h5>Notifications Style</h5>
                <div class="alert ">
                  <button type="button" aria-hidden="true" class="close">
                    ×
                  </button>
                  <span>Job 17 has completed</span>
                </div>
                <div
                  class="alert alert-danger"
                  data-notify="container"
                >
                  <button type="button" aria-hidden="true" class="close">
                    ×
                  </button>

                  <span data-notify="message"
                    >Job XYZ has failed with 4 errors</span
                  >
                </div>
                <div
                  class="alert "
                  data-notify="container"
                >
                  <button type="button" aria-hidden="true" class="close">
                    ×
                  </button>
                  <span data-notify="message"
                    >Job FooBar was started a few minutes ago.</span
                  >
                </div>
                <div
                  class="alert alert-warning"
                  data-notify="container"
                >
                  <button type="button" aria-hidden="true" class="close">
                    ×
                  </button>
                  <span data-notify="message">
                    A new Igloo Agent has been added (total is now xxxx)
                  </span>
                </div>
              </div>

              <div class="md-layout-item md-medium-size-100">

              </div>
            </div>

            <div class="md-layout-item md-size-100">
            </div>

          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: ["", "info", "success", "warning", "danger"],
      notifications: {
        topCenter: false
      }
    };
  },
  methods: {
    notifyVue(verticalAlign, horizontalAlign) {
      var color = Math.floor(Math.random() * 4 + 1);
      this.$notify({
        message:
          "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer.",
        icon: "add_alert",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: this.type[color]
      });
    }
  }
};
</script>


<style>
  .title .md-icon.md-theme-default.md-icon-font { color:white;}

</style>

