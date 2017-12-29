<template>	
	<div>
		<Slidebar></Slidebar>
		<div class="mid-wrap">	
			<div class="pages page1" style="animation-delay: ">
				<transition-group name="list" tag="ul" class="doc-list">
				    <li v-for="doc in docs" 
				    v-bind:key="doc.title" 
				    v-bind:style="{'transition-delay':doc.index*0.1+'s'}" 
				    class="list-item" 		    
				    >
				    	<div class="doc-box">
				    		<p>{{ doc.title }}</p>
				    		<p class="doc-desc">{{ doc.description}}</p>
				    		<p class="doc-infos"><span>{{ formatDate(doc.update_time) }}</span></p>
				    	</div>
					</li>
				</transition-group>	
			</div>
		</div>
	</div>
</template>
<style type="text/css">
	.doc-list{display: flex;flex-wrap: wrap;margin-left: -0.5%}
	.doc-list li{width: 19%;height: 160px;background-color: #666;color: #fff;margin-top: 10px;margin-left: 1%;text-align: left;}
	.doc-box{width: 90%;margin: 10px auto;height: 140px;position: relative;}
	.doc-desc{font-size: 12px;color: #999;}
	.doc-infos{position: absolute;bottom: -5px;right: 0px;color: #999;font-size: 12px;}
	.doc-infos span{margin-left: 10px;}

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
		docskey: [],
	};

	export default{
		name:'page1',
		data:function(){
			return data;
		},
		components:{Slidebar},
		created:function(){
			console.info('created');
		    this.$http({
		        baseURL:this.devURL,
		        method: 'post',
		        url: '/index/get_documents',
		        data: {
		            firstName: 'Fred',
		            lastName: 'Flintstone'
		        }
		    }).then(function(response){
		    	let res = response.data;
		    	if(res){
		    		data.docs = new Array();
			    	for(let i = 0;i<res.length;i++){
			    		res[i].index = i;
			    		data.docs.push(res[i]);
			    	}
		    	}
			 });
		},
		methods: {
	        formatDate(time) {
	        	return new Date(parseInt(time) * 1000).format('yyyy-M-d');
	        }
	    }
	}
</script>