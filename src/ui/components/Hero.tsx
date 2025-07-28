import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className=" flex items-start justify-between px-6 lg:px-0 lg:pl-16 py-2 sm:py-6 flex-col lg:flex-row gap-y-6 md:gap-y-12" >
      <div className="max-w-full lg:max-w-1/2 text-left space-y-4 xl:space-y-6 2xl:space-y-8">

        <h1 className="text-3xl sm:text-4xl 2xl:text-5xl font-bold leading-tight md:w-4/5 lg:w-full">
          <span className="bg-gradient-to-b from-primary  to-primary-hover text-transparent bg-clip-text text-[2rem] 2xl:text-[3.5rem] sm:text-5xl block">International Journal</span>{' '}
          <span className="text-primaryText">
            of Scientific Research in Engineering & Technology
          </span>
        </h1>
        <p className=" text-base sm:text-lg 2xl:text-xl">
          e-ISSN:2583-1240, Follows UGC-CARE Guidelines
        </p>
        <article className="text-muted sm:text-base 2xl:text-lg max-w-xl 2xl:max-w-3xl  text-paragraph leading-6 sm:leading-normal">
          <p>
            An International Scholarly Open Access Journal, Peer-reviewed, Refereed Journal.  High Impact factor, Bi-Monthly, Multidisciplinary Journal.
          </p>
        </article>
        <Link to="https://editorial.fdrpjournals.org/login?journal=2" target='_blank'>
          <button className="primaryBtn">
            Submit Article <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
      <div className='m-auto md:max-w-4/5 lg:w-1/2 xl:w-3/7'>
        <img loading='lazy' 
className='block' src="/HomeBanner.webp" alt="bannerimage" />
      </div>
    </section>
  );
}
