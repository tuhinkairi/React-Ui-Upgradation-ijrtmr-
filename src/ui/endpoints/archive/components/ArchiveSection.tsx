// components/ArchiveSection.tsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchArchive } from "../../../../lib/axios/api/archive";
import { useAppDispatch, useAppSelector } from "../../../../lib/store/store";
import { setLoading } from "../../../../lib/store/Features/loadingSlice";
import Loading from "../../../components/Loading";
import type { ActiveIndexArchive, ArchiveIndexVolume } from "../../../../types/Api";
import { setActiveIndexVolume, setArchiveIndexVolume } from "../../../../lib/store/Features/ArchiveSlice";


export default function ArchiveSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [volume, setVolumes] = useState<ArchiveIndexVolume[]>(useAppSelector(state => state.archiveSection.indexPage));
  const dispatch = useAppDispatch()
  const loading = useAppSelector(state => state.loadingScreen.loading)



  // fetch the archives
  useEffect(() => {
    if (volume.length === 0) {
      dispatch(setLoading(true))
      fetchArchive().then((data) => {
        setVolumes(data)
        dispatch(setArchiveIndexVolume(data)) //store the list
      }).catch(err => {
        console.log(err)
      }).finally(() => dispatch(setLoading(false))
      )
    }
  }, [dispatch, volume])

  const handelActiveIndex=(arg:ActiveIndexArchive)=>{

    dispatch(setActiveIndexVolume(arg))
  }
  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  if (loading) {
    return <Loading title="Archive" />
  }
  return (
    <div className="mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {volume && volume.map((vol, index) => (
          <div key={index} className="relative border rounded-md">
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left focus:outline-none"
            >
              <span>
                {vol.year}
              </span>
              <span className="transform transition-transform duration-300" style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)' }}>
                ▼
              </span>
            </button>
            {openIndex === index && (
              <div className="absolute w-full z-10 border-t shadow-lg rounded-2xl border-2 bg-peach-100 mt-2">
                <div className="p-4 space-y-2">
                  {
                    vol.volumes.map((elem) =>
                      elem.issue.map((issue) => (
                        <Link
                          onClick={()=>handelActiveIndex({
                            year: vol.year,
                            volume: elem.volume,
                            issue: issue
                          })}
                          key={`${elem.volume}-${issue}`}
                          to={`/archives/year-${vol.year}-volume-${elem.volume}-issue-${issue}`}
                          className="block hover:bg-peach-200 px-3 py-2 rounded-md transition-colors"
                        >
                          <div className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Volume {elem.volume} Issue {issue}
                          </div>
                        </Link>
                      ))
                    )
                  }
                </div>
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}
