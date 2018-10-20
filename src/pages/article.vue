<template>
	<div class="main">
		<div class="article-wrap">
			<div class="article-left">
				<div class="articlelist" v-for="(item,index) in articleList" :key="index">
					<div class="list-left">
						<h3 @click="getDetail(item.id)">{{item.article_title}}</h3>
						<p>
							<span>{{item.article_type}}</span>
							<span>作者：</span>
							<span>{{item.article_author}}</span>
						</p>
						<p>
							{{item.article_dec}}
						</p>
						<p>{{item.article_time}}</p>
					</div>
					<div class="list-right">
						<img :src="item.article_headimg" alt="" />
					</div>
				</div>
			</div>
			<!--<div class="article-right">
				<div style="width: 300px;">
   					<a href="http://www.unicef.cn/cn/">
   					</a>
   				</div>
			</div>-->
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
				articleList:[],
			}
		},
		updated() {},
		mounted() {
			var that = this;
			window.scrollTo(0, 0);
			MyAjax.axiosPost('api/user/getArticle', {
						id:'',
						title: '',
						type: '',
						author: '',
						time: '',
						pageSize:20,
						pageNum:1,
			},
				function(res) {
					console.log(res)
					that.articleList = res.data;
				},
				function(err) {
					console.log(err)
				})
		},
		methods: {
			getDetail(pid){
				console.log(pid)
				var that = this;
				that.$router.push({
					path:'/articleDetail',
					name:'articleDetail',
					params:{'pid':pid}
				})
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
				width: 100%;
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
						width: 760px;
						height: 100%;
						h3 {
							padding-left: 20px;
							margin-bottom: 7px;
							cursor: pointer;
							margin-top: 10px;
						}
						h3:hover{
							color: #f66;
						}
						p {
							padding-left: 20px;
							margin-bottom: 4px;
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
							position:relative;
							line-height:25px;
							height:75px;
							overflow:hidden;
						}
						/*p:nth-of-type(2)::after {
							content:"...";
							font-weight:bold;
							position:absolute;
							bottom:0;
							right:0;
							padding:0 20px 1px 45px;
							background:url(../../static/img/ellipsis_bg.png) repeat-y;
						}*/
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
			}
		}
	}
</style>