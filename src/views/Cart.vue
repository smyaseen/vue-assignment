<template>
  <b-container>
    <h1>CART</h1>
    <div v-if="items.length > 0">
      <h3>Total Price: ${{ totalPrice }}</h3>
      <Table :items="items" :rowClickHandler="rowClickHandler" />
    </div>
    <h3 v-else>Cart is Empty!</h3>
  </b-container>
</template>

<script>
import Table from "../components/Table.vue";

export default {
  props: {
    isLoggedIn: Boolean,
    cartItems: Object,
  },
  data() {
    return {
      items: [],
      totalPrice: 0,
    };
  },
  beforeMount() {
    if (!this.isLoggedIn) this.$router.push("/");
  },
  mounted() {
    let price = 0;
    Object.keys(this.cartItems).map((key) => {
      delete this.cartItems[key]["rating"];
      delete this.cartItems[key]["description"];
      delete this.cartItems[key]["category"];

      this.cartItems[key]["Total Price"] =
        this.cartItems[key].quantity * this.cartItems[key].price;

      price += this.cartItems[key]["Total Price"];

      this.items.push(this.cartItems[key]);

      return key;
    });

    this.totalPrice = price;
  },

  components: {
    Table,
  },
  methods: {
    rowClickHandler(record) {},
  },
};
</script>

<style scoped>
.container {
  margin-top: 30px;
  width: 50%;
}
</style>
