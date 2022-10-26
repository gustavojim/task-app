import { defineStore } from 'pinia'
import { updateTask, newTask, deleteTask, getTasks } from '../api/index'


export const useTaskStore = defineStore('task', {
    state: () => {
        return {
            tasks: []
        }
    },


    actions: {
 setTasks(tasks) {
    this.tasks = tasks;

  },
  

  doneTask(id, state) {
    let index = this.tasks.findIndex((item) => item.id === id)
    this.tasks[index].is_completed = state;
  },

  updateTask(id, task) {
    
    let index = this.tasks.findIndex((item) => item.id === id)
    this.tasks[index].title = task.title
    this.tasks[index].description = task.description
   

  },

  deleteTask(id) {
    let index = this.tasks.findIndex((item) => item.id === id);
    this.tasks.splice(index, 1);
    console.log(this.tasks);

  },
},
persist: {
  enabled: true,
},
});