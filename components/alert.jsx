import { personalLinks } from '../constants';

export default function Alert() {
  return (
    <div className="bg-[#003566] px-4 py-3 text-white">
      <p className="text-center text-sm font-medium">
        Interested in adding your website or research to this page?
        <a className="underline" href={personalLinks.learnmore.link}>
          {' '}{personalLinks.learnmore.title}
        </a>
      </p>
    </div>
  );
}
