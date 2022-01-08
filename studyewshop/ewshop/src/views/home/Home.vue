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

  <goods-list :goods="showGoods"></goods-list>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import RecommendView from "./ChildComps/RecommendView";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import {getHomeAllData, getHomeGoods} from "network/home";
  import {ref, reactive,onMounted, computed} from "vue";

  export default {
    name: "Home",
    components: {
      NavBar,
      RecommendView,
      TabControl,
      GoodsList
    },
    setup() {
      const recommends = ref([]);

      // 商品列表数据模型
      const goods = reactive({
        sales:{page:0, list:[]},
        new:{page:0, list:[]},
        recommend:{page:0, list:[]},
      });

      let currentType = ref('sales');
      const showGoods = computed(()=>{
        return goods[currentType.value].list;
      })

      onMounted(() => {
        getHomeAllData().then(res => {
          recommends.value = res.data.goods.data;
        })

        getHomeGoods('sales').then(res=>{
          goods.sales.list = res.data.goods.data;
        })
        getHomeGoods('recommend').then(res=>{
          goods.recommend.list = res.data.goods.data;
        })
        getHomeGoods('new').then(res=>{
          goods.new.list = res.data.goods.data;
        })
        console.log(goods);
      })

      // 点击选项卡，实现切换
      const tabClick = (index) => {
        let type = ['sales', 'new', 'recommend'];
        currentType.value = type[index];
      }

      return {
        recommends,
        tabClick,
        goods,
        showGoods
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