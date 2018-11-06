<template>
	<div class="main" id="main">
		<div class="article-wrap">
			<div class="article-left">
				<h3>{{dataList.article_title}}</h3>
				<p class="linetwo">
					<span>{{dataList.article_type}}</span>
					<span>作者:</span>
					<span>{{dataList.article_author}}</span>
					<span>{{dataList.article_time}}</span>
				</p>
				<div class="detailmain" v-html="dataList.article_content">
					
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
				dataList:[]
			}
		},
		updated() {},
		mounted() {
			var that = this;
			window.scrollTo(0, 0);
			console.log(that.$route.params.id)
			MyAjax.axiosPost('api/user/getArticleDetail', {
				id:that.$route.params.id,
			},
				function(res) {
				console.log(res)
				res.data[0].article_time = res.data[0].article_time.slice(0,10);
				that.dataList = res.data[0];
			},
			function(err) {
				console.log(err)
			})
		},
		methods: {
			getDetail(pid){
				console.log(1111)
			}
		},
	}
</script>
<style scoped lang="scss">
	#main {
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
				
			}
			.article-right {
				width: 300px;
				float: right;
			}
		}
	}
</style>