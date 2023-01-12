import { useTranslations } from 'next-intl';

import CTA from '@/components/cta';
import Hero from '@/components/hero';
import List from '@/components/list';
import Layout from '@/components/layout';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <Layout
      title={t('title')}
      description={t('description')}
      image="https://www.envirotechnical.eu/static/images/cover-envirotechnical-min.jpg"
    >
      <Hero />
      <List />
      <CTA />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../locales/${locale}.json`)).default
    }
  };
}
