<template>
  <nav
    class="navbar is-multiline navbar-a is-flex is-justify-content is-flex-direction-column"
    role="navigation"
    aria-label="main navigation"
  >
    <div
      class="navbar-brand container is-flex is-justify-content is-justify-content-center"
    >
      <img src="../Images/taski-logo-br.png" alt="taski-logo" class="logo-v" />
    </div>
<br>
    <div class="navbar-menu container buttons is-flex is-justify-content is-justify-content-center nav-estilo">
      
      <router-link
        class="button is-success is-rounded is-normal is-responsive is-outlined"
        :to="{ name: 'auth' }"
        ><i class="fa-solid fa-house"></i>&nbsp;&nbsp;Home</router-link
      >

      <router-link
        class="button is-success is-rounded is-normal is-responsive is-outlined"
        :to="{ name: 'register' }"
        >   <i class="fa-solid fa-file-invoice"></i>&nbsp;&nbsp;Create an account</router-link
      >

      <button
        class="button is-success is-rounded is-normal is-responsive is-outlined"
        @click="onClick"
      >
        <span class="icon">
          <i class="fa-regular fa-hand-peace"></i>
        </span>

        <span>Log out</span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { logOut } from "../api/index";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";
import { storeToRefs } from "pinia";
import { useTaskStore } from "../store/task";
import TaskList from "../components/TaskList.vue";

const authStore = useAuthStore();
const router = useRouter();

const onClick = async () => {
  let logOutResult = await logOut();
  if (logOutResult === true) {
    console.log("log out succesfull");
    router.push({ name: "login" });
    authStore.logout();
    console.log(authStore.id);
  } else {
    console.log("something went wrong");
  }
};


</script>

<style scoped>
.logo-v {
  width: 200px !important;
  height: auto;
}

.navbar-a {
  margin-top: 30px;
}

.nav-estilo {
  display: flex;
  align-content: center;
  align-items: center;
  justify-items: center;
  justify-content: center;
padding-top: 10px;
background-color: rgb(244, 244, 244);
max-width: 100% !important;
border-radius: 10px;
margin-bottom: 15px;
}

</style>
