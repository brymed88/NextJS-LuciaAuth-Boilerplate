import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'
import { routing } from './features/i18n/routing'

const handleI18nRouting = createMiddleware(routing)

export default function middleware(req: NextRequest) {
     const { pathname } = req.nextUrl

     //Custom matcher for i18N routing
     const shouldHandle =
          pathname === '/' ||
          new RegExp('/((?!api|_next|_vercel|.*\\..*).*)').test(
               req.nextUrl.pathname
          ) //

     if (!shouldHandle) return

     return handleI18nRouting(req)
}
