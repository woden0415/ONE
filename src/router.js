import FramePage from './views/Frame.vue'

export default [
  {
    path: '/',
    redirect: '/one'
  },
  {
    path: '/:id',
    component: FramePage
  }
]