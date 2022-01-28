<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover" style="height: 300px; margin: 10px; margin-top: 30px;">
        <div class="user" style="height: 50%; width: 100%">
          <img :src="require('../assets/images/mengshisan.jpg')" alt="">
          <div class="userinfo">
            <p class="name">admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2022-02-26</span></p>
          <p>上次登录地点：<span>天津市</span></p>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style lang="scss" scoped>
  .user {
    display: flex;
    align-items: center;
    img {
      width: 140px;
      height: 140px;
      border-radius: 20%;
    }
    .userinfo {
      flex: 1;
      padding-left: 40px;
      font-size: 14px;
      color: #999;
    }
    .name {
      font-size: 30px;
      color: #222;
    }
  }

  .login-info {
    height: 100px;
    p {
      font-size: 14px;
      color: #999;
      line-height: 25px;
      margin-left: 75px;
      text-align: left;
    }
    span {
      margin-left: 70px;
    }
  }
</style>