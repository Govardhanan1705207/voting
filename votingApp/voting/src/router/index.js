import Vue from 'vue'
import Router from 'vue-router'
import Voter from '@/components/voters'
import candidate from '@/components/candidate'
import admin from '@/components/admin'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'voter',
      component: Voter
    },
    {
      path: '/candidate',
      name: 'candidate',
      component: candidate
    },

    {
      path: '/admin',
      name: 'admin',
      component: admin
    }
  ]
})
