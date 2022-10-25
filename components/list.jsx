import { environtechlist } from '../constants';
import ListItem from './listitem';
import { useTranslations } from 'next-intl';

export default function List() {
  const t = useTranslations('List');

  return (
    <section id="list" className="mx-auto max-w-screen-2xl py-8 md:py-16">
      <div className="mx-auto max-w-lg text-center pb-8 md:pb-16">
        <h2 className="text-3xl font-extrabold sm:text-5xl">{t('title')}</h2>

        <p className="mt-4 text-gray-300">{t('description')}</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {environtechlist.map((item) => (
          <ListItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
