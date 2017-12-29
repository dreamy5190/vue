<template>
  <div id="app">
    <Navbar></Navbar>    
      <transition name="fade" mode="out-in">
          <router-view/>
      </transition>   
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

var data = {
  msg:'hello world',
  docs:''
};
export default {
  name: 'app',
  data: function () {
    return data
  },
  components:{Navbar,Footer},
}
</script>

<style>
body{padding: 0px;}
a:hover{border: none;text-decoration: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.mid-wrap{min-height: 800px;width: 80%;margin: 0 auto;position: relative;overflow: hidden;}
/*.pages{position: absolute;left: 0px;top: 0px;width: 100%;}*/
.slide-enter-active{
  animation:slideInLeft 0.6s;
}
.slide-leave-active{
animation:slideOutRight 0.6s;
}
.fade-enter-active{
  animation:fadeIn 0.6s;
}
.fade-leave-active{
animation:fadeOut 0.6s;
}
</style>
