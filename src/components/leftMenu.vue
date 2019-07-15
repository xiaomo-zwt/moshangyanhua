<template>
	<div class="leftMenu">
		<ul>
			<router-link tag="li" active-class="active" to="/home">首页</router-link>
			<router-link tag="li" active-class="active" to="/stock">股票管理</router-link>
			<router-link tag="li" active-class="active" to="/role">角色管理</router-link>
		</ul>
	</div>
</template>

<script>
	
	export default{
		name:"leftMenu"
	}
</script>

<style>
	.leftMenu{
		width: 100%;
		height:calc(100vh - 60px);
		background: #54FF9F;
	}
	.active{
		background: orange;
	}
	.leftMenu ul li{
		height: 40px;
		line-height: 40px;
		text-align: center;
	}
</style>
