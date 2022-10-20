<template>
  <h1>Task App</h1>
  <ul>
        <li>
            <router-link :to="{name: 'home'}">Home</router-link>
        </li>
        <li>
            <router-link :to="{name: 'login'}">Login</router-link>
        </li>
    </ul>
    <router-view></router-view>
</template>

<script setup>
import { onMounted } from 'vue';
import { login, newTask } from './api/index'

onMounted(async () => {

    // const id = await login('gj19852019@gmail.com', '1234567');
    // newTask({
    //   user_id: id,
    //   title: 'Titulo',
    //   description: 'descripcion del task',
    // })
    
})

</script>
<style scoped>
</style>