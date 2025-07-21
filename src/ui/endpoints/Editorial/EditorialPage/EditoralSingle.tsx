import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../lib/store/store'
import Title from '../../../other/Title'
import AuthorProfile from './AuthorProfile'
import ResearchAreaCard from './ResearchAreaCard'
import { useEffect } from 'react'
import { setLoading } from '../../../../lib/store/Features/loadingSlice'
import { setCurrentPage, setPerPage, setTotalItems, setTotalPages } from '../../../../lib/store/Features/paginationSlice'
import { setCurrentMember, setEditorialMembers } from '../../../../lib/store/Features/editorialSlice'
import { editorialFetch } from '../../../../lib/axios/api/editorial'
import Loading from '../../../components/Loading'

export default function EditoralSingle() {
    const { slug } = useParams();
    const memberId = slug?.split("&")[0].split("=")[1]
    const memberName = slug?.split("&")[1]?.split("=")[1];
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const editorialList = useAppSelector(state => state.editorial.editorialMembers);
    const loading = useAppSelector(state => state.loadingScreen.loading);

    const editorialMember = useAppSelector((state) => state.editorial.currentMember)

    useEffect(() => {
        if (!editorialMember) {
            if (editorialList) {
                const activeUSER = editorialList.filter(member => member.member_id.toString() === memberId && member.member_name === memberName)[0];
                if (activeUSER) {
                    dispatch(setCurrentMember(activeUSER));
                }
            }
            const fetchMembers = async () => {
                dispatch(setLoading(true));
                try {
                    const data = await editorialFetch();
                    dispatch(setEditorialMembers(data));

                    if (!data.filter(member => member.member_id.toString() === memberId && member.member_name === memberName)[0]) {
                        navigate('/editorial-board');
                        return;
                    }
                    const activeUSER = data.filter(member => member.member_id.toString() === memberId && member.member_name === memberName)[0];
                    if (activeUSER) {
                        dispatch(setCurrentMember(activeUSER));
                    }

                    const itemsPerPage = 10;
                    const totalPagesCount = Math.ceil(data.length / itemsPerPage);

                    dispatch(setTotalItems(data.length));
                    dispatch(setPerPage(itemsPerPage));
                    dispatch(setTotalPages(totalPagesCount));
                    dispatch(setCurrentPage(1));
                } catch (error) {
                    console.error('Error fetching editorial members:', error);
                } finally {
                    dispatch(setLoading(false));
                }
            };

            fetchMembers();
        }
    }, [dispatch, editorialList, editorialMember, memberId, memberName, navigate]);

    if (loading) {
        return <Loading title='Editor Details..' />
    }
    return (
        <section className="w-full sm:grid sm:grid-cols-5 px-6 md:px-10 lg:px-16 gap-y-5 gap-10 ">
            <div className='col-span-5'>
                <Title>Editorial Board</Title>
            </div>
            <div className='hidden sm:block sm:col-span-2 xl:col-span-1 space-y-6 mx-auto sm:mx-0'>
                <img loading='lazy'
                    src={editorialMember?.member_image_url} className='w-full max-w-60 rounded-2xl  aspect-square object-cover object-center' alt="img" />
                <div className='socials grid grid-cols-2 items-center justify-center gap-2 gap-y-6'>
                    {editorialMember?.member_linkedin ? <Link to={editorialMember?.member_linkedin}>
                        <span className='flex-col flex items-center justify-center gap-2'>
                            <img loading='lazy'
                                src="/editorial/board/linkedin.webp" className='w-10' alt="linkedin" />
                            <span className='text-[15px] text-[#2f2f2f]'>LinkedIn</span>
                        </span>
                    </Link> :
                        <>
                            <span className='flex-col flex items-center justify-center gap-2'>
                                <img loading='lazy'
                                    src="/editorial/board/orcid.png" className='w-10' alt="ORCID ID" />
                                <span className='text-[15px] text-[#2f2f2f]'>ORCID ID</span>
                            </span>
                            <span className='flex-col flex items-center justify-center gap-2'>
                                <img loading='lazy'
                                    src="/editorial/board/scopus.png" className='w-10' alt="Scopus ID" />
                                <span className='text-[15px] text-[#2f2f2f]'>Scopus ID</span>
                            </span>
                            <span className='flex-col flex items-center justify-center gap-2'>
                                <img loading='lazy'
                                    src="/editorial/board/researcher.png" className='w-10' alt="linkedin" />
                                <span className='text-[15px] text-[#2f2f2f]'>Researcher  ID</span>
                            </span>
                            <span className='flex-col flex items-center justify-center gap-2'>
                                <img loading='lazy'
                                    src="/editorial/board/scholar.png" className='w-10' alt="linkedin" />
                                <span className='text-[15px] text-[#2f2f2f] md:whitespace-normal'>Google Scholar ID</span>
                            </span>
                            <span className='flex-col flex items-center justify-center gap-2'>
                                <img loading='lazy'
                                    src="/editorial/board/linkedin.webp" className='w-10' alt="linkedin" />
                                <span className='text-[15px] text-[#2f2f2f]'>LinkedIn</span>
                            </span>
                        </>
                    }
                </div>
                <ResearchAreaCard des={editorialMember?.member_researcharea?.split(",") || []} />
            </div>
            <div className='sm:col-span-3 xl:col-span-4'>
                <AuthorProfile member={editorialMember} />
            </div>
        </section>
    )
}
