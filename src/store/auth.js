import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            isAuth: false,
            id: undefined
        }
    },
    actions: {
        login() {
            // TODO cambiar el estado  de autenticacion e id del usuario
        },

        logout(){
            // TODO cambiar el estado de autenticacion e id del usuario
        }
    }
})