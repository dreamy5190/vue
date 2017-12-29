<template>
	<div class="page-swipe">
	<mt-swipe :auto="6000">
	  <mt-swipe-item class="bg-red">
	  		<img src="../assets/images/ads01.jpg">
	  </mt-swipe-item>
	  <mt-swipe-item class="bg-blue">
	  		<img src="../assets/images/ads02.jpg">
	  </mt-swipe-item>
	  <mt-swipe-item class="bg-green">
	  		<img src="../assets/images/ads03.jpg">
	  </mt-swipe-item>
	</mt-swipe>
	</div>
</template>
<script type="text/javascript">
	import { Swipe, SwipeItem } from 'mint-ui';
	export default{
		name:'slidebar',
		components:{
			Swipe,SwipeItem
		}
	}
</script>
<style type="text/css">
	.mint-swipe{height: 260px;}
	.mint-swipe-item{height: 100%;background-color: #000;color: #fff;}
	.bg-green{background-color: #aaa;}
	.bg-red{background-color: #666;}
	.bg-blue{background-color: #999;}
</style>