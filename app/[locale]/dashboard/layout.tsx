import DashboardMenu from '@/components/templates/dashboardMenu'
import { getAuth } from '@/features/auth/queries/get-auth'
import { redirect } from '@/features/i18n/routing'
import { PropsWithChildren } from 'react'

export default async function DashboardLayout({ children }: PropsWithChildren) {
     const authEnabled = process.env.AUTH_ENABLED === 'true'
     if (!authEnabled) redirect('/404')

     const { user } = await getAuth()
     if (!user) redirect('/auth')

     return (
          <main className="size-screen flex flex-col md:min-h-full md:flex-row">
               <DashboardMenu />

               <section className="flex min-h-screen w-full flex-col items-center bg-slate-700 py-8">
                    {children}
               </section>
          </main>
     )
}
