<template>
	<div class="page-swipe">
	<mt-swipe :auto="4000">
	  <mt-swipe-item class="bg-red">
	  		1111
	  </mt-swipe-item>
	  <mt-swipe-item class="bg-blue">
	  		2222
	  </mt-swipe-item>
	  <mt-swipe-item class="bg-green">
	  		3333
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