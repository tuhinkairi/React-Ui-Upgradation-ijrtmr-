import { Download } from "lucide-react";
import ArchiveBtn from "../Btns/ArchiveBtn";

export default function ArchiveDownload() {
  return (
      <div className="rounded-2xl bg-white p-6 w-full shadow-md">
        <h3 className="text-lg font-semibold mb-4">Download</h3>
        
        <div className="space-y-4">
          <ArchiveBtn>
            Manuscript Template <Download size={16} />
            </ArchiveBtn>          

          <ArchiveBtn>
            Copyright Form <Download size={16} />
          </ArchiveBtn>
        </div>
      </div>
  );
}
