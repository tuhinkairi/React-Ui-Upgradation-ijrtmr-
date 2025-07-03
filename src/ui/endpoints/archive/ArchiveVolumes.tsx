import { Search } from "lucide-react";
import {  useLocation, useNavigate } from "react-router-dom";
import PrimaryBtn from "../../components/Btns/PrimaryBtn";

import ArchiveVolumnHeader from "./components/ArchiveVolumnHeader";
import type { ArchivePaperDetailProps, ConferenceArticleProps } from "../../../types/Api";
import React, { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/store/store";
import { Pagination } from "../Editorial/Pagination";
import conference_categories from "../../../lib/axios/api/conference";
import { setActiveConference } from "../../../lib/store/Features/conferenceSlice";
import { getConferenceDetails } from "../../../lib/utils/conference/conferenceFunctions";
import Loading from "../../components/Loading";
import { setLoading } from "../../../lib/store/Features/loadingSlice";
import { setCurrentPage} from "../../../lib/store/Features/paginationSlice";
import { setActiveConferenceArticle } from "../../../lib/store/Features/conferenceDetailseSlice";
import type { activeSection } from "../../../types/UI";
import { type ArchivePaperListtingArg } from "../../../lib/axios/api/archive";
import { getArticalDetails } from "../../../lib/utils/conference/articalFunctions";
import VolumeCardArchive from "./VolumeCardArchive";
import { setActivePaper } from "../../../lib/store/Features/ArchiveSlice";
import VolumeCardConference from "./VolumeCardConference copy";



export default function ArchiveVolumes({ active }: activeSection) {
  const navigate = useNavigate()
  const url = useLocation().pathname;
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.loadingScreen.loading)
  const activeConferencePage = useAppSelector((state) => state.conference.active); //single card detials
  const activeArchiveIndex = useAppSelector((state) => state.archiveSection.activeIndexPage); //single card detials
  // store data
  const [ConferenceVolumes, setConferenceVolumes] = useState<ConferenceArticleProps[] | []>(useAppSelector((state) => state.conferenceArtical.articleList));
  const [ArticalVolumes, setArticalVolumes] = useState<ArchivePaperDetailProps[] | []>(useAppSelector((state) => state.archiveSection.papers));

  // listing pagination
  const trackPage = useAppSelector((state) => state.pagination.current_page)
  const totalItems = useAppSelector((state) => state.pagination.total_items)
  const totalPage = useAppSelector((state) => state.pagination.total_pages)
  const perPage = useAppSelector((state) => state.pagination.per_page)

  const [pageNumber, setPageNumber] = useState<number>(1);
  const [limit, setLimit] = useState<number>(totalPage); //how many screens to show in
  const [pageList, setPageList] = useState<number[]>([]);

  // Handle pagination logic in useEffect
  useEffect(() => {
    const pageListing = Array.from({ length: totalItems }, (_, i) => i + 1);

    if (pageNumber > 0 && pageNumber <= pageListing.length) {
      if (pageNumber > limit) {
        setPageList(pageListing.slice(pageNumber - 1, pageNumber + 4));
        setLimit(prev => prev + 5);
      } else if (pageList.length > 0 && pageNumber < pageList[0]) {
        setPageList(pageListing.slice(Math.max(0, pageNumber - 5), pageNumber));
        setLimit(prev => Math.max(5, prev - 5));
      } else if (pageList.length === 0 && totalItems > 0) {
        // Initial setup
        const initialLimit = totalPage < 5 ? totalPage : 5;
        setPageList(pageListing.slice(0, initialLimit));
      }
    }
  }, [pageNumber, totalItems, totalPage, limit, pageList]); // Removed limit and pageList from dependencies

  // setting active papers
  const setActiveArtical = (paper: ConferenceArticleProps | ArchivePaperDetailProps) => {
    if ('article_type' in paper) {
      console.log("jhghj",paper)
      dispatch(setActiveConferenceArticle(paper as ConferenceArticleProps));
    } else {
      dispatch(setActivePaper(paper as ArchivePaperDetailProps));
    }
  }
  // set volumes based on active state
  const fetchConferenceData = useCallback(async () => {
    try {
      // going through 1 by 1 condition
      if (!activeConferencePage?.id) {
        const response = await conference_categories();
        const conference = response.filter(item => item.title.localeCompare(url.split("/").slice(-1)[0]))[0];
        // console.log("runnning", conference);
        if (conference) {
          dispatch(setActiveConference(conference));
        }
      }
      else {
        const params = {
          id: activeConferencePage.id,
          page: pageNumber,
          per_page: 5,
        };
        if (ConferenceVolumes.length === 0 || trackPage !== pageNumber) {
          await getConferenceDetails(params, setConferenceVolumes, dispatch, ConferenceVolumes)
          console.log("fin")
          dispatch(setCurrentPage(pageNumber));
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, [activeConferencePage, pageNumber, dispatch, url, trackPage, ConferenceVolumes]);
  const fetchArticalData = useCallback(async () => {
    try {
      // going through 1 by 1 condition
      if (!activeArchiveIndex?.year) {
        // find by navigation
        navigate("/archives")
      }
      else {
        const params: ArchivePaperListtingArg = {
          year: parseInt(activeArchiveIndex.year),
          volume: parseInt(activeArchiveIndex.volume),
          issue: parseInt(activeArchiveIndex.issue),
          page: trackPage,
          per_page: perPage
        }
        if (ArticalVolumes.length === 0 || trackPage !== pageNumber) {
          await getArticalDetails(params, setArticalVolumes, dispatch, ArticalVolumes)
          console.log("fin")
          dispatch(setCurrentPage(pageNumber));
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, [pageNumber, dispatch, trackPage, ArticalVolumes, activeArchiveIndex, navigate, perPage]);

  // Move setup block to useEffect
  useEffect(() => {
    dispatch(setLoading(true));
    switch (active) {
      case 'archive':
        console.log("archive")
        // setConferenceVolumes([]);
        fetchArticalData().finally(() => {
          dispatch(setLoading(false));
        })
        break;
      case 'conference':
        // run only if the volume size is 0
        fetchConferenceData().finally(() => {
          dispatch(setLoading(false));
        })
        break;
      case 'issue':
        setConferenceVolumes([]);
        dispatch(setLoading(false));
        break;
      case 'thesis':
        setConferenceVolumes([]);
        dispatch(setLoading(false));
        break;
      default:
        setConferenceVolumes([]);
        dispatch(setLoading(false));
    }
  }, [active, fetchConferenceData, dispatch, perPage, trackPage, fetchArticalData, ArticalVolumes, activeArchiveIndex, navigate]);

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
        {active == "conference" && <h1 className="text-2xl font-semibold">Volume {activeConferencePage?.volume}, Issue {activeConferencePage?.issue} ({activeConferencePage?.year})</h1>}
        {active == "archive" && <h1 className="text-2xl font-semibold">Volume {activeArchiveIndex?.volume}, Issue {activeArchiveIndex?.issue} ({4})</h1>}
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
      {(trackPage === pageNumber || !loading) ? <div className="space-y-6">
        <>
          {/* conference */}
          {active === "conference" && ConferenceVolumes.length != 0 && ConferenceVolumes.map((paper, idx) => (
            <VolumeCardConference paper={paper} key={idx} setActive={setActiveArtical} section={active} />
          ))}
          {active === "archive" && ArticalVolumes.length != 0 && ArticalVolumes.map((paper, idx) => (
            <VolumeCardArchive paper={paper} key={idx} setActive={setActiveArtical} navigate={navigate} />
          ))}
        </>
      </div> :
        <Loading title="Volume Pages" />
      }
      <div className="mt-16">
        <Pagination currentPage={pageNumber} rangeList={pageList} totalPages={totalPage} onPageChange={setPageNumber} />
      </div>
    </div>
  );
}
//todo: make pagination working and next detials showing page