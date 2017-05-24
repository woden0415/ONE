import FramePage from './views/Frame.vue'
import firstcomponent from './components/commons/firstcomponent.vue'
import secondcomponent from './components/commons/secondcomponent.vue'

export default [
  {
    path: '/',
    component: FramePage
  },
  {
    path: '/first',
    component: firstcomponent
  },
  {
    path: '/second',
    component: secondcomponent
  }
]