<template>
  <div class="page-head">
    <!--左侧文字 微信(1) 11:55-->
    <span>{{msg}}</span>
    <!--右侧两张图片 10:20-->
    <div class="right-head">
       <div class="imgdiv">
         <img :src="rightFirstImg" style="width:25px;"/>
       </div>
       <div class="imgdiv" style="margin-left:20px;">
         <img :src="rightSecondImg" style="width:25px;margin-right:15px;"/>
       </div>
    </div>
  </div>
</template>
<script>
export default {
 props:{
   msg:{default:""},//接收字符串
   //接收父元素两张图片
   rightFirstImg:{default:""},
   rightSecondImg:{default:""}
 } 
}
</script>
<style  scoped>
/*scoped 防止多个组件之间样式冲突*/
/*scoped 自动为选择器添加随机数*/
/*1:修改最外层样式 弹性布局 11:38*/
.page-head{
  display: flex;/*弹性布局*/
  position: fixed;/*顶部导航固定*/
  z-index:999;/*显示在元素上面*/
  width:100%;/*宽度与父元素相同*/
  /*两端对齐 垂直居中*/
  justify-content: space-between;
  align-items: center;
  background-color:#3e3a39;
  height:48px;/*高度*/
  padding-left:7px;/*左右内边距*/
  padding-right:7px;
  color:#fff;   /*文字颜色*/
  font-size:18px; /*文字大小*/
}
/*2:修改右侧图片*/
.right-head{
  display: flex;
}
/*3:图片单独处理*/
.imgdiv{
  display: flex;/*弹性布局*/
  align-items: center;/*水平居中*/
  height:48px;/*高度48*/
}
</style>

