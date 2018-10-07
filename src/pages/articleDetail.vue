<template>
	<div class="main">
		<div class="article-wrap">
			<div class="article-left">
				<h3>一只丑玩偶</h3>
				<p class="linetwo">
					<span>转载</span>
					<span>作者:</span>
					<span>坂本鱼子酱</span>
					<span>2018-12-12 10:10:00</span>
				</p>
				<div class="detailmain">
					<p>前两天我买了只毛绒玩具</p>
					<p>买的时候还挺期待的。没想到买来以后一看，居然那么丑。</p>
					<p>正面照片，头上两个角真有个性</p>
					<img src="https://pic1.zhimg.com/80/9670c4dd3e8696455da480fa66dd81df_hd.jpg" alt="" />
					<p>背面照片，小尾巴也真有个性</p>
					<img src="https://pic3.zhimg.com/80/1b0debd396a96e0cd89d908d6f5896b3_hd.jpg" alt="" />
					<p>歪一点照，稍稍好看了一点</p>
					<img src="https://pic3.zhimg.com/80/f4f8ed3684b03101254cb81d009825d9_hd.jpg" alt="" />
					<p>这个角度看终于好了。</p>
					<img src="https://pic4.zhimg.com/80/48dc08f69b4950e18e2cbbd36dfc075c_hd.jpg" alt="" />
					<p>那个啥配白富美来着？</p>
					<img src="https://pic1.zhimg.com/80/68075c3359d713dc90d630a5b6e3ac91_hd.jpg" alt="" />
					<p>做工也不好，有开线，还有漏的绒绒。给制作方点面子就不拍了。</p>
					<p>居然卖那么高的价钱。</p>
					<p>我好心疼。</p>
					<a href="https://zhuanlan.zhihu.com/p/20560775">原文链接：https://zhuanlan.zhihu.com/p/20560775</a>
				</div>
			</div>
			<div class="article-right">
				<div style="width: 300px;">
   					<a href="http://www.unicef.cn/cn/">
   						<img src="https://tpc.googlesyndication.com/daca_images/simgad/12828719771019780790" border="0" width="300" alt="" class="img_ad">
   					</a>
   				</div>
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
				imglist: ['https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg'],
			}
		},
		updated() {},
		mounted() {
			var that = this;
			window.scrollTo(0, 0);
			console.log(that.$route.params.pid)
		},
		methods: {
			getDetail(pid){
				console.log(1111)
			}
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
				padding-top: 30px;
				background: #fff;
				h3{
					margin-bottom: 10px;
					padding-left: 16px;
				}
				.linetwo{
					line-height: 30px;
					font-size: 14px;
					padding-left: 48px;
					span:nth-of-type(1){
						color: #f66;
						margin-right: 10px;
					}
					span:nth-of-type(3){
						margin-left: 10px;
						margin-right: 10px;
					}
					
				}
				.detailmain{
					padding-bottom: 20px;
					p{
						line-height: 28px;
						text-indent: 32px;
						font-size: 14px;
						color: #484545;
						padding:0 16px ;
					}
					img{
						width: 100%;
						margin: 10px 0;
					}
					a{
						padding-left: 32px;
						text-decoration: underline;
						color: blue;
					}
				}
			}
			.article-right {
				width: 300px;
				float: right;
			}
		}
	}
</style>