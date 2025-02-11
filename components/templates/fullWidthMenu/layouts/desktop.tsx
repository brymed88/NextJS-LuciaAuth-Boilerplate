'use client'
import LocaleChanger from '@/components/atoms/localeChanger'
import LogoutBtn from '@/components/atoms/logoutBtn'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { NavLinkType } from '../types'

type DesktopMenuType = {
     menu: NavLinkType[]
     authEnabled?: boolean
     hasSession?: boolean
}
const DesktopMenuLayout = ({
     menu,
     authEnabled,
     hasSession,
}: DesktopMenuType) => {
     const t = useTranslations('menu.main')
     return (
          <div className="flex gap-8">
               <nav className="flex items-center gap-6">
                    {menu.map((menuItem) => {
                         if (menuItem.url)
                              return (
                                   <Link
                                        href={menuItem.url}
                                        key={menuItem.label}
                                   >
                                        {menuItem.label}
                                   </Link>
                              )
                         if (menuItem.label)
                              return (
                                   <p key={menuItem.label}>{menuItem.label}</p>
                              )
                    })}

                    {authEnabled && (
                         <Link href={hasSession ? '/dashboard' : '/auth'}>
                              {hasSession ? t('loggedIn') : t('accountBtn')}
                         </Link>
                    )}
                    {hasSession && <LogoutBtn />}
               </nav>
               <LocaleChanger />
          </div>
     )
}

export default DesktopMenuLayout
