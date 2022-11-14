<template>
  <el-card>
    <el-row :gutter="20" class="header">
      <el-col :span="7">
        <el-input :placeholder="按名称模糊搜索"
                  clearable
                  v-model="queryForm.query"></el-input>
      </el-col>
      <el-col :span="2"><el-button type="primary" :icon="Search" @click="initPostList">查询</el-button></el-col>
      <el-col :span="15">
        <el-tag :index="item.id" class="ml-2" v-for="item in tags" @click="getPostsByTag(item.id)">{{item.name}}</el-tag>
      </el-col>
    </el-row>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="id" width="100" />
      <el-table-column prop="name" label="Name"/>
      <el-table-column prop="address" label="Address">
        <template v-slot="{ row }">
          <el-link type="primary" :href="row.weburl + row.posturl" target="_blank">{{row.weburl + row.posturl}}</el-link>
        </template>
      </el-table-column>
      <el-table-column>
        <template v-slot="{ row }">
          <el-button @click="openPost(row.id, row.name)">打开</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        v-model:currentPage="queryForm.pagenum"
        v-model:page-size="queryForm.pagesize"
        :page-sizes="[10, 50, 100, 200]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total=total
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </el-card>
</template>

<script lang="ts" setup>
import Type from '../../components/type/index.vue'
import { getPosts } from '../../api/posts'
import {getTags} from '../../api/tag'
import { reactive, ref } from 'vue'
import {useRouter} from "vue-router";
const router = useRouter()

// 总数
const total = ref()
// 表格数据
const tableData = ref([])
// 查询条件
const queryForm = ref({
  query: '',
  pagenum: 1,
  pagesize: 10,
  tag: 0
})
const tags = ref([])
// 初始化帖子列表
const initPostList = async () => {
    const res = await getPosts(queryForm.value)
    total.value = res.total
    tableData.value = res.posts
}
initPostList()

// 调整每页数量
const handleSizeChange = (val: number) => {
  queryForm.value.pagesize = val
  initPostList()
}

// 切换当前页
const handleCurrentChange = (val:number) => {
  queryForm.value.pagenum = val
  initPostList()
}

// 打开帖子
function openPost(id, name){
  router.push({
    path:'/my',
    query: {
      id,
      name
    }
  })
}

// 初始化标签
const initTags = async () => {
  const res = await getTags()
  tags.value = res.tags
}

// 按标签查看
const getPostsByTag = (tag:number) =>{
  queryForm.value.tag = tag
  initPostList()
}
initTags()
</script>

<style scoped>
.el-avatar {
    --el-avatar-text-color: #fff;
    --el-avatar-bg-color: #f4f6f7;
}
.webcard {
    margin: 5px;
}
.el-tag {
  margin: 0 10px;
}
</style>
