import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Notedetail from '@/components/Notedetail'

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Page1',
      component: Page1
    },
    {
    	path:'/p2',
    	name:'Page2',
    	component:Page2
    },
    {
      path:'/detail',
      name:'/Detail',
      component:Notedetail
    }
  ]
})