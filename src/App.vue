<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Form from "./components/Form.vue";
import { reactive, defineAsyncComponent, computed } from "vue";
const FormGroup = defineAsyncComponent(() =>
    import(/*webpackChunkName:'formgroup'*/ "./components/FormGroup.vue")
  ),
  Button = defineAsyncComponent(() =>
    import(/*webpackChunkName:'button'*/ "./components/Button.vue")
  );
const form = reactive({
    email: "",
    password: "",
    fname: "",
    lname: "",
    confirmpassword: "",
  }),
  errorBag = reactive({
    email: "",
    password: "",
    fname: "",
    lname: "",
    confirmpassword: "",
  });

const error = computed(() =>
  form.password.length > 6 ? "Max 6 characters" : ""
);

function submit() {
  console.log(form);
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Form class="w-1/2 mx-auto" method="POST" @submit.prevent="submit">
    <FormGroup
      type="email"
      label="Email"
      v-model="form.email"
      inputClasses="border"
    />
    

    <FormGroup
      type="password"
      label="Password"
      v-model="form.password"
      :error="error"
    />

    <FormGroup
      type="password"
      label="Confirm Password"
      v-model="form.confirmpassword"
      :confirm="true"
      :confirmWith="form.password"
    />

    <div>
      <Button type="primary">Sign Up </Button>
    </div>
  </Form>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
