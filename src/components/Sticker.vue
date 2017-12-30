<template>
	<div>
		<div class="mid-wrap">
			<div style="height:150px;" class="empty"></div>
			<div class="sticker-cv" v-bind:style="cvbStyle">
				<img v-bind:src="imgdata" />
				<canvas id="target-canvas" style="display:none;" v-bind:style="cvStyle">您的浏览器不支持</canvas>
			</div>
			<p class="tips01"><span>1、选择一个类别</span></p>
			<div class="sticker-wrap">				
				<div class="sticker-type">
					<div class="sticker-type-item" v-on:click="showlist(1)">
						<div class="sticker-typeimg-box">
							<img src="../assets/images/type01.jpg">
						</div>
						<p>锅盖头</p>
					</div>
					<div class="sticker-type-item" v-on:click="showlist(2)">
						<div class="sticker-typeimg-box">
							<img src="../assets/images/type02.jpg">
						</div>
						<p>熊猫头</p>
					</div>
					<div class="sticker-type-item" v-on:click="showlist(3)">
						<div class="sticker-typeimg-box">
							<img src="../assets/images/type03.jpg">
						</div>
						<p>其他</p>
					</div>
				</div>
			</div>
				<p class="tips01"><span>2、选择一个表情</span></p>
			<div class="sticker-wrap">
				<div class="cv-sticker-list cf">
					<ul>	
						<li v-for="sticker,index in stickerList" v-on:click="selectimg(index)">
						    <img v-bind:src="sticker.src" >
						</li>
					</ul>
				</div>
			</div>
			<p class="tips01"><span>3、输入文字</span></p>
			<div class="sticker-wrap">				
				<div class="cv-input-box">
					<input type="text" name="" placeholder="输入文字" v-model="message">
				</div>
			</div>
			<div class="sticker-wrap">
				<div>
					<p class="cv-fontsize" style="text-align: center;">字体大小：<a v-on:click="setfontsize(-1)" href="javascript:void(0);">-1</a><span>{{ fontsize }}</span><a v-on:click="setfontsize(1)" href="javascript:void(0);">+1</a></p>
					<p class="cv-bgcolor">背景色：
						<a style="background-color: #000;" title="黑色" href="javascript:void(0)" v-on:click="setbgcolor('#000')"></a>
						<a style="background-color: #f5f5f5;" title="灰色" href="javascript:void(0)" v-on:click="setbgcolor('#f5f5f5')"></a>					

						<a style="background-color: #e8f6e9;" title="青绿" href="javascript:void(0)" v-on:click="setbgcolor('#e8f6e9')"></a>

						<a style="background-color: #f7fcf6;" title="浅青绿" href="javascript:void(0)" v-on:click="setbgcolor('#f7fcf6')"></a>

						<a style="background-color: #fff;" title="白色" href="javascript:void(0)" v-on:click="setbgcolor('#fff')"></a>
				</p>
				</div>
			</div>
			<p class="tips02"><span>最后长按上图选择即可(PC端可右键复制)</span></p>
		</div>
	</div>
