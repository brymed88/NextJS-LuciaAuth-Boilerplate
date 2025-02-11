import IntlMockProvider from '@/__mocks__/intlProvider'
import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import FullWidthMenu from '.'

vi.mock('react', async () => {
     const mod = await vi.importActual('react')
     return {
          ...mod,
          cache: () => {},
     }
})

vi.mock('@/features/i18n/routing', async () => {
     const mod = await vi.importActual('@/features/i18n/routing')
     return {
          ...mod,
          useRouter: () => {},
     }
})

const renderComponent = (session: boolean) => {
     return render(
          <IntlMockProvider locale="en">
               <FullWidthMenu hasSession={session} authEnabled={true} />
          </IntlMockProvider>
     )
}

describe('Full width menu Component', () => {
     test('Show menu with no user session', async () => {
          renderComponent(false)

          expect(screen.getByText('Home'))
          expect(screen.getByText('About'))
          expect(screen.getByText('Account'))
          expect(screen.getByTestId('locale-changer-select'))
     })
     test('Show menu with user session', async () => {
          renderComponent(true)

          expect(screen.getByText('Home'))
          expect(screen.getByText('About'))
          expect(screen.getByText('Dashboard'))
          expect(screen.getByTestId('locale-changer-select'))
          expect(screen.getByRole('button', { name: 'Logout' }))
     })
})
