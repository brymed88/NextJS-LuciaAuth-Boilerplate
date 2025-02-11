import IntlMockProvider from '@/__mocks__/intlProvider'
import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import DashboardMenu from '.'

vi.mock('react', async () => {
     const mod = await vi.importActual('react')
     return {
          ...mod,
          cache: () => {},
     }
})

vi.mock('@/i18n/routing', async () => {
     const mod = await vi.importActual('@/features/i18n/routing')
     return {
          ...mod,
          useRouter: () => {},
     }
})

const renderComponent = () => {
     return render(
          <IntlMockProvider locale="en">
               <DashboardMenu />
          </IntlMockProvider>
     )
}

describe('DashboardMenu Component', () => {
     test('Show DashboardMenu and verify links exist', async () => {
          renderComponent()

          expect(screen.getByRole('img')).toBeDefined()
          expect(screen.getByText('Dashboard'))
          expect(screen.getByText('Billing'))
          expect(screen.getByText('Profile'))
          expect(screen.getByText('Account Settings'))
          expect(screen.getByRole('button', { name: 'Logout' })).toBeDefined()
     })
})
