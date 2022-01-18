import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
const Home = () => import('../views/home/Home');
const Category = () => import('../views/category/Category');
const Detail = () => import('../views/detail/Detail');
const Profile = () => import('../views/profile/Profile');
const ShopCart = () => import('../views/shopcart/ShopCart');
const Register = () => import('../views/profile/Register');

const routes = [
  // 默认路由
  {
    path: '',
    name: 'DefaultHome',
    component: Home,
    meta: {
      title: '图书兄弟'
    }
  },
  //  首页
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '图书兄弟'
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: {
      title: '图书兄弟-商品分类'
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    meta: {
      title: '图书兄弟-商品详情'
    }
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart,
    meta: {
      title: '图书兄弟-购物车'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: '图书兄弟-个人中心'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      title: '图书兄弟-用户注册'
    }
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  // 如果没有登录，在这里到login
  next();
  document.title = to.meta.title;
})
export default router
