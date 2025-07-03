// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../../../lib/store/store";
// import { setActiveConferenceArticle } from "../../../lib/store/Features/conferenceDetailseSlice";
// import { Pagination } from "../Editorial/Pagination";
// import ArchiveVolumnHeader from "./components/ArchiveVolumnHeader";
// import Loading from "../../components/Loading";
// import type { ConferenceArticleProps } from "../../../types/Api";
// import type { activeSection } from "../../../types/UI";
// import { usePagination } from "../../../hooks/usePagination";
// import { useConferenceData } from "../../../hooks/useConferenceData";
// import { handleActiveState } from "../../../lib/utils/archive/ActiveStateHandler";
// import { VolumeHeader } from "./components/VolumeHeader";
// import { SearchForm } from "./components/SearchForm";
// import { VolumesList } from "./components/VolumeList";
// import { ArchivePaperListting, type ArchivePaperListtingArg } from "../../../lib/axios/api/archive";

// // Import custom hooks and components


// interface ArchiveVolumesProps {
//   active: activeSection;
// }

// export default function ArchiveVolumes({ active }: ArchiveVolumesProps) {
//   const url = useLocation().pathname;
//   const dispatch = useAppDispatch();
  
//   // Redux state
//   const loading = useAppSelector((state) => state.loadingScreen.loading);
//   const activeConferencePage = useAppSelector((state) => state.conference.active);
//   const trackPage = useAppSelector((state) => state.pagination.current_page);
//   const totalItems = useAppSelector((state) => state.pagination.total_items);
//   const perPage = useAppSelector((state) => state.pagination.per_page);
//   const totalPage = useAppSelector((state) => state.pagination.total_pages);
  
//   // Local state
//   const [conferenceVolumes, setConferenceVolumes] = useState<ConferenceArticleProps[]>(
//     useAppSelector((state) => state.conferenceArtical.articleList)
//   );

//   // Custom hooks
//   const { pageNumber, setPageNumber, pageList } = usePagination(totalItems, totalPage);
//   const { fetchConferenceData } = useConferenceData({
//     url,
//     pageNumber,
//     conferenceVolumes,
//     setConferenceVolumes
//   });

//   // Event handlers
//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     // TODO: Implement search logic
//   };

//   const setActiveArticle = (paper: ConferenceArticleProps) => {
//     dispatch(setActiveConferenceArticle(paper));
//   };

//   // Effects
//   useEffect(() => {
//     handleActiveState({
//       active,
//       setConferenceVolumes,
//       fetchConferenceData,
//       dispatch
//     });
//     const prop:ArchivePaperListtingArg={
//       year:2025,
//       volume:5,
//       issue:3,
//       page:trackPage,
//       per_page:perPage
//     }
//     console.log("archive")
//     ArchivePaperListting(prop).then(data=>console.log("archive",data))
//   }, [active, fetchConferenceData, dispatch,trackPage,perPage]);

//   // Loading state
//   if (loading) {
//     return <Loading title="Volumes" />;
//   }

//   return (
//     <div className="mx-auto p-4 space-y-6">
//       <VolumeHeader active={active} activePage={activeConferencePage} />
      
//       {!["conference", "issue"].includes(active.active) && <ArchiveVolumnHeader />}
      
//       <SearchForm onSearch={handleSearch} />
      
//       <VolumesList
//         volumes={conferenceVolumes}
//         loading={loading}
//         trackPage={trackPage}
//         pageNumber={pageNumber}
//         setActiveArticle={setActiveArticle}
//         active={active}
//       />
      
//       <div className="mt-16">
//         <Pagination 
//           currentPage={pageNumber} 
//           rangeList={pageList} 
//           totalPages={totalPage} 
//           onPageChange={setPageNumber} 
//         />
//       </div>
//     </div>
//   );
// }