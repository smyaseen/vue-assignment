<template>
  <b-container class="main">
    <h1 v-if="isLoading">Loading...</h1>
    <b-row v-else>
      <b-col class="col-sm-2" :key="item.id" v-for="(item, index) in items">
        <Card
          :title="item.title"
          :img="item.image"
          :price="item.price"
          :index="index"
          :showDetail="showProductDetail"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  props: {
    isLoggedIn: Boolean,
  },
  data() {
    return {
      items: [],
      isLoading: false,
    };
  },
  beforeMount() {
    if (!this.isLoggedIn) this.$router.push("/");
  },
  async mounted() {
    this.isLoading = true;
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      this.items = data;
    } catch (e) {
      console.log(e);
    }
    this.isLoading = false;
  },
  components: {
    Card,
  },
  methods: {
    showProductDetail(itemIndex) {
      this.$router.push({
        name: "product",
        params: {
          item: { ...this.items[itemIndex] },
          id: itemIndex + 1,
        },
      });
    },
  },
};
</script>

<style scoped>
.main {
  margin-top: 20px;
}
.card {
  height: 100%;
}

.col-sm-2 {
  margin-bottom: 10px;
}
</style>
