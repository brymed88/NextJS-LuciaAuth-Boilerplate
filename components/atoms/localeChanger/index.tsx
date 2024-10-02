import { locales, usePathname, useRouter } from '@/features/i18n/routing'
import { cn } from '@/lib/utils'
import { useLocale } from 'next-intl'
import { useSearchParams } from 'next/navigation'

type LocaleChangerProps = {
     className?: string
     dark?: boolean
}

const LocaleChanger = ({ className, dark = false }: LocaleChangerProps) => {
     const router = useRouter()
     const pathName = usePathname()
     const locale = useLocale()
     const params = useSearchParams()

     const changeUserLocale = (locale: (typeof locales)[number]) => {
          const newPath = pathName + (params ? `?${params.toString()}` : '')

          if (locale) router.push(newPath, { locale: locale })
     }

     return (
          <select
               onChange={(e) => changeUserLocale(e.target.value)}
               defaultValue={locale}
               data-testid="locale-changer-select"
               className={cn(
                    'cursor-pointer rounded-md bg-slate-300 p-2.5 text-slate-600',
                    className,
                    dark && 'bg-slate-600 text-slate-200'
               )}
          >
               {locales.map((locale) => (
                    <option
                         key={locale}
                         value={locale}
                         data-testid={`locale-changer-option`}
                    >
                         {locale}
                    </option>
               ))}
          </select>
     )
}

export default LocaleChanger
