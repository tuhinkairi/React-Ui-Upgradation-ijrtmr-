import React, { useCallback, useEffect } from 'react';
import fetchIndex from '../../../../lib/axios/api/fetch-index';
import type { Indexing } from '../../../../types/UI';

const IndexingPartnerArchive: React.FC = () => {
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
    <section className="bg-white text-center mt-6">
      <div className="grid grid-cols-5 items-center justify-center gap-10">
        {indexData && indexData.map((partner) => (
          <a href={partner.indexing_url}>

            <img
              key={partner.indexing_id}
              src={partner.indexing_image_url}
              alt={partner.indexing_name || "partner Image"}
              className="h-14 w-auto object-contain hover:scale-110 transition  ease-in-out"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default IndexingPartnerArchive;
