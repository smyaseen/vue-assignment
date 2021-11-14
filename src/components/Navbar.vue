<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand class="title">E-Mart</b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <b-button v-on:click="$router.push('/users')" variant="primary"
              >Users</b-button
            >
            <b-button v-on:click="$router.push('/dashboard')" variant="primary"
              >Dashboard</b-button
            >
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <b-navbar-nav class="mr-auto">
        <b-button v-on:click="goToCart" variant="primary"
          >🛒
          <span>{{
            Object.keys(this.$store.state.cartItems).length
          }}</span></b-button
        >
        <b-button class="logout-button" v-on:click="logout">Logout</b-button>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    goToCart() {
      this.$router.push("/cart");
    },
    logout() {
      this.$store.commit("toggleIsLoggedIn");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.title {
  margin-left: 10px;
}

.logout-button {
  margin-right: 10px;
}

.link {
  text-decoration: none;
}

.btn {
  margin-right: 10px;
}
</style>
