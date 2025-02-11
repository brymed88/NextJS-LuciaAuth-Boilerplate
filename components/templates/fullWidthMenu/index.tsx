'use client'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { useWindowScrollPositions } from '@/hooks/useWindowScrollPositions'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import DesktopMenuLayout from './layouts/desktop'
import MobileMenuLayout from './layouts/mobile'
import { NavLinkType } from './types'

type MenuProps = {
     hasSession: boolean
     authEnabled: boolean
}

const FullWidthMenu = ({ hasSession, authEnabled }: MenuProps) => {
     const { scrollY } = useWindowScrollPositions()
     const { width } = useWindowDimensions()
     const t = useTranslations('menu.main')
     const isDesktop = width ? width > 768 || false : undefined

     const menuNav: NavLinkType[] = [
          { url: '/', label: t('home') },
          { url: '/about', label: t('about') },
     ]

     return (
          <section
               className={cn(
                    'fixed z-10 flex w-full justify-center bg-indigo-700 text-slate-200',
                    scrollY > 20 && isDesktop && 'shadow-lg'
               )}
          >
               <header className="flex h-10 w-full max-w-[1200px] items-center gap-8 px-6 py-8">
                    <Image src="/next.svg" height={60} width={60} alt="logo" />
                    <span className="grow" />

                    {isDesktop === undefined && (
                         <div className="mt-[-10px] flex h-1 items-center justify-center gap-2 text-white">
                              <span className="animate-pulse text-2xl delay-0 duration-1000">
                                   .
                              </span>
                              <span className="animate-pulse text-2xl delay-200 duration-1000">
                                   .
                              </span>
                              <span className="animate-pulse text-2xl delay-300 duration-1000">
                                   .
                              </span>
                         </div>
                    )}

                    {!isDesktop && isDesktop !== undefined && (
                         <MobileMenuLayout
                              menu={menuNav}
                              hasSession={hasSession}
                              authEnabled={authEnabled}
                         />
                    )}
                    {isDesktop && (
                         <DesktopMenuLayout
                              menu={menuNav}
                              hasSession={hasSession}
                              authEnabled={authEnabled}
                         />
                    )}
               </header>
          </section>
     )
}

export default FullWidthMenu
