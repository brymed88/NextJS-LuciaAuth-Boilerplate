import generateMeta from '@/lib/generateMeta'
import { useTranslations } from 'next-intl'
export const generateMetadata = async () => await generateMeta('home')

export default function Home() {
     const t = useTranslations('pages.home')

     const Seperator = () => <span className="h-2 w-full bg-slate-50" />

     return (
          <section className="flex w-full flex-col">
               <div className="flex h-[400px] w-full items-center justify-center bg-gradient-to-b from-indigo-700 to-indigo-500 py-4 md:h-[800px]">
                    <span className="text-center text-2xl text-slate-300">
                         {t('heroText')}
                    </span>
               </div>

               <Seperator />

               <div className="flex w-full flex-col items-center gap-4 px-2 py-12 md:justify-evenly">
                    <h2 className="w-full pb-6 text-center text-xl font-medium text-slate-500">
                         {t('sectionOne')}
                    </h2>
                    <div className="flex w-11/12 max-w-[1200px] flex-col items-center justify-center gap-4 md:w-full md:flex-row md:justify-between">
                         <div className="h-96 w-full bg-slate-100 p-4 md:flex-1"></div>
                         <div className="h-96 w-full bg-slate-100 p-4 md:flex-1"></div>
                         <div className="h-96 w-full bg-slate-100 p-4 md:flex-1"></div>
                    </div>
               </div>

               <Seperator />

               <div className="flex w-full flex-col items-center gap-4 px-2 py-12 md:justify-evenly">
                    <h2 className="w-full pb-6 text-center text-xl font-medium text-slate-500">
                         {t('sectionTwo')}
                    </h2>
                    <div className="flex w-11/12 max-w-[1200px] flex-col items-center justify-center gap-4 md:w-full md:flex-row md:justify-between">
                         <div className="h-96 w-full bg-slate-100 p-4 md:flex-1"></div>
                         <div className="h-96 w-full bg-slate-100 p-4 md:flex-1"></div>
                         <div className="h-96 w-full bg-slate-100 p-4 md:flex-1"></div>
                    </div>
               </div>

               <Seperator />

               <div className="flex w-full flex-col items-center gap-4 px-2 py-12 md:justify-evenly">
                    <h2 className="w-full pb-6 text-center text-xl font-medium text-slate-500">
                         {t('sectionThree')}
                    </h2>
                    <div className="flex w-11/12 max-w-[1200px] flex-col items-center justify-center gap-4 md:w-full md:flex-row md:justify-between">
                         <div className="h-96 w-full bg-slate-100 p-4 md:flex-1"></div>
                         <div className="h-96 w-full bg-slate-100 p-4 md:flex-1"></div>
                         <div className="h-96 w-full bg-slate-100 p-4 md:flex-1"></div>
                    </div>
               </div>

               <Seperator />
          </section>
     )
}
