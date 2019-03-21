<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <md-icon>home</md-icon>
        <p>Home</p>
      </sidebar-link>
      <sidebar-link to="/jobruns">
        <md-icon>directions_run</md-icon>
        <p>Job Runs</p>
      </sidebar-link>
      <sidebar-link to="/typography">
        <md-icon>library_books</md-icon>
        <p>Job Configurations</p>
      </sidebar-link>
      <sidebar-link to="/table">
        <md-icon>grid_on</md-icon>
        <p>Data Tables</p>
      </sidebar-link>
      <sidebar-link to="/notifications">
        <md-icon>notifications</md-icon>
        <p>Notifications</p>
      </sidebar-link>
      <sidebar-link to="/maps">
        <md-icon>star</md-icon>
        <p>Favourites</p>
      </sidebar-link>
        <!--<p>Last Run Job</p>-->
        <!--<p>Config 1</p>-->
        <!--<p>Tables > CAT</p>-->
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  }
};
</script>
