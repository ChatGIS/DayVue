<template>
  <div>
    <nav-bar>
      <template v-slot:default>商品详情:{{id}}</template>
    </nav-bar>
    {{detail.id}}
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import {useRoute} from "vue-router";
  import {onMounted, reactive, ref, toRefs} from "vue";
  import {getDetail} from "network/detail";

  export default {
    name: "Detail",
    components: {
      NavBar
    },
    setup() {
      const route = useRoute();

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
      return {
        id,
        ...toRefs(book)
      }
    }
  }
</script>

<style scoped>

</style>