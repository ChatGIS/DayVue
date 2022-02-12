<template>
  <div class="login-container">
    <el-form ref="formRef" :model="form" class="login-form">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-icon :size="20" class="svg-container">
        <edit />
      </el-icon>
      <el-form-item label="Activity name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-icon :size="20" class="svg-container">
        <edit />
      </el-icon>
      <el-form-item label="Activity name">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
/*export default {
  name: "index"
}*/
  import { ref } from 'vue'
  import { Edit } from '@element-plus/icons-vue'
  const form = ref({
    name: "aaa",
    password: "123456"
  })
</script>

<style lang="scss" scoped>
  $bg: #2d3a4b;
  $dark-gray: #889aa4;
  $light-gray: #eee;
  $cursor: #fff;

  .login-container {
    min-height: 100%;
    width: 100%;
    background-color: $bg;
    overflow: hidden;

    .login-form {
      position: relative;
      width: 520px;
      max-width: 100%;
      padding: 160px 35px 0;
      margin: 0 auto;
      overflow: hidden;

      ::v-deep .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #454545;
      }
    }
  }
</style>