<template>
  <div>
    <nav-bar>
      <template v-slot:default>商品详情:{{id}}</template>
    </nav-bar>

    <van-image style="margin-top: 50px"
        width="100%"
        lazy-load
        :src="detail.cover_url"
    />
    <van-card style="text-align: left"
        :num="detail.stock"
        :price="detail.price + '. 00'"
        :desc="detail.description"
        :title="detail.title"
    >
      <template #tags>
        <van-tag plain type="danger">新书</van-tag>
        <van-tag plain type="danger">{{detail.is_recommend == 1 ? '推荐' : '不推荐'}}</van-tag>
      </template>
      <template #footer>
        <van-button type="warning" @click="handleAddCart">加入购物车</van-button>
        <van-button type="danger" @click="goToCart">立即购买</van-button>
      </template>
    </van-card>

    <van-tabs v-model:active="active">
      <van-tab title="概述">
        <div class="content" v-html="detail.details">
        </div>
      </van-tab>
      <van-tab title="热评">内容 2</van-tab>
      <van-tab title="相关图书">
        <goods-list :goods="like_goods"></goods-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import GoodsList from "components/content/goods/GoodsList";
  import {useRoute, useRouter} from "vue-router";
  import {useStore} from "vuex";
  import {onMounted, reactive, ref, toRefs} from "vue";
  import {getDetail} from "network/detail";
  import {addCart} from "network/cart";
  import {Toast} from "vant";

  export default {
    name: "Detail",
    components: {
      NavBar,
      GoodsList
    },
    setup() {
      let active = ref(0);
      const route = useRoute();
      const router = useRouter();
      const store = useStore();

      let id = ref(0);
      id.value = route.query.id;

      let book = reactive({
        detail:{},
        like_goods:[],
      });

      onMounted(() => {
        id.value = route.query.id;
        getDetail(id.value).then(res => {
          book.detail = res.data.goods;
          book.like_goods = res.data.like_goods;
        })
      })

      // 添加购物车
      const handleAddCart = () => {
        addCart({goods_id: book.detail.id, num: 1}).then(res => {
          if(res.data.status == '201' || res.data.status == '204'){
            Toast.success('添加成功');
            // 设置store中cartCount
            store.dispatch('updateCart')
          }
        })
      }
      // 立即购买
      const goToCart = () => {
        addCart({goods_id: book.detail.id, num: 1}).then(res => {
          if(res.data.status == '201' || res.data.status == '204'){
            Toast.success('添加成功,显示购物车');
            // 设置store中cartCount
            store.dispatch('updateCart')
            router.push({
              path: '/shopcart'
            })
          }
        })
      }
      
      return {
        id,
        ...toRefs(book),
        active,
        handleAddCart,
        goToCart
      }
    }
  }
</script>

<style scoped lang="scss">
  .content {
    padding: 10px;
  }
</style>