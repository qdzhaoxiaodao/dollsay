<template>
  <div class="footer">
  	<h3>友情链接</h3>
  	<div class="yqlj">
  		<div v-for="(item,index) in lianjie" :key='index'>
  			<a :href="item.href">
  				<img :src="item.src" alt="" />
  				<span>{{item.name}}</span>
  			</a>
  		</div>
  		<div style="height: 0;padding: 0; margin: 0 10px;"></div>
  		<div style="height: 0;padding: 0; margin: 0 10px;"></div>
  		<div style="height: 0;padding: 0; margin: 0 10px;"></div>
  		<div style="height: 0;padding: 0; margin: 0 10px;"></div>
  		<div style="height: 0;padding: 0; margin: 0 10px;"></div>
  		<div style="height: 0;padding: 0; margin: 0 10px;"></div>
  		<div style="height: 0;padding: 0; margin: 0 10px;"></div>
  		<div style="height: 0;padding: 0; margin: 0 10px;"></div>
  		<div style="height: 0;padding: 0; margin: 0 10px;"></div>
  		<div style="height: 0;padding: 0; margin: 0 10px;"></div>
  	</div>
  	<div class="wangzhan">
  		<p>
    		<span>前端,ui设计by</span>
    		<span>-----前端工程师<a href="www.tuneng.xyz">赵小神</a></span>
    	</p>
    	<p>
    		<span>后台技术支持</span>
    		<span>-----PHP高级工程师 <a href="www.cube6.top">陈四伟4wBLOG</a></span>
    	</p>
    	<p>
    		<span>本网站由</span>
    		<span>-----学姐之家ceo<a href="www.cube6.top">张阳</a>独家赞助</span>
    	</p>
  	</div>
  </div>
</template>

<script>
import MyAjax from "@/function/MyAjax.js"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      lianjie:[
      	{name:'玩偶说',src:'../../static/img/logo.png',href:'www.tuneng.xyz'},
      	{name:'4wBLOG',src:'../../static/img/4wblog.png',href:'www.cube6.top'},
      	{name:'百度一下',src:'https://www.baidu.com/img/baidu_jgylogo3.gif',href:'www.baidu.com'},
      	{name:'玩偶说',src:'../../static/img/logo.png',href:'www.tuneng.xyz'},
      	{name:'4wBLOG',src:'../../static/img/4wblog.png',href:'www.cube6.top'},
      	{name:'百度一下',src:'https://www.baidu.com/img/baidu_jgylogo3.gif',href:'www.baidu.com'},
      	{name:'玩偶说',src:'../../static/img/logo.png',href:'www.tuneng.xyz'},
      	{name:'4wBLOG',src:'../../static/img/4wblog.png',href:'www.cube6.top'},
      	{name:'百度一下',src:'https://www.baidu.com/img/baidu_jgylogo3.gif',href:'www.baidu.com'},
      	{name:'玩偶说',src:'../../static/img/logo.png',href:'www.tuneng.xyz'},
      	{name:'4wBLOG',src:'../../static/img/4wblog.png',href:'www.cube6.top'},
      	{name:'百度一下',src:'https://www.baidu.com/img/baidu_jgylogo3.gif',href:'www.baidu.com'},
      	{name:'玩偶说',src:'../../static/img/logo.png',href:'www.tuneng.xyz'},
      	{name:'4wBLOG',src:'../../static/img/4wblog.png',href:'www.cube6.top'},
      	{name:'百度一下',src:'https://www.baidu.com/img/baidu_jgylogo3.gif',href:'www.baidu.com'},
      	{name:'玩偶说',src:'../../static/img/logo.png',href:'www.tuneng.xyz'},
      	{name:'4wBLOG',src:'../../static/img/4wblog.png',href:'www.cube6.top'},
      	{name:'百度一下',src:'https://www.baidu.com/img/baidu_jgylogo3.gif',href:'www.baidu.com'},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
p{
	color: #2c3e50;
	a{
		color: #f66;
		font-size: 20px;
	}
	span:nth-of-type(1){
		font-size: 20px;
	}
}
h3{
	text-align: center;
	margin: 20px;
}
.yqlj{
	width: 950px;
	margin: 20px auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	div{
		width: 120px;
		height: 67px;
		text-align: center;
		background: #fff;
		padding: 5px;
		margin: 10px 10px;
		border-radius: 6px;
		a{
			img{
					width: 100px;
					height: 35px;
				}
			span{
				margin: 10px;
				height: 20px;
				line-height: 20px;
				font-size: 16px;
				color: #333;
			}
		}
	}
}
.wangzhan{
	width: 100%;
	text-align: center;
	display: flex;
	justify-content:center;
	flex-wrap: wrap;
	p:nth-of-type(2){
		margin: 0 10px;
	}
}
</style>
