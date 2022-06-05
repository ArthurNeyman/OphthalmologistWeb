import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '../layouts/MainLayout';
import AdminLayout from '../layouts/AdminLayout';
import MainPage from '../components/MainPage';
import Services from "../components/Services";
import Doctors from "../components/Doctors";
import EFI from "../components/EFI";
import Enroll from "../components/Enroll";
import About from "../components/About";
import News from "../components/News";
// import ManageMain from '../components/admin-panel/ManageMain'
import ManageServices from '../components/admin-panel/ManageServices'
// import ManageNews from '../components/admin-panel/ManageNews'
// import ManageAbout from '../components/admin-panel/ManageAbout'
import ManageUsers from '../components/admin-panel/ManageUsers'
import EmptyLayout from '../layouts/EmptyLayout'
import UserInfo from '../components/admin-panel/UserInfo'
import UserAdd from '../components/admin-panel/UserAdd'
import ServiceAdd from '../components/admin-panel/ServiceAdd'
import ServiceInfo from '../components/admin-panel/ServiceInfo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'MainPage',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'MainPage',
        component: MainPage
      },
      {
        path: 'services',
        name: 'Services',
        meta: {withPicture: false},
        component: Services
      },
      {
        path: 'doctors',
        name: 'Doctors',
        meta: {withPicture: false},
        component: Doctors
      },
      {
        path: 'efi',
        name: 'EFI',
        meta: {withPicture: true},
        component: EFI
      },
      {
        path: 'enroll',
        name: 'Enroll',
        meta: {withPicture: true},
        component: Enroll
      },
      {
        path: 'about',
        name: 'About',
        meta: {withPicture: true},
        component: About
      },
      {
        path: 'news',
        name: 'News',
        meta: {withPicture: true},
        component: News
      },
    ]
  },
  {
    path: '/admin',
    meta: {auth: true},
    component: AdminLayout,
    children: [
      {
        path: 'services',
        name: 'ManageServices',
        component: ManageServices
      },
      {
        path: 'services/add',
        name: 'service-add',
        component: ServiceAdd,
      },
      {
        path: 'services/:id',
        name: 'service-edit',
        props: true,
        component: ServiceInfo,
      },
      {
        path: 'users',
        name: 'ManageUsers',
        component: ManageUsers,
        props: true,
      },
      {
        path: 'users/:id',
        name: 'user',
        props: true,
        component: UserInfo,
      },
      {
        path: 'users/add',
        name: 'user-add',
        component: UserAdd,
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: EmptyLayout,
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const currentToken = sessionStorage.getItem('token');
  const requireAuth = to.matched.some(record => record.meta.auth);
  if (requireAuth && !currentToken){
    next('/login');
  } else {
    next();
  }
});

export default router
