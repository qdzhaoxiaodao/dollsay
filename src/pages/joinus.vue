<template>
	<div class="main">
		<div class="joinus">
			<div class="imglist" v-for="(item,index) in imgList" :key='index'>
				<img :src="item.imgone" alt="" />
				<img :src="item.imgtwo" alt="" />
			</div>
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
				imgList:[
							{imgone:'../../static/img/lufei_0001.png',imgtwo:'../../static/img/lufei_0001.png'},
							{imgone:'../../static/img/lufei_0001.png',imgtwo:'../../static/img/lufei_0001.png'},
							{imgone:'../../static/img/lufei_0001.png',imgtwo:'../../static/img/lufei_0001.png'},
							{imgone:'../../static/img/lufei_0001.png',imgtwo:'../../static/img/lufei_0001.png'},
							{imgone:'../../static/img/lufei_0001.png',imgtwo:'../../static/img/lufei_0002.png'},
							{imgone:'../../static/img/lufei_0001.png',imgtwo:'../../static/img/lufei_0001.png'},
							{imgone:'../../static/img/lufei_0001.png',imgtwo:'../../static/img/lufei_0001.png'},
							{imgone:'../../static/img/lufei_0001.png',imgtwo:'../../static/img/lufei_0001.png'},
							{imgone:'../../static/img/lufei_0001.png',imgtwo:'../../static/img/lufei_0001.png'},
							{imgone:'../../static/img/lufei_0001.png',imgtwo:'../../static/img/lufei_0001.png'},
							
				]
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
		margin-top: 99px;
		.joinus{
			width: 100%;
			padding-top: 100px;
			height: 950px;
			margin: 0 auto;
			background: #b7b0a9;
			opacity: 0.5;
			.imglist{
				float: left;
				width: 10%;
				height: 620px;
				position: relative;
				img{
					position: absolute;
					width: 100%;
					height: auto;
					left: 0;
					top: 0;
				}
			}
		}
	}
</style>