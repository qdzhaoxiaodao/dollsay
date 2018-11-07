<!--首页-->
<template>
  <div class="main">
		<div id="tab" style="border-top:0;font-size:18px">
				
        <ul class="tablist">
        	<div class="classfy">按种类分：</div>
        	<li>
						<router-link :to="{path:'/more/'+item.classify_name}" tag='span' v-bind:style="{ color: '#'+Math.floor(Math.random()*0xffffff).toString(16)}" v-for='(item,index) in classfylist' :key='index'>{{item.classify_name}}</router-link>
        		<span v-for='(item,index) in 30' style="height: 0;" :key='index'></span>
        	</li>
        	<!--<div class="classfy">按品牌分：</div>
        	<li>
        		<span v-bind:style="{ color: '#'+Math.floor(Math.random()*0xffffff).toString(16)}" v-for='(item,index) in classfylist' :key='index'>{{item.classify_name}}</span>
        		<span v-for='(item,index) in 30' style="height: 0;" :key='index'></span>
        	</li>
        	<div class="classfy">按国家分：</div>
        	<li>
        		<span v-bind:style="{ color: '#'+Math.floor(Math.random()*0xffffff).toString(16)}" v-for='(item,index) in classfylist' :key='index'>{{item.classify_name}}</span>
        		<span v-for='(item,index) in 30' style="height: 0;" :key='index'></span>
        	</li>-->
        	
        </ul>
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
        imgHeight: '',
        classfylist:[],
      }
    },
    updated() {
    },
    mounted() {
      var that = this;
      window.scrollTo(0, 0);
      MyAjax.axiosPost('api/user/searchCalssify', {
						pageSize:2000,
						pageNum:1,
			},
				function(res) {
					console.log(res)
					that.classfylist = res.data;
				},
				function(err) {
					console.log(err)
				})
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