<template>
  <div>
    <b-button v-b-modal.modal-1>{{ title }}</b-button>

    <b-modal id="modal-1" :title="title">
      <b-container>
        <div class="main">
          <b-form @submit.prevent="onSubmit(form)">
            <b-form-group id="input-group-3" label="Name:" label-for="input-3">
              <b-form-input
                id="input-3"
                v-model="form.name"
                type="text"
                placeholder="Enter name"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Password:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.password"
                type="password"
                placeholder="Enter Password"
                required
              ></b-form-input>
            </b-form-group>
            <br />
            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
        </div>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import Form from "./Form.vue";

export default {
  props: {
    title: String,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  components: {
    Form,
  },
  methods: {
    async onSubmit(form) {
      try {
        await fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(form),
        });

        this.form = {
          name: "",
          email: "",
          password: "",
        };

        this.$emit("get-users");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
