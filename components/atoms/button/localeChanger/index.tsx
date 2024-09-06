import { locales } from '@/i18n/locales'
import { usePathname, useRouter } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { useLocale } from 'next-intl'
type LocaleChangerProps = {
     className?: string
}
const LocaleChanger = ({ className }: LocaleChangerProps) => {
     const router = useRouter()
     const pathName = usePathname()
     const locale = useLocale()

     const changeUserLocale = (locale: (typeof locales)[number]) => {
          locale && router.push(pathName, { locale: locale })
     }

     return (
          <select
               onChange={(e) => changeUserLocale(e.target.value)}
               defaultValue={locale}
               className={cn(
                    'cursor-pointer rounded-md bg-white p-2 text-slate-800',
                    className
               )}
          >
               {locales.map((locale) => (
                    <option key={locale} value={locale}>
                         {locale}
                    </option>
               ))}
          </select>
     )
}

export default LocaleChanger
