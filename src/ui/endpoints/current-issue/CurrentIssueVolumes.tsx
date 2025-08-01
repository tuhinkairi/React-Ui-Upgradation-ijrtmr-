import { Search } from "lucide-react";
import { redirect, useNavigate, useSearchParams } from "react-router-dom";
import PrimaryBtn from "../../components/Btns/PrimaryBtn";
import type { ArchivePaperDetailProps, SearchProp, ActiveIndexArchive } from "../../../types/Api";
import React, { useCallback, useEffect, useState, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/store/store";
import { Pagination } from "../Editorial/Pagination";
import Loading from "../../components/Loading";
import { setCurrentPage } from "../../../lib/store/Features/paginationSlice";
import { fetchArchive, searchArchive, type ArchivePaperListtingArg } from "../../../lib/axios/api/archive";
import { getArticalDetails } from "../../../lib/utils/conference/articalFunctions";
import { setActiveIndexVolume, setActivePaper, setArchiveIndexVolume } from "../../../lib/store/Features/ArchiveSlice";
import { GrClear } from "react-icons/gr";
import MetaDataWrapper from "../../components/layout/MetaDataWrapper";
import Titleh2 from "../../other/Titleh2";
import VolumeCardArchive from "../archive/VolumeCardArchive";
import { setLoading } from "../../../lib/store/Features/loadingSlice";

// Constants
const ITEMS_PER_PAGE = 5;
const SEARCH_PER_PAGE = 100;
const MAX_VISIBLE_PAGES = 5;

export default function CurrentIssueVolumes() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [params, setParams] = useSearchParams();
  const loading = useAppSelector((state) => state.loadingScreen.loading);

  const URL_Issue = params.get("issue");
  const URL_Year = params.get("year");
  const URL_Volume = params.get("volume");

  const indexList = useAppSelector(s => s.archiveSection.indexPage);
  const MAX_ISSUE_2025 = indexList.length > 0 ? indexList[0].volumes[0].issue.length : 1;

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

  const { total_pages: totalPage, per_page: perPage } = useAppSelector((state) => state.pagination);

  // Local state
  const [subLoading, setSubLoading] = useState(false);
  const [activeArchiveIndex, setActiveArchiveIndex] = useState<ActiveIndexArchive | null>(ArchiveIndex);
  const [ArticalVolumes, setArticalVolumes] = useState<ArchivePaperDetailProps[]>(ArchiveData);
  const [ArticalVolumesSearch, setArticalVolumesSearch] = useState<ArchivePaperDetailProps[] | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [trackPage, setTrackPage] = useState(1);
  const [form, setForm] = useState<SearchProp>({
    search: "",
    page: 1,
    per_page: SEARCH_PER_PAGE
  });

  // Memoized metadata
  const metaData = useMemo(() => ({
    title: activeArchiveIndex
      ? `${activeArchiveIndex.year} Volume ${activeArchiveIndex.volume} Issue ${activeArchiveIndex.issue} | International Journal | IJSREAT`
      : "Current Issue | International Journal | IJSREAT",
    description: "Explore the IJSREAT archives for top research papers in engineering and technology. Access past volumes and stay updated with the latest innovations"
  }), [activeArchiveIndex]);

  // Initial data fetch effect - similar to ArchiveVolumes2
  useEffect(() => {
    if (!activeArchiveIndex && URL_Issue && URL_Year && URL_Volume) {
      dispatch(setLoading(true));
      fetchArchive().then((data) => {
        const reversedData = [...data].reverse();
        dispatch(setArchiveIndexVolume(reversedData));
      });
      setActiveArchiveIndex({
        year: URL_Year,
        volume: URL_Volume,
        issue: URL_Issue
      });
    }
  }, [URL_Issue, URL_Year, URL_Volume, activeArchiveIndex, dispatch]);

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

  // Optimized active paper setter
  const setActiveArtical = useCallback((paper: ArchivePaperDetailProps) => {
    dispatch(setActivePaper(paper));
  }, [dispatch]);

  // Optimized data fetching - enhanced with store data checking
  const fetchArticalData = useCallback(async () => {
    try {
      if (activeArchiveIndex) {
        // Check if we need to fetch data (similar logic to ArchiveVolumes2)
        if (ArchiveData.length === 0 || trackPage !== pageNumber ||
          activeArchiveIndex?.year !== ArchiveIndex?.year ||
          activeArchiveIndex?.volume !== ArchiveIndex?.volume ||
          activeArchiveIndex?.issue !== ArchiveIndex?.issue) {

          // Handle 2025 issue limit
          if (indexList.length > 0 &&
            activeArchiveIndex.year === indexList[0].year.toString() &&
            parseInt(activeArchiveIndex.issue) > MAX_ISSUE_2025) {
            setActiveArchiveIndex({ ...activeArchiveIndex, issue: "1" });
            setPageNumber(1);
            return;
          }

          // Reset data if switching volumes/issues
          if (activeArchiveIndex.year !== ArchiveIndex?.year ||
            activeArchiveIndex.volume !== ArchiveIndex?.volume ||
            activeArchiveIndex.issue !== ArchiveIndex?.issue) {
            setPageNumber(1);
            setArticalVolumes([]);
            dispatch(setActiveIndexVolume(activeArchiveIndex));
          }

          setSubLoading(true);

          const params: ArchivePaperListtingArg = {
            year: parseInt(activeArchiveIndex.year),
            volume: parseInt(activeArchiveIndex.volume),
            issue: parseInt(activeArchiveIndex.issue),
            page: pageNumber,
            per_page: ITEMS_PER_PAGE
          };

          setTrackPage(pageNumber);
          dispatch(setCurrentPage(pageNumber));
          dispatch(setActiveIndexVolume(activeArchiveIndex));

          await getArticalDetails(params, setArticalVolumes, dispatch);
        }
      }
    } catch (err) {
      console.error("Error fetching article data:", err);
    }
  }, [pageNumber, dispatch, trackPage, activeArchiveIndex, ArchiveIndex, ArchiveData, indexList, MAX_ISSUE_2025]);

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

  // Main data fetching effect - enhanced with better data state management
  useEffect(() => {
    if (ArchiveData.length > 0 && ArchiveIndex &&
      activeArchiveIndex?.year === ArchiveIndex?.year &&
      activeArchiveIndex?.volume === ArchiveIndex?.volume &&
      activeArchiveIndex?.issue === ArchiveIndex?.issue &&
      trackPage === pageNumber) {
      dispatch(setLoading(false));
    } else {
      if (!activeArchiveIndex) redirect("/current-issue");

      fetchArticalData().finally(() => {
        setArticalVolumesSearch(null);
        setParams({
          year: activeArchiveIndex?.year ?? URL_Year ?? "",
          volume: activeArchiveIndex?.volume ?? URL_Volume ?? "",
          issue: activeArchiveIndex?.issue ?? URL_Issue ?? ""
        });
        setSubLoading(false);
      });
    }
  }, [pageNumber, trackPage, fetchArticalData, dispatch, perPage, ArticalVolumes, activeArchiveIndex,
    ArchiveIndex, totalPage, ArchiveData.length, URL_Issue, URL_Year, URL_Volume, setParams]);

  // Optimized search handlers
  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!form.search.trim()) return;

    searchArchive(form)
      .then((data) => {
        dispatch(setLoading(true));
        if (!data) {
          setArticalVolumesSearch([]);

        }
        const tempo: ArchivePaperDetailProps[] = data
        const result = tempo.filter(i => i.year === activeArchiveIndex?.year && i.volume === activeArchiveIndex?.volume && i.issue === activeArchiveIndex?.issue)
        setArticalVolumesSearch(result);

      })
      .finally(() => {
        dispatch(setLoading(false));
        setForm(prev => ({ ...prev, search: "" }));
      });
  }, [form, dispatch, activeArchiveIndex]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }, []);

  const clearSearch = useCallback(() => {
    setArticalVolumesSearch(null);
  }, []);

  // Render loading state
  if (loading || subLoading) {
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
          />
          {!form.search && ArticalVolumesSearch !== null ? (
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
        {(trackPage === pageNumber || !loading) ? (
          <div className="space-y-6">
            {hasData ? (
              displayData.map((paper, idx) => (
                <VolumeCardArchive
                  paper={paper}
                  key={`${paper.paper_id || idx}`}
                  setActive={setActiveArtical}
                  navigate={navigate}
                />
              ))
            ) : (
              <Titleh2>No Paper Found</Titleh2>
            )}
          </div>
        ) : (
          <Loading title="Volume Pages" />
        )}

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