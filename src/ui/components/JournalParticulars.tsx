import React from 'react';
import Title from '../other/Title';

const JournalParticulars: React.FC = () => {
  return (
    <section className="leading-relaxed space-y-6 text-base 2xl:text-lg text-[#333333]">
      <Title>Journal Particulars</Title>
      <div className="grid grid-cols-1 gap-8 text-sm xl:text-base 2xl:text-lg leading-relaxed">
        <div className="space-y-2">
          <p className='text-paragraph'><span className="font-semibold text-primary-text">Title :</span>: International Journal Of Recent Trends In Multidisciplinary Research</p>
          <p className='text-paragraph'><span className="font-semibold text-primary-text">Frequency :</span> Bi-Monthly</p>
          <p className='text-paragraph'><span className="font-semibold text-primary-text">ISSN :</span> 2583–0368</p>
          <p className='text-paragraph'><span className="font-semibold text-primary-text">Publisher :</span> Fifth Dimension Research Publication (P) Ltd.</p>
          <p className='text-paragraph'><span className="font-semibold text-primary-text">Editor–in–Chief :</span> Dr. S. Sivaganesan (Professor & Head)</p>
          <p className='text-paragraph'><span className="font-semibold text-primary-text">Copyright :</span> Fifth Dimension Research Publication (P) Ltd.</p>
          <p className='text-paragraph'><span className="font-semibold text-primary-text">Starting Year :</span> 2021</p>
          <p className='text-paragraph'><span className="font-semibold text-primary-text">Subject :</span> Engineering</p>
          <p className='text-paragraph'><span className="font-semibold text-primary-text">DOI :</span> 10.59256/ijrtmr</p>
          <p className='text-paragraph'><span className="font-semibold text-primary-text">Language :</span> English</p>
          <p className='text-paragraph'><span className="font-semibold text-primary-text">Publication Format :</span> Online</p>
          <p className='text-paragraph'><span className="font-semibold text-primary-text">Mobile No :</span> +91 9840521421</p>
          <p className='text-paragraph'><span className="font-semibold text-primary-text">Email-ID :</span> editorinchief@ijrtmr.com</p>
          <p className='text-paragraph'><span className="font-semibold text-primary-text">Website :</span> www.ijrtmr.com</p>
        
          <p className='text-paragraph'><span className="font-semibold text-primary-text">Address :</span> Fifth Dimension Research Publication (P) Ltd. No: 38D5F, Rajaji Nagar, Ariyalur–621713. Tamilnadu, India.</p>
        </div>
      </div>
    </section>
  );
};

export default JournalParticulars;
