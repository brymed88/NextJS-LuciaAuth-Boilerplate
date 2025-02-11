import { describe, expect, test } from 'vitest'

import IntlMockProvider from '@/__mocks__/intlProvider'
import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import AuthForm from '.'
import { AuthSteps } from '../../types'

vi.mock('@/i18n/routing', async () => {
     const mod = await vi.importActual('@/features/i18n/routing')
     return {
          ...mod,
          useRouter: () => {},
     }
})

const renderComponent = async (step?: AuthSteps) => {
     render(
          <IntlMockProvider locale="en">
               <AuthForm step={step} />
          </IntlMockProvider>
     )
}
describe('AuthForm Component Tests', () => {
     test('form exists on default step - login', () => {
          renderComponent()
          expect(screen.getByText('Login with credentials')).toBeDefined()
     })
     test('signup form should render', () => {
          renderComponent('signup')
          expect(screen.getByText('Create an account')).toBeDefined()
     })
     test('reset form should render', () => {
          renderComponent('reset')
          expect(screen.getByText('Reset password')).toBeDefined()
     })
     test('verify form should render', () => {
          renderComponent('verify')
          expect(screen.getByText('Verify your account')).toBeDefined()
     })
     test('passwordReset form render without userId - should show invalid', () => {
          renderComponent('passwordReset')
          expect(screen.getByText('Invalid process detected'))
     })
     test('Email Sent Notice form render', () => {
          renderComponent('checkEmail')
          expect(screen.getByText('Verification Email'))
     })
})
