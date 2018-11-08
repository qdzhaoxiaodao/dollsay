<template>
	<div class="main">
		<div id="banner"></div>
		<ul id="tab" style="border-top:0;font-size:18px">
			<li>最近更新</li>
			<li>主题系列</li>
			<li>随便刷刷</li>
			<li>五夜后宫</li>
			<li>更多 →</li>
		</ul>
		<div class="main-content">
			<ul id="tiles">
				<li v-for="(item,index) in imglist" :key='index' class="imglist">
					<div style="width: 278px;height: 278px;">
						<img v-lazy="item.img_url">
					</div>
					<!--<img :src="item" width="278">-->
					<div class="post-info">
						<div class="post-basic-info">
							<h3><a href="#">{{item.img_name}}</a></h3>
							<span><a href="#"><label> </label>{{item.img_classify}}</a></span>
						</div>
						<!--<div class="post-info-rate-share">
							<div class="rateit">
								<span> </span>
							</div>
							<div class="post-share">
								<span> </span>
							</div>
							<div class="clear"> </div>
						</div>-->
					</div>
				</li>
				<li style="height: 0;border: 0;"></li>
				<li style="height: 0;border: 0;"></li>
				<li style="height: 0;border: 0;"></li>
				<li style="height: 0;border: 0;"></li>
				<li style="height: 0;border: 0;"></li>
				<li style="height: 0;border: 0;"></li>
				<li style="height: 0;border: 0;"></li>
				<li style="height: 0;border: 0;"></li>
				<li style="height: 0;border: 0;"></li>
			</ul>
			<div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" style="text-align: center;">
 				<img src="../../static/img/xiaohuangya.gif" alt="" style="width: 100px;"/>
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
				name:'',
				busy: false,
				pageNum:1,
				imgHeight: '',
				imglist:[],
				imglist1: ['https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/192/811/8543118291_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/660/331/8543133066_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/842/721/8543127248_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/404/001/8543100404_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/051/265/8562562150_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/494/933/8576339494_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/492/121/8543121294_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/341/753/8576357143_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/582/655/8562556285_55792555.jpg', 'https://cbu01.alicdn.com/img/ibank/2018/779/813/8576318977_55792555.jpg'],
			}
		},
		updated() {},
		mounted() {
			var that = this;
			window.scrollTo(0, 0);
			console.log(that.$route.params.name);
			that.imgcncat = function(){
				MyAjax.axiosPost('api/user/searchImg', {
					name:that.$route.params.name,
					pageSize:8,
					pageNum:that.pageNum
				},function(res) {
					console.log(res)
					if(res.data.length != 0){
						that.imglist= that.imglist.concat(res.data);
					}
				});
			}
			that.imgcncat();
		},
		methods: {
			loadMore() {
				var that = this;
				this.busy = true;
				//官方示例中延迟了1秒，防止滚动条滚动时的频繁请求数据
				console.log(that.imglist.length)
				setTimeout(() => {
					that.pageNum++
					console.log(that.imglist.length%8)
					if(that.imglist.length%8 == 0){
						that.imgcncat();
						this.busy = false;
					}else{
						this.busy = true;
					}
				}, 1000);
			}
		},
	}
</script>
<style scoped lang="scss">
	.main {
		width: 100%;
		margin: 0 auto;
		background: #91C8DC;
		margin-top: 99px;
		#tab {
			width: 100%;
			text-align: center;
			height: 90px;
			color: #fff;
			li {
				display: inline-block;
				cursor: pointer;
				margin-left: 20px;
				margin-top: 30px;
				padding-bottom: 10px;
			}
			li:hover {
				border-bottom: 3px solid #FD9EB2;
				color: #FD9EB2;
			}
		}
		.main-content {
			width: 100%;
			background: #fff;
			#tiles {
				width: 100%;
				display: flex;
				justify-content: center;
				align-content: center;
				flex-wrap: wrap;
				list-style-type: none;
				position: relative;
				margin: 0;
				padding: 0;
			}
			#tiles li:hover img {
				opacity: 0.5;
			}
			#tiles li {
				background-color: #ffffff;
				border: 1px solid #dedede;
				border-radius: 2px;
				-moz-border-radius: 2px;
				-webkit-border-radius: 2px;
				/*//  display: none;*/
				cursor: pointer;
				border-radius: 0.2em;
				margin: 5px;
			}
			#tiles li img {
				border-top-left-radius: 0.2em;
				border-top-right-radius: 0.2em;
				border-bottom: 3px solid #46b6cf;
			}
			#tiles li.inactive {
				visibility: hidden;
				opacity: 0;
			}
			#tiles li img {
				display: block;
				width: 100%;
			}
			.post-share span {
				background: url(../../static/img/facebook.png) no-repeat 0px 0px;
				height: 26px;
				width: 26px;
				display: inline-block;
				border-radius: 30em;
				-webkit-border-radius: 30em;
				-moz-border-radius: 30em;
				-o-border-radius: 30em;
			}
			.post-share span:hover {
				background: url(../../static/img/facebookh.png) no-repeat 0px 0px;
			}
			.rateit span {
				height: 18px;
				width: 76px;
				background: url(../../static/img/start-rate.png) no-repeat 0px 0px;
				display: inline-block;
			}
			.rateit span:hover {
				background: url(../../static/img/start-rateh.png) no-repeat 0px 0px;
			}
			.post-basic-info {
				padding: 7% 7% 5% 7%;
			}
			.post-basic-info h3 a {
				color: #717171;
				font-size: 1.2em;
				margin-bottom: 0.2em;
				display: block;
				transition: 0.5s all;
				-webkit-transition: 0.5s all;
				-moz-transition: 0.5s all;
				-o-transition: 0.5s all;
			}
			.post-basic-info h3 a:hover {
				color: #B9CB41;
			}
			.post-basic-info span a {
				color: #ACAAAA;
				font-size: 0.9em;
			}
			.post-basic-info span a label {
				height: 12px;
				width: 12px;
				display: inline-block;
				background: url(../../static/img/map-pin.png) no-repeat 0px 0px;
				margin-right: 0.4em;
				transition: 0.5s all;
				-webkit-transition: 0.5s all;
				-moz-transition: 0.5s all;
				-o-transition: 0.5s all;
			}
			.post-basic-info span a:hover {
				color: #B9CB41;
			}
			.post-basic-info p {
				font-size: 0.875em;
				color: #B7B5B5;
				margin: 0.6em 0;
				line-height: 1.5em;
			}
			.post-info-rate-share {
				border-top: 1px solid rgba(183, 181, 181, 0.36);
				padding: 4% 0 2%;
			}
			.rateit {
				float: left;
				margin: 0.18em 0 0 1em;
			}
			.post-share {
				float: right;
				margin-right: 1.5em;
			}
		}
	}
</style>