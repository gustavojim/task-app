import { defineStore } from 'pinia'
import { updateTask, newTask, deleteTask, getTasks } from '../api/index'

export const useTaskStore = defineStore('task', {
    state: () => {
        return {
            tasks: []
        }
    },



    actions: {

        async setTask() {
            //TODO guardar en el stado las task que nos de supabase
            const response = await getTasks();
			this.tasks = await response;
			console.log(this.tasks);
        },

        updateTask(id, task) {
            // TODO modificar el estado de la task
            // Encontrar el indice de la task con ese id y cambiar su contenido con task
        },

        deleteTask(id) {
            // TODO modificar el estado borrando esa task
            // Encontramos el indice de ese id y eliminamos ese indice de la array
            const findIndex = this.tasks.findIndex((elem) => {
				return elem.id === id;
			});
			console.log("este es el index", findIndex);
			return this.tasks.splice(findIndex, 1);
        },

        async addTask(task) {
            // TODO modificar el estado de task haciendo un push de la task
            // Comprobar que tenemos el id al insertar el registro, en caso de no tenerlo tendriamos que hacer el getTask
            const response = await getTasks();
			this.tasks = await response;
        }
    },

    persist: {
		enabled: true,
		strategies: [
			{
				key: "task",
				storage: localStorage,
			},
		],
	},
});



    