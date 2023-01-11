import Head from "next/head";
import { useRouter } from "next/router";

import Footer from "./footer";
import Alert from "./alert";

export default function Layout({
  title,
  description,
  type,
  image,
  date,
  children,
}) {
  const router = useRouter();

  return (
    <>
      {/* HEAD */}
      <Head>
        <title>{title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={description} name="description" />
        <meta
          property="og:url"
          content={`https://envirotechnical.eu${router.asPath}`}
        />
        <link rel="shortcut icon" href="/avatar.jpg" />
        <link
          rel="canonical"
          href={`https://envirotechnical.eu${router.asPath}`}
        />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content="Envirotechnical" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@404answnotfound" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        {date && <meta property="article:published_time" content={date} />}
      </Head>
      {/* END-HEAD */}
      <Alert />
      <main className="container mx-auto px-4 text-slate-200">
        {children}
        <Footer />
      </main>
    </>
  );
}
