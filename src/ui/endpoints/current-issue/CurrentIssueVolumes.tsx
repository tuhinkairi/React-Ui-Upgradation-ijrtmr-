import { Search } from "lucide-react";
import { redirect, useNavigate, useSearchParams } from "react-router-dom";
import PrimaryBtn from "../../components/Btns/PrimaryBtn";
import type { ArchivePaperDetailProps, SearchProp, ActiveIndexArchive } from "../../../types/Api";
import React, { useCallback, useEffect, useState, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/store/store";
import { Pagination } from "../Editorial/Pagination";
import Loading from "../../components/Loading";
import { setCurrentPage } from "../../../lib/store/Features/paginationSlice";
import { searchArchive, type ArchivePaperListtingArg } from "../../../lib/axios/api/archive";
import { getArticalDetails } from "../../../lib/utils/conference/articalFunctions";
import { setActiveIndexVolume, setActivePaper } from "../../../lib/store/Features/ArchiveSlice";
import { GrClear } from "react-icons/gr";
import MetaDataWrapper from "../../components/layout/MetaDataWrapper";
import Titleh2 from "../../other/Titleh2";
import VolumeCardArchive from "../archive/VolumeCardArchive";

// Constants
const ITEMS_PER_PAGE = 5;
const SEARCH_PER_PAGE = 100;
const MAX_ISSUE_2025 = 3;
const MAX_VISIBLE_PAGES = 5;

export default function CurrentIssueVolumes() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [params] = useSearchParams();
  
  // URL parameters
  const urlParams = useMemo(() => ({
    issue: params.get("issue"),
    year: params.get("year"),
    volume: params.get("volume")
  }), [params]);

  // Redux selectors
  const {
    activeIndexPage: ArchiveIndex,
    papers: ArchiveData
  } = useAppSelector((state) => state.archiveSection);
  
  const { total_pages: totalPage, per_page: perPage} = useAppSelector((state) => state.pagination);

  // Local state
  const [loadingState, setLoadingState] = useState(false);
  const [activeArchiveIndex, setActiveArchiveIndex] = useState<ActiveIndexArchive | null>(ArchiveIndex);
  const [ArticalVolumes, setArticalVolumes] = useState<ArchivePaperDetailProps[]>(ArchiveData);
  const [ArticalVolumesSearch, setArticalVolumesSearch] = useState<ArchivePaperDetailProps[] | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [trackPage, setTrackPage] = useState(1);
  const [form, setForm] = useState<SearchProp>({ 
    search: "", 
    page: 1, 
    per_page: SEARCH_PER_PAGE ?? perPage
  });

  // Memoized metadata
  const metaData = useMemo(() => ({
    title: activeArchiveIndex 
      ? `${activeArchiveIndex.year} Volume ${activeArchiveIndex.volume} Issue ${activeArchiveIndex.issue} | International Journal | IJSREAT`
      : "Current Issue | International Journal | IJSREAT",
    description: "Explore the IJSREAT archives for top research papers in engineering and technology. Access past volumes and stay updated with the latest innovations"
  }), [activeArchiveIndex]);

  // Memoized pagination helpers
  const getVisiblePages = useMemo(() => {
    if (totalPage <= MAX_VISIBLE_PAGES) {
      return Array.from({ length: totalPage }, (_, i) => i + 1);
    }

    const halfVisible = Math.floor(MAX_VISIBLE_PAGES / 2);
    let startPage = Math.max(1, pageNumber - halfVisible);
    let endPage = Math.min(totalPage, pageNumber + halfVisible);

    if (endPage - startPage + 1 < MAX_VISIBLE_PAGES) {
      if (startPage === 1) {
        endPage = Math.min(totalPage, startPage + MAX_VISIBLE_PAGES - 1);
      } else if (endPage === totalPage) {
        startPage = Math.max(1, endPage - MAX_VISIBLE_PAGES + 1);
      }
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }, [pageNumber, totalPage]);

  const shouldShowPagination = useMemo(() => 
    ArticalVolumesSearch === null && totalPage > 1, 
    [ArticalVolumesSearch, totalPage]
  );

  // Memoized data check to prevent unnecessary re-renders
  const isDataCurrent = useMemo(() => 
    ArticalVolumes.length > 0 && 
    activeArchiveIndex && 
    ArchiveIndex &&
    activeArchiveIndex.year === ArchiveIndex.year &&
    activeArchiveIndex.volume === ArchiveIndex.volume &&
    activeArchiveIndex.issue === ArchiveIndex.issue &&
    trackPage === pageNumber,
    [ArticalVolumes.length, activeArchiveIndex, ArchiveIndex, trackPage, pageNumber]
  );

  // Optimized active paper setter
  const setActiveArtical = useCallback((paper: ArchivePaperDetailProps) => {
    dispatch(setActivePaper(paper));
  }, [dispatch]);

  // Optimized data fetching
  const fetchArticalData = useCallback(async () => {
    if (!activeArchiveIndex?.year) {
      navigate("/current-issue");
      return;
    }

    try {
      // Handle 2025 issue limit
      let currentIndex = activeArchiveIndex;
      if (activeArchiveIndex.year === "2025" && parseInt(activeArchiveIndex.issue) > MAX_ISSUE_2025) {
        currentIndex = { ...activeArchiveIndex, issue: "1" };
        setActiveArchiveIndex(currentIndex);
        setPageNumber(1);
        return; // Return early to trigger re-render with corrected data
      }

      const params: ArchivePaperListtingArg = {
        year: parseInt(currentIndex.year),
        volume: parseInt(currentIndex.volume),
        issue: parseInt(currentIndex.issue),
        page: pageNumber,
        per_page: ITEMS_PER_PAGE
      };

      // Update tracking before API call
      setTrackPage(pageNumber);
      dispatch(setCurrentPage(pageNumber));
      dispatch(setActiveIndexVolume(currentIndex));
      
      await getArticalDetails(params, setArticalVolumes, dispatch);
    } catch (err) {
      console.error("Error fetching article data:", err);
      setLoadingState(false);
    }
  }, [activeArchiveIndex, pageNumber, dispatch, navigate]);

  // URL parameters effect
  useEffect(() => {
    const { issue, year, volume } = urlParams;
    
    if (issue && year && volume) {
      const newIndex = {
        year: year.toString(),
        volume: volume.toString(),
        issue: issue.toString()
      };
      
      // Only update if different from current
      if (!activeArchiveIndex || 
          activeArchiveIndex.year !== newIndex.year ||
          activeArchiveIndex.volume !== newIndex.volume ||
          activeArchiveIndex.issue !== newIndex.issue) {
        setActiveArchiveIndex(newIndex);
        setPageNumber(1);
        setTrackPage(0); // Reset to force refetch
      }
    } else if (!activeArchiveIndex && ArchiveIndex) {
      setActiveArchiveIndex(ArchiveIndex);
    }
  }, [urlParams, ArchiveIndex, activeArchiveIndex]);

  // Main data fetching effect
  useEffect(() => {
    if (!activeArchiveIndex) {
      redirect("/current-issue");
      return;
    }

    setLoadingState(true);

    if (isDataCurrent) {
      setLoadingState(false);
    } else {
      fetchArticalData().finally(() => setLoadingState(false));
    }
  }, [activeArchiveIndex, pageNumber, trackPage, isDataCurrent, fetchArticalData]);

  // Optimized search handlers
  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!form.search.trim()) return;

    setLoadingState(true);
    
    searchArchive(form)
      .then((data) => setArticalVolumesSearch(data || []))
      .finally(() => {
        setLoadingState(false);
        setForm(prev => ({ ...prev, search: "" }));
      });
  }, [form]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }, []);

  const clearSearch = useCallback(() => {
    setArticalVolumesSearch(null);
  }, []);

  // Render loading state
  if (loadingState) {
    return <Loading title="Volumes" />;
  }

  // Determine which data to display
  const displayData = ArticalVolumesSearch !== null ? ArticalVolumesSearch : ArticalVolumes;
  const hasData = displayData?.length > 0;

  return (
    <MetaDataWrapper titleDynamic={metaData.title} desciptionDynamic={metaData.description}>
      <div className="mx-auto sm:p-4 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold">
            Volume {activeArchiveIndex?.volume}, Issue {activeArchiveIndex?.issue} ({activeArchiveIndex?.year})
          </h2>
        </div>

        {/* Search */}
        <form onSubmit={handleSearch} className="flex items-center gap-2 mt-2">
          <input
            type="text"
            name="search"
            onChange={handleChange}
            value={form.search}
            placeholder="Search by Paper ID, Paper Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm xl:text-base 2xl:text-lg"
            disabled={loadingState}
          />
          {ArticalVolumesSearch !== null && !form.search ? (
            <PrimaryBtn event={clearSearch}>
              <GrClear size={16} /> Clear
            </PrimaryBtn>
          ) : (
            <PrimaryBtn>
              <Search size={16} /> Search
            </PrimaryBtn>
          )}
        </form>

        {/* Paper Cards */}
        <div className="space-y-6">
          {hasData ? (
            displayData.map((paper, idx) => (
              <VolumeCardArchive
                paper={paper}
                key={`${paper.paper_id || idx}`} // Better key using paper ID if available
                setActive={setActiveArtical}
                navigate={navigate}
              />
            ))
          ) : (
            <Titleh2>No Paper Found</Titleh2>
          )}
        </div>

        {/* Pagination */}
        {shouldShowPagination && (
          <div className="mt-16">
            <Pagination
              currentPage={pageNumber}
              totalPages={totalPage}
              onPageChange={setPageNumber}
              rangeList={getVisiblePages}
            />
          </div>
        )}
      </div>
    </MetaDataWrapper>
  );
}