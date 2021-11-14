<template>
  <b-container>
    <h1>{{ title }}</h1>

    <div class="main">
      <b-form @submit.prevent="onSubmit(form, name)" v-if="show">
        <b-form-group
          id="input-group-3"
          label="Name:"
          label-for="input-3"
          v-if="showNameField"
        >
          <b-form-input
            id="input-3"
            v-model="name"
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

        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
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
        <b-button class="btn-l" v-on:click="secondaryButtonAction">{{
          secondaryButton
        }}</b-button>
      </b-form>
    </div>
  </b-container>
</template>

<script>
export default {
  props: {
    title: String,
    secondaryButton: String,
    secondaryButtonAction: Function,
    onSubmit: Function,
    showNameField: Boolean,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
      name: "",
    };
  },
};
</script>

<style scoped>
.container {
  width: 25%;
}

.main {
  margin-top: 100px;
}

.btn-l {
  margin-left: 10px;
}
</style>
