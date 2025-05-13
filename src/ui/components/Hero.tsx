import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className=" flex items-center justify-between pl-16 py-6">
      <div className="max-w-1/2 text-left space-y-6">
        <p className="text-muted">
          e-ISSN:2583-1240, Follows UGC-CARE Guidelines
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-primary">International Journal</span>{' '}
          <span className="text-primaryText">of</span>
          <br />
          <span className="text-primaryText">
            Scientific Research in Engineering & Technology
          </span>
        </h1>

        <p className="text-muted text-base max-w-xl">
          An International Scholarly Open Access Journal, Peer-reviewed,
          Refereed Journal
        </p>

        <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-md text-base font-medium shadow-sm transition">
          Submit Paper <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <div className='w-1/2'>
        <img className='block' src="/HomeBanner.png" alt="bannerimage" />
      </div>
    </section>
  );
}
