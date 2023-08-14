<template>
    <div class="top-container">
        <h1>Vue - TypeScript - Webpack</h1>
        <p>custom font</p>
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
    flex-direction: column;
    width: 100%;
    height: 100px;
    background-color: #222;
    
}

h1 {
    width: 100%;
    text-align: center;
    color: #f2f2f2;
}

.top-container p {
    font-family: 'Arial';
    font-size: 20px;
    font-family: 'Gameria';
    color: #f2f2f2;
}

</style>