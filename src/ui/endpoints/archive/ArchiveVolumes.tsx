import { Search, Eye, Download, SearchIcon } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import PrimaryBtn from "../../components/Btns/PrimaryBtn";
import { ImQuotesRight } from "react-icons/im";
import { PiChartPieSlice } from "react-icons/pi";
import ArchiveVolumnHeader from "./components/ArchiveVolumnHeader";
import type { ConferenceArticleProps } from "../../../types/Api";
import React, { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/store/store";
import { Pagination } from "../Editorial/Pagination";
import conference_categories from "../../../lib/axios/api/conference";
import { setActiveConference } from "../../../lib/store/Features/conferenceSlice";
import { getConferenceDetails } from "../../../lib/utils/conference/conferenceFunctions";
import Loading from "../../components/Loading";

export default function ArchiveVolumes({ active }: { active: "archive" | "conference" | "issue" | "thesis" }) {
  const [loading, setLoading] = useState(true);
  const url = useLocation().pathname;
  const dispatch = useAppDispatch();
  const activeConferencePage = useAppSelector((state) => state.conference.active);
  const conferenceDetailsList = useAppSelector((state) => state.conferenceArtical.articleList);
  const [volumes, setVolumes] = useState<ConferenceArticleProps[]>(conferenceDetailsList);
  

  // listing pagination
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5);
  const pageListing = Array.from({ length: 15 }, (_, i) => i + 1);
  const [pageList, setPageList] = useState<number[]>(pageListing.slice(0, limit));
  if (pageNumber > 0 && pageNumber <= pageListing.length) {
    if (pageNumber > limit) {
      setPageList(pageListing.slice(pageNumber - 1, pageNumber + 4))
      setLimit(limit + 5);
    }
    if (pageNumber < pageList[0]) {
      setPageList(pageListing.slice(pageNumber - 5, pageNumber))
      setLimit(limit - 5);
    }
  }
  // listing pagination
  

  // set volumes based on active state
  const fetchData = useCallback( async () => {
      try {
        if (!activeConferencePage?.id) {
          const response = await conference_categories();
          const conference = response.filter(item => item.title.localeCompare(url.split("/").slice(-1)[0]))[0];
          console.log("runnning", conference);
          if (conference) {
            dispatch(setActiveConference(conference));
          }
        } else {
          const params = {
            id: activeConferencePage.id,
            page: pageNumber,
            per_page: 5
          };

          switch (active) {
            case 'archive':
              setVolumes([]);
              break;
            case 'conference':
              // run only if the volumn size is 0
              if(volumes.length === 0) getConferenceDetails(params, setVolumes, dispatch)
              break;
            case 'issue':
              setVolumes([]);
              break;
            case 'thesis':
              setVolumes([]);
              break;
            default:
              setVolumes([]);
          }
        }
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    },[active, activeConferencePage, pageNumber, dispatch, url,volumes]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your search logic here
  }

  // component return
  if(loading)return <Loading title="Volumes"/>

  return (
    <div className="mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Volume {activeConferencePage?.volume}, Issue {activeConferencePage?.issue} ({activeConferencePage?.year})</h1>
      </div>

      {!["conference", "issue"].includes(active) && <ArchiveVolumnHeader />}

      {/* Search */}
      <form onSubmit={handleSearch} className="flex items-center gap-2 mt-2">
        <input
          type="text"
          placeholder="Search by Paper ID, Paper Name"
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
        />
        <PrimaryBtn >
          <Search size={16} /> Search
        </PrimaryBtn>
      </form>

      {/* Paper Cards */}
      <div className="space-y-6">
        {volumes.length != 0 && volumes.map((paper, idx) => (
          <div
            key={idx}
            className="bg-white shadow rounded-xl p-4 space-y-2 border"
          >
            <div className="flex justify-between items-start">
              <Link
                to="/archives/artical-details"
                className="text-xl font-serif  text-primary hover:underline max-w-5/6"
              >
                {paper.title} <span className="text-orange-400">↗</span>
              </Link>
              <button className="text-base inline-flex items-center justify-center gap-2 text-primary border border-orange-400 px-3 py-1" style={{ borderRadius: 9999 }}>
                <SearchIcon className="w-5" /> Google
              </button>
            </div>

            <div className=" text-primary-text text-base leading-8">
              Author: {paper.author_1}
              <br />
              Published Online: {paper.created_at.split("T")[0]}
              <br />
              Pages: {paper.pages}
            </div>

            {/* Metrics */}
            <div className="flex items-center gap-6  text-gray-500 mt-1">
              <div className="flex items-center gap-3">
                <Eye size={18} /> {256} Views
              </div>
              <div className="h-4" />
              <div className="flex items-center gap-3">
                <ImQuotesRight size={18} /> 0 CrossRef Citations
              </div>
              <div className="h-4" />
              <div className="flex items-center gap-3">
                <PiChartPieSlice size={18} /> 0 Altmetric
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 text-sm text-primary font-medium">
                <button className="hover:underline">Abstract</button>
                <button className="hover:underline">Full Text</button>
                <button className="hover:underline">References</button>
              </div>
              <NavLink to={paper.pdf_url}>
                <PrimaryBtn>
                  View PDF <Download size={16} />
                </PrimaryBtn>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16">
        <Pagination currentPage={pageNumber} rangeList={pageList} totalPages={pageListing.length} onPageChange={setPageNumber} />
      </div>
    </div>
  );
}