import PrimaryBtn from "../../../components/Btns/PrimaryBtn";
import { Link } from "react-router-dom";
import { VscFilePdf } from "react-icons/vsc";


function FullArtical({ content, pdf_url }: { content: string, pdf_url: string }) {
  return (
    <section>
      <div className="space-y-3 text-sm xl:text-base 2xl:text-lg text-gray-700 leading-relaxed">
        <div className="flex justify-between items-center">

          <h3 className="font-medium text-base xl:text-xl 2xl:text-3xl">Abstract</h3>
          {pdf_url && <Link to={pdf_url} rel="noreferrer" className="hidden sm:inline-block">
            <PrimaryBtn className="whitespace-nowrap">
              View PDF
              <VscFilePdf size={18} className="ml-4" />
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
