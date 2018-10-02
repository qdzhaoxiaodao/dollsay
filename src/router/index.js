import Vue from 'vue'
import Router from 'vue-router'
import mainHeader from '@/components/mainHeader'
import mainFooter from '@/components/mainFooter'
import index from '@/pages/index'
import home from '@/pages/home'
import more from '@/pages/more'
import classify from '@/pages/classify'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/index',
			component: index,
			children: [{
					path: '/home',
					components: {header:mainHeader,main:home,footer:mainFooter}
				},
				{
					path: '/more',
					components: {header:mainHeader,main:more,footer:mainFooter}
				},
				{
					path: '/classify',
					components: {header:mainHeader,main:classify,footer:mainFooter}
				},
			]
		}
	]
})