import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Center = () => import('../views/center/Center')
const Car = () => import('../views/shoppingCart/Car')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: "/home",

  },
  {
    path: '/home',
    component: Home,
    //  meta:{
    //   title:"首页"
    // },
  },
  {
    path: '/category',
    component: Category,
    // meta:{
    //   title:"分类"
    // },
  },
  {
    path: '/center',
    component: Center,
    // meta:{
    //   title:"京喜"
    // },
  },
  {
    path: '/car',
    component: Car,
    // meta:{
    //   title:"购物车"
    // },
  },
  {
    path: '/profile',
    component: Profile,

  },
  {
    path: '/detail/:iid',
    component: Detail,

  },

]

const router = new Router({
  routes,
  mode: 'history'
})

// router.beforeEach((to,from,next)=>{
//   document.title=to.matched[0].meta.title
//   next()
// })
export default router

