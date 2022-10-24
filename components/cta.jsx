import { personalLinks } from '../constants';
import Image from 'next/image';
import ClimateImg1 from '../public/images/climate-change-person-3.webp'
import ClimateImg2 from '../public/images/climate-change-person2.webp'

export default function CTA() {
  return (
    <section>
      <div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-[#003566] p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Join the fight against Climate Change
              </h2>

              <p className="hidden text-white/90 sm:mt-4 sm:block">
                There are many amazing opportunities to sponsor incredible no
                profits around the world. If you have the chance to give
                something, why not reach out to them? Are you a no profit
                organization that would like to be listed on this website? Just
                send a message to 404answernotfound.public@gmail.com or contact
                me directly on LinkedIn or Twitter!
              </p>

              <div className="mt-4 md:mt-8">
                <a
                  href={personalLinks.jointhechange.link}
                  className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  {personalLinks.jointhechange.title}
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <Image
              alt="A human peacefully fighting for climate change"
              src={ClimateImg1}
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />

            <Image
              alt="A human peacefully fighting for climate change"
              src={ClimateImg2}
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
