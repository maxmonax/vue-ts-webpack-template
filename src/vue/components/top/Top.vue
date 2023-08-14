<template>
    <div class="top-container">
        <h1>Vue - TypeScript - Webpack</h1>
    </div>
</template>

<script lang="ts">

export default ({
    name: 'Top'
})

</script>

<style scoped>
.top-container {
    display: flex;
    width: 100%;
    height: 100px;
    background-color: #222;
}

h1 {
    width: 100%;
    text-align: center;
    color: #f2f2f2;
}
</style>