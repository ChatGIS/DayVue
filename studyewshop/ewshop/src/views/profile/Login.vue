<template>
  <div>
    <nav-bar>
      <template v-slot:default>用户登录</template>
    </nav-bar>

    <div style="margin-top: 50px">
      <div style="text-align: center; padding-top: 50px">
        <van-image
            width="10rem"
            height="10rem"
            fit="contain"
            src="https://www.lmonkey.com/_nuxt/img/logo.ca1ae0c.png"
        />
      </div>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
              v-model="email"
              name="用户名"
              label="用户名"
              placeholder="用户名"
              :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
              v-model="password"
              type="password"
              name="密码"
              label="密码"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px;">
          <div class="link-login" @click="$router.push({path:'/register'})">
            没有账号，立即注册
          </div>
          <van-button round block type="primary" color="#44b883" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import {reactive, toRefs} from "vue";
import {login} from "network/user";
import { Notify, Toast  } from 'vant';
import {useRouter} from "vue-router";
import {useStore} from 'vuex';

export default {
  name: "Login",
  components: {
    NavBar
  },
  setup() {
    const router = useRouter();
    const store =useStore();
    const userInfo = reactive({
      email:'',
      password:''
    })

    const onSubmit = () => {
      login(userInfo).then(res => {
        // 将token保存在本地window.localStorage   setItem(key, value)  getItem(key)
        console.log(res.data.access_token);
        window.localStorage.setItem('token', res.data.access_token)
        // 在vuex isLogin
        store.commit('setIsLogin', true);

        Toast.success('登录成功');
        userInfo.email = '';
        userInfo.password = '';

        setTimeout(() => {
          router.go(-1)
        }, 500)
      })
    }

    return {
      ...toRefs(userInfo),
      onSubmit
    }
  }
}
</script>

<style scoped>
  .link-login {
    font-size: 14px;
    margin-bottom: 20px;
    color: #42b983;
    display: inline-block;
    float: left;
  }
</style>