import Vue from 'vue'
import Router from 'vue-router'
import Todoitem from '@/components/Todoitem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todoitem',
      component: Todoitem
    }
  ]
})
