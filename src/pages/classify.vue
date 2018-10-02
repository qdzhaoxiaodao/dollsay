<!--首页-->
<template>
  <div class="main">
		<div id="tab" style="border-top:0;font-size:18px">
				
        <ul class="tablist">
        	<div class="classfy">按种类分：</div>
        	<li>
        		<span v-bind:style="{ color: '#'+Math.floor(Math.random()*0xffffff).toString(16)}" v-for='(item,index) in classfylist' :key='index'>{{item.name}}</span>
        		<span v-for='(item,index) in 30' style="height: 0;" :key='index'></span>
        	</li>
        	<div class="classfy">按品牌分：</div>
        	<li>
        		<span v-bind:style="{ color: '#'+Math.floor(Math.random()*0xffffff).toString(16)}" v-for='(item,index) in classfylist' :key='index'>{{item.name}}</span>
        		<span v-for='(item,index) in 30' style="height: 0;" :key='index'></span>
        	</li>
        	<div class="classfy">按国家分：</div>
        	<li>
        		<span v-bind:style="{ color: '#'+Math.floor(Math.random()*0xffffff).toString(16)}" v-for='(item,index) in classfylist' :key='index'>{{item.name}}</span>
        		<span v-for='(item,index) in 30' style="height: 0;" :key='index'></span>
        	</li>
        	
        </ul>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import $ from "jquery"
  import MyAjax from "@/function/MyAjax.js"
  export default {
    name: 'register',
    data() {
      return {
        imgHeight: '',
        classfylist:[{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼ss得兔'},{id:1,name:'兔子'},{id:1,name:'香烟酒瓶'},{id:1,name:'香烟酒瓶'},{id:1,name:'熊'},{id:1,name:'独角兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔子'},{id:1,name:'香烟酒瓶'},{id:1,name:'香烟酒瓶a'},{id:1,name:'aa熊'},{id:1,name:'独角兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔子'},{id:1,name:'香烟酒瓶'},{id:1,name:'香烟酒瓶'},{id:1,name:'熊'},{id:1,name:'独角兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔子'},{id:1,name:'香烟酒瓶'},{id:1,name:'香烟酒瓶'},{id:1,name:'熊'},{id:1,name:'独角兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔子'},{id:1,name:'香烟酒瓶'},{id:1,name:'香烟酒瓶'},{id:1,name:'熊'},{id:1,name:'独角兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔子'},{id:1,name:'香烟酒瓶'},{id:1,name:'香烟酒瓶asda'},{id:1,name:'熊asda'},{id:1,name:'独角兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔子'},{id:1,name:'香烟酒瓶'},{id:1,name:'香烟酒瓶'},{id:1,name:'熊'},{id:1,name:'独角兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔子'},{id:1,name:'香烟酒瓶'},{id:1,name:'香烟酒瓶'},{id:1,name:'熊'},{id:1,name:'独角兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔子'},{id:1,name:'香烟酒瓶'},{id:1,name:'香烟酒瓶'},{id:1,name:'熊'},{id:1,name:'独角兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔子'},{id:1,name:'香烟酒瓶'},{id:1,name:'香烟酒瓶'},{id:1,name:'熊'},{id:1,name:'独角兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔子'},{id:1,name:'香烟酒瓶'},{id:1,name:'香烟酒瓶'},{id:1,name:'熊assd'},{id:1,name:'独角ss兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔子'},{id:1,name:'香烟酒瓶'},{id:1,name:'香烟酒瓶'},{id:1,name:'熊'},{id:1,name:'独角兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔子'},{id:1,name:'香烟酒瓶'},{id:1,name:'香烟酒瓶'},{id:1,name:'熊'},{id:1,name:'独角兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔子'},{id:1,name:'香烟酒瓶'},{id:1,name:'香烟酒瓶'},{id:1,name:'熊'},{id:1,name:'独角兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔子'},{id:1,name:'香烟酒瓶'},{id:1,name:'香烟酒瓶'},{id:1,name:'熊'},{id:1,name:'独角兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔子'},{id:1,name:'香烟酒瓶'},{id:1,name:'香烟酒瓶'},{id:1,name:'熊'},{id:1,name:'独角兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔子'},{id:1,name:'香烟酒瓶'},{id:1,name:'香烟酒瓶'},{id:1,name:'熊'},{id:1,name:'独角兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔子'},{id:1,name:'香烟酒瓶'},{id:1,name:'香烟酒瓶'},{id:1,name:'熊'},{id:1,name:'独角兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔子'},{id:1,name:'香烟酒瓶'},{id:1,name:'香烟酒瓶'},{id:1,name:'熊'},{id:1,name:'独角兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔子'},{id:1,name:'香烟酒瓶'},{id:1,name:'香烟酒瓶'},{id:1,name:'熊'},{id:1,name:'独角兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔sss子'},{id:1,name:'香烟sss酒瓶'},{id:1,name:'香烟s酒瓶'},{id:1,name:'熊'},{id:1,name:'独角兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔子'},{id:1,name:'香烟酒瓶'},{id:1,name:'香烟酒瓶'},{id:1,name:'熊'},{id:1,name:'独角兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔子'},{id:1,name:'香烟酒瓶'},{id:1,name:'香烟酒瓶'},{id:1,name:'熊'},{id:1,name:'独角兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔子'},{id:1,name:'香烟酒瓶'},{id:1,name:'香烟酒瓶'},{id:1,name:'熊'},{id:1,name:'独角兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔子'},{id:1,name:'香烟酒瓶'},{id:1,name:'香烟酒瓶'},{id:1,name:'熊'},{id:1,name:'独角兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔子'},{id:1,name:'香烟酒瓶'},{id:1,name:'香烟酒瓶'},{id:1,name:'熊'},{id:1,name:'独角兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔子'},{id:1,name:'香烟酒瓶'},{id:1,name:'香烟酒瓶'},{id:1,name:'熊'},{id:1,name:'独角兽'},{id:1,name:'小猪'},{id:1,name:'狐狸'},{id:1,name:'火烈鸟'},{id:1,name:'彼得兔'},{id:1,name:'兔子'},{id:1,name:'香烟ss酒瓶'},{id:1,name:'香烟sss酒瓶'},{id:1,name:'熊'},{id:1,name:'独角sss兽'},{id:1,name:'小猪'},],
      }
    },
    updated() {
    },
    mounted() {
      var that = this;
    },
    methods: {
    },
  }
</script>
<style scoped lang="scss">
  .main {
    width: 100%;
    margin: 0 auto;
    margin-top: 112px;
    #tab{
    	width: 100%;
    	color:#fff;
    	.tablist{
    		width: 900px;
    		min-height: 200px;
    		margin: 0 auto;
    		.classfy{
    			width: 100%;
    			height: 60px;
    			line-height: 60px;
    			font-size: 30px;
    			color: #000;
    			padding-top: 20px;
    			margin-bottom: 20px;
    		}
    		li{
    			width: 100%;
    			margin: 5px 0;
    			line-height: 30px;
    			display: flex;
    			justify-content: space-between;
    			flex-wrap: wrap;
    			span{
    				margin-right: 10px;
    				cursor: pointer;
    				margin-bottom: 5px;
    			}
    			span:hover{
    				font-size: 50px;
    			}
    		}
    	}
    }
  }
</style>