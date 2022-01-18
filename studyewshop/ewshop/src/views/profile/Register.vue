<template>
  <div>
    <nav-bar>
      <template v-slot:default>用户注册</template>
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
              v-model="name"
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
          <van-field
              v-model="password_confirmation"
              type="password"
              name="确认密码"
              label="确认密码"
              placeholder="确认密码"
              :rules="[{ required: true, message: '请填写一致密码' }]"
          />
          <van-field
              v-model="email"
              name="电子邮箱"
              label="电子邮箱"
              placeholder="电子邮箱"
              :rules="[{ required: true, message: '请输入正确的电子邮箱格式' }]"
          />
        </van-cell-group>
        <div style="margin: 16px;">
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
import {register} from "network/user";
import { Notify, Toast  } from 'vant';
import {useRouter} from "vue-router";
export default {
  name: "Register",
  components: {
    NavBar
  },
  setup() {
    const router = useRouter();
    const userInfo = reactive({
      name:'',
      password:'',
      password_confirmation:'',
      email:''
    })

    const onSubmit = () => {
      console.log("ssss")
      // 先验证
      if(userInfo.password != userInfo.password_confirmation) {
        Notify({ type: 'warning', message: '两次密码不一致' });
      //  提交给服务器
      } else {
        register(userInfo).then(res => {
          console.log(res);
          if(res.status == '201') {
            Toast.success('注册成功');
            setTimeout(() => {
              router.push({path:'/login'})
            }, 1000)
          }

          userInfo.password = '';
          userInfo.password_confirmation = '';
        })
      }
    }

    return {
      ...toRefs(userInfo),
      onSubmit
    }
  }
}
</script>

<style scoped>

</style>