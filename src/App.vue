<template>
  <div id="app">
    <SiteNavbar />
    <MainHome />
    <UserAppointments />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue';
import SiteNavbar from './components/SiteNavbar.vue';
import UserAppointments from './views/UserAppointments.vue';
import MainHome from './views/MainHome.vue';

export default {
  name: 'App',
  components: {
    AppFooter,
    SiteNavbar,
    UserAppointments,
    MainHome,
  },
};
</script>
