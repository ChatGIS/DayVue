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
		  	  num="2"
		  	  tag="标签"
		  	  price="2.00"
		  	  desc="描述信息"
		  	  title="商品标题"
		  	  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
		  	  origin-price="10.00"
		  	/>
		  </div>
		</div>
	</div>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {getCategory} from "network/category";
  import {ref, reactive, onMounted} from 'vue';
  
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
	  
	  onMounted(() => {
		  getCategory().then(res => {
			  categories.value = res.data.categories;
		  })
	  })
	  
	  // 排序选项卡
	  const tabClick = (index) => { 
		  let orders = ['sales', 'price', 'comments_count'];
		  currentOrder.value = orders[index];
		  		  console.log("---------" + orders[index])
	  }
	  
	  // 通过分类获取商品
	  const getGoods = (id) => {
		  currentCid.value = id;
		  console.log(currentCid.value);
	  }
	  
	  return {
		  active,
		  activeKey,
		  categories,
		  activeName,
		  currentOrder,
		  currentCid,
		  tabClick,
		  getGoods
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