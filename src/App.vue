<template>
  <div id="app">
    <div v-show="this.$store.state.isLoggedIn">
      <Navbar />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
  methods: {
    toggleLogin() {
      this.isLoggedIn = !this.isLoggedIn;
    },
  },
};
</script>

<style></style>
