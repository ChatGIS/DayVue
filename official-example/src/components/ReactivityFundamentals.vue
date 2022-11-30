<script setup lang='ts'>
import { reactive, ref } from 'vue';

const state = reactive({ count: 0 })
const count = ref(0)
// const count1 = $ref(0)

const increment = () => {
    state.count++
}
 const consoleLog = () => {
    console.log(count)
    console.log(count.value)
    count.value++
    console.log(count.value)
 }
</script>

<template>
    <div>
        <h1>响应式基础</h1>
        <h2>声明响应式状态</h2>
        <button @click="increment">{{ state.count }}</button>
        <h2>用ref()定义响应式变量</h2>
        <button @click="consoleLog">打印ref的值</button>
        <br>
        <span>ref在模板中自动解包，不需要.value; {{ count }}</span>
    </div>
</template>

<style scoped>

</style>