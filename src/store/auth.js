import { defineStore } from 'pinia'
import { login } from '../api'

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            isAuth: false,
            id: undefined
        }
    },

    actions: {
        login(id) {
            this.id = id
            this.isAuth = true

            
        },
        logout() {
          this.id = undefined,
          this.isAuth = false
            
        }

      },
      persist: {
        enabled: true,
        strategies: [
          {
            key: "user",
            storage: localStorage,
          },
        ],
      },
    
    })   




