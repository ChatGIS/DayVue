<template>
    <!--    <img alt="Vue logo" src="./assets/logo.png" />-->
    <!--  <HelloWorld1 msg="Hello Vue 3 + TypeScript + Vite" />-->
    <!--    <Resource></Resource>-->

    <el-container>
        <el-header id="header">
            <div class="header-container">
                <Logo></Logo>
              <Menu></Menu>
            </div>
        </el-header>
        <el-main>
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component"  v-if="$route.meta.keepAlive"/>
            </keep-alive>
            <component :is="Component"  v-if="!$route.meta.keepAlive"/>
          </router-view>
        </el-main>
    </el-container>
</template>
<script setup lang="ts">
import Logo from './components/logo/index.vue'
import Menu from './components/menu/index.vue'
import Search from './components/search/index.vue'
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.el-header {
    border-bottom: solid 1px #e6e6e6;
}
.header-container {
    display: flex;
}

#footer {
    background-color: #ffffff;
}

.el-main {
    min-height: 593px;
    background-color: #f4f5f5;
}

.el-menu--horizontal {
    border-width: 0;
}
.el-main {
    --el-main-padding: 0px;
}
</style>
