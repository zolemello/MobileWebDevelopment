import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Home from 'src/pages/Home.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import GameInfo from 'src/pages/GameInfo.vue'
import Typography from 'src/pages/Typography.vue'
import Icons from 'src/pages/Icons.vue'
import Locations from 'src/pages/Locations.vue'
import Notifications from 'src/pages/Notifications.vue'
import Upgrade from 'src/pages/Upgrade.vue'
import IndexPage from '../pages/IndexPage'
import Partidos from '../pages/Partidos.vue'
import Login from 'src/pages/Login.vue'



const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/home'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'game-info',
        name: 'Game Info',
        component: GameInfo
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'locations',
        name: 'Locations',
        component: Locations
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'upgrade',
        name: 'Upgrade to PRO',
        component: Upgrade
      },
      {
        path: 'index',
        name: 'Index',
        component: IndexPage
      },  
      
      {
        path: 'partidos',
        name: 'partidos',
        component: Partidos
      },

      {
        path: 'login',
        name: 'Login',
        component: Login
      },

     

    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
