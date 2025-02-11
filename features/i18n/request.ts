import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

import { loadI18nTranslations } from '@/features/i18n/loader'
import { cookies } from 'next/headers'
import { locales } from './routing'

export default getRequestConfig(async () => {
     const locale = (await cookies()).get('NEXT_LOCALE')?.value || 'en'

     if (!locales.includes(locale)) notFound()

     const messages = loadI18nTranslations('/features/i18n/messages/', locale)

     return {
          locale,
          messages,
     }
})
