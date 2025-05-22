import React, { useCallback, useEffect } from 'react';
import fetchIndex from '../../lib/axios/api/fetch-index';
import type { Indexing } from '../../types/UI';

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
  console.log(indexData);
  return (
    <section className="py-12 pt-8 px-6 lg:px-24 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold  mb-16">Indexing And Abstracting</h2>
      <div className="flex flex-wrap items-center justify-center gap-10 max-w-6xl mx-auto">
        {indexData && indexData.map((partner) => (
          <a href={partner.indexing_url}>

            <img
              key={partner.indexing_id}
              src={partner.indexing_image_url}
              alt={partner.indexing_name}
              className="h-14 w-auto object-contain hover:scale-110 transition  ease-in-out"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default IndexingPartners;
