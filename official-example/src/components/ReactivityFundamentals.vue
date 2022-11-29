<script setup lang='ts'>
import { reactive } from 'vue';

const state = reactive({ count: 0 })

const increment = () => {
    state.count++
}
</script>

<template>
    <div>
        <h1>响应式基础</h1>
        <h2>声明响应式状态</h2>
        <button @click="increment">{{ state.count }}</button>
        <h2>用ref()定义响应式变量</h2>
        
    </div>
</template>

<style scoped>

</style>