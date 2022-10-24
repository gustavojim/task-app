<template>
<div class="section">
  <div class="container is-fluid ">
<!-- <progress class="progress is-medium is-dark" max="100">100%</progress> -->
<br>
<h1 class="title">Poco@pocO</h1>
<h2 class="subtitle">!Dale orden a tu vida!</h2>
<h3 class="subtitle is-5">Registrate con tus datos:</h3>
</div>
</div>

<div class="section">


        <div class="container is-fluid ">

            <form @submit.prevent="onSubmit">     

                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input v-model="email" class="input is-danger is-focused" type="email" placeholder="email">
                    </div>
                    <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
            <p v-if="emailError" class="help is-danger">
              The email has an error
            </p>
                </div>



                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                    <input v-model="password"
              :class="{ input: true, 'is-danger': passwordError }"
              type="password"
              placeholder="password"
            />
            <p v-if="passwordError" class="help is-danger">Problem with the password</p>
                    </div>
                </div>

                <div class="field">
                  <br>
                  <br>
                    <div class="control">
                        <input class="button is-medium is-responsive is-rounded is-focus is-dark is-large" type="submit" >
                    </div>
                </div>
            </form>
 
            <div class="is-flex"><p>Not registered?</p>
      <router-link class="has-text-weight-bold" :to="{ name: 'register' }"
        >Create an account</router-link></div>
    </div>
  </div>

  <div class="field">
  <label class="label">Normal input</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Extra small">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope fa-xs"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check fa-xs"></i>
    </span>
  </div>
</div>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Normal">
    <span class="icon is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>



</template>

<script setup>

import { ref } from "vue";
import { useRouter } from "vue-router";
import { login, registro } from "../api/index";
import { useAuthStore } from "../store/auth";
const authStore = useAuthStore();
const router = useRouter();
const email = ref("");
const emailError = ref(false);
const password = ref("");
const passwordError = ref(false);

const onSubmit = async () => {
  if (validarMail(email) === true) emailError.value = false;
  else emailError.value = true;
  if (password.value.length < 6) 
    passwordError.value = true;
  else passwordError.value = false;
  console.log("funciona");
  if (emailError.value === false && passwordError.value === false) {
    console.log("funciona");

    
    let loginResult = await login(email.value, password.value)
    if (loginResult === false) {
    
      console.log("error");
    } else {
      console.log("error");

      authStore.login(loginResult);
      console.log(authStore.id)

      router.push({ name: "home" });
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

<style scoped>
</style>