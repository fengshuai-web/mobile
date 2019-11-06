import Vue from 'vue'
import App from './App.vue'
import router from './router'

//#删除5~16内容 
//功能:引入第三方组件库mint-ui
//1:完整引入mint-ui组件库中所有组件
import MintUI from "mint-ui"
//2:单引入mint-ui库中样式文件
import "mint-ui/lib/style.css"
//3:将mint-ui注册vue实例 14:15
Vue.use(MintUI)
//4:引入字体图标文件 main.js
import "./font/iconfont.css"
//5:引入axios模块
import axios from "axios"
//6:配置服务器基础路径
axios.defaults.baseURL="http://127.0.0.1:4000/"
//7:配置保存session信息
axios.defaults.withCredentials=true
//8:axios 注册vue
Vue.prototype.axios = axios
//9:引入vuex第三方模块
import Vuex from "vuex"
//10:先注册vuex
Vue.use(Vuex)
//11:创建存储对象
var store = new Vuex.Store({
  state:{//共享数据
    fa:12,//亮哥的发量
    cartCount:0//共享:购物车数量
  },
  mutations:{//修改共享数据
    addCart(state){
      state.cartCount++;
    },
    clearCart(state){
      state.cartCount=0;
    },
    subItem(state){
      state.fa--//一次减一根
    },
    clear(state){
      state.fa = 0;//清空
    },
    
  },
  getters:{//获取共享数据
      getCart(state){//获取购物车数量
        return state.cartCount;
      },
      getFa(state){
        return state.fa;
      }
    }
})
//12:将存储对象添加到vuex对象




new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
