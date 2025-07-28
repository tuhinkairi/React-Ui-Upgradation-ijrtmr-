import { useEffect, useState, type JSX } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import PublicationContent from "../publication-policy/PublicationContent";
import EditorialPolicy from "./policyCards/EditorialPolicy";
import AuthorResponsiblity from "./policyCards/AuthorResponsiblity";
import GuidePaper from "../../for-authors/guide-for-auther/GuidePaper";
import PublicationEthicsAndMalpracticeStatement from "./policyCards/PublicationEthicsAndMalpracticeStatement";
import WithdrawPolicy from "./policyCards/WithdrawPolicy";
import PlagiarismPolicy from "./policyCards/PlagiarismPolicy";
import PeerReviewPaper from "../PeerReview/PeerReviewPaper";
import OwnerShip from "./policyCards/OwnerShip";
import OpenAccessPolicy from "./policyCards/OpenAccessPolicy";
import ArchivePolicy from "./policyCards/ArchivePolicy";
import RepositoryPolicy from "./policyCards/RepositoryPolicy";
import JournalMetrix from "./policyCards/JournalMetrix";
import AdvetisingPolicy from "./policyCards/AdvetisingPolicy";
import { useSearchParams } from "react-router-dom";
// import { useSearchParams } from "react-router-dom";

interface AccordionItem {
  id: string;
  title: string;
  component: JSX.Element | string;
}

const policy: AccordionItem[] = [
  {
    "id": "publication-ethics",
    "title": "Publication Ethics",
    "component": <PublicationContent />
  },
  {
    "id": "editorial-policies",
    "title": "Editorial Policies",
    "component": <EditorialPolicy />
  },
  {
    "id": "author-responsibilities",
    "title": "Author Responsibilities",
    "component": <AuthorResponsiblity />
  },
  {
    "id": "instructions-for-authors",
    "title": "Instructions for Authors",
    "component": <GuidePaper />
  },
  {
    "id": "ethics-malpractice",
    "title": "Publication Ethics & Malpractice Statement",
    "component": <PublicationEthicsAndMalpracticeStatement />
  },
  {
    "id": "article-withdrawal",
    "title": "Article withdraw policy",
    "component": <WithdrawPolicy />
  },
  {
    "id": "plagiarism-policy",
    "title": "Plagiarism Policy",
    "component": <PlagiarismPolicy />
  },
  {
    "id": "peer-review-policy",
    "title": "Peer Review Policy",
    "component": <PeerReviewPaper />
  },
  {
    "id": "copyright-ownership",
    "title": "Copyright, Grants and Ownership Declaration",
    "component": <OwnerShip />
  },
  {
    "id": "open-access-policy",
    "title": "Open Access Policy",
    "component": <OpenAccessPolicy />
  },
  {
    "id": "archiving-policy",
    "title": "Archiving policy",
    "component": <ArchivePolicy />
  },
  {
    "id": "repository-policy",
    "title": "Repository policy",
    "component": <RepositoryPolicy />
  },
  {
    "id": "journal-metrics",
    "title": "Journal Metrics",
    "component": <JournalMetrix />
  },
  {
    "id": "advertising-policy",
    "title": "Advertising Policy",
    "component": <AdvetisingPolicy />
  }
]

const EPDropdown: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const id = useSearchParams()[0].get("target")
  
  useEffect(() => {
    if (id) {
      console.log(id)
      const element = document.getElementById(id)
      console.log(element)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth"
        })
        setOpenIndex(id)
      }
    }
  }, [id])
  const toggle = (id: string) => {
    setOpenIndex((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-2 mt-20 mb-14 -mx-4">
      {policy.map((item) => (
        <div id={item.id} key={item.id} className="rounded-md overflow-hidden">
          <button
            onClick={() => toggle(item.id)}
            className="flex justify-start gap-4 items-center w-full px-5 py-3 text-white font-medium rounded-md bg-gradient-to-b from-primary to-primary-hover hover:from-[#d6d0fa] hover:to-[#d6d0fa] hover:text-primary-text focus:outline-none transition-all"
          >
            <h2 className="text-start">{item.title}</h2>
            {openIndex === item.id ? <ChevronUp /> : <ChevronDown />}
          </button>
          {openIndex === item.id && (
            <div className="cardPolicy bg-white text-gray-800 p-4 border border-orange-300 rounded-md mt-2 shadow shadowSprade">
              {item.component}
            </div>
          )}
        </div>
      ))}

    </div>
  );
};

export default EPDropdown;
