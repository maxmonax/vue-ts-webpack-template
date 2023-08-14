<template>
    <div class="content-container">
        <img src="../../../assets/images/vue.png" alt="Vue Logo">
    </div>
</template>

<script lang="ts">

export default ({
    name: 'Content'
})

</script>

<style scoped>
.content-container {
    display: flex;
    width: 100%;
    height: 100%;
    background-image: url("../../../assets/images/bg.jpg");
    background-size: contain;
    background-position: bottom;
}

</style>