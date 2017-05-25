import FramePage from './views/Frame.vue'

const one = {template: '<p>one</p>'}

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