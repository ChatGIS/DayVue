<script setup lang='ts'>
import { ref } from 'vue'

const awesome = ref(true)

</script>

<template>
    <div>
        <button @click="awesome = !awesome">Toggle</button>
        <h1 v-if="awesome">Vue is awesome!</h1>
        <h1 v-else>Oh no</h1>

        <h1 v-show="awesome">v-show</h1>
    </div>
</template>
<style scoped>

</style>