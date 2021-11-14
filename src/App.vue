<template>
  <div id="app">
    <div v-show="isLoggedIn">
      <Navbar @toggle-isloggedIn="toggleLogin" :cartItems="cartItems" />
    </div>
    <router-view
      :isLoggedIn="isLoggedIn"
      @toggle-isloggedIn="toggleLogin"
      :cartItems="cartItems"
      :addToCart="addToCart"
      :removeFromCart="removeFromCart"
    ></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  data() {
    return {
      isLoggedIn: true,
      cartItems: {},
    };
  },
  components: {
    Navbar,
  },
  methods: {
    toggleLogin() {
      this.isLoggedIn = !this.isLoggedIn;
    },
    addToCart(item) {
      if (this.cartItems[item.id]) {
        this.cartItems[item.id] = {
          ...this.cartItems[item.id],
          quantity: this.cartItems[item.id].quantity + 1,
        };
      } else {
        this.cartItems = {
          ...this.cartItems,
          [item.id]: { ...item, quantity: 1 },
        };
      }
    },
    removeFromCart(id) {
      const updatedItems = { ...this.cartItems };
      delete updatedItems[id];
      this.cartItems = updatedItems;
    },
  },
};
</script>

<style></style>
