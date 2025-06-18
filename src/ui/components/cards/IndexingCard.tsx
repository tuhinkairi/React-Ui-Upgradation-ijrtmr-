import { Bookmark, ShieldCheck } from 'lucide-react';

export default function IndexingCard() {
  return (
    <div className="w-full rounded-2xl p-6 text-white bg-gradient-to-b from-[#FF8C42] to-[#995428] shadow-md">
      <div className="flex items-center gap-3 py-2">
        <Bookmark className="w-6 h-6 text-white" />
        <span className="text-base font-medium">Indexing</span>
      </div>
      <hr className="my-4 border-white/30" />
      <div className="flex items-center gap-3 py-2">
        <ShieldCheck className="w-6 h-6 text-white" />
        <span className="text-base font-medium text-wrap">Journal Publication Process</span>
      </div>
    </div>
  );
}
