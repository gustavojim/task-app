<template>
  <div class="section section-first">
    <div
      class="columns column-box-primary is-flex is-flex-direction-row is-multiline"
    >
      <div
        class="column columns-box-task is-flex is-flex-direction-column is-align-items-center"
      >
        <form class="box m-5m new-task-style" @submit.prevent="onSubmit">
          <h1
            class="tag title is-small is-warning is-light is-flex is-justify-content"
          >
            Create and Save your task
          </h1>
          <input
            v-model="title"
            class="input"
            type="text"
            placeholder="Title"
          />

          <textarea
            v-model="description"
            class="textarea mt-4"
            placeholder="Explain the task"
          ></textarea>

          <div class="button-box">
            <button class="button is-warning is-rounded button-style-save mt-4">
              <i class="fa-solid fa-floppy-disk"></i>
            </button>
          </div>
        </form>

        <br />
        <br />
      </div>


    </div>
  </div>

  <div class="section section-background">
    <div class="container is-flex is-justify-content-center">
      <div class="tag tag-estilo is-large is-warning">
        <i class="fa-solid fa-list-check"></i>
        &nbsp;&nbsp;Review your tasks:
      </div>
    </div>
    <br />
    <br />

    <div class="container">
      <div class="columns is-multiline is-flex is-justify-content-center">
        <div
          v-for="task in tasks"
          class="column column-style is-10-mobile is-5-tablet is-3-desktop"
          :key="task.id"
        >
          <TaskList
            :class="{ 'card-style-done': task.done, 'card-style': !task.done }"
            :task="task"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="footer">
    <div class="container-button">
      <button
        class="button is-success is-rounded is-normal is-responsive"
        @click="onClick"
      >
        <span class="icon">
          <i class="fa-regular fa-hand-peace"></i>
        </span>
        <span>Log out</span>
      </button>

      <span class="separacion"> </span>
      <h1 class="content is-small">Remember to come back soon!</h1>
    </div>
  </div>


  <div class="footer footer-styler is-flex is-justify-content-center flex-direction-row">
    <div class="columns is-multiline is-flex is-justify-content-center">
<p class="columns tag tag-footer-style is-success is-normal"><i class="fa-solid fa-pen"></i>&nbsp;&nbsp;Creada por Gustavo Jim??nez</p>
<a class="columns tag tag-footer-style is-info is-normal" href="https://www.linkedin.com/in/gustavojimeneza/" ><i class="fa-brands fa-linkedin"> </i>&nbsp;&nbsp;Visita mi perdil de Linkedin </a>
</div>
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
import TaskList from "../components/TaskList.vue";

document.addEventListener("DOMContentLoaded", function (event) {
  var scrollpos = sessionStorage.getItem("scrollpos");
  if (scrollpos) {
    window.scrollTo(0, scrollpos);
    sessionStorage.removeItem("scrollpos");
  }
});

window.addEventListener("beforeunload", function (e) {
  sessionStorage.setItem("scrollpos", window.scrollY);
});

const taskStore = useTaskStore();
const authStore = useAuthStore();
const router = useRouter();
const title = ref("");
const titleError = ref(false);
const description = ref("");
const descriptionError = ref(false);
const filter = ref();
const toAdd = ref();

const tasks = computed(() => {
  if (filter.value == 0)
    return taskStore.tasks.filter((task) => task.is_completed);
  if (filter.value == 1)
    return taskStore.tasks.filter((task) => !task.is_completed);
  return taskStore.tasks;
});

const gettingTasks = async () => {
  const response = await getTasks();
  taskStore.setTasks(response);
  console.log(taskStore.tasks);
};
onMounted(async () => {
  await gettingTasks();
});

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
    if ((await newTask(task)) === true) console.log("nueva tarea agregada");
    gettingTasks();
    title.value = "";
    description.value = "";
  } else console.log("from incompleto");
};

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
.section-first {
  background-image: url("../Images/dot-background.jpg");
  background-blend-mode: hue;
  background-size: 40%;
  height: 500px;
}

.quote-style {
  display: inline-block;
  background: rgb(123, 123, 123);
  color: #ffffff;
  padding: 7px;
}

.container-button {
  max-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: none;
  background-color: rgba(129, 150, 120, 0.307);
  margin-top: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.separacion {
  height: 10px;
}

.column-style {
  margin: 10px;
  border-radius: 20px;
}

.card-style-done {
  background-color: #ededed;
  border: 1px;
  border-style: dashed;
  padding: 20px;
}

.card-style {
  background-color: white;
  border: 1px;
  border-style: dashed;
  padding: 20px;
}

.new-task-style {
  width: 100%;
  max-width: 800px;
  background-color: rgba(190, 186, 186, 0.835);
}

.button-style-save {
  width: 70px !important;
  height: 70px !important;
}

.button-box {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 10px;
}

.section-background {
  background-color: rgb(246, 247, 247);
}

.column-box-primary {
  height: 500px;
  margin-left: 5%;
  margin-right: 5%;
}

.column-box-task {
  background-color: white;
  width: 40%;
}

.column-box-phrase {
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Viga", sans-serif;
  font-weight: 800;
  font-size: 20px;
  color: rgb(138, 132, 132);
  margin-left: 30px;
  margin-right: 70px;
  position: sticky;
  height: 400px;
}

.tag-estilo {
  min-width: 290px;
  height: 70px;
}

.tag-footer-style {
  margin: 5px;
}

.footer-styler {
  background-image: url(../Images/diagonal-background-light.png);
 
 
}



@media (max-width: 1200px) {
  .column-box-phrase {
    display: none;
  }
}

@media (max-width: 700px) {
  .column-box-task {
    width: 100%;
  }
}

@media (max-width: 700px) {
  .columns-box-primary {
    display: flex;
    justify-content: center;
  }
}
</style>
