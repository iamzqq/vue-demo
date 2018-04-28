import Vue from 'vue'
import Router from 'vue-router'
import content from '@/components/content'
// import home from '@/components/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'content'
    },{
      name: 'Article',
      path: '/article',
      meta: {
        title: 'article'
      },
      component: require('@/components/Article.vue')
    }
    // {
    //   path: '/home',
    //   name: 'home'
    // }
  ]
})
