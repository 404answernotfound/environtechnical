import Head from 'next/head';
import { useTranslations } from 'next-intl';

import Alert from '../components/alert';
import Container from '../components/container';
import CTA from '../components/cta';
import Footer from '../components/footer';
import Hero from '../components/hero';
import List from '../components/list';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Alert />
      <Container>
        <Hero />
        <List />
        <CTA />
      </Container>
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../locales/${locale}.json`)).default
    }
  };
}
