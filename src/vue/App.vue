<template>
    <div class="main-container">
        <Top />
        <Content />
    </div>
</template>

<script lang="ts">

import Top from "./components/top/Top.vue";
import Content from "./components/content/Content.vue";

export default ({
    name: 'App',
    components: {
        Top,
        Content
    }
})

</script>

<style scoped>

.main-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-image: url("../assets/images/bg.jpg");
    background-size: contain;
}

</style>