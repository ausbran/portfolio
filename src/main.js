import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VuePageTransition from 'vue-page-transition'
import VueKinesis from "vue-kinesis";
import $ from 'jquery'
import routes from './js/routes'
import scripts from './js/scripts'

require('./main.js')
Vue.config.productionTip = false;

Vue.use(VueRouter)
Vue.use(VuePageTransition)
Vue.use(VueKinesis);

const router = new VueRouter({
	mode: 'history',
	routes
});

const vue = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');