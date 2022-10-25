<template>

<div>
<i class="fa-regular fa-clock icon-estilo"></i>
</div>

</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { logOut, } from "../api/index";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";
import { storeToRefs } from "pinia";
import { useTaskStore } from "../store/task";
import TaskList from "../components/TaskList.vue"

const authStore = useAuthStore();
const router = useRouter();

</script>

<style scoped>
.icon-estilo {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

</style>