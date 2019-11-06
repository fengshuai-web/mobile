<template>
  <div>
    <h3>美食休闲购物组件</h3>
    <!--1:添加三个按钮-->
    <mt-button data-id="tab1" @click="handle">美食</mt-button>
    <mt-button data-id="tab2" @click="handle">购物</mt-button>
    <mt-button data-id="tab3" @click="handle">休闲</mt-button>
    <!--2:添父元素和三个子面板-->
    <div>
      <!--父元素-->
      <!--添加3个子面板-->
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="tab1">
          美食面板
        </mt-tab-container-item>
        <mt-tab-container-item id="tab2">
          购物面板
        </mt-tab-container-item>
        <mt-tab-container-item id="tab3">
           休闲面板
        </mt-tab-container-item>
      </mt-tab-container> 
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
       active:"tab1" //默认显示美食
    }
  },
  methods:{
    handle(event){
      //功能:完成子面板之间切换
      //1:添加参数event 事件对象
      //2:获取当前元素自定义属性id值
      //3:将id值赋值active data-id
      var id = event.target.dataset.id;
      this.active = id;
    }
  }
}
</script>
