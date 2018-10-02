<template>
	<div class="header">
		<div class="nav-top">
			<img src="http://wanoushuo.oss-cn-beijing.aliyuncs.com/static/logo2.png" alt="" />
		</div>
		<div class="nav-bot">
			<ul class="nav-main">
				<router-link to='/home' tag='li'>首页</router-link>
				<router-link to='/classify' tag='li'>所有分类</router-link>
				<router-link to='/more' tag='li'>随便逛逛</router-link>
				<router-link to='/classify' tag='li'>玩偶故事</router-link>
				<router-link to='/classify' tag='li'>英雄帖</router-link>
				<router-link to='/classify' tag='li'>联系我们</router-link>
				<router-link to='/classify' tag='li'>小功能测试</router-link>
				<router-link to='/classify' tag='li'>关于本站</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	import MyAjax from "@/function/MyAjax.js"
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>