import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/page/resume'
import Image from '@/page/image'
import chatrooms from '@/page/chat/chatrooms'
import chatting from '@/page/chat/chatting'

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
    },
    {
      path: '/chatrooms',
      name: 'chatrooms',
      component: chatrooms
    },
    {
      path: '/chatting',
      name: 'chatting',
      component: chatting
    }
  ]
})
