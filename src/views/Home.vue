<template>

<h1>Home</h1>

<div class= "container is-fluid is-max-tablet container-task ">
<form class="box box-task" @submit.prevent="onSubmit">
    <br>
  <h1 class="text-task-repo-dos">Add a new task:</h1>
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
</div>
<div>
</div>
  <div class="container container-task-repo" >
    <h1 class="text-task-repo">Your task repository:</h1>
<div class="columns is-multiline is-mobile is-tablet ">
	<div class="column-style column section-task " v-for="task in taskStore.tasks" :key="task.id">
		<div v-if="!task.isCreated">
			<div>{{ task.title }} - {{ task.created_at }}</div>
			<div>{{ task.description }}</div>
      <div class="buttons buttons-group">
			<button class="button is-danger is-light is-small is-responsive" @click="eliminateTask(task.id)">Delete</button>
			<button class="button is-link is-light is-small is-responsive" @click="setDoneTask(task.id)">Done</button>
			<button class="button is-success is-light is-small is-responsive" @click="enableEditTask(task.id)">Edit</button>
		</div>
    </div>
		<div class="done" v-else>
			<div>{{ task.title }} - {{ task.created_at }}</div>
			<div>{{ task.description }}</div>
			<button @click="eliminateTask(task.id)">Delete</button>
			<button @click="setDoneTask(task.id)">Done</button>
			<button>archive</button>
		</div>
	</div>
</div>
</div>

<div class="container is-fluid container-button">
<button class="button is-success  is-rounded is-normal is-responsive" @click="onClick">
    <span class="icon">
        <i class="fa-regular fa-hand-peace"></i>
    </span>
    <span>Log out</span>
</button>
<span class="separacion"> </span>
<h1 class="content is-small">Remember to come back soon!</h1>
</div>

</template>

<script setup>
import { ref, onMounted, computed } from "vue";
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
const filter = ref("");
const descriptionError = ref(false);

const tasks = computed(() => {
        if (filter.value == 0)
            return taskStore.tasks.filter(task => task.is_completed)
        if (filter.value == 1)
            return taskStore.tasks.filter(task => !task.is_completed)
        return taskStore.tasks
    })


//Buscar las tareas existentes:

const gettingTasks = async () => {
  const response = await getTasks();
  taskStore.setTask(response);
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

  if (titleError.value === false && descriptionError.value === false) {
    let task = {
      user_id: authStore.id,
      title: title.value,
      description: description.value,
    };
    console.log(task);
    if ((await newTask(task)) === true) console.log("new task created");
    gettingTasks();
    title.value = "";
    description.value = "";
  } else console.log("falta rellenar");
};

//Cerrar sesion:

const onClick = async () => {
  let logOutResult = await logOut();
  if (logOutResult === true) {
    console.log("log out ok");
    router.push({ name: "login" });
    authStore.logout();
    console.log(authStore.id);
  } else {
    console.log("a problem with the action");
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
height: 730px;
margin-bottom: -5%;

}

.container-button {
max-height: 120px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
background-color: none;
background-color:rgba(129, 150, 120, 0.307);
margin-top: 60px;
padding-top: 20px;
padding-bottom: 20px;
}

.separacion {
    height: 10px;
}

.column-style {
  padding: 30px;
  margin: 10px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction:column;
  align-content: flex-start;
  border: 1PX;
  border-style:dashed;
}

.buttons-group {
  margin-top: 10px;
}

.container-task-repo {
max-width: 700px;
width: 75%;
}

.text-task-repo {
  margin-bottom: 30px;
  text-align: center;
  font-weight: 800;
}
.text-task-repo-dos {
  text-align: center;
  font-weight: 800;
  color: white;
}

</style>