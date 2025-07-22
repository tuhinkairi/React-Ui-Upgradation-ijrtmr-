import React, { useCallback, useEffect } from 'react';
import fetchIndex from '../../lib/axios/api/fetch-index';
import type { Indexing } from '../../types/UI';
import { Link } from 'react-router-dom';
import Title2h2 from '../other/Title2h2';

const IndexingPartners: React.FC = () => {
  const [indexData, setIndexData] = React.useState<Indexing[]>();

  const fetchIndexData = useCallback(async (): Promise<object> => {
    return await fetchIndex()
  }, [])

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchIndexData();
      setIndexData(data as Indexing[]);
    };
    loadData();
  }, [fetchIndexData]);
  //console.log(indexData);
  return (
    <section className="py-12 pt-8 px-6 lg:px-16 bg-white text-center">
      {/* <h2 className="text-2xl md:text-3xl font-semibold  mb-16">Indexing And Abstracting</h2> */}
      <Title2h2 className='mb-16'>Indexing And Abstracting</Title2h2>
      <div className="overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          {indexData && indexData.map((partner, idx) => (
            <Link key={partner.indexing_id+idx} target='_blank' to={partner.indexing_url} className="inline-block mx-10">
              <img
                key={partner.indexing_id}
                src={partner.indexing_image_url}
                alt={partner.indexing_name}
                className="h-16 w-auto object-contain hover:scale-110 transition ease-in-out"
              />
            </Link>
          ))}
          {indexData && indexData.map((partner,idx) => (
            <Link key={idx+partner.indexing_id} target='_blank' to={partner.indexing_url} className="inline-block mx-10">
              <img
                key={`${partner.indexing_id}-clone`}
                src={partner.indexing_image_url}
                alt={partner.indexing_name}
                className="h-16 w-auto object-contain hover:scale-110 transition ease-in-out"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndexingPartners;
