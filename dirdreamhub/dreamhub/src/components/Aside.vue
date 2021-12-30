<template>
<!--  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group>-->
  <h3>通用后台管理系统</h3>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router="true"
  >

  <el-menu-item :index="item.path" v-for="item in menu" :key=item.label>
    <el-icon>
      <icon-menu/>
    </el-icon>
    <template #title>{{ item.label }}</template>
  </el-menu-item>
    <!--    <el-sub-menu index="1"  >
          <template #title>
            <el-icon>
              <location/>
            </el-icon>
            <span>{{item.label}}</span>
          </template>
          <el-menu-item-group>
            <template #title><span>Group One</span></template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title><span>item four</span></template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>-->
    <!--        <el-menu-item index="2">
              <el-icon>
                <icon-menu/>
              </el-icon>
              <template #title>Navigator Two</template>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon>
                <document/>
              </el-icon>
              <template #title>Navigator Three</template>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <setting/>
              </el-icon>
              <template #title>Navigator Four</template>
            </el-menu-item>-->
  </el-menu>
</template>

<script scope>
import {defineComponent, ref} from 'vue'
import {
  // Location,
  // Document,
  Menu as IconMenu,
  // Setting,
} from '@element-plus/icons'

export default defineComponent({
  components: {
    /*    Location,
        Document,
        Setting,*/
    IconMenu,
  },
  setup() {
    let _this = this;
    const isCollapse = ref(false)
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const clickMenu = (item) => {
      _this.$router.push({name: item.name})
    }
    const menu = [
      {
        path: '/user',
        name: 'user',
        label: '用户管理',
        icon: 'video-play',
        url: 'MallManage/MallManage'
      },
      {
        path: '/web',
        name: 'web',
        label: '网站管理',
        icon: 'user',
        url: 'UserManage/UserManage'
      }/*,
      {
        label: '其他',
        icon: 'location',
        children: [
          {
            path: '/page1',
            name: 'page1',
            label: '页面1',
            icon: 'setting',
            url: 'Other/PageOne'
          },
          {
            path: '/page2',
            name: 'page2',
            label: '页面2',
            icon: 'setting',
            url: 'Other/PageTwo'
          }
        ]
      }*/]
    /*const noChildren = () => {
      return this.menu.filter((item) => !item.children);
    }*/
    /* const hasChildren = () =>{
       return this.menu.filter((item) => item.children);
     }*/
    return {
      isCollapse,
      handleOpen,
      handleClose,
      menu,
      clickMenu
      // noChildren,
      // hasChildren
    }
  },
})
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
