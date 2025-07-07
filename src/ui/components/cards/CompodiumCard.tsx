import { useNavigate } from "react-router-dom";
// import ArchiveBtn from "../Btns/ArchiveBtn";
import { CheckCircle } from "lucide-react";


interface JournalCardProps {
    code: string;
    title: string;
    eIssn: string;
    publicationMonths: string;
    url: string;
}

export default function CompodiumCard({
    code,
    title,
    eIssn,
    publicationMonths,
    url,
}: JournalCardProps) {
    const navigate = useNavigate()
    const handelNavigate=()=>{
        navigate(url)
    }
    return (
        <div className="border text-start border-orange-300 rounded-md p-4 shadow-md flex flex-col justify-between h-full w-80">
            <div>
                <h3 className="text-2xl font-semibold text-[#111827]">{code}</h3>
                <p className="text-[#374151] mt-2 mb-4 border-b border-gray-300 pb-2 font-medium">
                    {title}
                </p>
                <div className="space-y-3 text-[#374151] text-start">
                    <div className="flex items-start gap-2">
                        <span className="mt-1"><CheckCircle/></span>
                        <p>
                            <span className="font-medium"> e-ISSN:</span> {eIssn}
                        </p>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="mt-1"><CheckCircle/></span>
                        <p>
                            <span className="font-medium"> Publication Month:</span>
                            <br />
                            {publicationMonths}
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <button onClick={handelNavigate} className="flex justify-between items-center w-full px-5 py-3 text-white font-medium rounded-md bg-gradient-to-r from-[#FF8C42] to-[#995428] hover:from-[#fae0d0] hover:to-[#fae0d0] hover:text-primary-text transition text-center">
                    <h1 className="w-full">Visit Journal</h1>
                </button>
                {/* <ArchiveBtn label="Visit Journal" className="text-center" icon={true} href={url} /> */}
            </div>
        </div>
    );
}
