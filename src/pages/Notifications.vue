<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item md-size-25"></div>
            <div class="md-layout-item md-size-50">
                <md-card>
                    <md-card-header data-background-color="green">
                        <h4 class="title">
                            <md-icon>notifications</md-icon>
                            Notifications
                        </h4>
                        <p class="category">

                        </p>
                    </md-card-header>
                    <md-card-content>
                        <div class="md-layout ">

                            <div class="md-layout-item md-size-100">
                                <div class="alert " style="background:#306bff;">
                                    <button type="button" aria-hidden="true" class="close">
                                        ×
                                    </button>
                                    <span>
                                        <md-icon>thumb_up</md-icon>
                    Job <router-link :to="notify1()">TestNoContractC</router-link>
                      has completed</span>
                                </div>
                                <div class="alert alert-danger" data-notify="container">
                                    <button type="button" aria-hidden="true" class="close">
                                        ×
                                    </button>

                                    <span data-notify="message">
                    <span>
                         <md-icon class="md-info">error</md-icon>
                    Job <router-link :to="notify2()">NoWindstorm</router-link>
                      has failed with 4 errors</span>
                  </span>
                                </div>
                                <div
                                        class="alert "
                                        data-notify="container"
                                >
                                    <button type="button" aria-hidden="true" class="close">
                                        ×
                                    </button>
                                    <span data-notify="message"
                                    >
                                         <md-icon class="md-primary">play_circle_filled</md-icon>
                                          Job <router-link :to="notify3()">MilestoneA</router-link>
                                        was started a few minutes ago.</span
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
                                                                                 <md-icon
                                                                                         class="md-info">nature</md-icon>

                    A new Igloo Agent has been added (total is now 12)
                  </span>
                                </div>
                            </div>

                        </div>

                        <md-card-expand>
                            updated 3 minutes ago.
                        </md-card-expand>

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


            notify1() {
                let item = {
                    date: "March 27,2019  9:13",
                    config: "TestNoContractC",
                    status: "running",
                    archived: false,
                    version: "2.1"
                }
                return {
                    name: 'Job Results',
                    params: {item: item}
                }
            },
            notify2() {
                let item = {
                    date: "June 9,2019  12:53",
                    config: "NoWindstorm",
                    archived: false,
                    status: "success",
                    version: "2.1"
                }
                return {
                    name: 'Job Results',
                    params: {item: item}
                }
            },
            notify3() {
                let item = {
                    date: "August 17,2018 11:35",
                    config: "MilestoneA",
                    archived: false,
                    status: "fail",
                    version: "2.01"
                }
                return {
                    name: 'Job Results',
                    params: {item: item}
                }
            },
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


<style scoped>
    .title .md-icon.md-theme-default.md-icon-font {
        color: white;
    }

    .md-theme-default .alert span a {
        color: white;
        text-decoration: underline;
    }

    .md-icon.md-theme-default.md-icon-font {
        color: #f0f0f0 !important;
        margin-right: 10px;
    }
</style>

