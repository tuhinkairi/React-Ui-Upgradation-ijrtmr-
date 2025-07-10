import { useCallback, useEffect, useState } from 'react'
import PrimaryBtn from '../../../components/Btns/PrimaryBtn'
import { Share2} from 'lucide-react'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
// import { useAppSelector } from '../../../../lib/store/store'
import { Link, redirect } from 'react-router-dom'
import type { ActiveIndexArchive, ArchiveIndexVolume } from '../../../../types/Api'

function ArchiveVolumnHeader({ setArchiveIndex, ActiveVolumes, VolumeList }: { setArchiveIndex: (arg: ActiveIndexArchive) => void, ActiveVolumes: ActiveIndexArchive | null, VolumeList: ArchiveIndexVolume[] }) {
    // const { activeIndexPage: ActiveVolumes, indexPage: VolumeList } = useAppSelector((state) => state.archiveSection)
    const [volumes, setVolumes] = useState<string[]>([])
    const [active, setActive] = useState<string>(`Volume ${ActiveVolumes?.volume}, (${ActiveVolumes?.year})`)
    const [activeIssue, setActiveIssue] = useState<string>(`Issue ${ActiveVolumes?.issue}`)
    const [issues, setIssue] = useState<string[]>([])

    // track current
    const [currentIssue, setCurrentIssue] = useState<string>(ActiveVolumes?.issue ?? "")
    const [currentVolume, setCurrentVolume] = useState<string>(ActiveVolumes?.volume ?? "")
    const [currentYear, setCurrentYear] = useState<string>(ActiveVolumes?.year ?? "")

    const updateData = useCallback(() => {
        if (!ActiveVolumes) return redirect("/archives")

        const dataVolume = VolumeList.find(volume => volume.year === ActiveVolumes.year)

        if (dataVolume) {
            const issueList = dataVolume.volumes.map(({ issue }) => issue)
            const data = issueList[0].map(issue => `Issue ${issue}`)
            setIssue(data)

            const modifiedVolumes = VolumeList.map(({ volumes: [{ volume }], year }) =>
                `Volume ${volume}, (${year})`
            )
            setVolumes(modifiedVolumes)
        }
    }, [ActiveVolumes, VolumeList])


    useEffect(() => {
        updateData()

    }, [updateData]);


    const handleVolumeClick = useCallback((volume: string) => {
    setActive(volume);
    const year = volume.split(" ")[2].split("(")[1].split(")")[0];
    const vol = volume.split(" ")[1].split(",")[0];
    setCurrentYear(year);
    setCurrentVolume(vol);
    setArchiveIndex({ volume: vol, issue: currentIssue, year });  // SET INDEX HERE
}, [currentIssue, setArchiveIndex]);

const handleIssueClick = useCallback((issue: string) => {
    setActiveIssue(issue);
    const iss = issue.split(" ")[1];
    setCurrentIssue(iss);
    setArchiveIndex({ volume: currentVolume, issue: iss, year: currentYear });  // SET INDEX HERE
}, [currentVolume, currentYear, setArchiveIndex]);



    const handlePrevious = useCallback(() => {
        const currentIndex = volumes.indexOf(active)
        const newVolume = volumes[currentIndex - 1]
        if (currentIndex > 0) setActive(newVolume)

    }, [volumes, active,])

    const handleNext = useCallback(() => {
        const currentIndex = volumes.indexOf(active)
        const newVolume = volumes[currentIndex + 1]
        if (currentIndex < volumes.length - 1) setActive(newVolume)

    }, [volumes, active])

    const handlePreviousIssue = useCallback(() => {
        const currentIndex = issues.indexOf(activeIssue)
        const newIndex = issues[currentIndex - 1]
        if (currentIndex > 0) setActiveIssue(newIndex)

    }, [issues, activeIssue])

    const handleNextIssue = useCallback(() => {
        const currentIndex = issues.indexOf(activeIssue)
        const newIndex = issues[currentIndex + 1]
        if (currentIndex < issues.length - 1) setActiveIssue(newIndex)
    }, [issues, activeIssue])

    return (
        <>
            <div className="flex flex-wrap justify-between items-center gap-2 gap-x-5 text-base font-medium">
                <button onClick={handlePrevious}><GrFormPrevious className="text-primary-text" /></button>
                {volumes.map((volume, idx) => (
                    <span
                        key={idx}
                        onClick={() => handleVolumeClick(volume)}
                        className={`cursor-pointer ${active === volume && "text-primary font-semibold text-2xl"}`}
                    >
                        {volume}
                    </span>
                ))}
                <button onClick={handleNext}><GrFormNext className="text-primary-text" /></button>
                <Link to={'/archives'} className="cursor-pointer text-primary">See all volumes</Link>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex gap-2">
                    <button onClick={handlePreviousIssue}><GrFormPrevious className="text-primary-text text-base" /></button>
                    {issues.map((issue, index) => (
                        <button
                            key={index}
                            onClick={() => handleIssueClick(issue)}
                            className={`flex whitespace-nowrap justify-between items-center w-full px-8 py-3 font-medium rounded-md transition 
                                ${issue === activeIssue
                                    ? "text-white bg-gradient-to-b from-[#FF8C42] to-[#995428] "
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
