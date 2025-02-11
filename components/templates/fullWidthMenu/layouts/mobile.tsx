'use client'
import LocaleChanger from '@/components/atoms/localeChanger'
import LogoutBtn from '@/components/atoms/logoutBtn'
import { cn } from '@/lib/utils'
import { Menu, XIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { NavLinkType } from '../types'

import Link from 'next/link'
type MobileMenuType = {
     hasSession: boolean
     menu: NavLinkType[]
     authEnabled: boolean
}
const MobileMenuLayout = ({
     menu,
     hasSession,
     authEnabled,
}: MobileMenuType) => {
     const [menuToggled, setMenuToggled] = useState(false)
     const t = useTranslations('menu.main')
     return (
          <>
               <div
                    className={cn(
                         'absolute right-[-100%] top-12 flex w-full flex-col bg-indigo-700 p-4 pb-10 transition-all',
                         menuToggled && 'right-0 shadow-md'
                    )}
               >
                    <div onClick={() => setMenuToggled(false)} className="py-8">
                         <nav className="flex flex-col items-center gap-4">
                              {menu.map((menuItem) => {
                                   if (menuItem.url)
                                        return (
                                             <Link
                                                  href={menuItem.url}
                                                  key={menuItem.label}
                                                  className="w-full rounded-md bg-indigo-500 p-2 text-center"
                                             >
                                                  {menuItem.label}
                                             </Link>
                                        )
                                   if (menuItem.label)
                                        return (
                                             <p
                                                  className="w-full rounded-md bg-indigo-500 p-2 text-center"
                                                  key={menuItem.label}
                                             >
                                                  {menuItem.label}
                                                  <span>%</span>
                                             </p>
                                        )
                              })}

                              {authEnabled && (
                                   <Link
                                        href={
                                             hasSession ? '/dashboard' : '/auth'
                                        }
                                        className="w-full rounded-md bg-indigo-500 p-2 text-center"
                                   >
                                        {t('accountBtn')}
                                   </Link>
                              )}
                              {hasSession && <LogoutBtn />}
                         </nav>
                    </div>
                    <LocaleChanger className="max-w-20 self-end" />
               </div>
               <span
                    onClick={() => setMenuToggled(!menuToggled)}
                    className="cursor-pointer"
               >
                    {!menuToggled ?
                         <Menu className="stroke-slate-100" size={32} />
                    :    <XIcon
                              className={cn(
                                   'stroke-slate-100',
                                   menuToggled && 'animate-bounce'
                              )}
                              size={32}
                         />
                    }
               </span>
          </>
     )
}

export default MobileMenuLayout
