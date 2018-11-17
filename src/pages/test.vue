<template>
	<div class="main">
		<div id="box" @mousedown.native="mousedown($event)" @mousemove.native='mousemove($event)' @mouseup.native='mouseup($event)'>
			拖我啊
		</div>
		<div class="test">
			<div class='one'>
				<p>
					<span>当前时间是:</span>
					<span id="time"></span>
				</p>
				<p>
					<span>距2018年除夕还有:</span>
					<span id="day"></span>
				</p>
				<p>
					<span>距2018年除夕还有:</span>
					<span id="tm"></span>
				</p>
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
				sb_bkx: 0,
 				sb_bky: 0,
			}
		},
		mounted() {
			var that = this;
			window.scrollTo(0, 0);
			//倒计时
			//在页面加载完后立即执行多个函数完美方案。
			that.addloadEvent(showTime);
			that.addloadEvent(day);
			that.addloadEvent(tb);
			//天时秒分倒计时
			function tb() {
				var myDate = new Date(); //获取当前时间
				var endtime = new Date("2019,02,04"); //获取结束时间
				//换算成秒 小数点向下舍入取整
				var ltime = Math.floor((endtime.getTime() - myDate.getTime()) / 1000);
				//console.log(ltime)
				//换算成天 小数点向下舍入取整
				var d = Math.floor(ltime / (24 * 60 * 60));
				//换算成小时取去掉天数的余数（也就是小时） 小数点向下舍入取整
				var h = Math.floor(ltime / (60 * 60) % 24);
				//换算成分钟取去掉小时的余数（也就是分钟） 小数点向下舍入取整
				var m = Math.floor(ltime / 60 % 60);
				//换算成分钟取去掉分钟的余数（也就是秒） 小数点向下舍入取整
				var s = Math.floor(ltime % 60);
				document.getElementById("tm").innerHTML = d + "天" + h + "小时" + m + "分钟" + s + "秒";
				setTimeout(tb, 1000);
			}
			//当秒数为个位数时前面+字符串0
			function checkTime(i) {
				return i < 10 ? "0" + i : "" + i;
			}
			//当前时间标准格式
			function showTime() {
				var myDate = new Date(); //获取当前时间
				var year = myDate.getFullYear(); //获取年份
				var month = myDate.getMonth() + 1; //获取月份是0-11的数字所以+1
				var date = myDate.getDate(); //日
				var day = myDate.getDay(); //
				var h = myDate.getHours(); //小时
				var m = myDate.getMinutes(); //分钟
				var s = myDate.getSeconds(); //秒
				checkTime(m);
				checkTime(s);
				//console.log(day)
				var week = "日一二三四五六".charAt(day);
				document.getElementById("time").innerHTML = year + "年" + month + "月" + date + "日" + "星期" + week + h + ":" + m + ":" + s;
				setTimeout(showTime, 1000);
			}
			//倒计时天数计算
			function day() {
				var myDate = new Date(); //获取当前时间
				var endtime = new Date("2019,02,04"); //获取结束时间
				//先换算成毫秒再相减就是时间差，再除以一天的毫秒数结果是带有小数点的，用math方法进一位取整
				var ltime = Math.ceil((endtime.getTime() - myDate.getTime()) / (24 * 60 * 60 * 1000));
				document.getElementById("day").innerHTML = ltime + '天';
			};
			//拖拽，可吸附
			//drag("box", true)

			function drag(id, adsorb) {
				var drag;
				var x, y;
				var ele = document.getElementById(id);
				console.log(ele)
				var adsorb = adsorb;
				ele.onmousedown = function(evt) {
					console.log(evt)
					var _event = evt || window.event;
					var target = _event.target || _event.srcElement;
					var x = _event.clientX - target.offsetLeft;
					var y = _event.clientY - target.offsetTop;
					var drag = target;
				};
				document.onmousemove = function(evt) {
					if(drag) {
						_event = evt || window.event;
						var left = _event.clientX - x;
						var top = _event.clientY - y;
						console.log(left, top)
						body = document.documentElement || document.body;
						if(left < 0) {
							left = 0
						}
						if(left > body.offsetWidth - drag.offsetWidth) {
							left = body.offsetWidth - drag.offsetWidth
						}
						if(top < 0) {
							top = 0
						}
						if(top > body.clientHeight - drag.offsetHeight) {
							top = body.clientHeight - drag.clientHeight
						}
						drag.style.cursor = "move";
						drag.style.opacity = "0.5";
						drag.style.left = left + "px";
						drag.style.top = top + "px"
					}
				};
				//				document.onmouseup = function(evt) {
				//					if(adsorb) {
				//						if(drag.offsetLeft <= body.offsetWidth / 2) {
				//							drag.style.left = "0px"
				//						} else {
				//							drag.style.left = body.offsetWidth - drag.offsetWidth + "px"
				//						}
				//					}
				//					if(drag) {
				//						drag.style.cursor = "";
				//						drag.style.opacity = "1"
				//					}
				//					drag = null
				//				}
			};
		},
		methods: {
			addloadEvent(func) {
				var oldonload = window.onload;
				if(typeof window.onload != "function") {
					window.onload = func;
				} else {
					window.onload = function() {
						if(oldonload) {
							oldonload();
						}
						func();
					}
				}
			}
		},
		mousedown(event) {
			var startx = event.x;
			var starty = event.y;
			console.log(startx,starty)
			this.sb_bkx = startx - event.target.offsetLeft;
			this.sb_bky = starty - event.target.offsetTop;
			this.is_moving = true;
		},
		mousemove(event) {
			var endx = event.x - this.sb_bkx;
			var endy = event.y - this.sb_bky;
			console.log(endx,endy)
			var _this = this
			if(this.is_moving) {
				event.target.style.left = endx + 'px';
				event.target.style.top = endy + 'px';
			}
		},
		mouseup(e) {
			this.is_moving = false;
		}
	}
</script>
<style scoped lang="scss">
	.main {
		width: 100%;
		margin: 0 auto;
		margin-top: 99px;
		#box {
			width: 200px;
			height: 200px;
			position: fixed;
			left: 0;
			bottom: 100px;
			text-align: center;
			line-height: 200px;
			color: #fff;
			font-size: 24px;
			background: #f66;
		}
		.test {
			width: 1000px;
			margin: 0 auto;
			padding-top: 30px;
			height: 950px;
			.one {
				width: 300px;
				height: 200px;
				background: #46b6cf;
				border-radius: 6px;
				color: #fff;
				text-align: center;
				font-size: 14px;
				p {
					line-height: 32px;
					span {
						float: left;
						width: 100%;
					}
				}
			}
		}
	}
</style>