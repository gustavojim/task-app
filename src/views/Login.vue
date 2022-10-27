<template class="background-total">
  <div class="container is-fluid container-general ">
    <div class="container container-login is-max-desktop">
      <div class="container container-login-dos ">
        
        <br/>
   
      
        <p class="title tag is-large is-warning is-flex"><i class="fa-regular fa-hand-spock"></i>&nbsp;&nbsp;Welcome to Taski !</p>

       
        <br>

      </div>

      <div class="container is-fluid">
        <form class="" @submit.prevent="onSubmit">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                v-model="email"
                class="input is-success is-focused"
                type="email"
                placeholder="email"
              />
            </div>

            <p v-if="emailError" class="help is-danger">
              Check the email
            </p>
          </div>

          <div class="field ">
            <label class="label">Password</label>
            <div class="control ">
              <input
                v-model="password" class="is-success is-focused"
                :class="{ input: true, 'is-danger': passwordError }"

                type="password"
                placeholder="password"
              />
              <p v-if="passwordError" class="help is-danger">
                Check the password
              </p>
            </div>
          </div>
          <br />
          <div class="field boton-registro">
            <div class="control">
              <input
                class="button is-responsive is-rounded is-focus is-dark"  
                type="submit" 
                value="Take me inside!"
              />
            </div>
            <div class="texto-grupo">
              <p class="texto-registro">¿Not registered yet?</p>
              <router-link
                class="tag is-success is-light has-text-weight-bold"
                :to="{ name: 'register' }"
                >Create an account</router-link
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="footer footer-styler is-flex is-justify-content-center flex-direction-row">
    <div class="columns is-multiline is-flex is-justify-content-center">
<p class="columns tag tag-footer-style is-success is-normal"><i class="fa-solid fa-pen"></i>&nbsp;&nbsp;Creada por Gustavo Jiménez</p>
<a class="columns tag tag-footer-style is-info is-normal" href="https://www.linkedin.com/in/gustavojimeneza/" ><i class="fa-brands fa-linkedin"> </i>&nbsp;&nbsp;Visita mi perdil de Linkedin </a>
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
  if (password.value.length < 6) passwordError.value = true;
  else passwordError.value = false;
  console.log("funciona");
  if (emailError.value === false && passwordError.value === false) {
    console.log("funciona");

    let loginResult = await login(email.value, password.value);
    if (loginResult === false) {
      console.log("error");
    } else {
      console.log("error");

      authStore.login(loginResult);
      console.log(authStore.id);

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
.container-login {
  margin-top: 50px;
  background-color:rgb(185, 191, 183);
  border-radius: 30px;
  padding: 20px;
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.container-general {
  margin-bottom: 0px;
  background-image: url(../Images/dot-background.jpg);
  background-size: 30%;
  padding: 50px;

}
.boton-registro {
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
  justify-content:center;
  padding-bottom: 30PX;
}

.texto-grupo{
  margin-top: 30px;
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
  justify-content:center;

}

.texto-registro {
  color: white;
margin-bottom: 10px;
font-size: small;
}


.tag-footer-style {
  margin: 5px;
}

.footer-styler {
  background-image: url(../Images/diagonal-background-light.png);
    
 
}
</style>
