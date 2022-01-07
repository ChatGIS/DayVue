<template>
  <div>
    <nav-bar>
      <template v-slot:default>图书兄弟</template>
    </nav-bar>
  </div>
  
  <div class="banners">
    <img src="~assets/images/CHFLQQx675.jpg" alt="">
  </div>

  <recommend-view :recommends="recommends"></recommend-view>

  <tab-control @tabClick="tabClick" :titles="['畅销', '新书', '精选']"></tab-control>

  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
  {{temid}}<br>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import RecommendView from "./ChildComps/RecommendView";
  import TabControl from "components/content/tabControl/TabControl";
  import {getHomeAllData} from "network/home";
  import {ref, reactive,onMounted} from "vue";

  export default {
    name: "Home",
    components: {
      NavBar,
      RecommendView,
      TabControl
    },
    setup() {
      // 临时变量
      let temid = ref(0);
      const recommends = ref([]);

      onMounted(() => {
        getHomeAllData().then(res => {
          recommends.value = res.data.goods.data;
        })
      })

      const tabClick = (index) => {
        temid.value = index;
      }

      return {
        recommends,
        temid,
        tabClick
      }
    }
  }
</script>

<style scoped>
  .banners img {
    width: 100%;
    height: auto;
    margin-top: 45px;
  }
</style>