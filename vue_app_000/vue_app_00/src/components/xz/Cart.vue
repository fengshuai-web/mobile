<template>
    <div>
        <!-- <h1>购物车</h1> -->
        <!-- (1)顶部复选框:全选 -->
        <div>
            全选 <input type="checkbox" @change="selectAll" v-model="allcb"/>
        </div>
        <!-- (2)中间复选框:商品/价格/删除 -->
        <div class="cart-item" v-for="(item,i) of list" :key="i">
            <div class="leftText">
                <input type="checkbox" v-model="item.cb" @change="itemchange" />
                <div class="lname">{{item.lname}}</div>
                <div class="price">¥{{item.price}}</div>
            </div>
                <mt-button :data-id="item.id" @click="del">删除</mt-button>
        </div>
        <!-- (3)删除选中商品复选框 -->
        <div>购物车中商品的数量
            <span style="color:red">
                {{$store.getters.getCart}}
            </span>
            <mt-button @click="delm">删除选中的商品</mt-button>
        </div>
    </div>
    
</template>
<script>
export default {
    data(){
        return {
            list:[],//购物车列表
            allcb:false//全选按钮状态！
        }
    },
    created() {//1:添加声明周期
        this.loadMore();
    },
    methods:{
        itemchange(){
            //功能:商品复选框状态需改
            // 1:累加商品状态
            // 2:创建变量
            var sum=0;
            // 3:创建循环遍历商品状态
            for(var item of this.list){
                if(item.cb){
                    sum++;
                }
            }
            // console.log(sum);
            // console.log(this.list.length)
            // 4:如果是true则变量数据+1
            // 5:如果选中的数量与数组相同,
            //将全选allcb=true
            if(sum==this.list.length){
                this.allcb=true;
            }else{
                this.allcb=false;
            }

        },
          delm(){
                //1:显示交互提示框，请用户再次确认是否删除指定商品
                this.$messagebox.confirm("是否删除指定商品").then(res=>{
                    //回调函数
                //2:选择确认
                //3:创建空字符串
                var str="";
                //4:创建循环遍历list数组,判断如果当前对象cb值为true将对象id拼接
                for(var item of this.list){
                    if(item.cb){
                     str+=item.id+","
                 }
           }    
                //5:判断用户是否选中商品提示请选择要删除的商品
                if(str.length==0){
                    this.$messagebox("请选择要删除的商品");
                    return;
                }
                //0         起始下标
                //str.length-1保存几个字符串
                str = str.substring(0,str.length-1);
                console.log(str);
                //6:创建url创建obj
                var url = "delm";
                var obj = {id:str};
                //7:发送ajax请求
                this.axios.get(url,{params:obj}).then(res=>{
                    //console.log(res);
                     //8:更新加载购物车列表
                    this.loadMore();
                      //9:提示删除成功 
                    this.$toast("删除成功");  
             })
             }).catch(err=>{
                    //取消
             }) 
        },
        selectAll(event){
          //1:添加参数event
          //2:获取当前全选按钮状态
          var all=event.target.checked;
          //3:复制所有商品cb
          for(var item of this.list){
              item.cb=all;
          }  
        },
        del(event){
            // 1:为删除按钮添加自定义属性
            // data-id保存当前购物车商品id
            // 2:添加点击事件click del
            // 2.1:交互提示 是否删除
            this.$messagebox.confirm("是否删除指定商品").then(res=>{
                //回调函数
            // 3:获取当前商品id
            var id=event.target.dataset.id;
            // 4:输出id
            console.log(id)
            // 5:发送ajax请求
            var url="del";
            var obj={id};
            this.axios.get(url,{params:obj}).then(res=>{
                console.log(res)
                // 6:获取服务器端返回数据
            if(res.data.code > 0){
                this.$toast("删除成功")
                this.loadMore();
            }
            })
            
            // 7:提示删除成功
            // 8:重新调用loadMore
            }).catch(err=>{
                //取消
            })
        },
        loadMore(){
            // 1:创建url
            var url="findCart"
            // 2:发送ajax请求来获取购物车
            this.axios.get(url).then(res=>{
                // console.log(res.data.code)
                if(res.data.code==-1){
                    //提示交互提示框
                    this.$messagebox("消息","请登录").then(res=>{
                        //跳转登录组件
                        this.$router.push("/login")
                    })
                }else{
                    //(1)为每个商品添加状态
                    //res变量 data属性 data数组
                    var list=res.data.data;
                    for(var item of list){
                        item.cb=false;
                    }
                    //(2)赋值
                    this.list=list;
                    //(2.9)加载之前先清空
                    this.$store.commit("clearCart");
                    //(3)创建循环遍历数组
                    for(var item of this.list){
                        //(4)在循环中修改购物车的数量
                        this.$store.commit("addCart");
                    }
                }
            })
            // 3:将服务器返回的数据保存到list
        }
    }
}
</script>
<style>
/* 1:购物车的商品内容 */
    .cart-item{
        display: flex;/*弹性布局 连段对齐*/
        justify-content: space-between;
        align-items: center;/*垂直居中*/
        border-bottom:1px solid #ccc;
        margin-top:25px;    /*顶部距离*/
    }
/*2.左侧复选框和文字设为弹性布局*/
    .leftText{
        display: flex;
        align-items: center;/*垂直居中*/
    }
/*3.修饰商品名称*/
    .lname{
        margin-left:25px;
        color:#333;
    }
/*4.修饰商品价格*/
    .price{
        margin-left:25px;
        color:red;        
    }
</style>
