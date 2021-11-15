<template>
  <Form
    secondaryButton="Login Instead"
    :secondaryButtonAction="secondaryButtonAction"
    :onSubmit="onSubmit"
    :showNameField="showNameField"
  >
    <template v-slot:title>Signup</template>
    <template v-slot:name>
      <b-form-group id="input-group-3" label="Name:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="name"
          type="text"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
    </template>
  </Form>
</template>

<script>
import Form from "../components/Form.vue";
import { serverUrl } from "../scripts";

export default {
  data() {
    return {
      showNameField: true,
      name: "",
    };
  },
  beforeMount() {
    if (this.$store.state.isLoggedIn) this.$router.push("/users");
  },
  components: {
    Form,
  },
  methods: {
    secondaryButtonAction() {
      this.$router.push("/");
    },
    async onSubmit(user) {
      user["name"] = this.name;
      try {
        await fetch(serverUrl, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(user),
        });

        this.$router.push("/users");

        this.$store.commit("toggleIsLoggedIn");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
