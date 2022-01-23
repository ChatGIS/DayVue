<template>
  <header>
    <div class="l-content">
      <el-button plain>
        <el-icon size="mini">
          <icon-menu />
        </el-icon>
      </el-button>
      <h3>首页</h3>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span class="el-dropdown-link">
          <img :src="require('../assets/images/mengshisan.jpg')" alt="" class="user">
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import {
  Edit,
  Search,
  Menu as IconMenu,
} from '@element-plus/icons-vue'

export default {
  name: "CommonHeader",
  components: {
    Edit,
    Search,
    IconMenu
  }
}
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }

  .l-content {
    display: flex;
    align-items: center;
    .el-button {
      margin-right: 20px;
    }
  }

  .r-content {
    .user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
</style>