import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/iconfont/iconfont.css'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { ButtonPlugin, DropdownPlugin } from 'bootstrap-vue';
import axios from './request';

Vue.prototype.$axios = axios;
Vue.use(ButtonPlugin)
Vue.use(DropdownPlugin)

Vue.config.productionTip = false

// Vue.use(IconsPlugin)
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
