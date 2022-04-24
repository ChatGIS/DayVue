<template>
    <div>
        <el-button type="text" v-for="(item, index) in dicts">{{ item.name }}</el-button>
    </div>
</template>

<script setup>
import { getDict } from '../../api/dictionary'
import { ref } from 'vue'

const dicts = ref([])
const getType = async () => {
    const res = await getDict()
    dicts.value = res.dicts
}

getType()
</script>

<style scoped></style>
