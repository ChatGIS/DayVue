<template>
  <div>
    <nav-bar>
      <template v-slot:default>商品分类</template>
    </nav-bar>
	
	<div id="mainbox">
		<div class="ordertab">
		  <van-tabs v-model:active="active" @click="tabClick">
		    <van-tab title="销量"></van-tab>
		    <van-tab title="价格"></van-tab>
		    <van-tab title="评论"></van-tab>
		  </van-tabs>
		</div>

		<van-sidebar class='leftmenu' v-model="activeKey">
			<van-collapse v-model="activeName" accordion>
			  <van-collapse-item v-for="(item,index) in categories" 
				:key="item.id"
				:title="item.name" 
				:name="item.name">
				<van-sidebar-item v-for="sub in item.children" 
				:title="sub.name"
				 :key="sub.id"
				 @click="getGoods(sub.id)"/>
			  </van-collapse-item>
			</van-collapse>
		</van-sidebar>

		<div class="goodslist">
		  <div id="content">
		  	<van-card
          v-for="item in showGoods" :key="item.id"
		  	  :num="item.comments_count"
		  	  :tag="item.comments_count >= 0 ? '流行' : '标签'"
		  	  :price="item.price"
		  	  :desc="item.updated_at"
		  	  :title="item.title"
		  	  :thumb="item.cover_url"
          :lazy-load="true"
		  	  origin-price="10.00"
		  	/>
		  </div>
		</div>
	</div>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {getCategory, getCategoryGods} from "network/category";
  import {ref, reactive, onMounted, computed} from 'vue';
  
  export default {
    name: "Category",
    components: {
      NavBar
    },
    setup() {
      let active = ref(0);
      let activeKey = ref(0);
      let categories = ref([]);
      let activeName = ref('1');

      // 当前的排序条件
      let currentOrder = ref('sales');
      // 当前的分类id
      let currentCid =ref(0);

      // 数据模型
      const goods = reactive({
        sales:{page:1, list:[]},
        price:{page:1, list:[]},
        comments_count:{page:1, list:[]}
      });

      const showGoods = computed(() => {
        return goods[currentOrder.value].list;
      })

      const init = () => {
        getCategoryGods('sales', currentCid.value).then(res => {
          goods.sales.list = res.data.goods.data
        })
        getCategoryGods('price', currentCid.value).then(res => {
          goods.price.list = res.data.goods.data
        })
        getCategoryGods('comments_count', currentCid.value).then(res => {
          goods.comments_count.list = res.data.goods.data
        })
      }
      
      onMounted(() => {
        getCategory().then(res => {
          categories.value = res.data.categories;
        })

        init();
      })

      // 排序选项卡
      const tabClick = (index) => {
        let orders = ['sales', 'price', 'comments_count'];
        currentOrder.value = orders[index];

        getCategoryGods(currentOrder.value, currentCid.value).then(res => {
          goods[currentOrder.value].list = res.data.goods.data
        })

        console.log("---------" + orders[index])
      }

      // 通过分类获取商品
      const getGoods = (cid) => {
        currentCid.value = cid;
        init();
        console.log(currentCid.value);
      }

      return {
        active,
        activeKey,
        categories,
        activeName,
        currentOrder,
        currentCid,
        goods,
        tabClick,
        getGoods,
        showGoods
      }
    }
  }
</script>

<style scoped lang="scss">
	#mainbox {
		margin-top: 45px;
		display: flex;
		.ordertab {
			flex: 1;
			float: right;
			height: 50px;
			z-index: 9px;
			position: fixed;
			top: 45px;
			right: 0;
			left: 130px;
		}
		.leftmenu {
			position: fixed;
			top: 95px;
			left: 0;
			width: 130px;
			width: 130px;
		}
		.goodslist {
			flex: 1;
			height: 200px;
			position: absolute;
			top: 100px;
			left: 130px;
			right: 0;
			height: 100vh;
			padding: 10px;
		}
	}
</style>