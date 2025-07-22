import { useCallback, useEffect, useState } from 'react'
import PrimaryBtn from '../../../components/Btns/PrimaryBtn'
import { Share2 } from 'lucide-react'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
// import { useAppSelector } from '../../../../lib/store/store'
import { Link, redirect, useLocation } from 'react-router-dom'
import type { ActiveIndexArchive, ArchiveIndexVolume, ThesisIndexingItem } from '../../../../types/Api'

function ArchiveVolumnHeader({ isArchive, setArchiveIndex, ActiveVolumes, VolumeList }: { isArchive: boolean, setArchiveIndex: (arg: ActiveIndexArchive) => void, ActiveVolumes: ActiveIndexArchive | null, VolumeList?: ArchiveIndexVolume[], ThesisVolumeList?: ThesisIndexingItem[] }) {
    // const { activeIndexPage: ActiveVolumes, indexPage: VolumeList } = useAppSelector((state) => state.archiveSection)
    const path = useLocation().pathname
    const thesisState = path.includes("/thesis")
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

        const dataVolume = VolumeList && VolumeList.find(volume => volume.year === ActiveVolumes.year)

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
        handleVolumeClick(newVolume)
    }, [volumes, active, handleVolumeClick])

    const handleNext = useCallback(() => {
        const currentIndex = volumes.indexOf(active)
        const newVolume = volumes[currentIndex + 1]
        if (currentIndex < volumes.length - 1) setActive(newVolume)
        handleVolumeClick(newVolume)

    }, [volumes, active, handleVolumeClick])

    const handlePreviousIssue = useCallback(() => {
        const currentIndex = issues.indexOf(activeIssue)
        const newIndex = issues[currentIndex - 1]
        if (currentIndex > 0) setActiveIssue(newIndex)
        handleIssueClick(newIndex)
    }, [issues, activeIssue, handleIssueClick])

    const handleNextIssue = useCallback(() => {
        const currentIndex = issues.indexOf(activeIssue)
        const newIndex = issues[currentIndex + 1]
        if (currentIndex < issues.length - 1) setActiveIssue(newIndex)
        handleIssueClick(newIndex)

    }, [issues, activeIssue, handleIssueClick])

    return (
        <>
            <div className="flex flex-wrap sm:flex-nowrap justify-start items-center gap-2 text-base font-medium">
                <div className='w-full sm:max-w-3/4 lg:max-w-5/6 flex items-center gap-2'>
                    <button onClick={handlePrevious}><GrFormPrevious className="text-primary-text text-2xl " /></button>
                    <div className="flex justify-start w-full gap-2 overflow-auto" style={{ scrollbarWidth: 'thin' }}>
                        {volumes.map((volume, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleVolumeClick(volume)}
                                className={`cursor-pointer  whitespace-nowrap w-fit ${active === volume && "text-primary font-semibold text-2xl"}`}
                            >
                                {volume}
                            </button>
                        ))}
                    </div>
                    <button onClick={handleNext}><GrFormNext className="text-primary-text text-2xl" /></button>
                </div>
                <Link to={thesisState ? "/thesis" : '/archives'} className="cursor-pointer text-primary font-medium max-w-1/4 whitespace-nowrap">See all volumes</Link>
            </div>

            {isArchive && !thesisState && <div className="flex flex-wrap sm:flex-nowrap gap-2 items-center justify-start">
                <div className='w-full sm:max-w-3/4 lg:max-w-5/6 xl:w-fit flex items-center gap-2'>
                    <button onClick={handlePreviousIssue}><GrFormPrevious className="text-primary-text text-2xl" /></button>
                    <div className="flex justify-start w-full gap-2  overflow-auto" style={{ scrollbarWidth: 'thin' }}>
                        {issues.map((issue, index) => (
                            <button
                                key={index}
                                onClick={() => handleIssueClick(issue)}
                                className={`flex whitespace-nowrap justify-between items-center w-fit px-8 py-3 font-medium rounded-md transition 
                            ${issue === activeIssue
                                        ? "text-white bg-gradient-to-b from-[#FF8C42] to-[#995428] "
                                        : "hover:text-white bg-gradient-to-b hover:from-[#FF8C42] hover:to-[#995428] from-[#fae0d0] to-[#fae0d0] text-primary-text"
                                    }`}
                            >
                                {issue}
                            </button>
                        ))}
                    </div>
                    <button onClick={handleNextIssue}><GrFormNext className="text-primary-text text-2xl" /></button>
                </div>

                <PrimaryBtn className="rounded-full px-2" event={() => {
                    navigator.clipboard.writeText(`${window.location.origin}${path}`)
                }}>
                    <Share2 size={16} /> Share
                </PrimaryBtn>
            </div>}
        </>
    )
}

export default ArchiveVolumnHeader
