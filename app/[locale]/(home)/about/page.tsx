import generateMeta from '@/lib/generateMeta'
import { useTranslations } from 'next-intl'
export const generateMetadata = async () => await generateMeta('about')

const AboutPage = () => {
     const t = useTranslations('pages.about')

     const siteName = process.env.NEXT_PUBLIC_SITE_NAME || ''

     return (
          <section className="flex w-full flex-col items-center justify-center py-12">
               <div className="flex max-w-[1200px] flex-col px-4">
                    <h1 className="pb-6 text-2xl">
                         {t('h1', { name: siteName })}
                    </h1>
                    <h2 className="text-md py-4 font-medium">{t('h2One')}</h2>
                    <p>{t('par1')}</p>
                    <h2 className="text-md py-4 font-medium">{t('h2Two')}</h2>
                    <p>{t('par2')}</p>
                    <h2 className="text-md py-4 font-medium">{t('h2Three')}</h2>
                    <p>{t('par3')}</p>
                    <p>{t('par4')}</p>
                    <h2 className="text-md py-4 font-medium">{t('h2Four')}</h2>
                    <p>{t('par5')}</p>
               </div>
          </section>
     )
}

export default AboutPage
