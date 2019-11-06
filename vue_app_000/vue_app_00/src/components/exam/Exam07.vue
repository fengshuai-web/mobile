<template>
  <div>
    <h3>tabbar</h3>
    <!--?面板-->
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab1">
         美食
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
         购物
      </mt-tab-container-item>      
      <mt-tab-container-item id="tab3">
        休闲
      </mt-tab-container-item>
    </mt-tab-container>
    <!--底部导航条-->
    <!--将图片复制指定目录 assets-->
    <!--底部导航条父元素-->
    <mt-tabbar fixed v-model="active">
    <!--添加三个按钮-->
      <mt-tab-item id="tab1">
         <img slot="icon" src="../../assets/01.png" />
         美食
      </mt-tab-item>
      <mt-tab-item id="tab2">
         <img  slot="icon" src="../../assets/02.png" />
         购物
      </mt-tab-item>
      <mt-tab-item id="tab3">
         <img slot="icon" src="../../assets/03.png" />
         休闲
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>

export default {
  data(){
    return {
      //(1)保存用户选中按钮id
      active:"tab1"
    }
  }
}
</script>

