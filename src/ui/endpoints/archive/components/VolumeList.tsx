// import type { ConferenceArticleProps } from "../../../../types/Api";
// import type { activeSection } from "../../../../types/UI";
// import Loading from "../../../components/Loading";
// import VolumeCard from "../VolumeCardArchive";


// interface VolumesListProps {
//   volumes: ConferenceArticleProps[];
//   loading: boolean;
//   trackPage: number;
//   pageNumber: number;
//   setActiveArticle: (paper: ConferenceArticleProps) => void;
//   active: activeSection;
// }

// export const VolumesList: React.FC<VolumesListProps> = ({
//   volumes,
//   loading,
//   trackPage,
//   pageNumber,
//   setActiveArticle,
//   active
// }) => {
//   if (loading && trackPage !== pageNumber) {
//     return <Loading title="Volume Pages" />;
//   }

//   return (
//     <div className="space-y-6">
//       {volumes.length > 0 && volumes.map((paper, idx) => (
//         <VolumeCard 
//           paper={paper} 
//           key={idx} 
//           setActive={setActiveArticle} 
//           section={active.active} 
//         />
//       ))}
//     </div>
//   );
// };