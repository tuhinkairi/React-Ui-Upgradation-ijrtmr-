import { Search } from "lucide-react";
import { redirect, useLocation, useNavigate } from "react-router-dom";
import PrimaryBtn from "../../components/Btns/PrimaryBtn";

import ArchiveVolumnHeader from "./components/ArchiveVolumnHeader";
import type { ArchivePaperDetailProps, SearchProp, ConferenceArticleProps, ActiveIndexArchive } from "../../../types/Api";
import React, { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/store/store";
import { Pagination } from "../Editorial/Pagination";
import conference_categories, { searchConference } from "../../../lib/axios/api/conference";
import { setActiveConference } from "../../../lib/store/Features/conferenceSlice";
import { getConferenceDetails } from "../../../lib/utils/conference/conferenceFunctions";
import Loading from "../../components/Loading";
import { setLoading } from "../../../lib/store/Features/loadingSlice";
import { setCurrentPage } from "../../../lib/store/Features/paginationSlice";
import { setActiveConferenceArticle } from "../../../lib/store/Features/conferenceDetailseSlice";
import type { activeSection } from "../../../types/UI";
import { searchArchive, type ArchivePaperListtingArg } from "../../../lib/axios/api/archive";
import { getArticalDetails } from "../../../lib/utils/conference/articalFunctions";
import VolumeCardArchive from "./VolumeCardArchive";
import { setActiveIndexVolume, setActivePaper } from "../../../lib/store/Features/ArchiveSlice";
import VolumeCardConference from "./VolumeCardConference";
import Title from "../../other/Title";
import { GrClear } from "react-icons/gr";



export default function ArchiveVolumes({ active }: activeSection) {
  const navigate = useNavigate()
  const url = useLocation().pathname;
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.loadingScreen.loading)
  const activeConferencePage = useAppSelector((state) => state.conference.active); //single card detials
  const ArchiveIndex = useAppSelector((state) => state.archiveSection.activeIndexPage); //single card detials
  const [activeArchiveIndex, setActiveArchiveIndex] = useState<ActiveIndexArchive | null>(ArchiveIndex); //single card detials
  // state 
  const { activeIndexPage, indexPage } = useAppSelector((state) => state.archiveSection)

  // store data
  const ConferenceData = useAppSelector((state) => state.conferenceArtical.articleList)
  const ArchiveData = useAppSelector((state) => state.archiveSection.papers)
  const [ConferenceVolumes, setConferenceVolumes] = useState<ConferenceArticleProps[] | []>(ConferenceData);
  const [ArticalVolumes, setArticalVolumes] = useState<ArchivePaperDetailProps[] | []>(ArchiveData);

  const [ConferenceVolumesSearch, setConferenceVolumesSearch] = useState<ConferenceArticleProps[] | null>(null);
  const [ArticalVolumesSearch, setArticalVolumesSearch] = useState<ArchivePaperDetailProps[] | null>(null);

  // listing pagination
  // const trackPage = useAppSelector((state) => state.pagination.current_page)
  // const totalItems = useAppSelector((state) => state.pagination.total_items)
  const totalPage = useAppSelector((state) => state.pagination.total_pages)
  const perPage = useAppSelector((state) => state.pagination.per_page)

  const [pageNumber, setPageNumber] = useState<number>(1);
  const [trackPage, setTrackPage] = useState<number>(1);
  const getVisiblePages = () => {
    const maxVisible = 5;
    if (totalPage <= maxVisible) {
      return Array.from({ length: totalPage }, (_, i) => i + 1);
    }

    const halfVisible = Math.floor(maxVisible / 2);
    let startPage = Math.max(1, pageNumber - halfVisible);
    let endPage = Math.min(totalPage, pageNumber + halfVisible);

    if (endPage - startPage + 1 < maxVisible) {
      if (startPage === 1) {
        endPage = Math.min(totalPage, startPage + maxVisible - 1);
      } else if (endPage === totalPage) {
        startPage = Math.max(1, endPage - maxVisible + 1);
      }
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };





  // setting active papers
  const setActiveArtical = (paper: ConferenceArticleProps | ArchivePaperDetailProps) => {
    if ('article_type' in paper) {
      console.log("jhghj", paper)
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
        if (ArticalVolumes.length === 0 || trackPage !== pageNumber || activeArchiveIndex?.year === ArchiveIndex?.year || activeArchiveIndex?.volume === ArchiveIndex?.volume || activeArchiveIndex?.issue === ArchiveIndex?.issue) {
          await getArticalDetails(params, setArticalVolumes, dispatch, ArticalVolumes)
          console.log("fin")
          setTrackPage(pageNumber);
          dispatch(setCurrentPage(pageNumber));
          dispatch(setActiveIndexVolume(activeArchiveIndex));
          console.log("condition", trackPage, pageNumber)
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, [pageNumber, dispatch, trackPage, ArticalVolumes, activeArchiveIndex, navigate, perPage, ArchiveIndex]);

  // Move setup block to useEffect
  useEffect(() => {
    dispatch(setLoading(true));
    switch (active) {
      case 'archive':
        console.log("archive")
        // setConferenceVolumes([]);

        if (ArticalVolumes.length && activeArchiveIndex && ArchiveIndex && activeArchiveIndex?.year === ArchiveIndex?.year && activeArchiveIndex?.volume === ArchiveIndex?.volume && activeArchiveIndex?.issue === ArchiveIndex?.issue) {
          console.log(activeArchiveIndex, ArchiveIndex, "running");
          dispatch(setLoading(false));
        } else {
          if (!activeArchiveIndex) redirect("/archives")
          console.log("fetching")
          fetchArticalData().finally(() => {
            dispatch(setLoading(false));
          })
        }
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
  }, [active, fetchConferenceData, dispatch, perPage, trackPage, fetchArticalData, ArticalVolumes, activeArchiveIndex, navigate, pageNumber, activeArchiveIndex?.year, activeArchiveIndex?.volume, activeArchiveIndex?.issue, ArchiveIndex]);

  // search
  const [form, setForm] = useState<SearchProp>({ search: "", page: pageNumber, per_page: 100 })
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.search === "") return
    // Implement your search logic here
    dispatch(setLoading(true))
    console.log(form)
    switch (active) {
      case "archive":
        searchArchive(form).then((data) => {
          const tempo = data ? data : []
          setArticalVolumesSearch(tempo)
        }).finally(() => dispatch(setLoading(false)))
        setForm({ ...form, search: "" })
        break
      case "conference":
        searchConference(form).then((data) => {
          const tempo = data ? data : []
          setConferenceVolumesSearch(tempo)
        }).finally(() => dispatch(setLoading(false)))
        setForm({ ...form, search: "" })
        break
      case "thesis":
        searchConference(form)
        break
      case "issue":
        searchConference(form)
        break
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // component return
  if (useAppSelector((state) => state.loadingScreen.loading)) return <Loading title="Volumes" />

  return (
    <div className="mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="text-center">
        {active == "conference" && <h1 className="text-2xl font-semibold">Volume {activeConferencePage?.volume}, Issue {activeConferencePage?.issue} ({activeConferencePage?.year})</h1>}
        {active == "archive" && <h1 className="text-2xl font-semibold">Volume {activeArchiveIndex?.volume}, Issue {activeArchiveIndex?.issue} ({activeArchiveIndex?.year})</h1>}
      </div>

      {!["conference", "issue"].includes(active) && <ArchiveVolumnHeader setArchiveIndex={setActiveArchiveIndex} ActiveVolumes={activeIndexPage} VolumeList={indexPage}/>}

      {/* Search */}
      <form onSubmitCapture={handleSearch} className="flex items-center gap-2 mt-2">
        <input
          type="text"
          name="search"
          onChange={handleChange}
          value={form.search}
          placeholder="Search by Paper ID, Paper Name"
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
        />
        {(active === "conference") && (
          ConferenceVolumesSearch ? (
            <PrimaryBtn event={() => {
              setConferenceVolumesSearch(null)
              console.log(ConferenceVolumesSearch)
            }}>
              <GrClear size={16} /> Clear
            </PrimaryBtn>
          ) : (
            <PrimaryBtn>
              <Search size={16} /> Search
            </PrimaryBtn>
          )
        )}
        {(active === "archive") && (
          ArticalVolumesSearch ? (
            <PrimaryBtn event={() => setArticalVolumesSearch(null)}>
              <GrClear size={16} /> Clear
            </PrimaryBtn>
          ) : (
            <PrimaryBtn>
              <Search size={16} /> Search
            </PrimaryBtn>
          )
        )}

      </form>

      {/* Paper Cards */}
      {(trackPage === pageNumber || !loading) ? <div className="space-y-6">
        <>
          {/* conference */}

          {active === "archive" && (
            ArticalVolumesSearch !== null
              ? ArticalVolumesSearch?.length
                ? ArticalVolumesSearch.map((paper, idx) => (
                  <VolumeCardArchive paper={paper} key={idx} setActive={setActiveArtical} navigate={navigate} />
                ))
                : <Title>No Paper Found</Title>
              : ArticalVolumes?.length
                ? ArticalVolumes.map((paper, idx) => (
                  <VolumeCardArchive paper={paper} key={idx} setActive={setActiveArtical} navigate={navigate} />
                ))
                : <Title>No Paper Found</Title>
          )}
          {active === "conference" && (
            ConferenceVolumesSearch !== null
              ? ConferenceVolumesSearch?.length
                ? ConferenceVolumesSearch.map((paper, idx) => (
                  <VolumeCardConference paper={paper} key={idx} setActive={setActiveArtical} navigate={navigate} />
                ))
                : <Title>No Paper Found</Title>
              : ConferenceVolumes?.length
                ? ConferenceVolumes.map((paper, idx) => (
                  <VolumeCardConference paper={paper} key={idx} setActive={setActiveArtical} navigate={navigate} />
                ))
                : <Title>No Paper Found</Title>
          )}
        </>
      </div> :
        <Loading title="Volume Pages" />
      }
      {active == "conference" && ConferenceVolumesSearch === null && <div className="mt-16">
        <Pagination
          currentPage={pageNumber}
          totalPages={totalPage}
          onPageChange={setPageNumber}
          rangeList={getVisiblePages()}
        />
      </div>}
      {active === "archive" && ArticalVolumesSearch === null && <div className="mt-16">
        <Pagination
          currentPage={pageNumber}
          totalPages={totalPage}
          onPageChange={setPageNumber}
          rangeList={getVisiblePages()}
        />
      </div>}
    </div>
  );
}
//todo: make pagination working and next detials showing page