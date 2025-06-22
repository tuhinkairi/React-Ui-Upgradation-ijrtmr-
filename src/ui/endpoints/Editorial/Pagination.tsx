import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex gap-6 justify-center">
            <button onClick={()=>onPageChange(currentPage-1)}><BiLeftArrow className="text-primary"/></button>
            <div className="flex gap-2">
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`w-8 h-10 rounded-md border border-primary font-medium transition 
                        ${page === currentPage
                            ? 'bg-primary text-white'
                            : 'bg-white text-primary hover:bg-primary-hover hover:text-white'
                        }`}
                >
                    {page}
                </button>
            ))}
            </div>
            <button onClick={()=>onPageChange(currentPage+1)}><BiRightArrow className="text-primary" /></button>
        </div>
    );
};
