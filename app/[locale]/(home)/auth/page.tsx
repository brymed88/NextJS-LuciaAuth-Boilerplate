import AuthForm from '@/features/auth/components/authForm'
import { AuthSteps, authStepTypes } from '@/features/auth/types'
import generateMeta from '@/lib/generateMeta'
import { redirect } from 'next/navigation'

export const generateMetadata = async () => await generateMeta('auth')

type AuthPageProps = {
     searchParams: Promise<{ [key: string]: string | undefined }>
}

const AuthPage = async ({ searchParams }: AuthPageProps) => {
     const authEnabled = process.env.AUTH_ENABLED === 'true'

     if (!authEnabled) redirect('/404')

     const params = await searchParams
     const step = (
          params.code ? 'verify'
          : !params.step ? 'login'
          : authStepTypes.includes(params.step) ? params.step
          : 'login') as AuthSteps

     const verifyCode = params.code

     return (
          <section className="flex size-full justify-center md:pt-20">
               <AuthForm
                    step={step}
                    verifyCode={verifyCode}
                    type={params.type}
               />
          </section>
     )
}

export default AuthPage
