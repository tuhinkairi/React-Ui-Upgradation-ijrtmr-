import { Search } from "lucide-react";
import { useLocation } from "react-router-dom";
import PrimaryBtn from "../../components/Btns/PrimaryBtn";

import ArchiveVolumnHeader from "./components/ArchiveVolumnHeader";
import type { ConferenceArticleProps } from "../../../types/Api";
import React, { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/store/store";
import { Pagination } from "../Editorial/Pagination";
import conference_categories from "../../../lib/axios/api/conference";
import { setActiveConference } from "../../../lib/store/Features/conferenceSlice";
import { getConferenceDetails } from "../../../lib/utils/conference/conferenceFunctions";
import Loading from "../../components/Loading";
import { setLoading } from "../../../lib/store/Features/loadingSlice";
import VolumeCard from "./VolumeCard";
import { setCurrentPage } from "../../../lib/store/Features/paginationSlice";
import { setActiveConferenceArticle } from "../../../lib/store/Features/conferenceDetailseSlice";
import type { activeSection } from "../../../types/UI";


export default function ArchiveVolumes({ active }: activeSection) {
  const url = useLocation().pathname;
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.loadingScreen.loading)
  const activeConferencePage = useAppSelector((state) => state.conference.active);
  const conferenceDetailsList = useAppSelector((state) => state.conferenceArtical.articleList);
  const [volumes, setVolumes] = useState<ConferenceArticleProps[]>(conferenceDetailsList);


  // listing pagination
  const trackPage = useAppSelector((state) => state.pagination.current_page)
  const totalItems = useAppSelector((state) => state.pagination.total_items)
  const totalPage = useAppSelector((state) => state.pagination.total_pages)

  const [pageNumber, setPageNumber] = useState<number>(1);
  const [limit, setLimit] = useState<number>(totalPage < 5 ? totalPage : 5); //for showing number of box in pagination
  const pageListing = Array.from({ length: totalItems }, (_, i) => i + 1);
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

  // setting active papers
  const setActiveArtical = (paper: ConferenceArticleProps) => {
    dispatch(setActiveConferenceArticle(paper));
  }

  // set volumes based on active state
  const fetchData = useCallback(async () => {
    try {
      if (!activeConferencePage?.id) {
        const response = await conference_categories();
        const conference = response.filter(item => item.title.localeCompare(url.split("/").slice(-1)[0]))[0];
        // console.log("runnning", conference);
        if (conference) {
          dispatch(setActiveConference(conference));
        }
      } else {
        const params = {
          id: activeConferencePage.id,
          page: pageNumber,
          per_page: 5,
        };

        switch (active) {
          case 'archive':
            setVolumes([]);
            break;
          case 'conference':
            // run only if the volumn size is 0
            if (conferenceDetailsList.length === 0 || trackPage !== pageNumber) {
              await getConferenceDetails(params, setVolumes, dispatch, volumes)
              console.log("fin")
              dispatch(setCurrentPage(pageNumber));
            }
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

  }, [active, activeConferencePage, pageNumber, dispatch, url, trackPage, conferenceDetailsList, volumes]);

  useEffect(() => {
    dispatch(setLoading(true));
    fetchData().finally(() => {
      dispatch(setLoading(false));
    })
  }, [fetchData, dispatch]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your search logic here
  }

  // component return
  if (useAppSelector((state) => state.loadingScreen.loading)) return <Loading title="Volumes" />

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
      {(trackPage === pageNumber || !loading) ?<div className="space-y-6">
        {volumes.length != 0 && volumes.map((paper, idx) => (
          <VolumeCard paper={paper} key={idx} setActive={setActiveArtical} section={active} />
        ))}
      </div>:
      <Loading title="Volume Pages"/>
      }
      <div className="mt-16">
        <Pagination currentPage={pageNumber} rangeList={pageList} totalPages={totalPage} onPageChange={setPageNumber} />
      </div>
    </div>
  );
}
//todo: make pagination working and next detials showing page