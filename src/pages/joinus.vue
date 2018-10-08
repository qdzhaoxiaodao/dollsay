<template>
	<div class="main">
		<div class="joinus">
			
		</div>
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
	.main {
		width: 100%;
		margin: 0 auto;
		background: url(../../static/img/lufei.jpg) center 0px no-repeat fixed #fff;
		margin-top: 99px;
		.joinus{
			width: 950px;
			height: 950px;
			margin: 0 auto;
			background: #b7b0a9;
			opacity: 0.5;
		}
	}
</style>