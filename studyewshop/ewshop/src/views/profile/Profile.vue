<template>
  <div>
    <nav-bar>
      <template v-slot:default>个人中心</template>
    </nav-bar>

    <div style="margin:15px;margin-top:100px">
      <van-button @click="tologout" round block color="#43ba80">退出</van-button>
    </div>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {logout} from "network/user";
  import { Toast  } from 'vant';
  import {useRouter} from "vue-router";
  import {useStore} from 'vuex';

  export default {
    name: "Profile",
    components: {
      NavBar
    },
    setup() {
      const router = useRouter();
      const store =useStore();

      const tologout = () => {
        logout().then(res => {
          Toast.success('退出成功');

          // 清除token
          window.localStorage.setItem('token', '')

          store.commit('setIsLogin', false);


          setTimeout(() => {
            router.push({
              path:'/login'
            })
          }, 500)
        })
      }

      return {
        tologout
      }
    }
  }
</script>

<style scoped>

</style>