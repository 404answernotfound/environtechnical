import { personalLinks } from '../constants';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Envirotechnical
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
            {t('description')}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-[#003566] bg-[#003566] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href={personalLinks.getstarted.link}
            >
              {t('get_started')}
            </a>

            <a
              className="block w-full rounded border border-[#003566] px-12 py-3 text-sm font-medium text-white hover:bg-[ focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href={personalLinks.presentation.link}
            >
              {t('presentation')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
