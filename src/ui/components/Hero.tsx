import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className=" flex items-start justify-between pl-16 py-6 ">
      <div className="max-w-1/2 text-left space-y-4">

        <h1 className="text-4xl font-bold leading-tight">
          <span className="bg-gradient-to-b from-[#FF8C42]  to-[#C85104] text-transparent bg-clip-text md:text-5xl block">International Journal</span>{' '}
          <span className="text-primaryText">
            of Scientific Research in Engineering & Technology
          </span>
        </h1>
        <p className=" text-lg ">
          e-ISSN:2583-1240, Follows UGC-CARE Guidelines
        </p>
        <p className="text-muted text-lg max-w-xl  text-paragraph ">
          <p>
            An International Scholarly Open Access Journal, Peer-reviewed, Refereed Journal.  High Impact factor, Bi-Monthly, Multidisciplinary Journal.
          </p>
          <p>
            Cross Ref DOI (Digital Object Identifier) allotted to all published Articles. Indexed by Google Scholar, Elsevier-Mendeley and many other research databases.
          </p>
        </p>
        <Link to="https://editorial.fdrpjournals.org/login?journal=2" target='_blank'>
          <button className="primaryBtn">
            Submit Paper <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
      <div className='w-1/2'>
        <img className='block' src="/HomeBanner.png" alt="bannerimage" />
      </div>
    </section>
  );
}
