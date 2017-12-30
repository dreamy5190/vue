<template>
	<div class="nav-bar">
		<div class="nav-box">
			<ul>
				<li>
					<router-link to="/">首页</router-link>
				</li>
				<li>
					<router-link :to="{path:'p2', query: { cid: 45}}" >笔记</router-link>
				</li>
				<li>
					<router-link :to="{path:'p2', query: { cid: 50}}" >段子</router-link>
				</li>
				<li>
					<router-link :to="{path:'p2', query: { cid: 100000}}">游戏</router-link>
				</li>
				<li>
					<router-link :to="{path:'sticker'}">表情包</router-link>
				</li>
			</ul>			
		</div>
		<a href="http://smzcxf.com/xifan/index/old_index.html" class="to-old">旧版</a>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'Navbar',
	}
</script>
<style type="text/css">
	.nav-bar{width: 100%;height: 50px;background-color: #333;}
	.nav-box{width: 80%;margin: 0 auto;}
	.nav-box ul{display: flex;}
	.nav-box ul li{flex: 1;width: 8%;max-width: 8%;line-height: 50px;font-size: 15px;}
	.nav-box ul li a{color: #fff;display: block;width: 100%;height: 100%;}
	.nav-box ul li a:hover{background-color: #666;}
	.to-old{position: absolute;right: 10px;top: 0px;line-height: 50px;height: 50px;display: block;color: #fff;}
	.to-old:hover{color: #ddd}
</style>