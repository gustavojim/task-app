<template>
  <h1></h1>
  <NavBar></NavBar>
    <router-view> </router-view>
</template>

<script setup>
import { onMounted } from 'vue';
import {createClient} from '@supabase/supabase-js'
import NavBar from "../src/components/NavBar.vue"
import { login, newTask} from './api'
import { useAuthStore } from './store/auth'
import { useRouter } from 'vue-router'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)
const authStore = useAuthStore();
const router = useRouter();

onMounted(async () => {
    if (!authStore.isAuth) {
    router.push( {name: 'login'})
}
})

</script>

<style scoped>
</style>