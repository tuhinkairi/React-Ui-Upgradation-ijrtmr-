import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    rangeList?: number[];
}

export const Pagination = ({ currentPage, totalPages, onPageChange,rangeList }: PaginationProps) => {
    let currentIndex = currentPage - 1;
    
    const pages = Array.from({ length: totalPages }, () => currentIndex++).map((page) => page + 1);
    
    return (
        <div className="flex gap-6 justify-center">
            <button onClick={()=>currentPage>1 && onPageChange(currentPage-1)}><BiLeftArrow className="hover:text-primary"/></button>
            <div className="flex gap-6">
            {rangeList? rangeList.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`w-8 h-8 rounded-sm border border-primary font-medium transition 
                        ${page === currentPage
                            ? 'bg-primary text-white'
                            : 'bg-white text-primary hover:bg-primary-hover hover:text-white'
                        }`}
                >
                    {page}
                </button>
            )):pages.map((page) => (
                <button
                    key={page}
                    onClick={() =>totalPages>currentPage && onPageChange(page)}
                    className={`w-8 h-8 rounded-sm border border-primary font-medium transition 
                        ${page === currentPage
                            ? 'bg-primary text-white'
                            : 'bg-white text-primary hover:bg-primary-hover hover:text-white'
                        }`}
                >
                    {page}
                </button>
            ))
        }
            </div>
            <button onClick={()=>totalPages>currentPage && onPageChange(currentPage+1)}><BiRightArrow className="hover:text-primary" /></button>
        </div>
    );
};
