import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

/*
 * Generates page Meta data with site name included and translated values
 * See /features/i18n/messages/(locale)/meta/index.json for translations
 */

const generateMeta = async (page: string): Promise<Metadata | undefined> => {
     const t = await getTranslations(`meta.${page}`)
     const siteName = process.env.NEXT_PUBLIC_SITE_NAME

     if (!t) return

     return {
          title: `${siteName} - ${t('title')}`,
          description: `${siteName} - ${t('description')}`,
          keywords: t('keywords'),
          //NOTE: Additional fields available
          //see documentation : https://nextjs.org/docs/app/api-reference/functions/generate-metadata
     }
}

export default generateMeta
