<template>
<div class="section">
  <div class="container is-fluid ">
<!-- <progress class="progress is-medium is-dark" max="100">100%</progress> -->
<br>
<h1 class="title">Poco@pocO</h1>
<h2 class="subtitle">!Dale orden a tu vida!</h2>
<h3 class="subtitle is-5">Registrate con tus datos:</h3>
</div>
</div>
<div class="section">
        <div class="container is-fluid ">
            <form @submit.prevent="onSubmit">     
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input v-model="email" class="input is-danger is-focused" type="email" placeholder="email">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                        <input v-model="password" class="input is-danger is-focused" type="password" placeholder="password">
                    </div>
                </div>
                <div class="field">
                  <br>
                  <br>
                    <div class="control">
                        <input class="button is-medium is-responsive is-rounded is-focus is-dark is-large" type="submit" placeholder="Text input">
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div class="section">
  <div class="container is-fluid ">
<!-- <progress class="progress is-medium is-dark is-light" max="100">100%</progress> -->
</div>
</div>

</template>

<script setup>










</script>

<style scoped>
</style>