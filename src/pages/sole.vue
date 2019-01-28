<template>
	<div class="sole">
		<h1>这是成新的网页</h1>
	</div>
</template>
<script>
	import Vue from 'vue'
	import MyAjax from "@/function/MyAjax.js"
	export default {
		name: 'register',
		data() {
			return {
				
			}
		},
		updated() {},
		mounted() {
			var that = this;
			window.scrollTo(0, 0);
		},
		methods: {
		},
	}
</script>
<style scoped lang="scss">
	.sole {
		width: 100%;
		text-align: center;
		h1{
			width: 30px;
			margin: 200px auto;
		}
	}
</style>