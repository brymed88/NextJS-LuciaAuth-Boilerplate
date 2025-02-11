'use server'

import { SendVerifyEmail } from '@/features/email/utils'
import { db } from '@/lib/db'
import { ResponseHandler } from '@/lib/utils'
import { generateIdFromEntropySize } from 'lucia'
import { cookies } from 'next/headers'
import { createDate, TimeSpan } from 'oslo'
import { Argon2id } from 'oslo/password'
import { lucia } from '../lucia'
import { AuthDataType } from '../types'

const signIn = async (formData: AuthDataType) => {
     if (!formData.email || !formData.password)
          return ResponseHandler('invalid data', true)

     try {
          const user = await db.user.findUnique({
               where: { email: formData.email },
          })

          if (!user) return ResponseHandler('invalid user', true)

          if (!user.verified) {
               const tokenId = generateIdFromEntropySize(10) //16 chars long

               const updateUser = await db.user.update({
                    where: { id: user.id },
                    data: {
                         Verification_Token: {
                              create: {
                                   id: tokenId,
                                   expires_at: createDate(new TimeSpan(1, 'd')),
                              },
                         },
                    },
               })

               if (!updateUser)
                    return ResponseHandler(
                         'failed to create verification token',
                         true
                    )

               const sendVerificationEmail = await SendVerifyEmail({
                    userEmail: updateUser.email,
                    verifyLink: `${process.env.NEXT_PUBLIC_SITE_URL}/auth?step=verify&code=${tokenId}`,
               })

               if (!sendVerificationEmail)
                    return ResponseHandler(
                         'failed to send verification email',
                         true
                    )

               return ResponseHandler('verify-email-sent')
          }

          const validPassword = await new Argon2id().verify(
               user.password_hash,
               formData.password
          )

          if (!validPassword)
               return ResponseHandler('invalid credentials', true)

          const session = await lucia.createSession(user.id, {})

          const sessionCookie = lucia.createSessionCookie(session.id)

          ;(await cookies()).set(
               sessionCookie.name,
               sessionCookie.value,
               sessionCookie.attributes
          )
     } catch (error) {
          console.log(error)
          return ResponseHandler('critical error', true)
     }
}

export { signIn }
