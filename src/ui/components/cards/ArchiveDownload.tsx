import { Download } from "lucide-react";

export default function ArchiveDownload() {
  return (
      <div className="rounded-2xl bg-white p-6 w-full shadow-md">
        <h3 className="text-lg font-semibold mb-4">Download</h3>
        
        <div className="space-y-4">
          <button className="w-full flex items-center justify-between bg-gradient-to-r from-orange-500 to-orange-400 text-white font-medium py-2 px-4 rounded-md shadow hover:brightness-110 transition">
            Manuscript Template <Download size={16} />
          </button>

          <button className="w-full flex items-center justify-between bg-gradient-to-r from-orange-500 to-orange-400 text-white font-medium py-2 px-4 rounded-md shadow hover:brightness-110 transition">
            Copyright Form <Download size={16} />
          </button>
        </div>
      </div>
  );
}
