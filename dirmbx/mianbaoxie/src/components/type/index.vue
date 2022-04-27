<template>
    <div class="type-container">
        <el-button type="text" @click="emitTypeSelected(0)">综合</el-button>
        <el-button type="text" v-for="(item, index) in dicts" @click="emitTypeSelected(item.id)">{{
            item.name
        }}</el-button>
    </div>
</template>

<script setup>
import { getDict } from '../../api/dictionary'
import { ref, defineEmits } from 'vue'

const dicts = ref([])
// 声明emit
const emit = defineEmits(['selectedType'])
const getType = async () => {
    const res = await getDict()
    dicts.value = res.dicts
}
// 发送类型值到父组件
const emitTypeSelected = (val) => {
    emit('selectedType', val)
}

getType()
</script>

<style scoped>
.type-container {
    background-color: #ffffff;
}
</style>
