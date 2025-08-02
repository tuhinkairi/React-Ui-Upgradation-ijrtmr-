import { Search } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PrimaryBtn from "../../components/Btns/PrimaryBtn";
import type { ConferenceArticleProps, SearchProp } from "../../../types/Api";
import React, { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/store/store";
import { Pagination } from "../Editorial/Pagination";
import conference_categories, { searchConference } from "../../../lib/axios/api/conference";
import { setActiveConference } from "../../../lib/store/Features/conferenceSlice";
import { getConferenceDetails } from "../../../lib/utils/conference/conferenceFunctions";
import Loading from "../../components/Loading";
import { setCurrentPage } from "../../../lib/store/Features/paginationSlice";
import { setActiveConferenceArticle } from "../../../lib/store/Features/conferenceDetailseSlice";
import { GrClear } from "react-icons/gr";
import MetaDataWrapper from "../../components/layout/MetaDataWrapper";
import Titleh2 from "../../other/Titleh2";
import VolumeCardConference from "../archive/VolumeCardConference";

export default function ConferenceVolumes() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const ConferenceName = searchParams.get("name");
  const ConferenceYear = searchParams.get("year");
  const ConferenceVolume = searchParams.get("volume");
  const ConferenceIssue = searchParams.get("issue");
  const ConferenceId = searchParams.get("id");
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  
  const activeConferencePage = useAppSelector((state) => state.conference.active);

  // Store data
  const ConferenceData = useAppSelector((state) => state.conferenceArtical.articleList);
  const [ConferenceVolumes, setConferenceVolumes] = useState<ConferenceArticleProps[]>(ConferenceData);
  const [ConferenceVolumesSearch, setConferenceVolumesSearch] = useState<ConferenceArticleProps[] | null>(null);

  // Meta data
  const [metaData, SetMetaData] = useState<{ title: string, description: string }>({ 
    title: "", 
    description: "" 
  });

  // Listing pagination
  const totalPage = useAppSelector((state) => state.pagination.total_pages);
  const perPage = useAppSelector((state) => state.pagination.per_page);
  const currentPage = useAppSelector((state) => state.pagination.current_page);
  const [pageNumber, setPageNumber] = useState<number>(currentPage);
  const [trackPage, setTrackPage] = useState<number>(currentPage);

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

  const shouldShowPagination = () => {
    return ConferenceVolumesSearch === null && totalPage > 1;
  };

  // Setting active papers
  const setActiveArtical = (paper: ConferenceArticleProps) => {
    dispatch(setActiveConferenceArticle(paper));
  };

  const fetchConferenceData = useCallback(async () => {
    try {
      if (!activeConferencePage?.id) {
        const response = await conference_categories();
        const conference = response.filter(item => item.id.toString()===ConferenceId && item.name.toLowerCase() === ConferenceName?.toLowerCase())[0];
        dispatch(setActiveConference(conference));
        console.log(conference, ConferenceName, ConferenceId)
        if (conference) {
          dispatch(setActiveConference(conference));
        }
      } else {
        if (ConferenceVolumes.length === 0 || trackPage !== pageNumber) {
          const params = {
            id: activeConferencePage.id,
            page: pageNumber,
            per_page: 5,
          };
          await getConferenceDetails(params, setConferenceVolumes, dispatch);

          // Update trackPage AFTER successful fetch
          setTrackPage(pageNumber);
          dispatch(setCurrentPage(pageNumber));
        }
      }
    } catch (err) {
      console.error("Error fetching conference data:", err);
    }
  }, [activeConferencePage, pageNumber, dispatch, trackPage, ConferenceVolumes,ConferenceId, ConferenceName]);

  useEffect(() => {
    setLoadingState(true);
    
    if (ConferenceVolumes.length && activeConferencePage?.id && trackPage === pageNumber) {
      setLoadingState(false);
    } else {
      fetchConferenceData().finally(() => {
        SetMetaData({
          title: `${activeConferencePage?.year} Volume ${activeConferencePage?.volume} Issue ${activeConferencePage?.issue} | International Journal | IJRTMR`,
          description: "Stay updated on IJRTMR conferences, events, and calls for papers. Join global experts in science and technology discussions."
        });
        setLoadingState(false);
      });
    }
  }, [pageNumber, trackPage, fetchConferenceData, dispatch, perPage, activeConferencePage, totalPage, ConferenceVolumes.length]);

  // Search functionality
  const [form, setForm] = useState<SearchProp>({ search: "", page: pageNumber, per_page: 100 });
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.search === "") return;
    
    setLoadingState(true);
    searchConference(form).then((data) => {
      const tempo = data ? data : [];
      setConferenceVolumesSearch(tempo);
    }).finally(() => setLoadingState(false));
    setForm({ ...form, search: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  if (loadingState) return <Loading title="Volumes" />;

  return (
    <MetaDataWrapper titleDynamic={metaData.title} desciptionDynamic={metaData.description}>
      <div className="mx-auto sm:p-4 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold">
            Volume {activeConferencePage?.volume ?? ConferenceVolume}, Issue {activeConferencePage?.issue ?? ConferenceIssue} ({activeConferencePage?.year ?? ConferenceYear})
          </h2>
        </div>

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
          {!form.search && ConferenceVolumesSearch ? (
            <PrimaryBtn event={() => setConferenceVolumesSearch(null)}>
              <GrClear size={16} /> Clear
            </PrimaryBtn>
          ) : (
            <PrimaryBtn>
              <Search size={16} /> Search
            </PrimaryBtn>
          )}
        </form>

        {/* Paper Cards */}
        {(trackPage === pageNumber || !loadingState) ? (
          <div className="space-y-6">
            {ConferenceVolumesSearch !== null
              ? ConferenceVolumesSearch?.length
                ? ConferenceVolumesSearch.map((paper, idx) => (
                    <VolumeCardConference 
                      paper={paper} 
                      key={idx} 
                      setActive={setActiveArtical} 
                      navigate={navigate} 
                    />
                  ))
                : <Titleh2>No Paper Found</Titleh2>
              : ConferenceVolumes?.length
                ? ConferenceVolumes.map((paper, idx) => (
                    <VolumeCardConference 
                      paper={paper} 
                      key={idx} 
                      setActive={setActiveArtical} 
                      navigate={navigate} 
                    />
                  ))
                : <Titleh2>No Paper Found</Titleh2>
            }
          </div>
        ) : (
          <Loading title="Volume Pages" />
        )}

        {/* Pagination */}
        {shouldShowPagination() && (
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