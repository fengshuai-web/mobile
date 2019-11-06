<template>
  <div>
    <h5>子组件Sub09.vue</h5>
    <!--接收父组件数据-->
    <!--msg字符串-->
    <h3>{{msg}}</h3>
    <!--imgurl-->
    <img :src="imgurl" />
  </div>
</template>
<script>
export default {
  //声明接收父元素数据
  props:{
     msg:{default:""},  //接收msg
     imgurl:{default:""}//图片路径
  }
}
</script>

