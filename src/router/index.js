import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/Layout'
import Hello from '../components/Hello'
import First from '../components/First'
import Second from '../components/Second'
import Thrid from '../components/Thrid'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/First',
      name: 'First',
      component: First
    },
    {
      path: '/Second',
      name: 'Second',
      component: Second
    },
    {
      path: '/Thrid',
      name: 'Thrid',
      component: Thrid
    }
    
  ]
})
