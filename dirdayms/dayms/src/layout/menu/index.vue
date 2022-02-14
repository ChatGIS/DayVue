<template>
  <el-menu
      :active-text-color="variables.menuActiveText"
      :background-color="variables.menuBg"
      class="el-menu-vertical-demo"
      :default-active=defaultActive
      text-color="#fff"
      unique-opened
      router
  >
    <el-sub-menu :index="item.id" v-for="item in menusList" :key="item.id">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{item.authName}}</span>
      </template>
      <el-menu-item :index="'/' + it.path" v-for="it in item.children"
                    :key="it.id"
                    @click="savePath(it.path)">
        {{it.authName}}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { menuList } from '@/api/menu'
import {ref} from "vue";
import variables from '@/styles/variables.scss'

const defaultActive = ref(sessionStorage.getItem('path') || '/users')
const menusList = ref([])
const initMenuList = async () => {
  menusList.value = await menuList()
}
initMenuList()

// 点击保存路径
const savePath = (path) => {
  sessionStorage.setItem('path', `/${path}`)
}
</script>

<style lang="scss" scoped>

</style>