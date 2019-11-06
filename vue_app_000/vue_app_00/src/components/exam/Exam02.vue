<template>
  <div>
    <h3>确认消息组件</h3>
    <button @click="open1">简写提示框</button>
    <button @click="open2">确认提示框</button>
    <button @click="open3">输入提示框</button>
    <h4>表单:输入框 mint-ui</h4>
    <mt-field label="用户名"
    placeholder="请输入用户名"
    v-model="uname">
    </mt-field>
  </div>
</template>
<script>
export default {
  data(){
    return {
      uname:""   //双向绑定用户名 40
    }
  },
  methods:{
    open1(){
     //功能1:创建简写交互提示框
     this.$messagebox("消息","执行成功");
    },
    open2(){
     //功能2:创建交互确认提示框
     this.$messagebox.confirm("是否删除指定数据")
     .then(action=>{//用户选择确认
       console.log("确认")
     })
     .catch(err=>{//用户选择取消
       console.log("取消")
     })
    },
    open3(){
      //功能3:输入框
      this.$messagebox
      .prompt("东哥年龄")//输入框
      .then((value)=>{  //成功回调函数
        console.log(value)
      })
      .catch(err=>{     //失败回调函数
        console.log(err);
      })
    }
  }
}
</script>
