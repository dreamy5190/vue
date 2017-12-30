import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '@/components/Page1'
import Pagelist from '@/components/Page2'
import Notedetail from '@/components/Notedetail'
import Sticker from '@/components/Sticker'

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
    	name:'Pagelist',
    	component:Pagelist
    },
    // {
    //   path:'/p3',
    //   name:'Pagegame',
    //   component:Pagegame
    // },
    {
      path:'/sticker',
      name:'Sticker',
      component:Sticker
    },
    {
      path:'/detail',
      name:'/Detail',
      component:Notedetail
    }
  ]
});
