import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'
import Tpl from './index.vue';
import crisp from '@/assets/js/crisp'
import '@/assets/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/animate.css'
import '@/assets/css/ico.css'


Vue.prototype.$crisp = crisp;
Vue.use(BootstrapVue);

new Vue({
  render: h => h(Tpl),
}).$mount('#app');