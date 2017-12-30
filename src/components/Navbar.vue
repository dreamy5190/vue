<template>
	<div class="nav-bar">
		<div class="nav-box">
			<ul>
				<li>
					<router-link to="/" class="cf">
					<p class="nav-icon"><img src="../assets/images/home.png"></p>
					<p class="nav-txt">首页</p>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'p2', query: { cid: 45}}" class="cf">
						<p class="nav-icon"><img src="../assets/images/note.png"></p>
						<p class="nav-txt">笔记</p>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'p2', query: { cid: 50}}" class="cf">
						<p class="nav-icon"><img src="../assets/images/text.png"></p>
						<p class="nav-txt">段子</p>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'p2', query: { cid: 10000}}" class="cf">
						<p class="nav-icon"><img src="../assets/images/game.png"></p>
						<p class="nav-txt">游戏</p>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'sticker'}" class="cf">
						<p class="nav-icon"><img src="../assets/images/sticker.png"></p>
						<p class="nav-txt">表情包</p>
					</router-link>
				</li>
			</ul>			
		</div>
		<a href="http://smzcxf.com/xifan/index/old_index.html" class="to-old">旧版</a>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'Navbar',
		watch: {  
		    $route(to, from) {  
				document.body.scrollTop = 0;	         
		    }  
		},
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
	.nav-icon{display: none;}
	@media only screen and (max-width: 500px) {

		.nav-bar{position: fixed;bottom: 0px;left: 0px;width: 100%;z-index: 9999;height: 60px;}
		.nav-box{width: 100%;margin: 0 auto;}
		.nav-box ul li{flex: 1;width: 20%;max-width: 20%;line-height: 50px;font-size: 15px;}
		.to-old{position: absolute;right: 0px;top: 0px;line-height: 50px;height: 50px;display: block;background-color: #222;padding: 0 2%;color: #fff;display: none;}
		.nav-icon{display: block;margin: 0 auto;vertical-align: bottom;width: 34px;height: 34px;margin-top: 3px;}
		.nav-txt{line-height: 20px;}
	}
</style>