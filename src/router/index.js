import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/page/resume'
import Image from '@/page/image'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'resume',
      component: Resume
    },
    {
      path: '/image',
      name: 'image',
      component: Image
    }
  ]
})
