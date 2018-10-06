<template>
	<div class="main">
		<div class="article-wrap">
			<div class="article-left">
				<div class="articlelist">
					<div class="list-left">
						<h3>标题</h3>
						<p>
							<span>转载</span>
							<span>作者：</span>
							<span>啊呀呦</span>
						</p>
						<p>
							描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述 描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述 描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
						</p>
						<p>2018-10-6 14:57:00</p>
					</div>
					<div class="list-right">
						<img src="../../static/img/img2.jpg" alt="" />
					</div>
				</div>
			</div>
			<div class="article-right">2</div>
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
				imglist: ['https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg'],
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
		background: #F0EFEE;
		margin-top: 99px;
		.article-wrap {
			width: 950px;
			min-height: 800px;
			margin: 0 auto;
			.article-left {
				width: 600px;
				float: left;
				.articlelist {
					width: 100%;
					height: 175px;
					margin-top: 20px;
					background: #fff;
					border-radius: 6px;
					    box-shadow: 3px 3px 27px #7d7b7b;
					.list-left {
						float: left;
						width: 425px;
						height: 100%;
						h3 {
							color: #fefefe;
							text-shadow: 0px 1px 0px #c0c0c0, 0px 2px 0px #b0b0b0, 0px 3px 0px #a0a0a0, 0px 4px 0px #909090, 0px 5px 10px rgba(0, 0, 0, .9);
							padding-left: 20px;
							margin-bottom: 10px;
						}
						p {
							padding-left: 20px;
							margin-bottom: 10px;
							padding-right: 20px;
							span:nth-of-type(1) {
								color: #f66;
								margin-right: 10px;
							}
							span:nth-of-type(3) {
								color: #ccc;
								margin-right: 10px;
							}
						}
						p:nth-of-type(2) {
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient:vertical;
							-webkit-line-clamp:3;
							line-height: 25px;
							cursor: pointer;
						}
						p:nth-of-type(2):hover {
							color: #46B6CF;
						}
						p:nth-of-type(3){
							text-align: right;
						}
					}
					.list-right {
						float: right;
						width: 175px;
						height: 100%;
						img {
							width: 175px;
							height: 175px;
							border-radius: 0 6px 6px 0;
						}
					}
				}
			}
			.article-right {
				width: 300px;
				float: right;
				background: #fff;
			}
		}
	}
</style>