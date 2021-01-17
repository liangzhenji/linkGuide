import Vue from 'vue'
import ElementUI from 'element-ui';
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts

//事件总线
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
