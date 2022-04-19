<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld1 from './components/HelloWorld1.vue'
/*import Resource from './views/index.vue'*/
import Menu from './components/menu/index.vue'
</script>

<template>
    <!--    <img alt="Vue logo" src="./assets/logo.png" />-->
    <!--  <HelloWorld1 msg="Hello Vue 3 + TypeScript + Vite" />-->
    <!--    <Resource></Resource>-->

    <el-container>
        <el-header id="header">
            <!--            <router-link to="/resource">资源</router-link>
            <router-link to="/my">我的</router-link>-->
            <Menu></Menu>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer id="footer">Footer</el-footer>
    </el-container>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#footer {
    background-color: #5ca8b5;
}
</style>
