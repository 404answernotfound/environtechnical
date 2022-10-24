import { personalLinks } from '../constants';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer
      aria-label="Site Footer"
      className="bg-gradient-to-r from-gray-900 via-[#003566] to-gray-900 text-white mt-8 md:mt-16"
    >
      <div className="mx-auto max-w-screen-xl px-4 pt-32 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-4xl font-extrabold sm:text-6xl">{t('cta')}</p>
          <p className="text-2xl sm:text-4xl pt-8 pb-4">{t('cta_question')}</p>

          <a
            className="mt-8 inline-block rounded-full border border-white/25 px-12 py-3 text-sm font-medium hover:bg-white hover:text-red-500"
            href={personalLinks.reachout.link}
          >
            {personalLinks.reachout.title}
          </a>
        </div>

        <div className="mt-32 border-t border-white/25 pt-12 sm:flex sm:items-center sm:justify-between">
          <nav
            aria-label="Footer Nav"
            className="flex justify-center gap-4 text-sm font-medium sm:justify-start"
          >
            <a href={personalLinks.blog.link} className="hover:opacity-75">
              {personalLinks.blog.title}
            </a>
            <a href={personalLinks.footer1.link} className="hover:opacity-75">
              {personalLinks.footer1.title}
            </a>
            <a href={personalLinks.footer2.link} className="hover:opacity-75">
              {personalLinks.footer2.title}
            </a>
          </nav>

          <div className="mt-6 flex justify-center gap-6 sm:mt-0 sm:justify-end">
            <a
              className="rounded-full border border-white/25 p-2 hover:opacity-75"
              href={personalLinks.linkedin.link}
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only"> LinkedIn </span>

              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 45 45"
                aria-hidden="true"
              >
                <path d="M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z"></path>
              </svg>
            </a>

            <a
              className="rounded-full border border-white/25 p-2 hover:opacity-75"
              href={personalLinks.twitter.link}
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only"> Twitter </span>

              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}