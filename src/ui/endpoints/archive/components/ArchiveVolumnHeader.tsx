import { useState } from 'react'
import PrimaryBtn from '../../../components/Btns/PrimaryBtn'
import { Share2 } from 'lucide-react'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
// import { useAppSelector } from '../../../../lib/store/store';
const volumes = [
    "Volume 6, (2025)",
    "Volume 4, (2025)",
    "Volume 5, (2025)",
    "Volume 3, (2025)",
];

function ArchiveVolumnHeader() {
    // const ActiveVolumes = useAppSelector((state) => state.archiveSection.activeIndexPage)
    // const VolumeList = useAppSelector((state) => state.archiveSection.indexPage)
    const [active, setActive] = useState<string>(`"Volume 6, (2025)"`);
    const [activeIssue, setActiveIssue] = useState<string>(`Issue 1`);

    const handleVolumeClick = (volume: string) => {
        setActive(volume);
    };

    const handleIssueClick = (issue: string) => {
        setActiveIssue(issue);
    };

    const handlePrevious = () => {
        const currentIndex = volumes.indexOf(active);
        if (currentIndex > 0) {
            setActive(volumes[currentIndex - 1]);
        }
    };

    const handleNext = () => {
        const currentIndex = volumes.indexOf(active);
        if (currentIndex < volumes.length - 1) {
            setActive(volumes[currentIndex + 1]);
        }
    };

    const issues = ["Issue 3", "Issue 2", "Issue 1"];

    const handlePreviousIssue = () => {
        const currentIndex = issues.indexOf(activeIssue);
        if (currentIndex > 0) {
            setActiveIssue(issues[currentIndex - 1]);
        }
    };

    const handleNextIssue = () => {
        const currentIndex = issues.indexOf(activeIssue);
        if (currentIndex < issues.length - 1) {
            setActiveIssue(issues[currentIndex + 1]);
        }
    };

    return (
        <>
            {/* Volume Navigation */}
            <div className="flex flex-wrap justify-between items-center gap-2 gap-x-5 text-base font-medium ">
                <button onClick={handlePrevious}><GrFormPrevious className="text-primary-text" /></button>
                {volumes.map((volume) => (
                    <span
                        key={volume}
                        onClick={() => handleVolumeClick(volume)}
                        className={`cursor-pointer ${active === volume && "text-primary font-semibold text-2xl"}`}
                    >
                        {volume}
                    </span>
                ))}
                <button onClick={handleNext}><GrFormNext className="text-primary-text" /></button>
                <span className="cursor-pointer text-primary">See all volumes </span>
            </div>

            {/* Issue Tabs */}
            <div className="flex items-center justify-between">
                <div className="flex gap-2">
                    <button onClick={handlePreviousIssue}><GrFormPrevious className="text-primary-text text-base" /></button>
                    {issues.map((issue) => (
                        <button
                            key={issue}
                            onClick={() => handleIssueClick(issue)}
                            className={`flex whitespace-nowrap justify-between items-center w-full px-8 py-3 font-medium rounded-md  transition 
                                ${issue === activeIssue
                                    ? "text-white bg-gradient-to-b from-[#FF8C42] to-[#995428] hover:from-[#fae0d0] hover:to-[#fae0d0] hover:text-primary-text"
                                    : "hover:text-white bg-gradient-to-b hover:from-[#FF8C42] hover:to-[#995428] from-[#fae0d0] to-[#fae0d0] text-primary-text"
                                }`}
                        >
                            {issue}
                        </button>
                    ))}
                    <button onClick={handleNextIssue}><GrFormNext className="text-primary-text text-base" /></button>
                </div>

                <PrimaryBtn className="rounded-full px-2">
                    <Share2 size={16} /> Share
                </PrimaryBtn>
            </div>
        </>
    )
}

export default ArchiveVolumnHeader
