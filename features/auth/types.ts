export type AuthDataType = {
     email?: string
     password?: string
     vPassword?: string
     userId?: string
}

export type AuthSteps =
     | 'login'
     | 'signup'
     | 'verify'
     | 'reset'
     | 'checkEmail'
     | 'passwordReset'
     | undefined

export const authStepTypes = [
     'login',
     'signup',
     'verify',
     'reset',
     'checkEmail',
     'passwordReset',
]
