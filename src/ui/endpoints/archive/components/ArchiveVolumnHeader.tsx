import { useCallback, useEffect, useState } from 'react'
import PrimaryBtn from '../../../components/Btns/PrimaryBtn'
import { Share2 } from 'lucide-react'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { useAppSelector } from '../../../../lib/store/store'
import { Link, redirect } from 'react-router-dom'
import type { ActiveIndexArchive } from '../../../../types/Api'

function ArchiveVolumnHeader({setArchiveIndex}:{setArchiveIndex:(arg:ActiveIndexArchive)=>void}) {
    const { activeIndexPage: ActiveVolumes, indexPage: VolumeList } = useAppSelector((state) => state.archiveSection)
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
        if (currentVolume && currentIssue && currentYear) {
            const data: ActiveIndexArchive = {
                volume: currentVolume,
                issue: currentIssue,
                year: currentYear,
            };
            setArchiveIndex(data);
            // dispatch(setActiveIndexVolume(data));
        }
    }, [currentVolume, currentIssue, currentYear,updateData,setArchiveIndex]);


    const handleVolumeClick = useCallback((volume: string) => {
        setActive(volume)
        setCurrentYear(volume.split(" ")[2].split("(")[1].split(")")[0])
        setCurrentVolume(volume.split(" ")[1].split(",")[0])
    }, [])

    const handleIssueClick = useCallback((issue: string) => {
        setActiveIssue(issue)
        setCurrentIssue(issue.split(" ")[1])
    }, [])


    const handlePrevious = useCallback(() => {
        const currentIndex = volumes.indexOf(active)
        if (currentIndex > 0) setActive(volumes[currentIndex - 1])

    }, [volumes, active])

    const handleNext = useCallback(() => {
        const currentIndex = volumes.indexOf(active)
        if (currentIndex < volumes.length - 1) setActive(volumes[currentIndex + 1])
    }, [volumes, active])

    const handlePreviousIssue = useCallback(() => {
        const currentIndex = issues.indexOf(activeIssue)
        if (currentIndex > 0) setActiveIssue(issues[currentIndex - 1])
    }, [issues, activeIssue])

    const handleNextIssue = useCallback(() => {
        const currentIndex = issues.indexOf(activeIssue)
        if (currentIndex < issues.length - 1) setActiveIssue(issues[currentIndex + 1])
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
