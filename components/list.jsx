import { environtechlist } from '../constants';
import ListItem from './listitem';

export default function List() {
  return (
    <section id="list" className="mx-auto max-w-screen-2xl py-8 md:py-16">
      <div className="mx-auto max-w-lg text-center pb-8 md:pb-16">
        <h2 className="text-3xl font-extrabold sm:text-5xl">
          Resources for a sustainable web
        </h2>

        <p className="mt-4 text-gray-300">
          Get started on sustainable web development and design with our resources and
          get a glance at how even the smallest commitment can have a solid take
          into the fight to climate change.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {environtechlist.map((item) => (
          <ListItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
