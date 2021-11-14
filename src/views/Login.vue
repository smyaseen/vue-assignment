<template>
  <Form
    title="Login"
    secondaryButton="Register"
    :secondaryButtonAction="secondaryButtonAction"
    :onSubmit="onSubmit"
  />
</template>

<script>
import Form from "../components/Form.vue";

export default {
  beforeMount() {
    if (this.$store.state.isLoggedIn) this.$router.push("/users");
  },
  components: {
    Form,
  },
  methods: {
    secondaryButtonAction() {
      this.$router.push("/signup");
    },
    async onSubmit(user) {
      try {
        const res = await fetch("http://localhost:5000/users");
        const data = await res.json();

        let userFound = false;

        data.map((d) => {
          if (d.email === user.email && d.password === user.password) {
            this.$router.push("/users");
            this.$store.commit("toggleIsLoggedIn");
            userFound = true;
          }
        });

        if (!userFound) alert("User not Found");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
