import IntlMockProvider from '@/__mocks__/intlProvider'
import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import LocaleChanger from '.'

const renderComponent = (locale?: string) =>
     render(
          <IntlMockProvider locale={locale || 'en'}>
               <LocaleChanger />
          </IntlMockProvider>
     )

vi.mock('@/i18n/routing', async () => {
     const mod = await vi.importActual('@/features/i18n/routing')
     return {
          ...mod,
          useRouter: () => {},
     }
})

describe('Locale Changer Component Tests', () => {
     test('test for default locale en', () => {
          renderComponent('en')
          const select = screen.getByRole('combobox')
          expect(select).toBeDefined()

          expect((select as HTMLSelectElement).value).toBe('en')
     })
     test('test for selected value pt', () => {
          renderComponent('pt')
          const select = screen.getByRole('combobox')
          expect(select).toBeDefined()

          expect((select as HTMLSelectElement).value).toBe('pt')
     })
})
