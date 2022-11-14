<template>
    <div class="type-container">
        <span :class="0 == indexBtn ? 'active' : ''" @click="emitTypeSelected(0)">综合</span>
        <span
            :class="item.id == indexBtn ? 'active' : ''"
            v-for="(item, index) in dicts"
            @click="emitTypeSelected(item.id)"
            >{{ item.name }}</span
        >
    </div>
</template>

<script setup>
import { getDict } from '../../api/dictionary'
import { ref, defineEmits } from 'vue'
// 定义存放字典值的对象
const dicts = ref([])
// 声明emit
const emit = defineEmits(['selectedType'])
// 定义点击索引，用于添加active样式，默认值是：0
let indexBtn = ref(0)

// 获取类型
const getType = async () => {
    const res = await getDict()
    dicts.value = res.dicts
}
// 发送类型值到父组件,设置点击样式
const emitTypeSelected = (val) => {
    indexBtn.value = val
    emit('selectedType', val)
}

getType()
</script>

<style scoped>
.type-container {
    background-color: #ffffff;
}

span {
    padding: 0 0.5rem;
}
span:hover {
    color: #42b983;
    cursor: pointer;
}
.active {
    color: #5ca8b5;
    font-weight: bold;
}
</style>
