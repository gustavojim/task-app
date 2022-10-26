<template>


<div class="card">
      <div v-if="!updateTask1" >
    <header :class="{ 'card-header header': true, '': !task.done }" >
       <div class="container container-card ">
      
        <p :class="{ 'done': task.done, '': !task.done }">          
          {{ task.title }}
      </p>
      
    </div>

    </header>
    <div :class="{ 'done': task.done, '': !task.done }">
      <div class="content subtitle is-6 content-style ">
          {{ task.description }}
     
<div class="separacion"></div>
      </div>



    </div>
    <div class="">
    <footer class="field is-grouped box-buttons">


				<button
					:class="{'card-footer-item button is-normal is-success is-light button-general ': !task.done, 'button-done disabled:true': task.done }"
					@click="updateDone(props.task.id)"
				>
                <i class="fa-solid fa-clock"></i>&nbsp;&nbsp;Done
				</button> 


                <button
					:class="{'button-done disabled:true ': !task.done, 'card-footer-item button is-outlined is-normal  button-general': task.done }"
					@click="updateDone(props.task.id)"
				>
                <i class="fa-solid fa-rotate-right"></i>&nbsp;&nbsp;UnDone
				</button>

				<button
					
                class="button-general-a card-footer-item is-link is-normal  is-light  button"
					@click="clickToUpdate(props.task.id)"
				>

               <i class="fa-solid fa-pen"></i>
                
				</button>
    
                <button
					class="card-footer-item is-normal  button button-general-a is-danger is-light"
					@click="deleteThisTask(props.task.id)"
				>
					<i class="fa-solid fa-trash"></i>
				</button>


    </footer>
</DIV>
  </div>
  
  <div v-if="updateTask1" class="card">
      <header class="card-header card-header-style header">
          <input v-model="newTitle"
          class="input m-4"
          type="text"
          placeholder="New Title">
      </header>
  

          <textarea
          v-model="newDescription"
          class="textarea has-fixed-size text-area-edit"
          placeholder="New Description"
        ></textarea>
        

      <footer class="card-footer card-edit-footer">
      
      <a href="#" @click="updateThisTask(task.id, newDescription.value, newTitle.value)" class="card-footer-item card-edit button is-outlined is-warning is-rounded "><i class="fa-solid fa-floppy-disk"></i></a>
      <a href="#" @click="clickToUpdate" class="card-footer-item card-edit button is-outlined is-warning is-rounded">Cancel</a> 
      
    </footer>
    </div>
</div>
  



  </template>
  <script setup>
  import { useTaskStore } from "../store/task";
  import { ref } from "vue";
  import { updateTask, deleteTask, getTasks } from "../api/index";

  const props = defineProps(["task"]);
  const newTitle = ref(props.task.title);
  const newDescription = ref(props.task.description);
  const taskStore = useTaskStore();
  const updateTask1 = ref(false);
  

//   const doneTask = ref();
  const gettingTasks = async () => {
    const response = await getTasks();
    taskStore.setTasks(response);
  };
  const deleteThisTask = async (id) => {
    if ((await deleteTask(id)) === true) {
      taskStore.deleteTask(id);
    }
    location.reload();
  };
  const clickToUpdate = () => {
    console.log(updateTask1.value);
    return (updateTask1.value = !updateTask1.value);
  };

  const updateThisTask = async () => {
    let updatedTask2 = {
      title: newTitle.value,
      description: newDescription.value,
  
    };
    if ((await updateTask(props.task.id, updatedTask2)) === true) {
      updateTask1.value = !updateTask1.value;
      taskStore.updateTask(props.task.id, updatedTask2);
    }
  };

  const updateDone = async () => {
    const newDone = ref(props.task.done);

    let updatedTask2 = {
      done: !newDone.value,
      title: newTitle.value,
      description: newDescription.value,
    
    };
    console.log("New value: "+updatedTask2.done);
    if ((await updateTask(props.task.id, updatedTask2)) === true) {
      taskStore.updateTask(props.task.id, updatedTask2);
    }
    location.reload();
  };

  </script>
  <style scoped>
  
  .done {
    background-image: url("../Images/diagonal-background.png");
    background-size: 90%;
    background-position: center;
    border-radius: 5px;
  }

.done-card-header {
    background-color: aquamarine;
}




  .header {
      background-color: transparent;
    
  }


.container-card {
  width: 100%;

}




.card-header-title {
	background-color: rgba(187, 188, 160, 0.315);
	border-radius: 5px;

}


.card-content {
	background-color: rgba(255, 255, 255, 0.3);
}

.done .card-content {
	background-color: rgba(168, 251, 12, 0.3);

}

.button-done {
display:none;
}

.button-general {
  margin: 5px;
  padding: 10px;
  font-weight: 300;
  max-width: 60%;
}
.button-general-a {
  margin: 5px;
  padding: 10px;
  font-weight: 300;
  max-width: 20%;
}


.box-buttons {
max-width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
}

.content-style {
margin: 10px;
margin-top: 20px;
margin-bottom: 20px;
padding-top: 10px;
padding-bottom: 10px;
}

.card-edit {
height: 50px !important;
max-width: 100px !important;
margin: 5px;
}

.card-edit-footer {
display: flex;
justify-content: center;
background-color: rgb(171, 169, 160);
margin-top: 5px;

}

.text-area-edit {

min-height: 150px ;
background-color: rgb(237, 237, 237);
font-family: 'Roboto', sans-serif;

}

.card-header-style {
    background-color: rgb(171, 169, 160);
    margin-bottom: 5px;
    font-family: 'Roboto', sans-serif;
}


  </style>