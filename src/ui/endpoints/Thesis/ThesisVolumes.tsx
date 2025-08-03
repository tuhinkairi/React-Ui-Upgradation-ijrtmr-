import { Search } from "lucide-react";
import { redirect, useNavigate, useSearchParams } from "react-router-dom";
import PrimaryBtn from "../../components/Btns/PrimaryBtn";
import type { SearchProp, ThesisListingItem, ThesisIndexingItem } from "../../../types/Api";
import React, { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/store/store";
import { Pagination } from "../Editorial/Pagination";
import Loading from "../../components/Loading";
import { GrClear } from "react-icons/gr";
import { setActiveThesis, setActiveThesisIndex, setThesisIndexingList } from "../../../lib/store/Features/ThesisSlice";
import { fetchThesis, searchThesis, type ThesisListingParams } from "../../../lib/axios/api/thesis";
import VolumeCardThesis from "../Thesis/VolumeCardThesis";
import MetaDataWrapper from "../../components/layout/MetaDataWrapper";
import Titleh2 from "../../other/Titleh2";
import ArchiveVolumnHeader from "../archive/components/ArchiveVolumnHeader";
import { getThesisDetails } from "../../../lib/utils/conference/thesisFunctions";
import { setLoading } from "../../../lib/store/Features/loadingSlice";
import { setCurrentPage } from "../../../lib/store/Features/paginationSlice";

export default function ThesisVolumes() {
    const navigate = useNavigate();
    const [loadingState, setLoadingState] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    // Thesis state management
    const ThesisIndex = useAppSelector((state) => state.thesis.ActiveThesisIndex);
    const ThesisData = useAppSelector((state) => state.thesis.thesisList);
    const thesisIndexPage = useAppSelector((state) => state.thesis.ThesisIndexingList);
    const [activeThesisIndex, setActiveThesisIndexState] = useState<ThesisIndexingItem | null>(ThesisIndex);
    const [ThesisVolumes, setThesisVolumes] = useState<ThesisListingItem[]>(ThesisData);
    const [ThesisVolumesSearch, setThesisVolumesSearch] = useState<ThesisListingItem[] | null>(null);
    const [params, setParams] = useSearchParams();
    const URL_Year = params.get("year");
    const URL_Volume = params.get("volume");
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

    useEffect(() => {
        if (!activeThesisIndex && URL_Year && URL_Volume) {
            dispatch(setLoading(true));
            fetchThesis().then((data) => {
                const reversedData = [...data].reverse()
                dispatch(setThesisIndexingList(reversedData))
            })
            setActiveThesisIndexState({
                year: URL_Year,
                volume: URL_Volume,
                issue: "1"
            });
        }
        if(activeThesisIndex?.year !== ThesisIndex?.year || activeThesisIndex?.volume !== ThesisIndex?.volume){
            setThesisVolumesSearch(null);
        }
    }, [URL_Year, URL_Volume, activeThesisIndex, dispatch, thesisIndexPage, ThesisIndex]);

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
        return ThesisVolumesSearch === null && totalPage > 1;
    };

    // Setting active papers
    const setActiveArtical = (paper: ThesisListingItem) => {
        dispatch(setActiveThesis(paper));
    };

    // Thesis data fetching function
    const fetchThesisData = useCallback(async () => {
        try {
            if (!activeThesisIndex?.year || !activeThesisIndex?.volume) {
                navigate("/thesis");
            } else {
                if (ThesisVolumes.length === 0 || trackPage !== pageNumber ||
                    activeThesisIndex?.year !== ThesisIndex?.year ||
                    activeThesisIndex?.volume !== ThesisIndex?.volume) {
                    const params: ThesisListingParams = {
                        thesis_year: parseInt(activeThesisIndex.year),
                        thesis_volume: parseInt(activeThesisIndex.volume),
                        page: pageNumber,
                        per_page: perPage
                    };
                    setTrackPage(pageNumber)
                    dispatch(setCurrentPage(pageNumber));
                    dispatch(setActiveThesisIndex(activeThesisIndex));
                    await getThesisDetails(params, setThesisVolumes, dispatch);
                    //   if (response) {
                    //     setThesisVolumes(response.papersList);
                    //     dispatch(setThesisList(response.papersList));

                    //     // Update trackPage AFTER successful fetch
                    //     setTrackPage(pageNumber);
                    //     dispatch(setCurrentPage(pageNumber));
                    //   }
                }
            }
        } catch (err) {
            console.error("Error fetching thesis data:", err);
        }
    }, [activeThesisIndex, pageNumber, dispatch, trackPage, ThesisVolumes, navigate, perPage, ThesisIndex]);

    useEffect(() => {
        setLoadingState(true);

        if (ThesisVolumes.length && activeThesisIndex && ThesisIndex &&
            activeThesisIndex?.year === ThesisIndex?.year &&
            activeThesisIndex?.volume === ThesisIndex?.volume &&
            trackPage === pageNumber) {
            setLoadingState(false);
        } else {
            if (!activeThesisIndex) redirect("/thesis");

            fetchThesisData().finally(() => {
                SetMetaData({
                    title: `${ThesisIndex?.year ?? URL_Year} Volume ${ThesisIndex?.volume ?? URL_Volume} | International Journal | IJRTMR`,
                    description: "Explore the IJRTMR archives for top research papers in engineering and technology. Access past volumes and stay updated with the latest innovations"
                });
                setParams({
                    year: activeThesisIndex?.year  ?? "",
                    volume: activeThesisIndex?.volume ?? "",
                })
                setLoadingState(false);
            });
        }
    }, [pageNumber, trackPage, fetchThesisData, dispatch, perPage, ThesisVolumes, activeThesisIndex, ThesisIndex, totalPage, navigate, ThesisData.length, URL_Year, URL_Volume, setParams]);

    // Search functionality
    const [form, setForm] = useState<SearchProp>({ search: "", page: pageNumber, per_page: 100 });

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (form.search === "") return;

        setLoadingState(true);
        searchThesis(form).then((data) => {
            const tempo = data.papersList ? data.papersList : [];
            setThesisVolumesSearch(tempo);
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
                        Volume {activeThesisIndex?.volume}, Year {activeThesisIndex?.year}
                    </h2>
                </div>

                <ArchiveVolumnHeader
                    isArchive={true}
                    setArchiveIndex={setActiveThesisIndexState}
                    ActiveVolumes={activeThesisIndex}
                    VolumeList={undefined}
                    ThesisVolumeList={thesisIndexPage}
                />

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
                    {!form.search && ThesisVolumesSearch ? (
                        <PrimaryBtn event={() => setThesisVolumesSearch(null)}>
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
                        {ThesisVolumesSearch !== null
                            ? ThesisVolumesSearch?.length
                                ? ThesisVolumesSearch.map((paper, idx) => (
                                    <VolumeCardThesis
                                        paper={paper}
                                        key={idx}
                                        setActive={setActiveArtical}
                                        navigate={navigate}
                                    />
                                ))
                                : <Titleh2>No Paper Found</Titleh2>
                            : ThesisVolumes?.length
                                ? ThesisVolumes.map((paper, idx) => (
                                    <VolumeCardThesis
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