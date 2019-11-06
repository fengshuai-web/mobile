<template>
  <div>
    <h4>Fa08.vue 父组件</h4>
    <!--3:调用子组件-->
    <sub08 msg="够不够"></sub08>
  </div>
</template>
<script>
//1:引入子组件
import Sub08 from "./Sub08"
export default {
 //2:注册子组件
 data(){ //当前组件共享数据
   return {}
 },
 components:{//注册子组件
   "sub08":Sub08  //子组件名:对象
 }
}
</script>
