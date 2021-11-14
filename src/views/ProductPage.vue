<template>
  <div class="product">
    <h1 v-if="isLoading">Loading....</h1>
    <b-row v-else class="content">
      <b-col cols="6">
        <b-card :img-src="item.image" img-top class="mb-2 img-card"> </b-card>
      </b-col>
      <b-col cols="6">
        <b-row>
          <b-col cols="6">
            <b-card :title="item.title" class="mb-2">
              <b-card-text>
                {{ item.description }}
              </b-card-text>

              <b-row>
                <b-col cols="6">
                  <b-button variant="primary" v-on:click="addToCart"
                    >Add To Cart</b-button
                  >
                </b-col>
                <b-col cols="6">
                  <p>${{ item.price }}</p>
                </b-col>
                <b-col cols="8">
                  <b-button variant="danger" v-on:click="removeFromCart"
                    >Remove From Cart</b-button
                  >
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  data() {
    return {
      item: {},
      isLoading: false,
    };
  },
  components: {
    Card,
  },
  async mounted() {
    this.isLoading = true;
    let id = window.location.href.split("/");
    id = id[id.length - 1];

    try {
      const res = await fetch("https://fakestoreapi.com/products/" + id);
      const data = await res.json();
      this.item = data;
    } catch (e) {
      console.log(e);
    }
    this.isLoading = false;
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.item);
    },
    removeFromCart() {
      this.$store.commit("removeFromCart", this.item.id);
    },
  },
};
</script>

<style scoped>
.product {
  margin: auto;
  margin-top: 20px;
}

img {
  margin: auto;
  height: 250px;
  width: 250px;
}

.img-card {
  border: 0px;
}

.content {
  margin-left: 20px;
}
</style>
