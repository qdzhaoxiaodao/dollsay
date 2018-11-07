<template>
	<div class="admin">
		<div class="check">
			<h3 :class="indexa==0?'bgcheck':''" @click="ischeck(0)">文章录入</h3>
			<h3 :class="indexa==1?'bgcheck':''" @click="ischeck(1)">图片录入</h3>
			<h3 :class="indexa==2?'bgcheck':''" @click="ischeck(2)">分类录入</h3>
		</div>

		<div class="article" v-if="ishide==0">
			<input type="text" placeholder="请输入文章标题" v-model="title" />
			<div class="options">
				<ul>
					<li :class="indexs==index?'bgclick':''" @click="isclick(index)" v-for="(item,index) in options" :key='index'>{{item.value}}</li>
				</ul>
			</div>
			<input type="text" placeholder="请输入作者名字" v-model="oldname" />
			<input type="text" placeholder="请输入文章简单描述" v-model="dec" />
			<input type="text" placeholder="请输入列表页展示图片地址" v-model="listimg" />
			<textarea autocomplete="off" placeholder="" style="min-height: 327px; height: 327px;" v-model="textareas">
			<p>文字</p>
			<img src="" alt="" />图片地址模板
			<a href="">图片地址</a>
			</textarea>
			<button type="button" @click="addArticle()">
				文章提交
			</button>
		</div>
		<div class="article" v-if="ishide==1">
			<p style="padding: 10px 0;">请选择图片分类</p>
			<div class="classifyhead" @click='show()'>
				{{classifyvalue}}
				<ul v-if="isshow">
					<li @click="showlist(item)" v-for="(item,index) in classifylist" :key="index">
						{{item.id}}:{{item.classify_name}}
					</li>
				</ul>
			</div>
			<p>请选择图片(图片命名格式'兔兔_00001.png')</p>
			<ul class="clearfix">
				<li v-if="imgs.length>0" v-for='(item ,index ) in imgs'>
					<img :src="item">
				</li>
				<li style="position:relative" v-if="imgs.length>=6 ? false : true">
					<input :id="id" multiple class="upload" @change='toUpload' type="file" value="上传图片">
				</li>
			</ul>
			<button type="button" @click="addimg()">
				图片提交
			</button>
		</div>
		<div class="article" v-if="ishide==2">
			<input type="text" placeholder="请输入分类名称" />
			<input type="text" placeholder="请输入分类描述" />
			<input type="text" placeholder="请输入分类类型" />
			<p>请选择分类图片</p>
			<ul class="clearfix">
				<li v-if="imgs.length>0" v-for='(item ,index ) in imgs'>
					<img :src="item">
				</li>
				<li style="position:relative" v-if="imgs.length>=6 ? false : true">
					<input class="upload" @change='toUpload' type="file">
				</li>
			</ul>
			<button type="button" @click="addClassify()">
					分类提交
				</button>
		</div>
		<!--<input type="date" />
		<input type="datetime" />
		<input type="datetime-local" name="" id="" value="" />-->
		<!--<div class="article">
			<input type="text" placeholder="请输入文章名称进行搜索" />
			<button type="button">
				搜索
			</button>
		</div>

		<div class="article">
			<input type="text" placeholder="请输入分类名称" v-model="classifyname" />
		</div>
		<button type="button" @click="addfenlei()">
			添加分类
		</button>-->
	</div>
</template>

