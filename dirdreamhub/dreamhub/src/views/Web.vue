<template>
  <el-card class="box-card-web">
    <template #header>
      <div class="card-header">
        <span>网站管理</span>
        <el-row>
          <el-button type="success" size="small" round>查询</el-button>
          <el-button type="primary" size="small" round @click="handleAdd">增加</el-button>
        </el-row>
      </div>
    </template>
    <el-table :data="state.tableData" style="width: 100%">
      <el-table-column prop="id" label="Date" width="180"/>
      <el-table-column prop="name" label="Name" width="180"/>
      <el-table-column prop="url" label="地址"/>
      <el-table-column prop="type" label="类型"/>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
  <dialog-add-web ref="addWeb" :type="state.type" :reload="fetchData"></dialog-add-web>
</template>

<script>
import {onMounted, reactive, ref} from 'vue'
import axios from "axios";
import DialogAddWeb from "../components/DialogAddWeb";

export default {
  name: "Web",
  components: {
    DialogAddWeb,
  },
  setup() {
    // 响应式对象
    const state = reactive({
      tableData: [], // 数据列表
      type: 'add', // 操作类型
    })
    const addWeb = ref(null)

    async function fetchData() {
      axios.get('/api/web/list').then((res) => { // 自定义mock数据
        // var data1 = [];
        // data1[0] = res.data;
        state.tableData = res.data; // 赋值
        console.log(state.tableData);
      }).catch(function (error) {
        console.log(error)
      });
    }

    // 页面加载时候执行
    onMounted(() => {
      state.value = fetchData();
    });

    // 添加
    const handleAdd = () => {
      state.type = 'add'
      addWeb.value.open()
    }
    // 修改
    const handleEdit = (index, row) => {
      console.log(index, row)
      state.type = 'edit'
      addWeb.value.open(row.id)
    }
    // 删除
    const handleDelete = (index, row) => {
      console.log(index, row)
    }

    return {
      state,
      addWeb,
      handleEdit,
      handleAdd,
      handleDelete,
      fetchData
    };
  }
}
</script>

<style scoped>
.card-header {
  display: flex;
  /*justify-content: space-between;*/
  justify-content: start;
  align-items: center;
}

.box-card-web {
  min-height: 100%;
}
</style>