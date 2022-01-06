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
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import RecommendView from "./ChildComps/RecommendView";
  import {getHomeAllData} from "network/home";
  import {ref, reactive,onMounted} from "vue";

  export default {
    name: "Home",
    components: {
      NavBar,
      RecommendView
    },
    setup() {
      const recommends = ref([]);

      onMounted(() => {
        getHomeAllData().then(res => {
          recommends.value = res.data.goods.data;
        })
      })

      return {
        recommends
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