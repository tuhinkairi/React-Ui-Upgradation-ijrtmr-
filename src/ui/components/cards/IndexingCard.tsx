import { Bookmark, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function IndexingCard() {
  return (
    <div className="w-full rounded-2xl p-6 text-white bg-gradient-to-b from-[#FF8C42] to-[#995428] shadow-md">
      <Link to="/indexing&abstraction">
      <div className="flex items-center gap-3 py-2">
        <Bookmark className="w-6 h-6 text-white" />
        <span className="text-base font-medium">Indexing</span>
      </div>
      </Link>
      <hr className="my-4 border-white/30" />
      <Link to="/journal-publishing-process ">
      <div className="flex items-center gap-3 py-2">
        <ShieldCheck className="w-6 h-6 text-white" />
        <span className="text-base font-medium text-wrap">Journal Publication Process</span>
      </div>
      </Link>
    </div>
  );
}
