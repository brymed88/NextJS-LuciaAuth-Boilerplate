import { db } from '@/lib/db'
import { PrismaAdapter } from '@lucia-auth/adapter-prisma'
import { Lucia } from 'lucia'

const adapter = new PrismaAdapter(db.session, db.user)

export const lucia = new Lucia(adapter, {
     sessionCookie: {
          // this sets cookies with super long expiration
          // since Next.js doesn't allow Lucia to extend cookie expiration when rendering pages
          name: 'session',
          expires: false,
          attributes: {
               secure: process.env.NODE_ENV === 'production', // `true` when using HTTPS
          },
     },
     getUserAttributes: (attributes) => {
          return {
               // attributes has the type of DatabaseUserAttributes
               email: attributes.email,
          }
     },
})

declare module 'lucia' {
     interface Register {
          Lucia: typeof lucia
          DatabaseUserAttributes: DatabaseUserAttributes
     }
}

interface DatabaseUserAttributes {
     email: string
}
