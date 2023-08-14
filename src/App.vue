<template>
    <div class="main-container">
        <h1>Vue - TypeScript - Webpack</h1>
        <img src="./assets/images/vue.png" alt="Vue Logo">
    </div>
</template>

<script lang="ts">

export default ({
    name: 'App'
})

</script>

<style scoped>

.main-container {
    width: 100%;
    height: 100vh;
    background-image: url("./assets/images/bg.jpg");
    background-size: contain;
}

h1 {
    width: 100%;
    text-align: center;
    color: #f2f2f2;
}

</style>