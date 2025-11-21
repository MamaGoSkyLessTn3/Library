import { getAllValues } from "./getAllValues"
export const ROUTES = {
  INDEX: '/',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  PASSWORD_RECOVERY: '/password-recovery',
  OTP_CHECK: '/otp-check',
  PASSWORD_RESET: '/password-reset',
  PROFILE: '/profile',
	BOOK: (bookId: string) => `/book/${bookId}`,
	
}

	export const ROUTE_VALUES = getAllValues(ROUTES)

export const UNAUTHORIZED_ROUTES: string[] = [ROUTES.SIGN_IN,ROUTES.SIGN_UP,ROUTES.PASSWORD_RECOVERY,ROUTES.PASSWORD_RESET,ROUTES.OTP_CHECK]

export const AUTHORIZED_ROUTES: string[] = ROUTE_VALUES.filter(
	route => !UNAUTHORIZED_ROUTES.includes(route)
)
export type AppRoutes = typeof ROUTES
