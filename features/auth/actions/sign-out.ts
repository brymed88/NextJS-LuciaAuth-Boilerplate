'use server'

import { redirect } from '@/features/i18n/routing'
import { cookies } from 'next/headers'
import { lucia } from '../lucia'
import { getAuth } from '../queries/get-auth'

export const signOut = async () => {
     const { session } = await getAuth()

     if (!session) {
          redirect('/auth')
          return
     }

     await lucia.invalidateSession(session.id)

     const sessionCookie = lucia.createBlankSessionCookie()

     ;(await cookies()).set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes
     )

     redirect('/auth')
}
