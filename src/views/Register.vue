<template>
    <div class="section">
      <div class="box has-background-success-light">
        <h1 class="title is-3">Register</h1>
        <form @submit.prevent="onSubmit">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                v-model="name"
                :class="{ input: true, 'is-danger': nameError }"
                type="text"
                placeholder="Nombre"
              />
              <p v-if="nameError" class="help is-danger">Name is required</p>
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                v-model="email"
                :class="{ input: true, 'is-danger': emailError }"
                type="email"
                placeholder="email"
              />
              <p v-if="emailError" class="help is-danger">
                Insert a valid email address
              </p>
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                v-model="password"
                :class="{ input: true, 'is-danger': passwordError }"
                type="password"
                placeholder="password"
              />
              <p v-if="passwordError" class="help is-danger">
                Password has to be at least 6 characters long
              </p>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input
                class="button is-link"
                type="submit"
                placeholder="Text input"
              />
            </div>
          </div>
        </form>
        <div class="is-flex"> 
          <p>Have an account? </p>
          <router-link class="has-text-weight-bold" :to="{ name: 'login' }">LOGIN</router-link></div>
      </div>
    </div>
  </template>
  <script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { registro } from "../api/index";
  const router = useRouter();
  const name = ref("");
  const nameError = ref(false);
  const email = ref("");
  const emailError = ref(false);
  const password = ref("");
  const passwordError = ref(false);


  const onSubmit = async () => {
    // let error = false;
    if (name.value.length === 0) nameError.value = true;
    else nameError.value = false;
    if (validarMail(email.value) === true) emailError.value = false;
    else emailError.value = true;
    if (password.value.length === 0 || password.value.length < 6)
      passwordError.value = true;
    else passwordError.value = false;
    
    if (
      emailError.value === false &&
      nameError.value === false &&
      passwordError.value === false
    ) {
      console.log("no hay errores de tipeo");
      if ((await registro(email.value, password.value)) === true) {
        console.log("registro hecho?");
        router.push({ name: "emailverification" });
      } else {
     
        console.log("hay errores");
      }
    }
  };
 
  const validarMail = () => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
      return true;
    } else return false;
  };
 
  </script>
  <style scoped></style>