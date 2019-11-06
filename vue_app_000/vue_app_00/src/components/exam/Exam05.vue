<template>
  <div>
    <h3>面板组件</h3>
      <!--最外添加父元素-->
      <mt-tab-container v-model="active">
      <!--添加3个子面板-->
      <mt-tab-container-item id="tab1">
         子面板一
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
         子面板二
      </mt-tab-container-item>
      <!--在data属性添加active-->
      </mt-tab-container>
    
  </div>
</template>
<script>
export default {
  data(){
    return {
     active:"tab2"//第一个子面板显示
    }
  }
}
  
</script>
