<template>
	<div class="mid-wrap">
		<div class="pages page-detail">
			<h2 style="text-align:left;">{{ title }}</h2>
			<div v-html='content' class="content">
				{{ content }}
			</div>
		</div>
	</div>
</template>
<style type="text/css">
	body{padding: 0px;}
	.page-detail{margin: 20px;}
	.content{text-align: left;margin-top: 20px;}
</style>
<script type="text/javascript">
	var detail = {
		title :'',
		content:''
	}
	export default{
		name:'detail',
		data:function(){
			return detail;
		},
		methods:{
	
		},
		created:function(){
			let id = this.$route.query.id;
			if(id){
				var params = new URLSearchParams();
				params.append('id', id);	
			    this.$http({		
			    	baseURL:this.devURL,	        
			        method: 'POST',
			        url: '/index/get_detail',
			        type:'json',
			        data: params,
			    }).then(function(response){
			    	if(response.data){
			    		let res = response.data;
			    		let content =res.detail.content;
			    		detail.title = res.title.title;
			    		detail.content = content;
			    		//console.info(content);
			    	}
				});
			}

		},
	}
</script>