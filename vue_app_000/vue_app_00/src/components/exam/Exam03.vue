<template>
  <div><!--根元素-->
      <h3>表单验证 Exam03.vu3</h3>
      <!--添加输入框 用户名-->
      <mt-field label="用户名" placeholder="请输入用户名" v-model="uname" :attr="{autofocus:true}"></mt-field>
      <!--添加输入框 密码 43-->
      <mt-field label="密码"
      placeholder="请输入密码" v-model="upwd"></mt-field>
      <!--添加输入框 年龄-->
      <mt-field label="年龄"
      placeholder="请输入年龄" v-model="uage"></mt-field>
      <!--添加按钮   登录-->
      <mt-button size="large" @click="login">登陆</mt-button>
  </div>
</template>
<script>
export default {
   data(){
     return {
        uname:"", //双向绑定用户名
        upwd:"",  //双向绑定密码
        uage:""   //双向绑定年龄
     }
   },
   methods:{
     //添加登录函数
     login(){
      //功能:对表单中每个元素进行验证
      //验证:去掉用户无效操作
      //1:创建用户名和密码正则表达式
      var ureg = /^[a-z0-9]{3,12}$/i;
      //2:创建年龄正则表达式
      var areg = /^[0-9]{1,2}$/;
      //3:获取用户输入用户名 data属性
      var u = this.uname;
      //4:获取用户输入密码
      var p = this.upwd;
      //5:获取用户输入年龄
      var age = this.uage;
      //6:通过正则表达式验证用户名是否合法
      if(ureg.test(u)==false){
      //7:如果验证没通过显示确认消息框
      this.$messagebox("消息","用户名格式不正确");
      //8:停止函数执行
      return;
      }
    //9:通过正则表达式验证用户密码是否合法
      if(ureg.test(p)==false){
       //10:如果验证没通过显示确认消息
       this.$messagebox("消息","用户密码格式不正确");
       //11:停止函数执行
       return;
      }
    //12:通过正则表达式验证用户年龄是否合法
    if(areg.test(age)==false){
     //13:如果验证没有通过显示确认消息
     this.$messagebox("消息","年龄格式不正确");
     //14:停函数执行
     return;
    }
    //15:?发送ajax请求在服务器进行最终
    //   验证与登录操作
     }
   }
}
</script>

