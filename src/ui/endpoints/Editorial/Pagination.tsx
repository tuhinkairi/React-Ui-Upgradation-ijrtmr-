import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    rangeList?: number[];
}

export const Pagination = ({ currentPage, totalPages, onPageChange, rangeList }: PaginationProps) => {
    // Create pages array correctly
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    
    const scrollToTop = () => {
        setTimeout(() => {
            window.document.getElementById('container-main')?.scrollIntoView({ behavior: 'smooth' });
        }, 0);
    };
    
    const handlePrev = () => {
        if (currentPage > 1) {
            scrollToTop();
            onPageChange(currentPage - 1);
        }
    };
    
    const handleChange = (page: number) => {
        scrollToTop();
        onPageChange(page);
    };
    
    const handleNext = () => {
        if (currentPage < totalPages) {
            scrollToTop();
            onPageChange(currentPage + 1);
        }
    };
    
    return (
        <div className="flex gap-6 justify-center items-center">
            <button 
                onClick={handlePrev}
                disabled={currentPage <= 1}
                className={`p-2 ${currentPage <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:text-primary'}`}
            >
                <BiLeftArrow />
            </button>
            
            <div className="flex gap-6">
                {rangeList ? rangeList.map((page) => (
                    <button
                        key={page}
                        onClick={() => handleChange(page)}
                        className={`w-8 h-8 rounded-sm border border-primary font-medium transition 
                            ${page === currentPage
                                ? 'bg-primary text-white'
                                : 'bg-white text-primary hover:bg-primary-hover hover:text-white'
                            }`}
                    >
                        {page}
                    </button>
                )) : pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => handleChange(page)} // Fixed: was handelNext
                        className={`w-8 h-8 rounded-sm border border-primary font-medium transition 
                            ${page === currentPage
                                ? 'bg-primary text-white'
                                : 'bg-white text-primary hover:bg-primary-hover hover:text-white'
                            }`}
                    >
                        {page}
                    </button>
                ))}
            </div>
            
            <button 
                onClick={handleNext}
                disabled={currentPage >= totalPages}
                className={`p-2 ${currentPage >= totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:text-primary'}`}
            >
                <BiRightArrow />
            </button>
        </div>
    );
};