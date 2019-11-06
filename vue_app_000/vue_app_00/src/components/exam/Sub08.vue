<template>
  <div>
    <h3>(1)显示数据子组件 Sub08.vue</h3>
    <h3>{{msg}}</h3>
  </div>
</template>
<script>
export default {
  //(2)接收数据
  props:{  //声明接收父组件数据
    msg:{default:""} //msg
  }
}
</script>

