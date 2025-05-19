import React from 'react';

const features = [
  { icon: <img src="/editorial/1.png" width={50} height={50} alt="editorial-1" />, title: 'Exclusive Author Account for Each Journal' },
  { icon: <img src="/editorial/2.png" width={50} height={50} alt="editorial-2" />, title: 'Streamlined Article Status Updates' },
  { icon: <img src="/editorial/3.png" width={50} height={50} alt="editorial-3" />, title: 'Efficient Review Status and Peer Review Reports' },
  { icon: <img src="/editorial/4.png" width={50} height={50} alt="editorial-4" />, title: 'Comprehensive FAQs and Knowledgebase' },
  { icon: <img src="/editorial/5.png" width={50} height={50} alt="editorial-5" />, title: 'Task Status Monitoring' },
  { icon: <img src="/editorial/6.png" width={50} height={50} alt="editorial-6" />, title: 'Automated Acceptance Letters' },
  { icon: <img src="/editorial/7.png" width={50} height={50} alt="editorial-7" />, title: 'Simplified Copyright Forms' },
  { icon: <img src="/editorial/8.png" width={50} height={50} alt="editorial-8" />, title: 'Convenient Certificate and Published Article Downloads' },
];

const EditorialFeatures: React.FC = () => {
  return (
    <section className="py-12 pt-8  px-6 lg:px-24 bg-[#f9f9f9] ">
      <h2 className="mb-8 text-2xl md:text-3xl font-bold ">
        Enhanced Features of an Editorial Management System<br />
        <span >(Online submission)</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
