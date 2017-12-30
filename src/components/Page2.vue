<template>
	<div class="mid-wrap">
		<div class="pages page2">
			<transition-group name="slideUp" tag="div" class="docs-box" mode="out-in">
			<div v-for='doc in docs'
				v-bind:key="doc.title"
				v-bind:style="{'transition-delay':doc.delay+'s'}"				
				class="doc-item"
			>				
				<router-link :to="{path:'detail', query: { id: doc.id }}" class="cf">
					<b class="page2-title"><b>{{ doc.index +1 }}</b>、{{ doc.title }}</b><span>{{ formatDate(doc.update_time) }}</span>
				</router-link>
			</div>
			</transition-group>	
			<transition name="slideUp">
				<div class="doc-last" v-if='!hasNext'>
					<p>······<span>没有更多啦</span>······</p>
				</div>
			</transition>
		</div>
	</div>
</template>
<style type="text/css">
	.docs-box{width: 100%;}
	.doc-item{text-align: left;margin: 0px auto;height: 50px;border-bottom: 1px dashed #ccc;}
	.doc-item a{line-height: 50px;color: #666;display: block;width: 100%;height: 100%;transition: all 0.6s;font-size: 16px;position: relative;}
	.doc-item a:hover{background-color: #ccc;color: #fff;}
	.doc-item a b{margin-left: 10px;}
	.doc-item a span{float: right;margin-right: 10px;}
	.doc-last{text-align: center;line-height: 60px;color: #ccc;}
	.doc-last span{margin: 0 20px;}
	.page2-title{display: inline-block;width:70%;text-overflow: ellipsis;white-space: pre;overflow: hidden;float: left;}

	@media only screen and (max-width: 500px) {
	  .doc-item a b{margin-left: 0px;}
	}

	.slideUp-enter-active{
	   transition: all 1s;
	}
	.slideUp-leave-active {
		transition: all 1s;
		transition-delay:0s !important;
	}
	.slideUp-enter{
	  opacity: 0;
	  transform: translateY(30px);
	}
	.slideUp-leave-to{
		opacity: 0;
	    transform: translateY(30px);
	}
</style>
<script type="text/javascript">
	var data = {
		page:0,
		cid:0,
		docs:[],
		params:new URLSearchParams(),		
		hasNext:true,
		loading:false,
		delayOffset:0,
		nomoreDelay:0,
		scrollDist:0
	};
	export default{
		name:'page2',
		data:function(){
			return data;
		},
		watch: {  
		    $route(to, from) {  
		    	this.init();
		    	//console.info('change');
		    	data.cid = to.query.cid;
		    	data.delayOffset=1;
		        let _that = this;
				_that.get_doc();
	         
		    }  
		},
		created:function(){
			this.init();
			let cid = this.$route.query.cid;
			data.cid = cid;					
			if(!cid){
				return false;
			}			
			data.params.append('cid', cid);
			this.get_doc();
		},
		mounted () {
		  window.addEventListener('scroll', this.handleScroll)
		},
		methods: {
			init(){
				data.docs = new Array();
				data.page = 0;	
				data.hasNext = true;	
				data.loading = false;
				data.params = new URLSearchParams();
				data.delayOffset=0;
			},
	        formatDate(time) {
	        	return new Date(parseInt(time) * 1000).format('yyyy-MM-dd');
	        },
			get_doc(){
				if(data.loading || !data.hasNext){return false;}
				data.params = new URLSearchParams()
				data.params.append('cid', data.cid);
				data.params.append('p', data.page);
				data.loading = true;
				this.$http({
			        baseURL:this.devURL,
			        method: 'post',
			        url: '/index/get_doclist',
			        data: this.params
			    }).then(function(response){				    			    	
			    	let res = response.data;
			    	if(res.data){			  
			    		console.info(data.delayOffset);
				    	for(let i = 0;i<res.data.length;i++){
				    		res.data[i].index = i+data.page*20;
				    		res.data[i].delay = i*0.1+data.delayOffset;
				    		data.docs.push(res.data[i]);
				    	}
				    	data.nomoreDelay = res.data.length*0.1;
				    	data.page ++;
				    	data.loading = false;	
				    	// if(res.data.length < 20){
				    	//  	data.hasNext = false;
				    	// }
			    	}else{
			    		data.hasNext = false;
			    	}			    	
				 });
			},
			handleScroll () {	
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				//if(Math.abs(scrollTop - scrollDist) > 100){			
					data.scrollDist = scrollTop;
					var offsetTop = document.querySelector('.vue-footer ').offsetTop;
					var distance = 600;
					//console.info(offsetTop,scrollTop);
					if(offsetTop - scrollTop < distance) {
						console.info('loading more');
			    		data.delayOffset = 0;
						let _that = this;
						_that.get_doc();					
					}
				//}
			},
	    }
	}
</script>