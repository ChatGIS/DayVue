<template>
  <el-dialog v-model="dialogFormVisible" :title="type == 'add' ? '添加网站' : '修改网站'">
    <el-form :model="form" ref="formRef">
      <el-form-item label="网站名称1">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="网站地址">
        <el-input v-model="form.url" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="网站类型">
        <el-select v-model="form.urlType" placeholder="请选择网站类型">
          <el-option label="官网" value="官网"></el-option>
          <el-option label="个站" value="个站"></el-option>
          <el-option label="GitHub" value="GitHub"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="submitForm">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import {reactive, toRefs, ref} from "vue";
import axios from "axios";
import {ElMessage} from "element-plus";

export default {
  name: "DialogAddWeb",
  props: {
    type: String,
    reload: Function
  },
  setup(props) {
    const formRef = ref(null)
    const state = reactive({
      dialogFormVisible: false,
      form: {
        name: '',
        url: '',
        urlType: '',
        date2: '',
        delivery: false,
        type1: [],
        resource: '',
        desc: '',
      },
      id: '',
    })

    // 开启弹窗
    const open = (id) => {
      state.dialogFormVisible = true
      if (id) {
        state.id = id
        getDetail(id)
      } else {
        state.form.name = ''
        state.form.url = ''
        state.form.urlType = '官网'
      }

    }

    // 关闭弹窗
    const close = () => {
      state.dialogFormVisible = false
    }

    // 获取详情
    const getDetail = (id) => {
      axios.get(`/api/web/getById/${id}`).then(res => {
        state.form.name = res.data.name
        state.form.url = res.data.url
        state.form.urlType = res.data.type
      }).catch(function (error) {
        console.log(error)
      })
    }

    // 提交
    const submitForm = () => {
      formRef.value.validate((valid) => {
        if (valid) {
          console.log("aaa")
          if (props.type == 'add') {
            axios.post('/api/web/add', {
              name: state.form.name,
              url: state.form.url,
              type: state.form.urlType
            }).then(() => {
              ElMessage.success('添加成功')
              state.dialogFormVisible = false
              if (props.reload) props.reload()
            })
          } else {
            axios.post('/api/web/update', {
              name: state.form.name,
              url: state.form.url,
              type: state.form.urlType,
              id: state.id
            }).then(() => {
              ElMessage.success('修改成功')
              state.dialogFormVisible = false
              if (props.reload) props.reload()
            })
          }
        }
      })
    }

    return {
      ...toRefs(state),
      open,
      close,
      formRef,
      submitForm,
      getDetail
    }
  }
}
</script>

<style scoped>

</style>