<template>
  <div id="home">
    <nav-bar>
      <template v-slot:default>图书兄弟</template>
    </nav-bar>

    <div class="wrapper">
      <div class="content">
        <div class="banners">
          <img src="~assets/images/CHFLQQx675.jpg" alt="">
        </div>

        <recommend-view :recommends="recommends"></recommend-view>

        <tab-control @tabClick="tabClick" :titles="['畅销', '新书', '精选']"></tab-control>

        <goods-list :goods="showGoods"></goods-list>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import RecommendView from "./ChildComps/RecommendView";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import {getHomeAllData, getHomeGoods} from "network/home";
  import {ref, reactive,onMounted, computed, watchEffect, nextTick} from "vue";
  import BScroll from 'better-scroll'

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

      let bscroll = reactive({});

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

        // 创建BetterScroll对象
        bscroll = new BScroll(document.querySelector('.wrapper'),{
          probeType: 3, // 3只要在运动就触发scroll事件
          click: true, // 是否允许点击
          pullUpLoad: true // 上拉加载更多，默认是false
        });

        //  触发滚动事件
        bscroll.on('scroll', (position)=>{
          // console.log(position.y)
        })

        //  上拉加载数据，触发pullingUp
        bscroll.on("pullingUp", ()=>{
          console.log("上拉加载更多");
          console.log(document.querySelector(".content").clientHeight);

          bscroll.refresh();
        })

      })

      // 点击选项卡，实现切换
      const tabClick = (index) => {
        let type = ['sales', 'new', 'recommend'];
        currentType.value = type[index];
      }

      // 监听任何一个变量有变化
      watchEffect(()=>{
        nextTick(()=>{
        //  重新计算高度
          bscroll && bscroll.refresh();
        })
      })

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

  #home {
    height: 100vh;
    position: relative;
  }

  .wrapper {
    position: absolute;
    top: 20px;
    bottom: 50px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .content {

  }
</style>