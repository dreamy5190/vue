<template>	
	<div>
		<Slidebar></Slidebar>
		<div class="mid-wrap">	
			<div class="pages page1" style="animation-delay: ">
				<p class="page1-title">笔记<router-link :to="{path:'p2', query: { cid: 45}}">更多>></router-link></p>
				<div class="myloading" v-if="docs.length == 0">
					<div class="load-box">
						<img src="../assets/images/loading.png" height="200" width="200">
					</div>
				</div>
				<transition-group name="list" tag="div" class="doc-list">					
				    <router-link :to="{path:'detail', query: { id: doc.id }}" 
				    	v-for="doc in docs" 
						    v-bind:key="doc.title" 
						    v-bind:style="{'transition-delay':doc.delay+'s'}" 
						    class="list-item" 		    
						    >
				    	<div class="doc-box">
				    		<p>{{ doc.title }}</p>
				    		<p class="doc-desc">{{ doc.description}}</p>				    		
				    	</div>
				    	<p class="doc-infos"><span>{{ formatDate(doc.update_time) }}</span></p>
				    </router-link>
				</transition-group>	
				<p class="page1-title">段子<router-link :to="{path:'p2', query: { cid: 45}}">更多>></router-link></p>
				<div class="myloading" v-if="duanzi.length == 0">
					<div class="load-box">
						<img src="../assets/images/loading.png" height="200" width="200">
					</div>
				</div>
				<transition-group name="list" tag="div" class="doc-list">					
				    <router-link :to="{path:'detail', query: { id: dz.id }}" 
				    	v-for="dz in duanzi" 
						    v-bind:key="dz.title" 
						    v-bind:style="{'transition-delay':dz.delay+'s'}" 
						    class="list-item" 		    
						    >
				    	<div class="doc-box">
				    		<p>{{ dz.title }}</p>
				    		<p class="doc-desc">{{ dz.description}}</p>				    		
				    	</div>
				    	<p class="doc-infos"><span>{{ formatDate(dz.update_time) }}</span></p>
				    </router-link>
				</transition-group>	

				<p class="page1-title">游戏<router-link :to="{path:'p2', query: { cid: 10000}}">更多>></router-link></p>
				<div class="myloading" v-if="games.length == 0">
					<div class="load-box">
						<img src="../assets/images/loading.png" height="200" width="200">
					</div>
				</div>
				<transition-group name="list" tag="div" class="doc-list">					
				    <router-link :to="{path:'detail', query: { id: game.id }}" 
				    	v-for="game in games" 
						    v-bind:key="game.title" 
						    v-bind:style="{'transition-delay':game.delay+'s'}" 
						    class="list-item" 		    
						    >
				    	<div class="doc-box">
				    		<p>{{ game.title }}</p>
				    		<p class="doc-desc">{{ game.description}}</p>				    		
				    	</div>
				    	<p class="doc-infos"><span>{{ formatDate(game.update_time) }}</span></p>
				    </router-link>
				</transition-group>	
			</div>
		</div>
	</div>
</template>
<style type="text/css">
	.doc-list{display: flex;flex-wrap: wrap;margin-left: -0.25vw;}
	.doc-list a{width: 19%;height: 160px;display: block;background-color: #666;color: #fff;margin-bottom: 0.5vw;margin-left: 0.5vw;text-align: left;color: #fff;transition: all 0.3s;position: relative;overflow: hidden;}
	.doc-list a:hover{box-shadow: 0px 0px 10px rgba(0,0,0,0.8);transform: translateY(-2px);}
	.doc-box{width: 90%;margin: 10px auto;height: 140px;position: relative;overflow: hidden;}
	.doc-desc{font-size: 12px;color: #999;}
	.doc-infos{position: absolute;bottom: 0px;color: #999;font-size: 12px;display: block;width: 100%;text-align: right;background-color: #666;height: 22px;line-height: 22px;right: 10px;}
	.doc-infos span{margin-left: 10px;}

	.load-box{animation: myrotate 2s infinite;}
	@keyframes myrotate
	{
	0% {transform: rotate(0deg)}
	100% {transform: rotate(360deg)}
	}
	.page1-title{text-align: left;line-height: 30px;border-left: 5px solid #666;padding-left: 5px;font-size: 16px;font-weight: bold;
		margin: 10px 0px;color: #000;}
	.page1-title a{color: #333;font-size: 12px;margin-left: 4px;}
	.page1-title a:hover{color: #999}

	@media only screen and (max-width: 500px) {
	  .doc-list{margin-left: 0%;}
	  .doc-list a{width: 48%;}
	}


	.list-enter-active, .list-leave-active {
	  transition: all 1s;
	}
	.list-enter, .list-leave-to{
	  opacity: 0;
	  transform: translateY(30px);
	}
</style>
<script type="text/javascript">
	import Slidebar from '@/components/Slidebar'
	var data = {
		docs:[],
		duanzi:[],
		games:[],
		docskey: [],
		delay:0,
		cid:45,
		loading:false,
		params:new URLSearchParams(),
		timer:null,
	};

	export default{
		name:'page1',
		data:function(){
			return data;
		},
		components:{Slidebar},
		mounted () {
		  
		},
		created:function(){
			//console.info('created');
			let _that = this;
			let p1 = this.get_doc();
			p1.then(function(){
			    data.cid = 50;
			    let p2 = _that.get_doc();
			    p2.then(function(){
				    data.cid = 10000;
				    let p2 = _that.get_doc();
			    });

			});

		},
		methods: {
	        formatDate(time) {
	        	return new Date(parseInt(time) * 1000).format('yyyy-MM-dd');
	        },
			get_doc(){
				let _that = this;
				return new Promise((resolve, reject) => {
					if(data.loading){return false;}
					if(data.cid == 45 && data.docs.length > 0){return false;}
					if(data.cid == 50 && data.duanzi.length > 0){return false;}
					if(data.cid == 10000 && data.games.length > 0){return false;}
					data.params = new URLSearchParams()
					data.params.append('cid', data.cid);
					data.params.append('p', 0);
					//console.info(data.cid);
					data.loading = true;
					this.$http({
				        baseURL:this.devURL,
				        method: 'post',
				        url: '/index/get_doclist',
				        data: this.params
				    }).then(function(response){				    			    	
				    	let res = response.data;
				    	if(res.data){				    		
					    	for(let i = 0;i<res.data.length;i++){
					    		res.data[i].index = i;
					    		res.data[i].delay = i*0.1+data.delay;
					    		if(data.cid == 45){
					    			data.docs.push(res.data[i]);
					    		}
					    		if(data.cid == 50){
					    			data.duanzi.push(res.data[i]);
					    		}
					    		if(data.cid == 10000){
					    			data.games.push(res.data[i]);
					    			if( i == res.data.length -1){
					    				_that.clearDelay();//取消动画延迟
					    				// console.info(_that.docs[_that.docs.length-1].delay);
							    		// console.info(_that.duanzi[_that.duanzi.length-1].delay);
							    		// console.info(_that.games[_that.games.length-1].delay);
					    			}
					    		}				    		
					    	}
					    	data.delay += res.data.length*0.1
					    	data.loading = false;
				    	}
				    	resolve();
				    	return true;		    	
					});

			    });
			},
			clearDelay(){
				let _that = this;
				for(let i = 0;i<_that.docs.length;i++){
					_that.docs[i].delay = 0;
				}
				for(let i = 0;i<_that.duanzi.length;i++){
					_that.duanzi[i].delay = 0;
				}
				for(let i = 0;i<_that.games.length;i++){
					_that.games[i].delay = 0;
				}
			},
	    }
	}
</script>