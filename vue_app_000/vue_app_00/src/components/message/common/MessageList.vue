<template>
  <div>
    <!--消息列表MessageList.vue-->
    <!--1:一条消息 20-->
    <div class="rootstyle" v-for="(item,index) of list.data" :key="index">
     <!--1.1左侧一组[图片/标题]-->
     <div class="leftimgtxt">
       <!--1.1.1 左侧图片-->
       <img :src="require('../../../assets/tblogo.png')" class="imgstyle"/>
       <!--1.1.2 左侧标题 16:19-->
       <div class="titlestyle">
         <span class="title">
           {{item.title}}
         </span>
         <span class="subtitle">
           {{item.subtitle}}
         </span>
       </div>
     </div>
     <!--1.2右侧时间-->
     <span class="sendtime">
        {{item.time}}
     </span>
    </div>
    <!--2:读取数据文件json-->
    <!--3:创建循环显示消息内容-->
  </div>
</template>
<script>
//1:引入一个json文件
import mlist from "../json/messagelist.json"
export default {
   data(){
     return {
       //将读取数据保存list,显示
       list:mlist 
     }
   }
}
</script>
<style scoped>
  /*1:一条消息*/
  /*1.1:父元素 弹性布局*/
  .rootstyle{
    display: flex;/*弹性布局*/
    /*两端对齐 垂直居中*/
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
  }
  /*1.2:左侧图片与标题15:20*/
  .leftimgtxt{
    display: flex;/*弹性布局*/
    align-items: center;/*垂直居中*/
  }
  /*1.3:修改图片样式*/
  .imgstyle{
    width:50px;
    height:50px;
  }
  /*1.4:标题布局*/
  .titlestyle{
    display: flex;/*弹性布局*/
    /*子元素排列方式:列29*/
    flex-direction: column;
    /*水平居中*/
    justify-content: center;
    /*左侧外边距离:与图片间距离*/
    margin-left:7px;
  }
  /*1.5:标题样式 15:40*/
  .title{
    color:#000;/*标题黑色*/
    font-size:17px;/*标题文字大小*/
  }
  /*1.6:子标题样式*/
  .subtitle{
    color:gray;
    margin-top:4px;/*与标题间距*/
  }
  /*1.7:发送时间*/
  .sendtime{
    color:gray;
  }
</style>


