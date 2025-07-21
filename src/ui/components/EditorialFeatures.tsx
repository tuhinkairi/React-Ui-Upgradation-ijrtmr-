import React from 'react';

const features = [
  { icon: <img loading='lazy' 
src="/editorial/1.webp" width={50} height={50} alt="editorial-1" />, title: 'Exclusive Author Account for Each Journal' },
  { icon: <img loading='lazy' 
src="/editorial/2.webp" width={50} height={50} alt="editorial-2" />, title: 'Streamlined Article Status Updates' },
  { icon: <img loading='lazy' 
src="/editorial/3.webp" width={50} height={50} alt="editorial-3" />, title: 'Efficient Review Status and Peer Review Reports' },
  { icon: <img loading='lazy' 
src="/editorial/4.webp" width={50} height={50} alt="editorial-4" />, title: 'Comprehensive FAQs and Knowledgebase' },
  { icon: <img loading='lazy' 
src="/editorial/5.webp" width={50} height={50} alt="editorial-5" />, title: 'Task Status Monitoring' },
  { icon: <img loading='lazy' 
src="/editorial/6.webp" width={50} height={50} alt="editorial-6" />, title: 'Automated Acceptance Letters' },
  { icon: <img loading='lazy' 
src="/editorial/7.webp" width={50} height={50} alt="editorial-7" />, title: 'Simplified Copyright Forms' },
  { icon: <img loading='lazy' 
src="/editorial/8.webp" width={50} height={50} alt="editorial-8" />, title: 'Convenient Certificate and Published Article Downloads' },
];

const EditorialFeatures: React.FC = () => {
  return (
    <section className="py-12 pt-8  px-6 lg:px-16 bg-[#f9f9f9] ">
      <h2 className="mb-8 text-2xl md:text-3xl font-semibold ">
        Enhanced Features of an Editorial Management System<br />
        <span >(Online submission)</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-md shadow-sm border border-[#e0e0e0] grid grid-rows-2 items-center transition hover:shadow-md cursor-pointer gap-2"
          >
            {feature.icon}
            <p className="mt-4 text-primary-text h-full">{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EditorialFeatures;
