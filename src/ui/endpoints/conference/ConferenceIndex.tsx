import type { ConferenceCardProps } from "../../../types/Api";
import ConferenceCard from "./ConferenceCard";

const ConferenceIndex = () => {
  const conferenceInfo:ConferenceCardProps = {
    acronym: 'REACT',
    title: 'Recent Advances in Civil Engineering and Technology–2024',
    organizer: 'Vidya Academy of Science and Technology, Kerala, India',
    date: '19 & 20 June 2024',
    articleLink: 'https://example.com/view-article',
  };

  return (
    <div className="max-w-6xl mx-auto py-4 ">
      <ConferenceCard {...conferenceInfo} />
    </div>
  );
};

export default ConferenceIndex;
