<template>
  <b-card
    :title="title"
    :img-src="img"
    img-alt="Image"
    img-top
    style="max-width: 20rem"
    class="mb-2"
  >
    <b-row>
      <b-col cols="6">
        <b-button
          variant="primary"
          class="addToCartBtn"
          v-on:click="showDetail(index)"
          >Show Detail</b-button
        >
      </b-col>
      <b-col cols="6">
        <p>${{ price }}</p>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  props: {
    index: Number,
    title: String,
    img: String,
    price: Number,
    showDetail: Function,
  },
};
</script>

<style scoped>
.card-img-top {
  display: block;
  margin: auto;
  width: 50px;
  height: 50px;
  margin-top: 5px;
}

.card-title {
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.addToCartBtn {
  font-size: 10px;
}
</style>
