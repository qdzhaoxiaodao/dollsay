<template>
	<div class="header">
				<div class="wrap">
				<div class="logo">
					<img src="../../static/img/logo.png" title="毛绒玩偶收录第一网站" />
				</div>
				<div class="nav-icon">
					 <a href="javascript:;" class="right_bt" id="activator"><span @click="show()"> </span> </a>
				</div>
				<transition name="fade">
				 <div class="box" id="box" v-if="ishide">
					 <div class="box_content">        					                         
						<div class="box_content_center">
						 	<div class="form_content">
								<div class="menu_box_list">
									<ul>
										<li><router-link to="/home" tag='a'>玩偶说</router-link></li>
										<li><router-link to="/classify" tag='a'>玩偶系列</router-link></li>
										<li><router-link to="/article" tag='a'>玩偶文章</router-link></li>
										<li><router-link to="/home" tag='a'>关于本站</router-link></li>
										<li><router-link to="/home" tag='a'>加入我们</router-link></li>
										<li><router-link to="/home" tag='a'>小功能测试</router-link></li>
										<div class="clear"> </div>
									</ul>
								</div>
								<a class="boxclose" id="boxclose"> <span @click="hide()"> </span></a>
							</div>                                  
						</div> 	
					</div> 
				</div>   
				</transition>
				<div class="top-searchbar">
					<form>
						<input type="text" placeholder="本网站已收录180个系列，12345678款玩偶"/><input type="submit" value="" />
					</form>
				</div>
				<div class="userinfo">
					<div class="user">
						<ul>
							<li>
								<router-link to='admin' tag='a'>
									<img src="../../static/img/user-pic.png" title="user-name" />
									<span>dollSay</span>
								</router-link>
							</li>
						</ul>
					</div>
				</div>
				<div class="clear"> </div>
			</div>
		</div>
</template>

<script>
	import MyAjax from "@/function/MyAjax.js"
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				ishide:false,
			}
		},
		mounted(){
			
		},
		methods:{
			show(){
				this.ishide = true;
			},
			hide(){
				this.ishide = false;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* 开始过渡阶段,动画出去阶段 */
.fade-enter-active,.fade-leave-active{
  transition: all 0.5s ease-out;
}
/* 进入开始 */
.fade-enter{
  transform: translateY(-100px);
  opacity: 0;
}
/* 出去终点 */
.fade-leave-active{
  transform: translateY(-100px);
  opacity: 0;
}
</style>