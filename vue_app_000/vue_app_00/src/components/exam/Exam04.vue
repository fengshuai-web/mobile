<template>
  <div>
    <h3>mint-ui表单组件</h3>
    <!--1:开关组件-->
    <mt-switch v-model="val1" @change="handle2">
      是否继续发送东哥八卦信息
    </mt-switch>
    <!--2:单选框列表 21-->
    <mt-radio
    title="单选框列表"
    v-model="val2"
    :options="['选项a','选项b','选项c']">
    </mt-radio>
    <mt-button @click="handle3">获取单选列表选中值
    </mt-button>
    <!--3:复选框列表 47-->
    <mt-checklist
     title="然哥家汽车列表"
     v-model="val3"
     :options="['七手夏利','九手qq','一架凤凰']">
    </mt-checklist>
    <mt-button @click="handle4">
       获取然哥汽车列表
    </mt-button>
  </div>
</template>
<script>
//vue 导出export 默认对象 default
export default {
   data(){         //数据
     return {      //返回数据
       val1:true,  //默认打开状态
       val2:"",    //保存单选选中值
       val3:[]     //多值保存数组 
     }
   },
   methods:{      //方法,函数
    handle4(){
     //获取复选框列表中选中值
     console.log(this.val3)
    },
    handle3(){
     //获取单选框列表选中值
     console.log(this.val2)
    },
    handle2(){
      //功能:当开关组件值发生修改后触发函数调用
      console.log(this.val1);
    }
   }
}
</script>
