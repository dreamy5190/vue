<template>
	<div class="page-swipe">
	<mt-swipe :auto="6000">
		<mt-swipe-item v-bind:src="img01">
			<img v-bind:src="img01">
		</mt-swipe-item>
		<mt-swipe-item v-bind:src="img02">
			<img v-bind:src="img02">
		</mt-swipe-item>
		<mt-swipe-item v-bind:src="img03">
			<img v-bind:src="img03">
		</mt-swipe-item>
	</mt-swipe>
	</div>
</template>
<script type="text/javascript">
	import { Swipe, SwipeItem } from 'mint-ui';
	var data ={
		img01:require('../assets/images/ads01_mobile.jpg'),
		img02:require('../assets/images/ads02_mobile.jpg'),
		img03:require('../assets/images/ads03_mobile.jpg'),
	}
	export default{
		name:'slidebar',
		props: ['message'],
		data:function(){
			return data;
		},
		created:function(){
			if(!this.ismobile){
				data.img01 = require('../assets/images/ads01.jpg');
				data.img02 = require('../assets/images/ads02.jpg');
				data.img03 = require('../assets/images/ads03.jpg');	
			}
		},
		components:{
			Swipe,SwipeItem
		}
	}
</script>
<style type="text/css">
	.page-swipe{min-width: 1210px;}
	.mint-swipe{height: 260px;}
	.mint-swipe-item{height: 100%;background-color: #000;color: #fff;}
	.bg-green{background-color: #aaa;}
	.bg-red{background-color: #666;}
	.bg-blue{background-color: #999;}
	.mint-swipe-item{vertical-align: middle;align-items: center;}
	.mint-swipe-item img{vertical-align: middle;align-items: center;}
	@media only screen and (max-width: 500px) {
		.page-swipe{min-width: 100%;height: 180px;}
		.mint-swipe{height: auto;overflow: hidden;}
	}
	@media only screen and (max-width: 320px) {
		.page-swipe{min-width: 100%;height: 60px;}
	}
</style>