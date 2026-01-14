import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VuePageTransition from 'vue-page-transition'
import VueKinesis from "vue-kinesis";
import routes from './js/routes'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
import './scss/main.scss'

Vue.config.productionTip = false;

Vue.use(VueRouter)
Vue.use(VuePageTransition)
Vue.use(VueKinesis);
Vue.use(VuePlyr, {
  plyr: {
  	controls: ['play-large', 'play', 'progress', 'mute', 'volume', 'fullscreen']
  }
})

const router = new VueRouter({
	mode: 'history',
	routes
});

new Vue({
	// data: { loading: false },
  router,
  render: h => h(App)
}).$mount('#app');
