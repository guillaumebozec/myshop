import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/ADMIN.vue'
import AddNewItem from '../views/addnewitem.vue'
import EditItem from '../views/edititem.vue'
import AddNewCat from '../views/addnewcat.vue'
import EditCat from '../views/editcat.vue'
import AddNewUser from '../views/addnewuser.vue'
import Client from '../views/client.vue'
import Direction from '../views/direction.vue'
import EditUser from '../views/edituser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin/:token',
      name: 'admin',
      component: Admin
    },
    {
      path: '/addnewitem/:token',
      name: 'addnewitem',
      component: AddNewItem
    },
    {
      path: '/edititem/:name/:id/:price/:categories/:description/:token',
      name: 'edititem',
      component: EditItem
    },
    {
      path: '/addnewcat/:token',
      name: 'addnewcat',
      component: AddNewCat
    },
    {
      path: '/editcat/:name/:id/:products/:token',
      name: 'editcat',
      component: EditCat,
      props:true
    },
    {
      path: '/addnewuser/:token',
      name: 'addnewuser',
      component: AddNewUser
    },
    {
      path: '/client',
      name: 'client',
      component: Client
    },
    {
      path: '/direction/:token',
      name: 'direction',
      component: Direction
    },
    {
      path: '/edituser/:token/:id/:email/:fullName',
      name: 'edituser',
      component: EditUser
    },
  ]
})

export default router
