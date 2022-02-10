<template>
    <el-container>
      <common-aside></common-aside>
      <el-container>
        <el-header><common-header></common-header></el-header>
        <div class="content"> <router-view/></div>

      </el-container>
    </el-container>
</template>

<script>
// @ is an alias to /src
import CommonAside from "@/components/CommonAside";
import CommonHeader from "@/components/CommonHeader";

export default {
  name: 'Main',
  components: {
    CommonAside,
    CommonHeader
  }
}
</script>
<style lang="scss" scoped>
  .content {
    width: auto;
    height: 100%;
    padding: 10px;
    overflow-y: scroll;
    box-sizing: border-box;
    background-color:#f0f0f0;
  }
  .el-container {
    height: 100vh;
    margin: 0px;
    padding: 0px;
  }

  .el-header {
    color: #FFFFFF;
    background-color: #333;
  }

  .el-main {
    padding-top: 0px;
    background-color: #e9eef3;
    color: var(--el-text-color-primary);
    text-align: center;
    //line-height: 160px;
  }

  .el-footer {
    background-color: #b3c0d1;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 60px;
  }

  .el-footer {
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: var(--el-text-color-primary);
    text-align: center;
    //line-height: 200px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>