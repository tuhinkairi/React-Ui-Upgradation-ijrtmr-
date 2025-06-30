import { useState } from 'react'
import PrimaryBtn from '../../../components/Btns/PrimaryBtn'
import { Share2 } from 'lucide-react'
import ArchiveBtn from '../../../components/Btns/ArchiveBtn'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
const volumes = [
  "Volume 6, (2025)",
  "Volume 4, (2025)",
  "Volume 5, (2025)",
  "Volume 3, (2025)",
];
function ArchiveVolumnHeader() {
    const [active, setActive] = useState<string>("Volume 3, (2025)");

    const handleVolumeClick = (volume: string) => {
        setActive(volume);
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
    return (
        <>
            {/* Volume Navigation */}
            <div className="flex flex-wrap justify-center items-center gap-2 gap-x-5 text-base font-medium ">
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
                    {["Issue 3", "Issue 2", "Issue 1"].map((issue) => (
                        <ArchiveBtn
                            key={issue}
                            href={"/issues/" + issue}
                            label={issue}
                            className={`max-w-fit gap-1 ${issue === "Issue 3"
                                ? "bg-primary text-white"
                                : "bg-gray-100 text-primary-text"
                                }`}
                        />
                    ))}
                </div>

                <PrimaryBtn className="rounded-full px-2">
                    <Share2 size={16} /> Share
                </PrimaryBtn>
                {/* <button className="text-sm text-primary font-semibold flex items-center gap-1">
          <Share2 size={16} /> Share
        </button> */}
            </div>
        </>
    )
}

export default ArchiveVolumnHeader
