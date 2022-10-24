<template>

<h1>Home</h1>
<div class= "container is-fluid is-max-tablet container-task ">
<form class="box box-task" @submit.prevent="onSubmit">
    <br>
  <h1>Add a new task to your list:</h1>
  <br>
  <input v-model="title" class="input" type="text" placeholder="Title" />
  <br>
  <textarea
    v-model="description"
    class="textarea"
    placeholder="Description"
  ></textarea>
  <br>
  <button class="button is-dark is-rounded is-medium is-responsive">Save</button>
</form>

<div class="columns is-multiline">
  <div
    v-for="task in taskStore.tasks"
    class="column is-8-mobile is-4-tablet is-3-desktop"
    :key="task.id"
  >
    <TasksCard :task="task"/>
  </div>
</div>
<div class="container is-fluid container-button">

<button class="button is-success is-outlined is-rounded is-small is-responsive" @click="onClick">
    <span class="icon">
        <i class="fa-regular fa-hand-peace"></i>
    </span>
    <span>Log out</span>
</button>

<span class="separacion"> </span>
<h1 class="content is-small">Remember to come back soon!</h1>
</div>



</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { logOut, getTasks, newTask, deleteTask } from "../api/index";
import NavBar from "../components/NavBar.vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";
import { storeToRefs } from "pinia";
import { useTaskStore } from "../store/task";
import TaskList from "../components/TaskList.vue"

const taskStore = useTaskStore();
const authStore = useAuthStore();
const router = useRouter();
const title = ref("");
const titleError = ref(false);
const description = ref("");
const descriptionError = ref(false);

//Buscar las tareas existentes:

const gettingTasks = async () => {
  const response = await getTasks();
  taskStore.setTasks(response);
  console.log(taskStore.tasks);
};
onMounted(async () => {
  await gettingTasks();
});

//Crear nuevas tareas:

const onSubmit = async () => {
  if (title.value.length > 0) titleError.value = false;
  else titleError.value = true;
  if (description.value.length > 0) descriptionError.value = false;
  else descriptionError.value = true;
  console.log(title.value, description.value);
  //   si el usuario completo el campo:
  if (titleError.value === false && descriptionError.value === false) {
    let task = {
      user_id: authStore.id,
      title: title.value,
      description: description.value,
    };
    console.log(task);
    if ((await newTask(task)) === true) console.log("nueva tarea agregada");
    gettingTasks();
    title.value = "";
    description.value = "";
  } else console.log("from incompleto");
};

//Cerrar sesion:

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

.box-task {

max-width: 700px;
width: 80%;
height: 50%;
  background-color:rgb(129, 150, 120);
  display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
.container-task {

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
background-color: rgb(255, 255, 255);
height: 800px;
}

.container-button {
max-height: 120px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
background-color: none;
}

.separacion {
    height: 10px;
}

</style>