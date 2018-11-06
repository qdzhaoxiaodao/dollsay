<template>
	<div class="home">
		<!--<img src="http://wanoushuo.oss-cn-beijing.aliyuncs.com/static/dlb01.jpg" width="100%" alt="" />-->
		<div class="home-main">
			<div class="main-top">
				<div class="main-top-top">
					<div class="main-top-top-left">
						<h3>本网站已收录：</h3>
						<p>
							<span>300</span>
							<span>篇玩偶文章</span>
						</p>
						<p>
							<span>180</span>
							<span>个玩偶系列</span>
						</p>
						<p>
							<span>2000000</span>
							<span>款玩偶</span>
						</p>
					</div>
					<div class="main-top-top-right">
						<img src="http://wanoushuo.oss-cn-beijing.aliyuncs.com/static/f519_02.jpg" alt="" />
						<img src="http://wanoushuo.oss-cn-beijing.aliyuncs.com/static/f519_03.jpg" alt="" />
						<div class="p-img">
							<p class="p-text" style="text-align: right;">
								一直在这里等你，不吵不闹。<br> 橱窗里，淡淡的忧伤，孤单却又满怀希望。
								<br> 我知道，很久很久以前的你，怕黑，怕一个人，但是，其实。
								<br> 你知道吗，我一直在等你来。
								<br> 带走属于你的我，陪你难过，大笑，即使我无法开口，但是。
								<br> 我懂你的忧伤，可是，最后你却没有带走我。
								<br>
								<br>
							</p>
						</div>
					</div>
				</div>
				<!--<div class="main-top-bot">
   			<img src="http://wanoushuo.oss-cn-beijing.aliyuncs.com/static/f519_04.jpg" alt="" />
   			<img src="http://wanoushuo.oss-cn-beijing.aliyuncs.com/static/f519_05.jpg" alt="" />
   		</div>-->
			</div>
		</div>
		<div class="news"></div>
		<div class="main-content">
			<div class="main-left">
				<div class="tablist" v-for="(item,index) in articleList" :key='index'>
					<div class="img">
						<img :src="item.article_headimg" alt="" />
					</div>
					<div class="introduce">
						<router-link :to="{path:'/articleDetail/'+item.id}" tag='p'>{{item.article_title}}</router-link>
						<p>{{item.article_dec}}</p>
					</div>
					<div class="xilie">
						<p>标签：<span>{{item.article_type}}</span></p>
						<p>{{item.article_time}}</p>
					</div>
				</div>
				<router-link to='/more' tag='div' class="more">发现更多>>></router-link>
				<div class="news"></div>
			<div id="imgs">
				<div class="list" v-for="(item,index) in imgList" :key='index'>
					<img :src="item.img_url" alt="" />
					<div class="name">
						{{item.img_name}}
					</div>
				</div>
				<div class="list" style="height: 0;border: 0;"></div>
				<div class="list" style="height: 0;border: 0;"></div>
				<div class="list" style="height: 0;border: 0;"></div>
				</div>
				<router-link to='/more' tag='div' class="more">发现更多>>></router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import MyAjax from "@/function/MyAjax.js"
	export default {
		name: 'HelloWorld',
		data() {
			return {
				articleList:[],
				imgList:[]
			}
		},
		mounted() {
			window.scrollTo(0, 0);
			var that = this;
			MyAjax.axiosPost('api/user/getArticle', {
				id:'',
				title: '',
				type: '',
				author: '',
				time: '',
				pageSize:6,
				pageNum:1,
			},
				function(res) {
				console.log(res)
				for(var i = 0;i<res.data.length;i++){
					res.data[i].article_time = res.data[i].article_time.slice(0,10);
				}
				that.articleList = res.data;
			},
			function(err) {
				console.log(err)
			})
			MyAjax.axiosPost('api/user/searchImg', {
				pageSize:9,
				pageNum:1,
			},
				function(res) {
				console.log(res)
				that.imgList= res.data;
			},
			function(err) {
				console.log(err)
			})
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.home {
		width: 100%;
		margin-top: 110px;
		overflow: hidden;
		.home-main {
			width: 950px;
			margin: 0 auto;
			.main-top {
				width: 100%;
				height: 402px;
				.main-top-top {
					width: 100%;
					height: 402px;
					margin-bottom: 13px;
					.main-top-top-left {
						width: 402px;
						height: 402px;
						float: left;
						background: url('http://wanoushuo.oss-cn-beijing.aliyuncs.com/static/f519_01.jpg') no-repeat;
						background-size: 402px 402px;
						color: #f4fff1;
						h3 {
							margin: 40px 0 20px;
							padding-left: 30px;
						}
						p {
							text-align: center;
							width: 100%;
							margin-bottom: 20px;
							span {
								display: inline;
							}
							span:nth-of-type(1) {
								color: #46b6cf;
								font-size: 40px;
							}
							span:nth-of-type(2) {
								font-size: 20px;
							}
						}
					}
					.main-top-top-right {
						width: 535px;
						height: 402px;
						float: right;
						img:nth-of-type(1) {
							float: left;
						}
						img:nth-of-type(2) {
							float: right;
							margin-bottom: 3px;
						}
						.p-img {
							float: left;
							width: 100%;
							height: 126px;
							background: #f4fff1;
						}
						.p-text {
							color: #01A3EE;
							height: 126px;
							line-height: 20px;
							width: 537px;
							font-size: 12px;
							padding: 5px;
							margin: 0px;
							text-decoration: none;
							background: url('http://wanoushuo.oss-cn-beijing.aliyuncs.com/static/F419_bg.jpg') left top no-repeat;
						}
					}
				}
				.main-top-bot {
					height: 287px;
					width: 950px;
					img:nth-of-type(1) {
						float: left;
					}
					img:nth-of-type(2) {
						float: right;
					}
				}
			}
		}
		.news {
			width: 100%;
			min-height: 50px;
			line-height: 50px;
			text-align: center;
			color: #fd9eb2;
			font-size: 25px;
			margin: 33px 0;
			background: url(../../static/img/news.png) no-repeat center center;
		}
		.main-content {
			width: 950px;
			margin: 0 auto;
			.main-left {
				width: 100%;
				min-height: 600px;
				float: left;
				.tablist {
					width: 100%;
					height: 200px;
					background: #fff;
					padding: 10px;
					color: #5c686d;
					box-shadow: 1px 2px 6px #f39a9a;
					margin-bottom: 20px;
					.img {
						width: 190px;
						height: 190px;
						float: left;
						img {
							width: 180px;
							height: 180px;
						}
					}
					.introduce {
						float: left;
						width: 400px;
						height: 190px;
						margin-left: 90px;
						p:nth-of-type(1) {
							font-size: 18px;
							color: #1684a9;
							margin-top: 20px;
							margin-bottom: 30px;
							text-align: right;
							cursor: pointer;
						}
						p:nth-of-type(2) {
							height: 90px;
							line-height: 30px;
							font-size: 16px;
							color: #6d696a;
							margin-bottom: 5px;
							text-indent: 24px;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 3;
						}
					}
					.xilie {
						width: 225px;
						height: 190px;
						float: right;
						p:nth-of-type(1) {
							font-size: 16px;
							color: #000;
							text-align: left;
							margin-top:77px;
							padding-left:30px;
							margin-bottom:38px;
							span {
								color: #42B983;
								margin-right: 12px;
							}
						}
						p:nth-of-type(2) {
							font-size: 18px;
							text-align: center;
						}
					}
				}
				.tablist:hover {
					box-shadow: 1px 2px 6px #409eff;
				}
				.more {
					width: 200px;
			    font-size: 14px;
			    cursor: pointer;
			    color: #01A3EE;
			    float: right;
			    text-align: right;
			    margin-bottom: 20px;
				}
				#imgs{
					width: 950px;
					margin: 0 auto;
					justify-content: space-between;
					display: flex;
					flex-wrap: wrap;
					.list{
						width: 300px;
						height: 300px;
						background-color: #fff;
				    border: 1px solid #dedede;
				    border-radius: 2px;
				    -moz-border-radius: 2px;
				    -webkit-border-radius: 2px;
				    cursor: pointer;
				    border-radius: .2em;
				    margin: 5px;
				    position: relative;
				    img{
				    	width: 100%;
				    	height: 100%;
				    	position: absolute;
				    	left: 0;
				    	top: 0;
				    }
				    .name{
				    	width: 300px;
				    	height: 300px;
				    	position: absolute;
				    	color: #fff;
				    	background: rgba(118, 143, 147, 0.5);
				    	display: none;
				    	font-size: 20px;
				    	text-align: center;
				    	line-height: 300px;
				    }
					}
					.list:hover .name{
						display: block;
					}
				}
			}
		}
	}
</style>