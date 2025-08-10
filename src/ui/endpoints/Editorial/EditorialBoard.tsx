// Fixed EditorBoard component
import { useEffect, useState } from "react";
import Title from "../../other/Title";
import { AdvisoryBoardCard } from "./AdvisoryBoardCard";
import { ContactCard } from "./ContractCard";
import { Pagination } from "./Pagination";
import { useNavigate } from "react-router-dom";
import type { EditorialMember } from "../../../types/Api";
import { editorialFetch } from "../../../lib/axios/api/editorial";
import { useAppDispatch, useAppSelector } from "../../../lib/store/store";
import { setCurrentMember, setEditorialMembers } from "../../../lib/store/Features/editorialSlice";
import { setLoading } from "../../../lib/store/Features/loadingSlice";
import Loading from "../../components/Loading";
import { setCurrentPage, setPerPage, setTotalItems, setTotalPages } from "../../../lib/store/Features/paginationSlice";

const EditorBoard = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    
    // Redux state
    const current_page = useAppSelector(state => state.pagination.current_page);
    const totalPages = useAppSelector(state => state.pagination.total_pages);
    const perPage = useAppSelector(state => state.pagination.per_page);
    // const totalItems = useAppSelector(state => state.pagination.total_items);
    const editorialStore = useAppSelector(state => state.editorial.editorialMembers);
    const loading = useAppSelector(state => state.loadingScreen.loading);
    
    // Local state for all editorial members
    const [allEditorialMembers, setAllEditorialMembers] = useState<EditorialMember[]>([]);
    
    // Calculate current page items
    const startIndex = (current_page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const currentPageItems = allEditorialMembers.slice(startIndex, endIndex);
    
    // Generate visible page numbers (show max 5 pages)
    const getVisiblePages = () => {
        const maxVisible = 5;
        if (totalPages <= maxVisible) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }
        
        const halfVisible = Math.floor(maxVisible / 2);
        let startPage = Math.max(1, current_page - halfVisible);
        let endPage = Math.min(totalPages, current_page + halfVisible);
        
        // Adjust if we're near the beginning or end
        if (endPage - startPage + 1 < maxVisible) {
            if (startPage === 1) {
                endPage = Math.min(totalPages, startPage + maxVisible - 1);
            } else if (endPage === totalPages) {
                startPage = Math.max(1, endPage - maxVisible + 1);
            }
        }
        
        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    };
    
    // Fetch editorial members
    useEffect(() => {
        if (editorialStore.length > 0) {
            setAllEditorialMembers(editorialStore);
            return;
        }
        
        const fetchMembers = async () => {
            dispatch(setLoading(true));
            try {
                const data = await editorialFetch();
                // console.log('Fetched editorial data:', data);
                
                setAllEditorialMembers(data);
                dispatch(setEditorialMembers(data));
                
                // Set pagination data
                const itemsPerPage = 10;
                const totalPagesCount = Math.ceil(data.length / itemsPerPage);
                
                dispatch(setTotalItems(data.length));
                dispatch(setPerPage(itemsPerPage));
                dispatch(setTotalPages(totalPagesCount));
                dispatch(setCurrentPage(1)); // Start from page 1
                
            } catch (error) {
                console.error('Error fetching editorial members:', error);
            } finally {
                dispatch(setLoading(false));
            }
        };
        
        fetchMembers();
    }, [dispatch, editorialStore.length, editorialStore]);
    
    // Handle page change
    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages && newPage !== current_page) {
            dispatch(setCurrentPage(newPage));
        }
    };
    // console.log(currentPageItems)
    return (
        <section className="editorial-board-section px-3 sm:px-6 md:px-10 lg:px-16 py-2 space-y-6">
            <Title>Editorial Board</Title>
            {loading ? <Loading /> : (
                <>
                    <div className="grid sm:grid-cols-2 gap-6 justify-center">
                        <ContactCard
                            role="Patron/Editor-in-chief :"
                            name="Dr. S. Sivaganesan"
                            designation="Professor & Head Department of Electrical & Electronics Engineering."
                            organization="Holymary Institute of Technology & Science.  Hyderabad-501301.India"
                            email="editorinchief@ijrtmr.com, sivaganesan@hmgi.ac.in"
                        />
                        <ContactCard
                            role="Managing Editor :"
                            name="Dr. Vetriveeran Rajamani"
                            designation="Associate Professor"
                            organization="Vellore Institute of Technology (VIT) University, Vellore 632 014, Tamil Nadu, India."
                            email="vetriveeran.r@vit.ac.in"
                        />
                    </div>
                    
                    {/* Show only current page items */}
                    <div className="sm:p-4 grid md:grid-cols-2 gap-8 justify-center">
                        {currentPageItems.map((member) => (
                            <AdvisoryBoardCard
                                key={member.member_id}
                                image={member.member_image_url}
                                boardTitle={member.member_role}
                                name={member.member_name}
                                designation={member.member_designation.length > 60 ? member.member_designation.slice(0, 100) + "..." : member.member_designation}
                                address={member.member_address}
                                onViewMore={() => {
                                    dispatch(setCurrentMember(member));
                                    navigate(`/editorial-board/id=${member.member_id}&&name=${member.member_name}`);
                                }}
                            />
                        ))}
                    </div>
                    
                    {/* Pagination - only show if there are multiple pages */}
                    {totalPages > 1 && (
                        <div className="my-10">
                            <Pagination
                                currentPage={current_page}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                                rangeList={getVisiblePages()}
                            />
                        </div>
                    )}
                </>
            )}
        </section>
    );
};
export default EditorBoard;