<template>
  <b-container>
    <h3>User Selected: {{ userSelected }}</h3>
    <Modal title="Add User" @add-user="addUser" />
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
    async addUser(form) {
      try {
        await fetch(serverUrl, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(form),
        });

        this.getUsers();
      } catch (e) {
        console.log(e);
      }
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
