<template>
	<div class="admin">
		<el-card shadow="hover">
			文章录入系统：
		</el-card>
		<el-input placeholder="请输入文章标题" v-model="tittle">
		</el-input>
		<el-select v-model="value" placeholder="请选择" style='width: 100%;margin-top: 10px;'>
			<el-option v-for="item in options" :key="item.value" :value="item.value">
			</el-option>
		</el-select>
		<el-input placeholder="请输入原作者名字" v-model="oldname" style='margin-top: 10px;'>
		</el-input>
		<el-input placeholder="请输入润笔者名字" v-model="newname" style='margin-top: 10px;'>
		</el-input>
		<el-date-picker
      v-model="data"
      type="date"
      placeholder="请选择日期" style='width: 100%;margin-top: 10px;'>
    </el-date-picker>
		<el-input
  type="textarea"
  :autosize="{ minRows: 15, maxRows: 100}"
  placeholder="请输入内容"
  v-model="textvalue">
</el-input>
	</div>
</template>
<script>
	import MyAjax from "@/function/MyAjax.js"
	export default {
		name: 'admin',
		data() {
			return {
				name: '',
				tittle:'',
				data:'',
				oldname:'',
				newname:'',
				textvalue:'',
				options: [{value: '转载'}, {value: '原创'}, {value: '转润'}],
				value:'转载'
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
	}
</style>