</template>
<style type="text/css" >
	.mid-wrap{width: 80%;}
	.sticker-cv{
		background-color: #f5f5f5;
		height: 150px;
		width: 80%;
		top: 50px;
		left: 10%;
		position: fixed;
		transition: all 0.6s;		
	}	

	.tips01{text-align: left;display: block;line-height: 40px;background-color: #333;color: #fff;}
	.tips01 span{display: block;width: 96%;margin: 0 auto;}

	.sticker-type{display: flex;margin: 10px 0px;width: 100%;}
	.sticker-type-item{background-color: #f5f5f5;max-width: 33%;margin-left: 1%;cursor: pointer;}
	.sticker-type-item img{width: 100%;height: auto;vertical-align: bottom;}

	.cv-sticker-list{width: 100%;margin: 10px auto;transition: all 0.6s;}
	.cv-sticker-list ul{width: 100%;}
	.cv-sticker-list ul li{width: 100px;float: left;height: 100px;margin-left: 10px;overflow: hidden;margin-bottom: 10px;cursor: pointer;}
	.cv-sticker-list ul li img{height: 100%;width: auto;}
	.cv-input-box{width: 60%;background-color: #fff;margin: 30px auto;height: 40px;box-shadow: 0px 0px 10px rgba(0,0,0,0.3);}
	.cv-input-box input{border: none;padding: 0px;margin: 0px;height: 40px;width: 100%;width: 96%;margin: 0 auto;box-shadow: none;border-radius: 0px;    -webkit-appearance: none;}
	.cv-input-box input:focus{box-shadow: none;}
	.cv-fontsize{text-align: center;margin-top: 10px;}
	.cv-fontsize a{display: inline-block;vertical-align: middle;width: 20px;height: 20px;text-align: center;background-color: #ccc;border: 1px solid #999;color: #000}
	.cv-fontsize a:hover{background-color: #999;color: #fff;}
	.cv-fontsize span{vertical-align: middle;display: inline-block;margin: 0 20px;}

	.cv-bgcolor{text-align: center;margin: 10px;}
	.cv-bgcolor a{display: inline-block;width: 20px;height:20px;border: 1px solid #ccc;vertical-align: middle;}
	.cv-create-btn{display: block;width: 60%;height: 30px;background-color: #333;color: #fff;line-height: 30px;margin: 0 auto;display: none;}
	.tips02{margin-bottom: 30px;}
	@media screen and (max-width:500px){
		.empty{display: block;}
		.mid-wrap{width: 100%;}	
		.sticker-cv{position: fixed;top: 0px;left: 0px;border: none;width: 100%;border-bottom: 1px solid #ccc;box-shadow: 0px 0px 4px rgba(0,0,0,0.3);}
		.sticker-wrap{width: 96%;margin: 0 auto;}
		.cv-sticker-list ul li{width: 19%;float: left;height: 60px;margin-left: 1%;overflow: hidden;}
	}
</style>
<script type="text/javascript">
	var data = {
		bodyScrollTop:0,
		cv:'',
		ctx:'',
		bgcolor:"#f5f5f5",
		cvw:300,
		cvh:150,
		stickerList:[],
		fontsize:16,
		txtOffsetWidth:0,
		imgdata:'',
		message:'',
		imgIndex:-1,
		guogaitou:[		
			{
				'src':require('../assets/images/sticker/sticker01.jpg'),
				'info':'我好怕！'
			},
	    	{
	    		'src':require('../assets/images/sticker/sticker02.jpg'),
	    		'info':'我还能说什么！'
	    	},
	    	{
	    		'src':require('../assets/images/sticker/sticker04.jpg'),
	    		'info':'死了算了！'
	    	},	    	
	    	{
	    		'src':require('../assets/images/sticker/sticker06.jpg'),
	    		'info':'看你装逼！'
	    	},
	    	{
	    		'src':require('../assets/images/sticker/sticker08.jpg'),
	    		'info':'高端玩家~'
	    	},
	    	{
	    		'src':require('../assets/images/sticker/sticker09.jpg'),
	    		'info':'我这样你满意了吧！'
	    	},
	    	{'src':require('../assets/images/sticker/sticker10.jpg'),'info':'天呐，好可怕！'},	    	
	    	{'src':require('../assets/images/sticker/sticker12.jpg'),'info':'撤回就当我没看到！'},
	    	{'src':require('../assets/images/sticker/sticker13.jpg'),'info':'门在那边，滚~'},
	    	{'src':require('../assets/images/sticker/sticker14.jpg'),'info':'老表，冇去叫鸡啊？'},
	    	{'src':require('../assets/images/sticker/sticker15.jpg'),'info':'不去，每次都是我结账！'},
	    	{'src':require('../assets/images/sticker/sticker16.jpg'),'info':'呸~'},	    	
	    	{'src':require('../assets/images/sticker/sticker18.jpg'),'info':'还有这种操作？'},
	    	{'src':require('../assets/images/sticker/sticker19.jpg'),'info':'看你能咋滴！'},
	    	{'src':require('../assets/images/sticker/sticker20.jpg'),'info':'冇眼体~'},
	    	{'src':require('../assets/images/sticker/sticker30.jpg'),'info':'对啊，我也这么认为！'},
	    	{'src':require('../assets/images/sticker/sticker31.jpg'),'info':'托腮！'},
	    	{'src':require('../assets/images/sticker/sticker21.jpg'),'info':'喜欢我就直说!'},
	    	{'src':require('../assets/images/sticker/sticker22.jpg'),'info':'我开始慌了！'},
	    	{'src':require('../assets/images/sticker/sticker23.jpg'),'info':'可能这就是命吧！'},
	    	{'src':require('../assets/images/sticker/sticker24.jpg'),'info':'你敢说你不爱我？'},
	    	{'src':require('../assets/images/sticker/sticker25.jpg'),'info':'我生气了，快安慰我！'},
	    	{'src':require('../assets/images/sticker/sticker26.jpg'),'info':'你丫还不快哄我！'},
	    	{'src':require('../assets/images/sticker/sticker27.jpg'),'info':'有我在，别怕！'},
	    	{'src':require('../assets/images/sticker/sticker28.jpg'),'info':'卡里缺钱！'},
	    	{'src':require('../assets/images/sticker/sticker05.jpg'),'info':'要发就发这样的图！'},
	    	{'src':require('../assets/images/sticker/sticker34.jpg'),'info':'你想把老子笑死啊！'},
	    	{'src':require('../assets/images/sticker/sticker11.jpg'),'info':'忍住不笑！'},
	    	{'src':require('../assets/images/sticker/sticker17.jpg'),'info':'无奈~'},
	    	{'src':require('../assets/images/sticker/sticker29.jpg'),'info':'哦~是吗？'},
	    	{'src':require('../assets/images/sticker/sticker07.jpg'),'info':'走，王者荣耀去!'},
	    	{'src':require('../assets/images/sticker/sticker03.jpg'),'info':'我不信！'},
	    	{'src':require('../assets/images/sticker/sticker32.jpg'),'info':'你留着买QQ星吧！'},
	    	{'src':require('../assets/images/sticker/sticker33.jpg'),'info':'来互相伤害啊'},	    	
		    ],
		    xiongmao:[
		    {'src':require('../assets/images/sticker/xm01.jpg'),'info':'走先，得闲饮茶~'},		    
		    {'src':require('../assets/images/sticker/xm03.jpg'),'info':'你这图我早有了！'},
		    {'src':require('../assets/images/sticker/xm07.jpg'),'info':'别这么骚，算我求你！'},
		    {'src':require('../assets/images/sticker/xm16.jpg'),'info':'噗呲！'},
		    {'src':require('../assets/images/sticker/xm04.jpg'),'info':'哈哈哈哈哈'},
		    {'src':require('../assets/images/sticker/xm05.jpg'),'info':'我是被针对，懂吗？'},		   
		    {'src':require('../assets/images/sticker/xm10.jpg'),'info':'离晒谱！'},
		    {'src':require('../assets/images/sticker/xm11.jpg'),'info':'一下子接受不了吧！'},
		    {'src':require('../assets/images/sticker/xm12.jpg'),'info':'我看你特么是疯了吧！'},

		    {'src':require('../assets/images/sticker/xm06.jpg'),'info':'你要加班！'},
		    {'src':require('../assets/images/sticker/xm09.jpg'),'info':'闭嘴吧你可！'},		    
		    {'src':require('../assets/images/sticker/xm08.jpg'),'info':'这个恐怕不行，兄弟！'},
		    {'src':require('../assets/images/sticker/xm02.jpg'),'info':'说了这么多，你就是想装逼！'},
		    {'src':require('../assets/images/sticker/xm13.jpg'),'info':'牛逼！！'},
		    {'src':require('../assets/images/sticker/xm14.jpg'),'info':'SIX SIX SIX'},
		    {'src':require('../assets/images/sticker/xm15.jpg'),'info':'我TM……'},

		    ],
		    other:[
		    {'src':require('../assets/images/sticker/gt01.jpg'),'info':'你吓到我了，赔钱！'},
		    {'src':require('../assets/images/sticker/xbt01.jpg'),'info':'别说了，渣男！'},
		    {'src':require('../assets/images/sticker/xbt02.jpg'),'info':'小仙女~'},
		    {'src':require('../assets/images/sticker/xbt04.jpg'),'info':'跟你妈说今晚在同学家住！'},
		    {'src':require('../assets/images/sticker/xbt03.jpg'),'info':'我会对你负责的！'},
		],
		cvStyle:{
			width:'300px',
			height:'150px',
		},
		cvbStyle:{

		}
	}
	export default{
		name:"Sticker",
		data:function(){
			return data;
		},
		created:function(){
			//window.addEventListener('load',this.load);
		  	//window.addEventListener('scroll', this.cvScroll)
		},
		watch:{
			'message':function(){
				this.createSticker();
			},
			'bgcolor':function(){
				this.createSticker();
			},
			'imgIndex':function(){
				this.createSticker();
			},
			'fontsize':function(){
				this.createSticker();
			},
			'bodyScrollTop':function(){
				this.cvScroll()
			}
		},
		mounted(){
		  	window.addEventListener('load',this.load);
		  	window.addEventListener('scroll', this.cvScrollEvent)
		},
		methods:{
		  	load:function(){
		  		this.cv = document.getElementById('target-canvas');	
		  		this.ctx = this.cv.getContext("2d");
		  		console.info(this.bgcolor);
		  		this.ctx.fillStyle = this.bgcolor;
		  		this.ctx.fillRect(0,0,this.cvw,this.cvh);
		  		this.stickerList = this.guogaitou;
		  	},
		  	setbgcolor:function(color){
		  		this.bgcolor = color;
		  		//console.info(color)
		  		//this.createSticker();
		  	},
		  	setfontsize:function(uod){
		  		this.fontsize += uod;
		  		//this.createSticker();
		  	},
		  	showlist:function(index){
		  		if(index == 1){
		  			this.stickerList = this.guogaitou;
		  		}		
		  		if(index == 2){
		  			this.stickerList = this.xiongmao;
		  		}  	
		  		if(index == 3){
		  			this.stickerList = this.other;
		  		} 	
		  	},
		  	selectimg:function(index){
		  		this.imgIndex = index;
		  		//this.createSticker();
		  	},

		  	createSticker:function(index){
		  		if(this.imgIndex == -1){
		  			alert('请先选择一个表情！');
		  			return false;
		  		}
		  		this.cv = document.getElementById('target-canvas');	
		  		this.ctx = this.cv.getContext("2d");

		  		var _that = this;
		  		var ctx = this.ctx;
		  		var txt = this.stickerList[this.imgIndex].info;
		  		if(this.message !=''){txt = this.message;}
		  		var img = new Image();
		  		img.src = this.stickerList[this.imgIndex].src;
		  		
		  		img.onload = function(){
		  			var dw = img.naturalWidth;
		  			var dh = img.naturalHeight;		
		  			//用背景色填充画布  	
		  			//console.info(_that.bgcolor);	

			  		var txt_width = ctx.measureText(txt).width;
			  		var txtX = _that.txtOffsetWidth/2;
			  		if(txt_width <dw){
			  			txtX = _that.txtOffsetWidth/2 + (dw - txt_width)/2;
			  		}
			  		var imgX = _that.txtOffsetWidth/2;
			  		if(txt_width >dw){
			  			imgX = _that.txtOffsetWidth/2+(txt_width - dw)/2;
			  		}
			  		var cv_width = Math.max(txt_width,dw) +_that.txtOffsetWidth;
	  				var cv_height = dh+_that.fontsize+4;
		  			_that.cv.width = cv_width;
		  			_that.cv.height = cv_height;

					ctx.fillStyle = _that.bgcolor;
		  			ctx.fillRect(0,0,cv_width,cv_height);

					ctx.drawImage(img,0,0,dw,dh,imgX,0,dw,dh);
					ctx.font ="Bold "+_that.fontsize+"px 微软雅黑";
			  		ctx.fillStyle="#000";
			  		ctx.fillText(txt,txtX,dh+_that.fontsize);
			  		_that.imgdata = _that.cv.toDataURL();
		  		}
		  	},
		  	cvScrollEvent:function(){
		  		this.bodyScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
		  	},
		  	cvScroll:function(){
		  		//console.info('cvScroll');
				var scrollTop = this.bodyScrollTop
				var offsetTop = document.querySelector('.sticker-cv ').offsetTop;
				//console.info(offsetTop - scrollTop);
				if(offsetTop - scrollTop < 0) {
					this.cvbStyle = {
						'top':'0px',
						'left':'0px',
						'width':'100%',
						'box-shadow': '0px 0px 4px rgba(0,0,0,0.3)'
					}
				}else{
					if(!this.ismobile){
						this.cvbStyle = {
							'top':'50px',
							'left':'10%',
							'width':'80%',
						}
					}

				}
		  	}
		  	
		}
	}
</script>