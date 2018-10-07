// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App.vue';
import router from './router'
import VueLazyload from 'vue-lazyload'
import Vue from 'vue'
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)
Vue.use(VueLazyload, {
	preLoad: 1.3,
	error: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538660914484&di=f469fd2c61df9d572bfc23c46962ecad&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01176b59659944a8012193a305ebff.gif',
	loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538660914484&di=f469fd2c61df9d572bfc23c46962ecad&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01176b59659944a8012193a305ebff.gif',
	attempt: 1,
	throttleWait: 900,
	adapter: {
		loaded({
			bindType,
			el,
			naturalHeight,
			naturalWidth,
			$parent,
			src,
			loading,
			error,
			Init
		}) {
			el.style.width = '100%';
			el.style.height = '100%';
		},
		loading(listender, Init) {
			listender.el.style.height = '278px';
			listender.el.style.width = '278px';
		},
		error(listender, Init) {
			listender.el.style.height = '278px';
			listender.el.style.width = '278px';
		}
	}
});
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
});