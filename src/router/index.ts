import { ROUTES } from './config'
import { createRouter, createWebHashHistory } from 'vue-router'

import Book from '../pages/Book.vue'
import Profile from '../pages/Profile.vue'
import SignIn from '@/pages/SignIn.vue'
import PasswordRecovery from '@/pages/PasswordRecovery.vue'
import OtpCheck from '@/pages/OtpCheck.vue'
import PasswordReset from '@/pages/PasswordReset.vue'
import SignUp from '@/pages/SignUp.vue'
import Index from '@/pages/Index.vue'

const routes = [
  { path: ROUTES.INDEX, component: Index },
  { path: '/book:id', component: Book },
  { path: ROUTES.SIGN_IN, component: SignIn },
  { path: ROUTES.PROFILE, component: Profile },
  { path: ROUTES.PASSWORD_RECOVERY, component: PasswordRecovery },
  { path: ROUTES.OTP_CHECK, component: OtpCheck },
  { path: ROUTES.PASSWORD_RESET, component: PasswordReset },
  { path: ROUTES.SIGN_UP, component: SignUp },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
