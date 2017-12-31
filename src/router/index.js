import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/page/index'
import Blog from '@/page/blog'
import BlogMgt from '@/page/blogmgt'
import Resume from '@/page/resume'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/blogmgt',
      name: 'blogmgt',
      component: BlogMgt
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    }
  ]
})
