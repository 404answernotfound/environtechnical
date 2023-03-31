import { personalLinks } from '../constants';
import { useTranslations } from 'next-intl';

export default function Alert() {
  const t = useTranslations('Alert');

  return (
    <div className="bg-[#003566] px-4 py-3 text-white">
      <p className="text-center text-sm font-medium">
        {t('alertText')}
        <a className="underline" href={personalLinks.learnmore.link}>
          {personalLinks.learnmore.title}
        </a>
      </p>
    </div>
  );
}
