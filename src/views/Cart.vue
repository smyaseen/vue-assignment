<template>
  <b-container>
    <h1>CART</h1>
    <div v-if="items.length > 0">
      <b-row>
        <b-col cols="6">
          <h3>Total Price: ${{ totalPrice }}</h3>
        </b-col>
        <b-col cols="6">
          <b-button variant="primary" v-on:click="checkout">Checkout</b-button>
        </b-col>
      </b-row>
      <Table :items="items" :rowClickHandler="rowClickHandler" />
    </div>
    <h3 v-else>Cart is Empty!</h3>
  </b-container>
</template>

<script>
import Table from "../components/Table.vue";

export default {
  data() {
    return {
      items: [],
      totalPrice: 0,
    };
  },
  beforeMount() {
    if (!this.$store.state.isLoggedIn) this.$router.push("/");
  },
  mounted() {
    let price = 0;
    Object.keys(this.$store.state.cartItems).map((key) => {
      delete this.$store.state.cartItems[key]["rating"];
      delete this.$store.state.cartItems[key]["description"];
      delete this.$store.state.cartItems[key]["category"];
      delete this.$store.state.cartItems[key]["image"];

      this.$store.state.cartItems[key]["Total Price"] =
        this.$store.state.cartItems[key].quantity *
        this.$store.state.cartItems[key].price;

      price += this.$store.state.cartItems[key]["Total Price"];

      this.items.push(this.$store.state.cartItems[key]);

      return key;
    });

    this.totalPrice = price;
  },

  components: {
    Table,
  },
  methods: {
    checkout() {
      this.$store.commit("checkout");
      this.items = [];
    },
    rowClickHandler() {},
  },
};
</script>

<style scoped>
.container {
  margin-top: 30px;
  width: 50%;
}
</style>
