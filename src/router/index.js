import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import home from '../components/Home.vue'
import T from '../components/T.vue'
import user from '../components/user/User.vue'
import right from '../components/power/Rights.vue'
import roles from '../components/power/Roles.vue'
import cate from '../components/goods/Cate.vue'
import param from '../components/goods/Params.vue'
import GoodsList from '../components/goods/List.vue' 
import Add from '../components/goods/Add.vue'
Vue.use(VueRouter)

const routes = [
	{ path: '/', redirect: '/login' },
	{ path: '/login', component: Login },
	{ 
		path: '/home',
		component: home,
		redirect: '/T',
		children: [
			{ path: '/T', component: T },
			{ path: '/users', component: user },
			{ path: '/rights', component: right },
			{ path: '/roles', component: roles },
			{ path: '/categories', component: cate },
			{ path: '/params', component: param },
			{ path: '/goods', component: GoodsList },
			{ path: '/goods/add', component: Add }
		]
	}
	
]

const router = new VueRouter({
	routes
})

// 挂载路由导航守卫,to表示将要访问的路径，from表示从哪里来，next是下一个要做的操作 next('/login')强制跳转login
router.beforeEach((to, from, next) => {
  // 访问登录页，放行
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  // 没有token, 强制跳转到登录页
  if (!tokenStr) return next('/login')
  next()
})

export default router
