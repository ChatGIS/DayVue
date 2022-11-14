<template>
    <h1>{{route.query.id}}{{route.query.name}}</h1>
    <el-image v-for="(item, index) in tableData" :src="item.url" fit="scale-down" />
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router'
import { getPosts, getPics } from '../../api/posts'
import {ref} from "vue";
const route = useRoute()
// 表格数据
const tableData = ref([])
// 查询条件
const queryForm = ref({
  "id":route.query.id
})

const initGetUsersList = async () => {
  const res = await getPics(queryForm.value)
  tableData.value = res.pic
}

initGetUsersList()
</script>

<style scoped>
.el-image{
  height: 900px;
  width: 900px;
}
</style>
