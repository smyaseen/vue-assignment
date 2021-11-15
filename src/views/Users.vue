<template>
  <b-container>
    <h3>User Selected: {{ userSelected }}</h3>
    <Modal title="Add User" @get-users="getUsers" />
    <Table :items="items" :rowClickHandler="rowClickHandler" />
  </b-container>
</template>

<script>
import Table from "../components/Table.vue";
import Modal from "../components/Modal.vue";
import { serverUrl } from "../scripts";

export default {
  beforeMount() {
    if (!this.$store.state.isLoggedIn) this.$router.push("/");
  },
  data() {
    return {
      items: [],
      userSelected: "",
    };
  },

  async mounted() {
    this.getUsers();
  },

  components: {
    Table,
    Modal,
  },
  methods: {
    async getUsers() {
      const res = await fetch(serverUrl);
      const data = await res.json();
      data.map((user) => delete user["password"]);
      this.items = data;
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
