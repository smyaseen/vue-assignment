<template>
  <b-container>
    <h3>User Selected: {{ userSelected }}</h3>
    <Table :items="items" :rowClickHandler="rowClickHandler" />
  </b-container>
</template>

<script>
import Table from "../components/Table.vue";

export default {
  props: {
    isLoggedIn: Boolean,
  },
  beforeMount() {
    if (!this.isLoggedIn) this.$router.push("/");
  },
  data() {
    return {
      items: [],
      userSelected: "",
    };
  },

  async mounted() {
    this.items = await this.getUsers();
  },

  components: {
    Table,
  },
  methods: {
    async getUsers() {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      data.map((user) => delete user["password"]);
      return data;
    },
    rowClickHandler(record) {
      this.userSelected = record.name;
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 30px;
  width: 50%;
}
</style>
