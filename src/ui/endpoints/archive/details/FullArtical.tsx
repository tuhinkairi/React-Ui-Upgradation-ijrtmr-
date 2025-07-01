import { FileDown } from "lucide-react";
import PrimaryBtn from "../../../components/Btns/PrimaryBtn";
import { Link } from "react-router-dom";


function FullArtical({ content, pdf_url }: { content: string, pdf_url: string }) {
  return (
    <section>
      <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
        <div className="flex justify-between items-center">

          <h3 className="font-medium text-base">Abstract</h3>
          {pdf_url && <Link to={pdf_url} rel="noreferrer">
            <PrimaryBtn className="whitespace-nowrap">
              View PDF
              <FileDown size={18} className="ml-4" />
            </PrimaryBtn>
          </Link>}
        </div>
        <p>
          {content}
        </p>
      </div>
    </section>
  )
}

export default FullArtical;
