import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  // render: h => h(App)是ES6的写法，其实就是如下内容的简写：
  //   render: function (createElement) {
  //     return createElement(App);
  // }
  router,
  render: h => h(App),
}).$mount('#app')

// window.Vue = require('vue');
// 全局bus
// window.bus = new Vue();
// 原型bus
// window.Vue.prototype.bus = new Vue();   


// 其实在vue 1.0 中，这样的写法也就是如下的含义：
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: {App}
// })