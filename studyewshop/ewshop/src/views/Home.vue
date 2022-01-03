<template>
  <div class="home">
<!--    <img alt="Vue logo" src="~assets/images/CHFLQQx675.jpg" style="width: 320px">-->

  </div>
</template>

<script>
// @ is an alias to /src
import {onMounted} from 'vue';
import {getHomeAllData} from "network/home.js"

export default {
  name: 'Home',
  components: {
  },
  setup(){
    onMounted(()=>{
      console.log('11111111');
      getHomeAllData().then(res => {
        console.log(res);
      }).catch(error=>{

      })
    })
  }

}
</script>
