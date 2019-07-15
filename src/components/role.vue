<template>
	<div class="role">
		<div>角色管理</div>
		<Row>
			<Col span="12">
				<router-link to="/role/c1">
					<Button type="warning">按钮c1</Button>
				</router-link>
			</Col>
			<Col span="12">
				<router-link to="/role/c2">
					<Button type="warning">按钮c2</Button>
				</router-link>
			</Col>
		</Row>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		name:"role"
	}
</script>

<style>
	.role{
		text-align: center;
	}
	.role a{
		background: #FFB5C5;
		color: #EE00EE;
	}
</style>
