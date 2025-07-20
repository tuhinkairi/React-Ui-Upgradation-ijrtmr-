import { ArrowUpRight } from "lucide-react";
import { useAppSelector } from "../../../../lib/store/store";
import { useLocation, useNavigate } from "react-router-dom";
import { SuggestedArchivePost } from "../../../../lib/axios/api/archive";
import { useCallback, useEffect, useState } from "react";
import type { ArticleSuggestion } from "../../../../types/Api";


const RelatedArticles = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const activeArticle = useAppSelector((state) => state.archiveSection.activePaper);
  const [relatedArticles, setRelatedArticles] = useState<ArticleSuggestion[]>([]);
  // redirectable dynamic endpoint 
  const endpoint = (paper_id:number, paper_title:string)=> {return `/archives/paper-details?paperid=${paper_id}&papertitle=${encodeURIComponent(paper_title.replace(/ /g, "-"))}`}

  
  const SuggestedArchive = useCallback(() => SuggestedArchivePost({
    paper_title: activeArticle?.paper_title ?? "",
    year: activeArticle?.year ?? "",
  }).then((data) => {
    setRelatedArticles(data)
  }), [activeArticle])
  
  
  useEffect(() => {
    if (!activeArticle?.paper_title && "/archives".includes(location.pathname)) navigate("/archives");
    if(location.pathname.includes("/archives"))SuggestedArchive()
  }, [SuggestedArchive, navigate, activeArticle?.paper_title,location])
// update it for suggestions
  if (relatedArticles.length===0) {
    return null
  }
  return (
    <div className=" mx-auto mt-12">
      <h2 className="text-2xl 2xl:text-3xl font-semibold mb-4">Related Articles</h2>
      <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6">
        {relatedArticles.map((article, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 p-5 shadow-sm bg-white flex flex-col justify-between min-h-full min-w-2/3 md:w-auto"
          >
            <div>
              <p className="text-sm xl:text-base 2xl:text-lg text-gray-400 font-medium mb-1">{article.year}</p>
              <p className="text-base 2xl:text-lg font-semibold text-gray-900 leading-snug">
                {article.paper_title}
              </p>
            </div>
            <div className="mt-4">
              <button className="primaryBtn " onClick={() => navigate(endpoint(article.paper_id, article.paper_title))}>
                <span className="text-sm xl:text-base 2xl:text-lg">View More</span><ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
