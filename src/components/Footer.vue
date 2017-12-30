<template>
	<div class="vue-footer cf">
		<p class="foot-author">by 生米煮成稀饭 QQ：314682442</p>
		<p class="foot-qq"></p>
		<p><a href="http://www.miitbeian.gov.cn/" target="_blank" style="color:#999">粤ICP备16068186号</a></p>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'Footer'
	}
</script>
<style type="text/css">
	.vue-footer{height: 100px;border-top: 1px solid #ddd;background-color: #eee;}
	.foot-author{margin-top: 30px;color: #666;font-size: 16px;}
	.foot-qq{font-size: 12px;color: #666;}
	@media only screen and (max-width: 500px) {
		.vue-footer{opacity: 0;}
	}
</style>