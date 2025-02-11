import generateMeta from '@/lib/generateMeta'
import { useTranslations } from 'next-intl'

export const generateMetadata = async () => await generateMeta('dashboard')

const DashboardPage = () => {
     const t = useTranslations('pages.dashboard.dashboard')
     return <div className="text-4xl text-white">{t('title')}</div>
}

export default DashboardPage
