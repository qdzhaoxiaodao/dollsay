<template>
	<div class="admin">
		<div class="check">
			<h3 :class="indexa==0?'bgcheck':''" @click="ischeck(0)">文章录入</h3>
			<h3 :class="indexa==1?'bgcheck':''" @click="ischeck(1)">图片录入</h3>
			<h3 :class="indexa==2?'bgcheck':''" @click="ischeck(2)">分类录入</h3>
		</div>

		<div class="article" v-if="ishide==0">
			<input type="text" placeholder="请输入文章标题" v-model="tittle" />
			<div class="options">
				<ul>
					<li :class="indexs==index?'bgclick':''" @click="isclick(index)" v-for="(item,index) in options" :key='index'>{{item.value}}</li>
				</ul>
			</div>
			<input type="text" placeholder="请输入作者名字" v-model="oldname" />
			<textarea autocomplete="off" placeholder="请输入内容" style="min-height: 327px; height: 327px;"></textarea>
		</div>
		<div class="article" v-if="ishide==1">
			 <div class="classifyhead" @click='show()'>
			 	{{classifyvalue}}
			 	<ul v-if="isshow">
			 		<li @click="showlist(item)" v-for="(item,index) in classifylist" :key="index">
			 			{{item.id}}:{{item.classify_name}}
			 		</li>
			 	</ul>
			 </div>
			<ul class="clearfix">
				<li v-if="imgs.length>0" v-for='(item ,index ) in imgs'>
					<img :src="item">
				</li>
				<li style="position:relative" v-if="imgs.length>=6 ? false : true">
					<input :id="id" multiple class="upload" @change='toUpload' type="file" value="上传图片">
				</li>
			</ul>

		</div>
		<div class="article" v-if="ishide==2">
			<input type="text" placeholder="请输入分类名称" />
			<ul class="clearfix">
				<li v-if="imgs.length>0" v-for='(item ,index ) in imgs'>
					<img :src="item">
				</li>
				<li style="position:relative" v-if="imgs.length>=6 ? false : true">
					<input class="upload" @change='toUpload' type="file">
				</li>
			</ul>

		</div>
		<button type="button">
			提交
		</button>
		<div class="article">
			<input type="text" placeholder="请输入文章名称进行搜索" />
		</div>
		<button type="button">
			搜索
		</button>
		<div class="article">
			<input type="text" placeholder="请输入分类名称" v-model="classifyname" />
		</div>
		<button type="button" @click="addfenlei()">
			添加分类
		</button>
	</div>
</template>

<script>
	const OSS = require('ali-oss').Wrapper;
	import MyAjax from "@/function/MyAjax.js"
	export default {
		name: 'admin',
		data() {
			return {
				classifylist:[],				
				classifyvalue:'',
				classifyid:'',
				imgs: [],
				imgData: {
					accept: 'image/gif, image/jpeg, image/png, image/jpg',
				},
				ishide: 0,
				indexs: 0,
				indexa: 0,
				name: '',
				tittle: '',
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
				files:'',
				isshow:false,
			}
		},
		mounted(){
			var that = this;
			MyAjax.axiosPost('api/user/searchCalssify', {
			},
            function(res){
         		console.log(res)
         		that.classifylist = res.data;
         		that.classifyvalue = res.data[0].classify_name;
         		that.classifyid = res.data[0].id;
         	},function(err){
         		console.log(err)
         	})
		},
		methods: {
			addfenlei() {
				var that = this;
				//				MyAjax.axiosPost('api/user/addClassify', {
				//	               classifyname: '猫猫'
				//				},
				//	            function(res){
				//             		console.log(res)
				//             	},function(err){
				//             		console.log(err)
				//             	})
				let OSS = require('ali-oss')
				var client = new OSS({
					region: 'oss-cn-beijing',
					accessKeyId: 'LTAIOMFBxvPzWjNo',
					accessKeySecret: 'g2bhkjLspkbMkURUDArTYeiL6hhFd2',
					bucket: 'wanoushuo',
				});
				if(that.files.files) {
					const fileLen = document.getElementById(this.id).files
					console.log(fileLen)
					const file = document.getElementById(this.id).files[0]
					let consat = file.name;
					let img_name = consat.split('_')[0]
					for(let i = 0; i < fileLen.length; i++) {
						const file = fileLen[i];
						let name = fileLen[i].name;
						client.put('test/' + name, file).then((results) => {
							console.log(results.url)

							//that.imgurl = results.url;
							MyAjax.axiosPost('api/user/addImg', {
								imgurl: results.url,
								name: img_name,
								classify: '33333',
								classifyid: 4
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
			show(){
				this.isshow = !this.isshow;
			},
			showlist(item){
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
			.classifyhead{
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
			   	position:relative;
			   	text-align:center;
			   	cursor:pointer;
			    ul{
			    	width: 100%;
			    	height: 400px;
			    	border: 1px solid #46b5cf;
			    	position: absolute;
			    	left: 0;
				    top: 40px;
				    z-index: 44;
				    background: #fff;
				    overflow: auto;
				    li{
				    	width: 100%;
				    	height: 30px;
				    	line-height: 30px;
				    	text-align: center;
				    	border-bottom: 1px solid #e87261;
				    	cursor:pointer;
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
			padding: 12px 40px;
			font-size: 14px;
			border-radius: 4px;
			margin: 20px 50%;
		}
		button:hover {
			background: #409EFF;
			color: #fff;
		}
	}
</style>