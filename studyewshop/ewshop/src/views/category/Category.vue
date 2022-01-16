<template>
  <div>
    <nav-bar>
      <template v-slot:default>商品分类</template>
    </nav-bar>
	
	<div id="mainbox">
		<div class="ordertab">
			
		</div>

		<van-sidebar class='leftmenu' v-model="activeKey">
			<van-collapse v-model="activeName" accordion>
			  <van-collapse-item v-for="(item,index) in categories" 
				:key="item.id"
				:title="item.name" 
				:name="item.name">
				<van-sidebar-item v-for="sub in item.children" 
				:title="sub.name" />
			  </van-collapse-item>
			</van-collapse>
		</van-sidebar>

		<div class="goodslist">
			
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
	  let activeKey = ref(0);
	  let categories = ref([]);
	  let activeName = ref('1');
	  
	  onMounted(() => {
		  getCategory().then(res => {
			  categories.value = res.data.categories;
		  })
	  })
	  
	  return {
		  activeKey,
		  categories,
		  activeName 
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
			width: 100%;
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
		}
	}
</style>