<template>
  <div>
     <h5>Fa09.vue父组件</h5>
     <!--3:调用子组件-->
     <sub09 msg="够不够" :imgurl="require('../../assets/01.png')"></sub09>
  </div>
</template>
<script>
//1:引入子组件 Sub09
import Sub09 from "./Sub09"
export default {
//2:注册子组件
 components:{
   "sub09":Sub09
 }  
}
</script>

