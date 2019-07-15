import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Stock from '@/components/stock'
import C1 from '@/components/role/c1'
import C2 from '@/components/role/c2'
import Role from '@/components/role'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
		{
		  path: '/stock',
		  name: 'Stock',
		  component: Stock
		},
		{
			path:'/role',
			component: Role,
			children:[
				{path: 'c1',component: C1},
				{path: 'c2',component: C2}
			]
		}
  ]
})
