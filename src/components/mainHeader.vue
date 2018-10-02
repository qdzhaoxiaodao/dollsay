<template>
	<div class="header">
		<div class="nav-top">
			<img src="http://wanoushuo.oss-cn-beijing.aliyuncs.com/static/logo2.png" alt="" />
		</div>
		<div class="nav-bot">
			<ul class="nav-main">
				<li>首页</li>
				<li>所有分类</li>
				<li>随便逛逛</li>
				<li>玩偶故事</li>
				<li>关于本站</li>
				<li>英雄帖</li>
				<li>联系我们</li>
				<li>小功能测试</li>
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
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>