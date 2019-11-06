<template>
  <div>
    <h4>Login.vue</h4>
    <!--1:用户名输入框-->
    <mt-field label="用户名" placeholder="请输入用户名" v-model="uname" :attr="{autofocus:true}"></mt-field>
    <!--2:密码输入框-->
    <mt-field label="密码" placeholder="请输入密码" v-model="upwd"></mt-field>
    <!--3:登录按钮-->
    <mt-button size="large" @click="login">登录</mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      uname:"", //输入用户名
      upwd:""   //输入密码
    }
  },
  methods:{
    login(){
     //功能:完成用户登录操作
     //1:获取用户输入用户名
     var u = this.uname;
     //2:获取用户输入密码
     var p = this.upwd;
     console.log("1:"+u+"_"+p);
     //3:创建正则表达式 3~12 字母数字
     var reg = /^[a-z0-9]{3,12}$/i;
     //4:验证用户名
     if(reg.test(u)==false){
      console.log("2:");
      //5:验证不成功 提示消息
      this.$messagebox("用户名格式不正确");
      return;
     }
     //6:验证密码
     if(reg.test(p)==false){
      //7:验证不成功 提示消息
      this.$messagebox("","密码格式不正确");
      return;
     }
     //8:发送ajax请求
     var url = "login";
     var obj = {uname:u,upwd:p};
     this.axios.get(
       url,
       {params:obj}
     ).then(res=>{
       console.log(res.data.code);
       if(res.data.code<0){
         this.$messagebox("消息","用户名或密码有误")
       }else{
         //跳转product组件
         this.$router.push("/Product");
         
       }
     });
     //9:获取服务器返回结果
     //10:登录失败提示消息
     //11:登录成功跳转 /Product
    }
  }
}
</script>
