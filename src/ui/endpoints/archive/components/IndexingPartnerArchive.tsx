import React, { useCallback, useEffect } from 'react';
import fetchIndex from '../../../../lib/axios/api/fetch-index';
import type { Indexing } from '../../../../types/UI';
import { Link, useLocation } from 'react-router-dom';

const IndexingPartnerArchive: React.FC = () => {
  const [indexData, setIndexData] = React.useState<Indexing[]>();
  const endpoint = useLocation().pathname;
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
    <section className="bg-white text-center py-6 overflow-hidden">
      {!endpoint.includes("aim-and-scope") && !endpoint.includes("ethics") && !endpoint.includes("archives") ?
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center justify-center gap-10">
          {indexData && indexData.map((partner, idx) => (
            <Link key={idx+partner.indexing_id} target='_blank' to={partner.indexing_url}>

              <img
                key={partner.indexing_id}
                src={partner.indexing_image_url}
                alt={partner.indexing_name || "partner Image"}
                className="h-14 w-auto object-contain hover:scale-110 transition  ease-in-out"
              />
            </Link>
          ))}
        </div>
        : <div className="animate-marquee whitespace-nowrap">
          {indexData && indexData.map((partner,idx) => (
            <a key={idx} href={partner.indexing_url} target='_blank' className="inline-block mx-10">
              <img
                key={partner.indexing_id}
                src={partner.indexing_image_url}
                alt={partner.indexing_name || "partner Image"}
                className="h-14 w-auto object-contain hover:scale-110 transition ease-in-out"
              />
            </a>
          ))}
        </div>
      }
    </section>
  );
};

export default IndexingPartnerArchive;
