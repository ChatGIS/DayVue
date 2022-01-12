<template>
  <div id="home">
    <nav-bar>
      <template v-slot:default>图书兄弟</template>
    </nav-bar>
    <tab-control v-show="isTabFixed" @tabClick="tabClick" :titles="['畅销', '新书', '精选']"></tab-control>
    <div class="wrapper">
      <div class="content">
        <div ref="banref">
          <div class="banners">
            <img src="~assets/images/CHFLQQx675.jpg" alt="">
          </div>

          <recommend-view :recommends="recommends"></recommend-view>
        </div>

        <tab-control @tabClick="tabClick" :titles="['畅销', '新书', '精选']"></tab-control>

        <goods-list :goods="showGoods"></goods-list>
      </div>
    </div>
    <back-top @bTop="bTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import RecommendView from "./ChildComps/RecommendView";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import BackTop from "components/common/backtop/BackTop";
  import {getHomeAllData, getHomeGoods} from "network/home";
  import {ref, reactive,onMounted, computed, watchEffect, nextTick} from "vue";
  import BScroll from 'better-scroll'

  export default {
    name: "Home",
    components: {
      NavBar,
      RecommendView,
      TabControl,
      GoodsList,
      BackTop
    },
    setup() {
      let isTabFixed = ref(false);
      let isShowBackTop = ref(false);
      let banref = ref(null);
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
          console.log(banref.value.offsetHeight);
          console.log(-position.y);

          isShowBackTop.value = isTabFixed.value = (-position.y) > banref.value.offsetHeight;
        })

        //  上拉加载数据，触发pullingUp
        bscroll.on("pullingUp", ()=>{
          console.log("上拉加载更多");
          console.log("contentheight:" + document.querySelector(".content").clientHeight);

          const page = goods[currentType.value].page + 1;
          getHomeGoods(currentType.value, page).then(res=>{
            goods[currentType.value].list.push(...res.data.goods.data);
            goods[currentType.value].page += 1;
          })

          // 完成下拉，等数据请求完成，要将新数据展示出来
          bscroll.finishPullUp();

          console.log("当前类型：" + currentType.value + "，当前页：" + page);
          // 重新计算高度
          bscroll.refresh();
        })

      })

      // 点击选项卡，实现切换
      const tabClick = (index) => {
        let type = ['sales', 'new', 'recommend'];
        currentType.value = type[index];

        nextTick(()=>{
          //  重新计算高度
          bscroll && bscroll.refresh();
        })
      }

      // 监听任何一个变量有变化
      watchEffect(()=>{
        nextTick(()=>{
        //  重新计算高度
          bscroll && bscroll.refresh();
        })
      })

      // 返回顶部
      const bTop = () => {
        bscroll.scrollTo(0, 0, 500);
      }

      return {
        recommends,
        tabClick,
        goods,
        showGoods,
        isTabFixed,
        isShowBackTop,
        banref,
        bTop
      }
    }
  }
</script>

<style scoped>
  .banners img {
    width: 100%;
    height: auto;
  }

  #home {
    height: 100vh;
    position: relative;
  }

  .wrapper {
    position: absolute;
    top: 45px;
    bottom: 50px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .content {

  }
</style>