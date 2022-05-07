<template>
    <div class="type-container">
        <span :class="tagSelectedArr.includes(0) ? 'active' : ''" @click="emitTypeSelected(0)"
            >综合</span
        >
        <span
            :class="tagSelectedArr.includes(item.id) ? 'active' : ''"
            v-for="(item, index) in dicts"
            @click="emitTypeSelected(item.id)"
            >{{ item.name }}</span
        >
    </div>
</template>

<script setup>
import { getTag } from '../../api/tag'
import { ref, defineEmits } from 'vue'
// 定义存放字典值的对象
const dicts = ref([])
// 声明emit
const emit = defineEmits(['selectedType'])
// 定义数组用于存放已选择的标签，可根据是否包含在该数组设置标签样式，默认值是：[0]
let tagSelectedArr = ref([0])
// 获取标签条件
const param = {
    query: '',
    pagenum: 1,
    pagesize: 100,
}
// 获取类型
const getType = async () => {
    const res = await getTag(param)
    dicts.value = res.tags
}
getType()
// 标签点击
const emitTypeSelected = (val) => {
    // 如果点击“综合”标签，直接显示全部
    if (val == 0) {
        tagSelectedArr.value = [0]
    } else {
        // 如果当前已选择标签只要“综合”，且选择其他时，则去掉“综合”
        if (tagSelectedArr.value.length == 1 && tagSelectedArr.value.includes(0)) {
            tagSelectedArr.value = []
        }
        // 根据选择标签是否包含当前选择标签，如果包含则删除，如果没有则添加，用于实现标签的选中与否
        if (tagSelectedArr.value.includes(val)) {
            let index = tagSelectedArr.value.indexOf(val)
            tagSelectedArr.value.splice(index, 1)
        } else {
            tagSelectedArr.value.push(val)
        }
        // 如果当前选择标签为空，则默认选择“综合”
        if (tagSelectedArr.value.length == 0) {
            tagSelectedArr.value = [0]
        }
    }
    // 发送选择标签到父组件
    emit('selectedType', tagSelectedArr.value)
}
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
