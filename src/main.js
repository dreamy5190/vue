// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Mint from 'mint-ui'

Vue.use(Mint);
if(Vue.config.devtools){
  Vue.prototype.devURL = 'http://localhost/CJT/'
}else{
  Vue.prototype.devURL = ''
}
var ua = navigator.userAgent.toLowerCase() || window.navigator.userAgent.toLowerCase();
var isWX = /MicroMessenger/i.test(ua), //微信端
     isIOS = /(iPhone|iPad|iPod|iOS)/i.test(ua), //苹果家族
     isAndroid = /(android|nexus)/i.test(ua), //安卓家族
     isWindows = /(Windows Phone|windows[\s+]phone)/i.test(ua), //微软家族
     isBlackBerry = /BlackBerry/i.test(ua); //黑莓家族
if(isWX || isIOS || isAndroid || isBlackBerry){
  Vue.prototype.ismobile = true;
}else{
  Vue.prototype.ismobile = false;
}
Vue.prototype.$http = axios
Vue.config.productionTip = false
/**
 * 对Date的扩展，将 Date 转化为指定格式的String
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * 例子：
 * (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 * (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
 * @param fmt string
 * @return string
 * */
Date.prototype.format = function(fmt){ //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
	
/* eslint-disable no-new */
new Vue({
  	el: '#app',
  	router,
  	template: '<App/>',
  	components: { App },

})
