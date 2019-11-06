<template>
    <div>
        <h3>vuex</h3>
        <!-- 获取共享数据 -->
        <span>程亮老师头发的数量:
            {{$store.getters.getFa}}
            
        </span>
        <!-- 添加按钮减一根 -->
        <input type="button" value="减一" @click="sub"/>
        <!-- 添加按钮发量清空 -->
        <input type="button" value="清空" @click="clear"/>
        
    </div>
</template>
<script>
export default {
    methods:{
        //调用修改数据的方法
      sub(){this.$store.commit("subItem")},
        //调用修改数据的方法(清空)
      clear(){this.$store.commit("clear")}  
    },
    data(){
        return {        
        }
    },
}
</script>

