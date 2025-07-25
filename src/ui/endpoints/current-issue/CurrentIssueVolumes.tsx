import { Search } from "lucide-react";
import { redirect, useNavigate } from "react-router-dom";
import PrimaryBtn from "../../components/Btns/PrimaryBtn";
import type { ArchivePaperDetailProps, SearchProp, ActiveIndexArchive } from "../../../types/Api";
import React, { useCallback, useEffect, useState } from "react";
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

export default function CurrentIssueVolumes() {
  const navigate = useNavigate();
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const ArchiveIndex = useAppSelector((state) => state.archiveSection.activeIndexPage);
  const [activeArchiveIndex, setActiveArchiveIndex] = useState<ActiveIndexArchive | null>(ArchiveIndex);

  // Store data
  const { activeIndexPage } = useAppSelector((state) => state.archiveSection);
  const ArchiveData = useAppSelector((state) => state.archiveSection.papers);
  const [ArticalVolumes, setArticalVolumes] = useState<ArchivePaperDetailProps[]>(ArchiveData);
  const [ArticalVolumesSearch, setArticalVolumesSearch] = useState<ArchivePaperDetailProps[] | null>(null);

  // Meta data
  const [metaData, SetMetaData] = useState<{ title: string, description: string }>({
    title: "",
    description: ""
  });

  // Listing pagination
  const totalPage = useAppSelector((state) => state.pagination.total_pages);
  const perPage = useAppSelector((state) => state.pagination.per_page);
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

  const shouldShowPagination = () => {
    return ArticalVolumesSearch === null && totalPage > 1;
  };

  // Setting active papers
  const setActiveArtical = (paper: ArchivePaperDetailProps) => {
    dispatch(setActivePaper(paper));
  };

  const fetchArticalData = useCallback(async () => {
    try {
      if (!activeArchiveIndex?.year) {
        navigate("/current-issue");
      } else {
        if (ArticalVolumes.length === 0 || trackPage !== pageNumber ||
          activeArchiveIndex?.year === ArchiveIndex?.year ||
          activeArchiveIndex?.volume === ArchiveIndex?.volume ||
          activeArchiveIndex?.issue === ArchiveIndex?.issue) {

          // Update the issue and page for 2025
          if (activeArchiveIndex.year === "2025" && parseInt(activeArchiveIndex.issue) > 3) {
            setActiveArchiveIndex({ ...activeArchiveIndex, issue: "1" });
            setPageNumber(1);
          }

          const params: ArchivePaperListtingArg = {
            year: parseInt(activeArchiveIndex.year),
            volume: parseInt(activeArchiveIndex.volume),
            issue: parseInt(activeArchiveIndex.issue),
            page: pageNumber,
            per_page: 5
          };

          setTrackPage(pageNumber);
          dispatch(setCurrentPage(pageNumber));
          dispatch(setActiveIndexVolume(activeArchiveIndex));
          await getArticalDetails(params, setArticalVolumes, dispatch);
        }
      }
    } catch (err) {
      console.error("Error fetching artical data:", err);
    }
  }, [pageNumber, dispatch, trackPage, ArticalVolumes, activeArchiveIndex, navigate, ArchiveIndex]);

  useEffect(() => {
    setLoadingState(true);

    if (ArticalVolumes.length && activeArchiveIndex && ArchiveIndex &&
      activeArchiveIndex?.year === ArchiveIndex?.year &&
      activeArchiveIndex?.volume === ArchiveIndex?.volume &&
      activeArchiveIndex?.issue === ArchiveIndex?.issue &&
      trackPage === pageNumber) {
      setLoadingState(false);
    } else {
      if (!activeArchiveIndex) redirect("/current-issue");

      fetchArticalData().finally(() => {
        SetMetaData({
          title: `${activeArchiveIndex?.year} Volume ${activeArchiveIndex?.volume} Issue ${activeArchiveIndex?.issue} | International Journal | IJSREAT`,
          description: "Explore the IJSREAT archives for top research papers in engineering and technology. Access past volumes and stay updated with the latest innovations"
        });
        setLoadingState(false);
      });
    }
  }, [pageNumber, trackPage, fetchArticalData, dispatch, perPage, ArticalVolumes, activeArchiveIndex, navigate, ArchiveIndex, totalPage, activeIndexPage]);

  // Search functionality
  const [form, setForm] = useState<SearchProp>({ search: "", page: pageNumber, per_page: 100 });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.search === "") return;

    setLoadingState(true);
    searchArchive(form).then((data) => {
      const tempo = data ? data : [];
      setArticalVolumesSearch(tempo);
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
            Volume {activeArchiveIndex?.volume}, Issue {activeArchiveIndex?.issue} ({activeArchiveIndex?.year})
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
          {ArticalVolumesSearch ? (
            <PrimaryBtn event={() => setArticalVolumesSearch(null)}>
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
            {ArticalVolumesSearch !== null
              ? ArticalVolumesSearch?.length
                ? ArticalVolumesSearch.map((paper, idx) => (
                  <VolumeCardArchive
                    paper={paper}
                    key={idx}
                    setActive={setActiveArtical}
                    navigate={navigate}
                  />
                ))
                : <Titleh2>No Paper Found</Titleh2>
              : ArticalVolumes?.length
                ? ArticalVolumes.map((paper, idx) => (
                  <VolumeCardArchive
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