<script>
	const OSS = require('ali-oss').Wrapper;
	import MyAjax from "@/function/MyAjax.js"
	export default {
		name: 'admin',
		data() {
			return {
				textareas: '',
				dec: '',
				time: '',
				listimg: '',
				classifylist: [],
				classifyvalue: '',
				classifyid: '',
				imgs: [],
				imgData: {
					accept: 'image/gif, image/jpeg, image/png, image/jpg',
				},
				ishide: 0,
				indexs: 0,
				indexa: 0,
				name: '',
				title: '',
				data: '',
				oldname: '',
				newname: '',
				textvalue: '',
				options: [{
					value: '转载'
				}, {
					value: '原创'
				}],
				value: '转载',
				id: 'uploadImage',
				classifyname: '',
				imgurl: '',
				files: '',
				isshow: false,
			}
		},
		mounted() {
		},
		methods: {
			//添加文章
			addArticle() {
				var that = this;
				console.log(CurentTime())
				function CurentTime() {
					var now = new Date();
					var year = now.getFullYear(); //年
					var month = now.getMonth() + 1; //月
					var day = now.getDate(); //日
					var hh = now.getHours(); //时
					var mm = now.getMinutes(); //分
					var ss = now.getSeconds() //分
					console.log(ss)
					var clock = year + "-";
					if(month < 10)
						clock += "0";
					clock += month + "-";
					
					if(day < 10)
						clock += "0";
					clock += day + " ";
					
					if(hh < 10)
						clock += "0";
					clock += hh + ":";
					
					if(mm < 10)
						clock += '0';
					clock += mm+ ":";
					
					if(ss < 10)
						clock += '0';
					clock += ss;
					return(clock);
				}
				MyAjax.axiosPost('api/user/addArticle', {
					title: that.title,
					type: that.value,
					author: that.oldname,
					time: CurentTime(),
					headimg: that.listimg,
					dec: that.dec,
					content: that.textareas
				},
				function(res) {
					console.log(res)
				},
				function(err) {
					console.log(err)
				})
			},
			//添加图片
			addimg() {
				var that = this;
				let OSS = require('ali-oss')
				var client = new OSS({
					region: 'oss-cn-beijing',
					accessKeyId: 'LTAIOMFBxvPzWjNo',
					accessKeySecret: 'g2bhkjLspkbMkURUDArTYeiL6hhFd2',
					bucket: 'wanoushuo',
				});
				console.log(that.files.files)
				if(that.files.files) {
					const fileLen = document.getElementById(this.id).files
					console.log(fileLen)
					const file = document.getElementById(this.id).files[0]
					let consat = file.name;
					let img_name = consat.split('_')[0]
					for(let i = 0; i < fileLen.length; i++) {
						const file = fileLen[i];
						let name = fileLen[i].name;
						client.put('allImg/' + name, file).then((results) => {
							console.log(results.url)
							//that.imgurl = results.url;
							MyAjax.axiosPost('api/user/addImg', {
									imgurl: results.url,
									name: img_name,
									classify: '22222',
									classifyid: 5
								},
								function(res) {
									console.log(res)
								},
								function(err) {
									console.log(err)
								})
						}).catch((err) => {
							console.log(err)
						})
					}
				}
			},
			//添加分类
			addClassify() {
				var that = this;
				var arr = ['猫猫','狗狗','魂斗罗','五夜后宫','精灵','神奇宝贝','熊本熊','小黄鸭','十二生肖','泰迪熊'];
				for(var i = 0;i<arr.length;i++){
					MyAjax.axiosPost('api/user/addClassify', {
						classify_img:'https://wanoushuo.oss-cn-beijing.aliyuncs.com/test/%E5%85%94%E5%85%94_000003.png',
						classify_dec:'这是一个寂寞的天，下着有些伤心的雨。',
						classify_likenum:1,
						classify_type:'电影',
		               	classify_name: arr[i],
					},
		            function(res){
	             		console.log(res)
	             	},function(err){
	             		console.log(err)
	             	})
				}
//				let OSS = require('ali-oss')
//				var client = new OSS({
//					region: 'oss-cn-beijing',
//					accessKeyId: 'LTAIOMFBxvPzWjNo',
//					accessKeySecret: 'g2bhkjLspkbMkURUDArTYeiL6hhFd2',
//					bucket: 'wanoushuo',
//				});
//				console.log(that.files.files)
//				if(that.files.files) {
//					const fileLen = document.getElementById(this.id).files
//					console.log(fileLen)
//					const file = document.getElementById(this.id).files[0]
//					let consat = file.name;
//					let img_name = consat.split('_')[0]
//					for(let i = 0; i < fileLen.length; i++) {
//						const file = fileLen[i];
//						let name = fileLen[i].name;
//						client.put('allImg/' + name, file).then((results) => {
//							console.log(results.url)
//							//that.imgurl = results.url;
//							MyAjax.axiosPost('api/user/addImg', {
//									imgurl: results.url,
//									name: img_name,
//									classify: '22222',
//									classifyid: 5
//								},
//								function(res) {
//									console.log(res)
//								},
//								function(err) {
//									console.log(err)
//								})
//						}).catch((err) => {
//							console.log(err)
//						})
//					}
//				}
			},
			isclick(index) {
				this.indexs = index;
				this.value = this.options[index].value;
				console.log(this.value)
			},
			ischeck(index) {
				this.indexa = index;
				this.ishide = index;
			},
			toUpload() {
				//oss 基本配置
				var that = this;
				//获取文件信息
				const files = document.getElementById(this.id)
				that.files = files;
				console.log(that.files.files)
			},
			show() {
				this.isshow = !this.isshow;
			},
			showlist(item) {
				var that = this;
				that.classifyvalue = item.classify_name;
				that.classifyid = item.id;
			}
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.admin {
		width: 950px;
		margin: 0 auto;
		margin-top: 98px;
		padding-top: 20px;
		.check {
			width: 100%;
			height: 40px;
			background: #fff;
			color: #606266;
			line-height: 40px;
			h3 {
				width: 33.3%;
				float: left;
				height: 40px;
				text-align: center;
				cursor: pointer;
			}
			h3:nth-of-type(2) {
				border-left: 1px solid #e87261;
				border-right: 1px solid #e87261;
			}
			.bgcheck {
				background: #768f93;
				color: #fff;
			}
		}
		.article {
			width: 100%;
			.classifyhead {
				-webkit-appearance: none;
				background-color: #fff;
				background-image: none;
				border-radius: 4px;
				border: 1px solid #dcdfe6;
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				color: #606266;
				display: inline-block;
				font-size: inherit;
				height: 40px;
				line-height: 40px;
				outline: 0;
				padding: 0 15px;
				-webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
				transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
				width: 100%;
				margin-bottom: 10px;
				position: relative;
				text-align: center;
				cursor: pointer;
				ul {
					width: 100%;
					height: 400px;
					border: 1px solid #46b5cf;
					position: absolute;
					left: 0;
					top: 40px;
					z-index: 44;
					background: #fff;
					overflow: auto;
					li {
						width: 100%;
						height: 30px;
						line-height: 30px;
						text-align: center;
						border-bottom: 1px solid #e87261;
						cursor: pointer;
					}
				}
			}
			.options {
				width: 100%;
				ul {
					width: 100%;
					li {
						width: 100%;
						height: 30px;
						line-height: 30px;
						background: #fff;
						padding-left: 16px;
						margin-bottom: 5px;
						cursor: pointer;
					}
					.bgclick {
						background: #46b5cf;
						color: #fff;
					}
				}
			}
			input {
				-webkit-appearance: none;
				background-color: #fff;
				background-image: none;
				border-radius: 4px;
				border: 1px solid #dcdfe6;
				box-sizing: border-box;
				color: #606266;
				display: inline-block;
				font-size: inherit;
				height: 40px;
				line-height: 40px;
				outline: 0;
				padding: 0 15px;
				transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
				width: 100%;
				margin-bottom: 10px;
			}
			textarea {
				display: block;
				resize: vertical;
				padding: 5px 15px;
				line-height: 1.5;
				box-sizing: border-box;
				width: 100%;
				font-size: inherit;
				color: #606266;
				background-color: #fff;
				background-image: none;
				border: 1px solid #dcdfe6;
				border-radius: 4px;
				transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
			}
		}
		button {
			display: inline-block;
			line-height: 1;
			white-space: nowrap;
			cursor: pointer;
			background: #fff;
			border: 1px solid #dcdfe6;
			color: #606266;
			-webkit-appearance: none;
			text-align: center;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			outline: 0;
			margin: 0;
			-webkit-transition: .1s;
			transition: .1s;
			font-weight: 500;
			padding: 12px 420px;
			font-size: 27px;
			border-radius: 4px;
			margin: 20px 0;
		}
		button:hover {
			background: #409EFF;
			color: #fff;
		}
	}
</style>