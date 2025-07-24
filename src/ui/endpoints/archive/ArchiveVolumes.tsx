import { Search } from "lucide-react";
import { redirect, useLocation, useNavigate } from "react-router-dom";
import PrimaryBtn from "../../components/Btns/PrimaryBtn";

import ArchiveVolumnHeader from "./components/ArchiveVolumnHeader";
import type { ArchivePaperDetailProps, SearchProp, ConferenceArticleProps, ActiveIndexArchive, ThesisListingItem, ThesisIndexingItem } from "../../../types/Api";
import React, { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/store/store";
import { Pagination } from "../Editorial/Pagination";
import conference_categories, { searchConference } from "../../../lib/axios/api/conference";
import { setActiveConference } from "../../../lib/store/Features/conferenceSlice";
import { getConferenceDetails } from "../../../lib/utils/conference/conferenceFunctions";
import Loading from "../../components/Loading";
import { setCurrentPage } from "../../../lib/store/Features/paginationSlice";
import { setActiveConferenceArticle } from "../../../lib/store/Features/conferenceDetailseSlice";
import type { activeSection } from "../../../types/UI";
import { searchArchive, type ArchivePaperListtingArg } from "../../../lib/axios/api/archive";
import { getArticalDetails } from "../../../lib/utils/conference/articalFunctions";
import VolumeCardArchive from "./VolumeCardArchive";
import { setActiveIndexVolume, setActivePaper } from "../../../lib/store/Features/ArchiveSlice";
import VolumeCardConference from "./VolumeCardConference";
import { GrClear } from "react-icons/gr";
import { setActiveThesis, setThesisList } from "../../../lib/store/Features/ThesisSlice";
import { searchThesis, ThesisListing, type ThesisListingParams } from "../../../lib/axios/api/thesis";
import VolumeCardThesis from "../Thesis/VolumeCardThesis";
import MetaDataWrapper from "../../components/layout/MetaDataWrapper";
import Titleh2 from "../../other/Titleh2";
// Import thesis-related functions




export default function ArchiveVolumes({ active }: activeSection) {
  const navigate = useNavigate()
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const url = useLocation().pathname;
  const dispatch = useAppDispatch();
  // const loading = useAppSelector((state) => state.loadingScreen.loading)
  const activeConferencePage = useAppSelector((state) => state.conference.active); //single card detials
  const ArchiveIndex = useAppSelector((state) => state.archiveSection.activeIndexPage); //single card detials
  const [activeArchiveIndex, setActiveArchiveIndex] = useState<ActiveIndexArchive | null>(ArchiveIndex); //single card detials

  // Thesis state management
  const ThesisIndex = useAppSelector((state) => state.thesis.ActiveThesisIndex);
  const ThesisData = useAppSelector((state) => state.thesis.thesisList);
  const thesisIndexPage = useAppSelector((state) => state.thesis.ThesisIndexingList);
  const [activeThesisIndex, setActiveThesisIndex] = useState<ThesisIndexingItem | null>(ThesisIndex);
  const [ThesisVolumes, setThesisVolumes] = useState<ThesisListingItem[]>(ThesisData);
  const [ThesisVolumesSearch, setThesisVolumesSearch] = useState<ThesisListingItem[] | null>(null);

  // state 
  const { activeIndexPage, indexPage } = useAppSelector((state) => state.archiveSection)

  // store data
  const ConferenceData = useAppSelector((state) => state.conferenceArtical.articleList)
  const ArchiveData = useAppSelector((state) => state.archiveSection.papers)
  const [ConferenceVolumes, setConferenceVolumes] = useState<ConferenceArticleProps[] | []>(ConferenceData);
  const [ArticalVolumes, setArticalVolumes] = useState<ArchivePaperDetailProps[] | []>(ArchiveData);

  const [ConferenceVolumesSearch, setConferenceVolumesSearch] = useState<ConferenceArticleProps[] | null>(null);
  const [ArticalVolumesSearch, setArticalVolumesSearch] = useState<ArchivePaperDetailProps[] | null>(null);

  // meta data
  const [metaData, SetMetaData] = useState<{ title: string, description: string }>({ title: "", description: "" })

  // listing pagination
  const totalPage = useAppSelector((state) => state.pagination.total_pages)
  const perPage = useAppSelector((state) => state.pagination.per_page)

  const [pageNumber, setPageNumber] = useState<number>(1);
  const [trackPage, setTrackPage] = useState<number>(1);

  // Reset trackPage and pageNumber when switching sections
  useEffect(() => {
    setTrackPage(1);
    setPageNumber(1);
  }, [active]);

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

  // Simplified pagination condition check
  const shouldShowPagination = (sectionType: string) => {
    switch (sectionType) {
      case 'conference':
        return ConferenceVolumesSearch === null && totalPage > 1;
      case 'archive':
      case 'issue':
        return ArticalVolumesSearch === null && totalPage > 1;
      case 'thesis':
        return ThesisVolumesSearch === null && totalPage > 1;
      default:
        return false;
    }
  };

  // setting active papers
  const setActiveArtical = (paper: ConferenceArticleProps | ArchivePaperDetailProps | ThesisListingItem) => {
    if ('article_type' in paper) {
      //console.log("jhghj", paper)
      dispatch(setActiveConferenceArticle(paper as ConferenceArticleProps));
    } else if ('thesis_id' in paper) {
      dispatch(setActiveThesis(paper as ThesisListingItem));
    } else {
      dispatch(setActivePaper(paper as ArchivePaperDetailProps));
    }
  }

  // Thesis data fetching function
  const fetchThesisData = useCallback(async () => {
    try {
      if (!activeThesisIndex?.year || !activeThesisIndex?.volume) {
        navigate("/thesis");
      } else {

        if (ThesisVolumes.length === 0 || trackPage !== pageNumber ||
          activeThesisIndex?.year === ThesisIndex?.year ||
          activeThesisIndex?.volume === ThesisIndex?.volume) {
          const params: ThesisListingParams = {
            thesis_year: parseInt(activeThesisIndex.year),
            thesis_volume: parseInt(activeThesisIndex.volume),
            page: pageNumber,
            per_page: perPage
          };
          const response = await ThesisListing(params);
          //console.log("data ->", response.papersList)
          if (response.papersList) {
            setThesisVolumes(response.papersList);
            dispatch(setThesisList(response.papersList));

            // Update trackPage AFTER successful fetch
            setTrackPage(pageNumber);
            dispatch(setCurrentPage(pageNumber));
          }
          //console.log("Thesis data fetched");
        }
      }
    } catch (err) {
      console.error("Error fetching thesis data:", err);
      // Don't update trackPage on error to allow retry
    }
  }, [activeThesisIndex, pageNumber, dispatch, trackPage, ThesisVolumes, navigate, perPage, ThesisIndex]);

  // set volumes based on active state - FIXED VERSION
  const fetchConferenceData = useCallback(async () => {
    try {
      // going through 1 by 1 condition
      if (!activeConferencePage?.id) {
        const response = await conference_categories();
        const conference = response.filter(item => item.title.localeCompare(url.split("/").slice(-1)[0]))[0];
        // //console.log("runnning", conference);
        if (conference) {
          dispatch(setActiveConference(conference));
        }
      }
      else {
        if (ConferenceVolumes.length === 0 || trackPage !== pageNumber) {
          const params = {
            id: activeConferencePage.id,
            page: pageNumber,
            per_page: 5,
          };
          await getConferenceDetails(params, setConferenceVolumes, dispatch, ConferenceVolumes)

          // Update trackPage AFTER successful fetch
          setTrackPage(pageNumber);
          dispatch(setCurrentPage(pageNumber));
          //console.log("fin")
        }
      }
    } catch (err) {
      console.error("Error fetching conference data:", err);
      // Don't update trackPage on error to allow retry
    }
  }, [activeConferencePage, pageNumber, dispatch, url, trackPage, ConferenceVolumes]);

  const fetchArticalData = useCallback(async () => {
    try {
      // going through 1 by 1 condition
      if (!activeArchiveIndex?.year) {
        // find by navigation
        if (url.includes("current-issue")) navigate("/current-issue"); else navigate("/archives")
      }
      else {
        if (ArticalVolumes.length === 0 || trackPage !== pageNumber || activeArchiveIndex?.year === ArchiveIndex?.year || activeArchiveIndex?.volume === ArchiveIndex?.volume || activeArchiveIndex?.issue === ArchiveIndex?.issue) {
          // update the issue and page for 2025
          if (activeArchiveIndex.year === "2025" && parseInt(activeArchiveIndex.issue) > 3) {
            setActiveArchiveIndex({...activeArchiveIndex,issue: "1"});
            setPageNumber(1)
          }
          const params: ArchivePaperListtingArg = {
            year: parseInt(activeArchiveIndex.year),
            volume: parseInt(activeArchiveIndex.volume),
            issue: parseInt(activeArchiveIndex.issue),
            page: pageNumber,
            per_page: 5
          }
          //console.log("fin")
          setTrackPage(pageNumber);
          dispatch(setCurrentPage(pageNumber));
          dispatch(setActiveIndexVolume(activeArchiveIndex));
          //console.log("condition", trackPage, pageNumber)
          await getArticalDetails(params, setArticalVolumes, dispatch, ArticalVolumes)
        }
      }
    } catch (err) {
      console.error("Error fetching artical data:", err);
      // trackPage is already updated above, but consider moving it after successful fetch
    }
  }, [pageNumber, dispatch, trackPage, ArticalVolumes, activeArchiveIndex, navigate, ArchiveIndex, url]);

  // Move setup block to useEffect - UPDATED VERSION
  useEffect(() => {
    // Debug logging
    // console.log('Pagination Debug:', {
    //   active,
    //   pageNumber,
    //   trackPage,
    //   totalPage,
    //   volumesLength: {
    //     conference: ConferenceVolumes.length,
    //     archive: ArticalVolumes.length,
    //     thesis: ThesisVolumes.length
    //   }
    // });

    setLoadingState(true);
    // console.log(trackPage, pageNumber, "trackPage and pageNumber");
    // console.log(activeIndexPage,"<- indexing parent");
    switch (active) {
      case 'archive':
        //console.log("archive")
        if (ArticalVolumes.length && activeArchiveIndex && ArchiveIndex &&
          activeArchiveIndex?.year === ArchiveIndex?.year &&
          activeArchiveIndex?.volume === ArchiveIndex?.volume &&
          activeArchiveIndex?.issue === ArchiveIndex?.issue &&
          trackPage === pageNumber) { // Added trackPage check
          //console.log(activeArchiveIndex, ArchiveIndex, "running");
          setLoadingState(false);
        } else {
          if (!activeArchiveIndex) redirect("/archives")
          //console.log("fetching")
          fetchArticalData().finally(() => {
            SetMetaData({
              title: `${activeArchiveIndex?.year} Volume ${activeArchiveIndex?.volume} Issue ${activeArchiveIndex?.issue} | International Journal | IJSREAT`,
              description: "Explore the IJSREAT archives for top research papers in engineering and technology. Access past volumes and stay updated with the latest innovations"
            })
            setLoadingState(false);
          })
        }
        break;
      case 'conference':
        // Added trackPage check for conference
        if (ConferenceVolumes.length && activeConferencePage?.id && trackPage === pageNumber) {
          setLoadingState(false);
        } else {
          fetchConferenceData().finally(() => {
            SetMetaData({
              title: `${activeConferencePage?.year} Volume ${activeConferencePage?.volume} Issue ${activeConferencePage?.issue} | International Journal | IJSREAT`,
              description: "Stay updated on IJSREAT conferences, events, and calls for papers. Join global experts in science and technology discussions."
            })
            setLoadingState(false);
          })
        }
        break;
      case 'issue':
        //console.log("current issue")
        if (ArticalVolumes.length && activeArchiveIndex && ArchiveIndex &&
          activeArchiveIndex?.year === ArchiveIndex?.year &&
          activeArchiveIndex?.volume === ArchiveIndex?.volume &&
          activeArchiveIndex?.issue === ArchiveIndex?.issue &&
          trackPage === pageNumber) { // Added trackPage check
          //console.log(activeArchiveIndex, ArchiveIndex, "issue running");
          setLoadingState(false);
        } else {
          if (!activeArchiveIndex) redirect("/current-issue")
          //console.log("issue fetching")
          fetchArticalData().finally(() => {
            SetMetaData({
              title: `${activeArchiveIndex?.year} Volume ${activeArchiveIndex?.volume} Issue ${activeArchiveIndex?.issue} | International Journal | IJSREAT`,
              description: "Explore the IJSREAT archives for top research papers in engineering and technology. Access past volumes and stay updated with the latest innovations"
            })
            setLoadingState(false);
          })
        }
        break;
      case 'thesis':
        //console.log("thesis");
        if (ThesisVolumes.length && activeThesisIndex && ThesisIndex &&
          activeThesisIndex?.year === ThesisIndex?.year &&
          activeThesisIndex?.volume === ThesisIndex?.volume &&
          trackPage === pageNumber) { // Added trackPage check
          //console.log(activeThesisIndex, ThesisIndex, "thesis running");
          setLoadingState(false);
        } else {
          if (!activeThesisIndex) redirect("/thesis")

          //console.log("fetching thesis data");
          fetchThesisData().finally(() => {
            SetMetaData({
              title: `${ThesisIndex?.year} Volume ${ThesisIndex?.volume} Issue ${activeArchiveIndex?.issue} | International Journal | IJSREAT`,
              description: "Explore the IJSREAT archives for top research papers in engineering and technology. Access past volumes and stay updated with the latest innovations"
            })
            setLoadingState(false);
          });

        }
        break;
      default:
        setLoadingState(false);
    }
  }, [active, pageNumber, trackPage, fetchConferenceData, dispatch, perPage, fetchArticalData, ArticalVolumes, activeArchiveIndex, navigate, activeConferencePage, fetchThesisData, ThesisVolumes, activeThesisIndex, ThesisIndex, ArchiveIndex, totalPage, ConferenceVolumes.length,activeIndexPage]);

  // search
  const [form, setForm] = useState<SearchProp>({ search: "", page: pageNumber, per_page: 100 })
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.search === "") return
    // Implement your search logic here
    setLoadingState(true)
    //console.log(form)
    switch (active) {
      case "archive":
        searchArchive(form).then((data) => {
          const tempo = data ? data : []
          setArticalVolumesSearch(tempo)
        }).finally(() => setLoadingState(false))
        setForm({ ...form, search: "" })
        break
      case "conference":
        searchConference(form).then((data) => {
          const tempo = data ? data : []
          setConferenceVolumesSearch(tempo)
        }).finally(() => setLoadingState(false))
        setForm({ ...form, search: "" })
        break
      case "thesis":
        searchThesis(form).then((data) => {
          const tempo = data ? data : []
          setThesisVolumesSearch(tempo)
        }).finally(() => setLoadingState(false))
        setForm({ ...form, search: "" })
        break
      case "issue":
        searchArchive(form).then((data) => {
          const tempo = data ? data : []
          setArticalVolumesSearch(tempo)
        }).finally(() => setLoadingState(false))
        setForm({ ...form, search: "" })
        break
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // component return
  if (loadingState) return <Loading title="Volumes" />


  return (
    <MetaDataWrapper titleDynamic={metaData.title} desciptionDynamic={metaData.description}>
      <div className="mx-auto sm:p-4 space-y-6">
        {/* Header */}
        <div className="text-center">
          {active == "conference" && <h2 className="text-2xl font-semibold">Volume {activeConferencePage?.volume}, Issue {activeConferencePage?.issue} ({activeConferencePage?.year})</h2>}
          {active == "archive" && <h2 className="text-2xl font-semibold">Volume {activeArchiveIndex?.volume}, Issue {activeArchiveIndex?.issue} ({activeArchiveIndex?.year})</h2>}
          {active == "issue" && <h2 className="text-2xl font-semibold">Volume {activeArchiveIndex?.volume}, Issue {activeArchiveIndex?.issue} ({activeArchiveIndex?.year})</h2>}
          {active == "thesis" && <h2 className="text-2xl font-semibold">Volume {activeThesisIndex?.volume}, Year {activeThesisIndex?.year}</h2>}
        </div>

        {!["conference", "issue"].includes(active) && <ArchiveVolumnHeader isArchive={true} setArchiveIndex={active == "thesis" ? setActiveThesisIndex : setActiveArchiveIndex} ActiveVolumes={active == "thesis" ? activeThesisIndex : activeIndexPage} VolumeList={indexPage} ThesisVolumeList={thesisIndexPage} />}

        {/* Search */}
        <form onSubmitCapture={handleSearch} className="flex items-center gap-2 mt-2">
          <input
            type="text"
            name="search"
            onChange={handleChange}
            value={form.search}
            placeholder="Search by Paper ID, Paper Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm xl:text-base 2xl:text-lg"
          />
          {(active === "conference") && (
            ConferenceVolumesSearch ? (
              <PrimaryBtn event={() => {
                setConferenceVolumesSearch(null)
                //console.log(ConferenceVolumesSearch)
              }}>
                <GrClear size={16} /> Clear
              </PrimaryBtn>
            ) : (
              <PrimaryBtn>
                <Search size={16} /> Search
              </PrimaryBtn>
            )
          )}
          {(active === "archive" || active === "issue") && (
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
          {(active === "thesis") && (
            ThesisVolumesSearch ? (
              <PrimaryBtn event={() => setThesisVolumesSearch(null)}>
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
        {(trackPage === pageNumber || !loadingState) ?
          <div className="space-y-6">
            <>
              {/* archive */}
              {active === "archive" && (
                ArticalVolumesSearch !== null
                  ? ArticalVolumesSearch?.length
                    ? ArticalVolumesSearch.map((paper, idx) => (
                      <VolumeCardArchive paper={paper} key={idx} setActive={setActiveArtical} navigate={navigate} />
                    ))
                    : <Titleh2>No Paper Found</Titleh2>
                  : ArticalVolumes?.length
                    ? ArticalVolumes.map((paper, idx) => (
                      <VolumeCardArchive paper={paper} key={idx} setActive={setActiveArtical} navigate={navigate} />
                    ))
                    : <Titleh2>No Paper Found</Titleh2>
              )}
              {active === "issue" && (
                ArticalVolumesSearch !== null
                  ? ArticalVolumesSearch?.length
                    ? ArticalVolumesSearch.map((paper, idx) => (
                      <VolumeCardArchive paper={paper} key={idx} setActive={setActiveArtical} navigate={navigate} />
                    ))
                    : <Titleh2>No Paper Found</Titleh2>
                  : ArticalVolumes?.length
                    ? ArticalVolumes.map((paper, idx) => (
                      <VolumeCardArchive paper={paper} key={idx} setActive={setActiveArtical} navigate={navigate} />
                    ))
                    : <Titleh2>No Paper Found</Titleh2>
              )}

              {/* conference */}
              {active === "conference" && (
                ConferenceVolumesSearch !== null
                  ? ConferenceVolumesSearch?.length
                    ? ConferenceVolumesSearch.map((paper, idx) => (
                      <VolumeCardConference paper={paper} key={idx} setActive={setActiveArtical} navigate={navigate} />
                    ))
                    : <Titleh2>No Paper Found</Titleh2>
                  : ConferenceVolumes?.length
                    ? ConferenceVolumes.map((paper, idx) => (
                      <VolumeCardConference paper={paper} key={idx} setActive={setActiveArtical} navigate={navigate} />
                    ))
                    : <Titleh2>No Paper Found</Titleh2>
              )}

              {/* thesis */}
              {active === "thesis" && (
                ThesisVolumesSearch !== null
                  ? ThesisVolumesSearch?.length
                    ? ThesisVolumesSearch.map((paper, idx) => (
                      <VolumeCardThesis paper={paper} key={idx} setActive={setActiveArtical} navigate={navigate} />
                    ))
                    : <Titleh2>No Paper Found</Titleh2>
                  : ThesisVolumes?.length
                    ? ThesisVolumes.map((paper, idx) => (
                      <VolumeCardThesis paper={paper} key={idx} setActive={setActiveArtical} navigate={navigate} />
                    ))
                    : <Titleh2>No Paper Found</Titleh2>
              )}
            </>
          </div> :
          <Loading title="Volume Pages" />
        }

        {/* Unified Pagination - SIMPLIFIED VERSION */}
        {shouldShowPagination(active) && (
          <div className="mt-16">
            <Pagination
              currentPage={pageNumber}
              totalPages={totalPage}
              onPageChange={setPageNumber}
              rangeList={getVisiblePages()}
            />
          </div>
        )}
      </div>
    </MetaDataWrapper>

  );
}
//todo: make pagination working and next detials showing page