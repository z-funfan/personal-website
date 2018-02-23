import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/page/resume'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    }
  ]
})
