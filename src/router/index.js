import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/ref',
    name: 'References',
    component: () => import(/* webpackChunkName: "ref" */ '../views/References.vue')
  },
  {
    path: '/nsfw/ref',
    name: 'NSFW References',
    component: () => import(/* webpackChunkName: "nsfwref" */ '../views/NSFWReferences.vue')
  },
  {
    path: '/ref/:char',
    name: 'View Reference',
    component: () => import(/* webpackChunkName: "viewref" */ '../views/ViewRef.vue'),
    props: true
  },
  {
    path: '/ref/:char/art',
    name: 'View Art',
    component: () => import(/* webpackChunkName: "viewart" */ '../views/ViewArt.vue'),
    props: true
  },
  {
    path: '/nsfw/ref/:char/art',
    name: 'View NSFW Art',
    component: () => import(/* webpackChunkName: "viewnsfwart" */ '../views/ViewArtNSFW.vue'),
    props: true
  },
  {
    path: '/nsfw/ref/:char',
    name: 'View NSFW Reference',
    component: () => import(/* webpackChunkName: "viewnsfwref" */ '../views/ViewRefNSFW.vue'),
    props: true
  },
  {
    path: '/nav',
    name: 'Other',
    component: () => import(/* webpackChunkName: "nav" */ '../views/OtherNav.vue')
  },
  {
    path: '/comm',
    name: 'Commission Waitlist',
    component: () => import(/* webpackChunkName: "comm" */ '../views/CommissionWaitlist.vue')
  },
  {
    path: '/data',
    name: 'Data Projects',
    component: () => import(/* webpackChunkName: "data" */ '../views/Data.vue')
  },
  {
    path: '/data/:project',
    name: 'View Data Project',
    component: () => import(/* webpackChunkName: "dataproject" */ '../views/DataProject.vue'),
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
