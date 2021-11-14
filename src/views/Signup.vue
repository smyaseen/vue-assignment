<template>
  <Form
    title="Signup"
    secondaryButton="Login Instead"
    :secondaryButtonAction="secondaryButtonAction"
    :onSubmit="onSubmit"
    :showNameField="showNameField"
  />
</template>

<script>
import Form from "../components/Form.vue";

export default {
  data() {
    return {
      showNameField: true,
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
    async onSubmit(user, name) {
      user["name"] = name;
      try {
        await fetch("http://localhost:5000/users", {
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
