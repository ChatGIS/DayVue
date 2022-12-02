<script setup lang='ts'>
import { ref } from 'vue';

const isActive = ref(true)
const hasError = ref(false)

</script>

<template>
    <div>
        <h1>Class 与 Style 绑定</h1>
        <div class="static" :class="{active: isActive, 'text-danger': hasError}">
            这是一个div
        </div>
    </div>
</template>

<style scoped>

</style>