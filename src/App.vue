<template>
  <div id="app">
		<Top></Top>
		<Row>
		  <Col span="6">
				<LeftMenu></LeftMenu>
			</Col>
		  <Col span="18">
				<RightContainer></RightContainer>
			</Col>
		</Row>
  </div>
</template>

<script>
	import Top from "./components/top"
	import RightContainer from "./components/rightContainer"
	import LeftMenu from "./components/leftMenu"
export default {
  name: 'App',
	components:{
		Top,
		RightContainer,
		LeftMenu
	}
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		font-size: 16px;
	}
</style>
