import Vue from 'vue';
import Tpl from './index.vue';
// import '@styles/lib/main.scss';
import store from '../../store';
import $ from 'jquery';
import '@bootstrap/js/bootstrap.min.js'
import '@bootstrap/css/bootstrap.min.css'
import '@wow/css/libs/animate.css'
import '@/assets/css/ico.css'


new Vue({
  store,
  render: h => h(Tpl),
}).$mount('#app');