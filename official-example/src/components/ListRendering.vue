<script setup lang='ts'>
import { ref } from 'vue'

const items = ref([{msg: '张三'}, {msg: '李四'} ])
</script>

<template>
    <div>
        <li v-for="item in items">
            {{ item.msg }}
        </li>
    </div>
</template>

<style scoped>

</style>