'use client'

import Button from '@/components/atoms/button'
import HookFormComponent from '@/components/atoms/hookForm'
import HookFormInput from '@/components/atoms/hookFormInput'
import Label from '@/components/atoms/label'
import { signIn } from '@/features/auth/actions/sign-in'
import { Link, useRouter } from '@/features/i18n/routing'
import { Handshake } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useTransition } from 'react'
import { z } from 'zod'

const LoginSchema = z.object({
     email: z.string().email({ message: 'fieldRequired' }),
     password: z.string().min(1, { message: 'fieldRequired' }),
})

type LoginSchemaType = z.infer<typeof LoginSchema>

const LoginStep = () => {
     const t = useTranslations('pages.auth.login')
     const router = useRouter()

     const [isPending, startLoginTransition] = useTransition()
     const onSubmit = (data: LoginSchemaType) =>
          startLoginTransition(async () => {
               if (!data.email || !data.password) return //show toast

               const res = await signIn(data)

               if (res?.hasError) return //TODO: alternatively show toast / state for failure

               if (res?.data === 'verify-email-sent')
                    router.push('/auth?step=checkEmail')

               router.push('/dashboard')
          })

     return (
          <div className="relative flex w-full flex-col items-center gap-6">
               <Handshake size={45} className="stroke-blue-400" />

               <span className="w-10/12 border-b border-slate-200 py-1" />

               <div className="flex w-11/12 flex-col items-center gap-2">
                    <h2 className="w-full text-center text-lg text-slate-500">
                         {t('credentialsH2')}
                    </h2>
                    <HookFormComponent
                         zodSchema={LoginSchema}
                         defaultValues={{ email: '', password: '' }}
                         submitCallback={onSubmit}
                         className="flex w-10/12 flex-col items-center justify-center md:w-9/12"
                    >
                         <Label
                              value={t('emailAddressLabel')}
                              className="w-full py-3 text-slate-700"
                         />
                         <HookFormInput name="email" />

                         <Label
                              value={t('passwordLabel')}
                              className="w-full py-3 text-slate-700"
                         />

                         <HookFormInput name="password" type="password" />

                         <div className="mt-6 flex w-full items-center justify-between gap-2">
                              <Link
                                   href="/auth?step=reset"
                                   className="text-sky-600"
                              >
                                   {t('forgotPasswordLabel')}
                              </Link>
                              <Button
                                   className="bg-slate-800 text-white hover:bg-slate-700"
                                   isLoading={isPending}
                              >
                                   {t('loginBtnText')}
                              </Button>
                         </div>
                    </HookFormComponent>
               </div>
               <span className="w-10/12 border-b border-slate-200 py-2" />
               <p className="w-full text-center text-slate-500">
                    {t('createAccountText')}
                    <Link
                         className="cursor-pointer pl-2 text-sky-400"
                         href="/auth?step=signup"
                    >
                         {t('createAccountLink')}
                    </Link>
               </p>
          </div>
     )
}

export default LoginStep
