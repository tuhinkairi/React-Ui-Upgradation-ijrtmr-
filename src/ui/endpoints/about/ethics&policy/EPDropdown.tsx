import { useState, type JSX } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import PublicationContent from "../publication-policy/PublicationContent";
import EditorialPolicy from "./policyCards/EditorialPolicy";
import AuthorResponsiblity from "./policyCards/AuthorResponsiblity";
import GuidePaper from "../../for-authors/guide-for-auther/GuidePaper";
import PublicationEthicsAndMalpracticeStatement from "./policyCards/PublicationEthicsAndMalpracticeStatement";
import WithdrawPolicy from "./policyCards/WithdrawPolicy";
import PlagiarismPolicy from "./policyCards/PlagiarismPolicy";

interface AccordionItem {
  id: string;
  title: string;
  component: JSX.Element | string;
}

const policy:AccordionItem[] = [
  {
    "id": "publication-ethics",
    "title": "Publication Ethics",
    "component": <PublicationContent/>
  },
  {
    "id": "editorial-policies",
    "title": "Editorial Policies",
    "component": <EditorialPolicy/>
  },
  {
    "id": "author-responsibilities",
    "title": "Author Responsibilities",
    "component": <AuthorResponsiblity/>
  },
  {
    "id": "instructions-for-authors",
    "title": "Instructions for Authors",
    "component": <GuidePaper/>
  },
  {
    "id": "ethics-malpractice",
    "title": "Publication Ethics & Malpractice Statement",
    "component": <PublicationEthicsAndMalpracticeStatement/>
  },
  {
    "id": "article-withdrawal",
    "title": "Article withdraw policy",
    "component": <WithdrawPolicy/>
  },
  {
    "id": "plagiarism-policy",
    "title": "Plagiarism Policy",
    "component": <PlagiarismPolicy/>
  },
  {
    "id": "peer-review-policy",
    "title": "Peer Review Policy",
    "component": "PeerReviewPolicy"
  },
  {
    "id": "copyright-ownership",
    "title": "Copyright, Grants and Ownership Declaration",
    "component": "CopyrightOwnership"
  },
  {
    "id": "open-access-policy",
    "title": "Open Access Policy",
    "component": "OpenAccessPolicy"
  },
  {
    "id": "archiving-policy",
    "title": "Archiving policy",
    "component": "ArchivingPolicy"
  },
  {
    "id": "repository-policy",
    "title": "Repository policy",
    "component": "RepositoryPolicy"
  },
  {
    "id": "journal-metrics",
    "title": "Journal Metrics",
    "component": "JournalMetrics"
  },
  {
    "id": "advertising-policy",
    "title": "Advertising Policy",
    "component": "AdvertisingPolicy"
  }
]

const EPDropdown: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenIndex((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-2 mt-20 mb-14 -mx-4">
      {policy.map((item) => (
        <div key={item.id} className="rounded-md overflow-hidden">
          <button
            onClick={() => toggle(item.id)}
            className="flex justify-start gap-4 items-center w-full px-5 py-3 text-white font-medium rounded-md bg-gradient-to-b from-[#FF8C42] to-[#995428] hover:from-[#fae0d0] hover:to-[#fae0d0] hover:text-primary-text focus:outline-none transition-all"
          >
            <span>{item.title}</span>
            {openIndex === item.id ? <ChevronUp /> : <ChevronDown />}
          </button>
          {openIndex === item.id && (
            <div className="bg-white text-dark p-4 border border-orange-300 rounded-md mt-2 shadow shadowSprade">
              {item.component}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EPDropdown;
