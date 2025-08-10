// components/ArchiveSection.tsx

import { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { fetchArchive } from "../../../../lib/axios/api/archive";
import { useAppDispatch, useAppSelector } from "../../../../lib/store/store";
import { setLoading } from "../../../../lib/store/Features/loadingSlice";
import Loading from "../../../components/Loading";
import type { ActiveIndexArchive, ArchiveIndexVolume, ThesisIndexingItem } from "../../../../types/Api";
import { setActiveIndexVolume, setArchiveIndexVolume } from "../../../../lib/store/Features/ArchiveSlice";
import { ChevronDown } from "lucide-react";
import { fetchThesis } from "../../../../lib/axios/api/thesis";
import { setActiveThesisIndex, setThesisIndexingList } from "../../../../lib/store/Features/ThesisSlice";


export default function ArchiveSection() {
  const navigate = useNavigate()
  const thesis = useLocation().pathname.includes('thesis');
  const issue = useLocation().pathname.includes('current-issue');
  // console.log(thesis)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [volume, setVolumes] = useState<ArchiveIndexVolume[]>(useAppSelector(state => state.archiveSection.indexPage));
  const [yearVolumeThesis, setYearVolumeThesis] = useState<ThesisIndexingItem[]>(useAppSelector(state => state.thesis.ThesisIndexingList));
  const dispatch = useAppDispatch()
  const loading = useAppSelector(state => state.loadingScreen.loading)

  const handelActiveIndex = useCallback((arg: ActiveIndexArchive) => {
    dispatch(setActiveIndexVolume(arg))
  }, [dispatch])
  const handelActiveThesisIndex = (arg: ThesisIndexingItem) => {
    dispatch(setActiveThesisIndex(arg))
    navigate(`/thesis/paperlist?year=${arg.year}&&volume=${arg.volume}`)
  }
  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  // fetch the archives
  useEffect(() => {

    dispatch(setLoading(true))
    if (issue && volume.length > 0) {
      // console.log(volume)
      handelActiveIndex({
        year: volume[0].year,
        volume: volume[0].volumes[0].volume,
        issue: volume[0].volumes[0].issue[0]
      })
      navigate(`/current-issue/paperlist?year=${volume[0].year}&volume=${volume[0].volumes[0].volume}&issue=${volume[0].volumes[0].issue[0]}`)
    }
    else if (thesis) {
      if (yearVolumeThesis.length === 0) {
        fetchThesis().then((data) => {
          const reversedData = [...data].reverse()
          setYearVolumeThesis(reversedData)
          dispatch(setThesisIndexingList(reversedData)) //store the list
        }).catch(err => {
          console.error(err)
        }).finally(() => dispatch(setLoading(false)))
      }
    }
    else {
      if (volume.length === 0) {
        // console.log("ruing")
        fetchArchive().then((data) => {
          const reversedData = [...data].reverse()
          setVolumes(reversedData)
          dispatch(setArchiveIndexVolume(reversedData)) //store the list
          if (issue) {
            handelActiveIndex({
              year: data[0].year,
              volume: data[0].volumes[0].volume,
              issue: data[0].volumes[0].issue[0]
            })
            navigate(`/current-issue/paperlist?year=${data[0].year}&volume=${data[0].volumes[0].volume}&issue=${data[0].volumes[0].issue[0]}`)
          }
        }).catch(err => {
          console.error(err)
        }).finally(() => dispatch(setLoading(false)))
      }
    }
    dispatch(setLoading(false))
  }, [dispatch, thesis, volume, yearVolumeThesis, issue, handelActiveIndex, navigate]);

  if (loading) {
    return <Loading title="Archive" />
  }
  return (
    <div className="mb-10 sm:text-base 2xl:text-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-collapse">
        {/* thesis */}
        {thesis && yearVolumeThesis && yearVolumeThesis.map((vol, index) => (
          <div key={index} className={`relative border ${openIndex === index ? "border-[#000099B2] text-[#000099B2] rounded-bl-none rounded-br-none " : "hover:border-[#000099B2] hover:text-[#000099B2] border-gray-400"} rounded-md`}>
            <button
              onClick={() => {
                handelActiveThesisIndex(vol)
              }}
              className="w-full flex justify-between items-center px-4 py-3 text-left focus:outline-none"
            >
              <span className="">
                Volume {vol.volume} {vol.year}
              </span>
            </button>


          </div>
        ))}
        {/* archive */}
        {!thesis && !issue && volume && volume.map((vol, index) => (
          <div key={index} className={`relative border ${openIndex === index ? "border-[#000099B2] text-[#000099B2] rounded-bl-none rounded-br-none " : "hover:border-[#000099B2] hover:text-[#000099B2] border-gray-400"} rounded-md`}>
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left focus:outline-none "
            >
              <span className="">
                Volume {vol.volumes[0].volume} {vol.year}
              </span>
              <span className="transform transition-transform duration-300" style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)' }}>
                <ChevronDown />
              </span>
            </button>
            {openIndex === index && (
              <div className="absolute w-full z-10 border shadow-lg rounded-b-2xl  bg-white overflow-hidden">
                <div className="">
                  {
                    vol.volumes.map((elem) =>
                      elem.issue.map((issue) => (
                        <Link
                          onClick={() => handelActiveIndex({
                            year: vol.year,
                            volume: elem.volume,
                            issue: issue
                          })}
                          key={`${elem.volume}-${issue}`}
                          to={`/archives/paperlist?year=${vol.year}&volume=${elem.volume}&issue=${issue}`}
                          className="block border borderPrimaryHover py-4 px-6  transition-colors"
                        >
                          <div className="flex items-center ">
                            <h1 className="text-primary-text">Volume {elem.volume} Issue {issue}</h1>
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
        {/* current issue */}
        {!thesis && issue && volume && volume.map((vol, index) => (

          (index == 0 && <div key={index} className={`relative border ${openIndex === index ? "border-[#000099B2] text-[#000099B2] rounded-bl-none rounded-br-none " : "hover:border-[#000099B2] hover:text-[#000099B2] border-gray-400"} rounded-md`}>
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left focus:outline-none"
            >
              <span className="">
                Volume {vol.volumes[0].volume} {vol.year}
              </span>
              <span className="transform transition-transform duration-300" style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)' }}>
                <ChevronDown />
              </span>
            </button>
            {openIndex === index && (
              <div className="absolute w-full z-10 border shadow-lg rounded-b-2xl  bg-white overflow-hidden">
                <div className="">
                  {
                    vol.volumes.map((elem) =>
                      elem.issue.map((issue, idx) => (
                        (idx == 0 && <Link
                          onClick={() => handelActiveIndex({
                            year: vol.year,
                            volume: elem.volume,
                            issue: issue
                          })}
                          key={`${elem.volume}-${issue}`}
                          to={`/current-issue/paperlist?year=${vol.year}&volume=${elem.volume}&issue=${issue}`}
                          className="block border border-[#FF8C421F] hover:bg-[#FF8C421F] py-4 px-6  transition-colors"
                        >
                          <div className="flex items-center ">
                            <h1 className="text-primary-text xl:text-xl 2xl:text-lg">Issue {issue}</h1>
                          </div>
                        </Link>)
                      ))
                    )
                  }
                </div>
              </div>
            )}

          </div>)

        ))}
      </div>
    </div>
  );
}
