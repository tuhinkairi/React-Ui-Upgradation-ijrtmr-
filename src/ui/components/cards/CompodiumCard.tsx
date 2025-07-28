import { Link } from "react-router-dom";
// import ArchiveBtn from "../Btns/ArchiveBtn";
import { CheckCircle } from "lucide-react";


interface JournalCardProps {
    code: string;
    title: string;
    eIssn: string;
    publicationMonths: string;
    url: string;
    className?: string;
}

export default function CompodiumCard({
    code,
    title,
    eIssn,
    publicationMonths,
    url,
    className
}: JournalCardProps) {
    return (
        <div className={"border text-start border-orange-300 rounded-md p-4 shadow-md flex flex-col justify-between h-full min-w-full max-w-70 mx-auto sm:w-auto " + className}>
            <div className="grid">
                <h3 className="text-2xl font-semibold text-[#111827]">{code}</h3>
                <p className="text-[#374151] mt-2 mb-4 border-b border-gray-300 pb-2 font-medium sm:min-h-18">
                    {title}
                </p>
                <div className="space-y-3 text-[#374151] text-start grid">
                    <div className="flex items-start gap-2">
                        <span className="mt-1"><CheckCircle /></span>
                        <p>
                            <span className="font-medium"> e-ISSN:</span> {eIssn}
                        </p>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="mt-1"><CheckCircle /></span>
                        <p className="">
                            <span className="font-medium">Publication Month:</span> {publicationMonths}
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <Link to={url} target="_blank">
                    <button className="flex justify-between items-center w-full px-5 py-3 text-white font-medium rounded-md bg-gradient-to-r from-primary to-primary-hover hover:from-[#d6d0fa] hover:to-[#d6d0fa] hover:text-primary-text transition text-center">
                        <h2 className="w-full">Visit Journal</h2>
                    </button>
                </Link>
                {/* <ArchiveBtn label="Visit Journal" className="text-center" icon={true} href={url} /> */}
            </div>
        </div>
    );
}
