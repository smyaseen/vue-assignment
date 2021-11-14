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
  props: {
    isLoggedIn: Boolean,
  },
  data() {
    return {
      showNameField: true,
    };
  },
  beforeMount() {
    if (this.isLoggedIn) this.$router.push("/users");
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

        this.$emit("toggle-isloggedIn");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
