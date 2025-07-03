import { useState, useEffect } from 'react';

interface PaginationHook {
  pageNumber: number;
  setPageNumber: (page: number) => void;
  pageList: number[];
  limit: number;
}

export const usePagination = (totalItems: number, totalPage: number): PaginationHook => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [limit, setLimit] = useState<number>(totalPage < 5 ? totalPage : 5);
  const [pageList, setPageList] = useState<number[]>([]);

  useEffect(() => {
    const pageListing = Array.from({ length: totalItems }, (_, i) => i + 1);

    if (pageNumber > 0 && pageNumber <= pageListing.length) {
      if (pageNumber > limit) {
        setPageList(pageListing.slice(pageNumber - 1, pageNumber + 4));
        setLimit(prev => prev + 5);
      } else if (pageList.length > 0 && pageNumber < pageList[0]) {
        setPageList(pageListing.slice(Math.max(0, pageNumber - 5), pageNumber));
        setLimit(prev => Math.max(5, prev - 5));
      } else if (pageList.length === 0 && totalItems > 0) {
        const initialLimit = totalPage < 5 ? totalPage : 5;
        setPageList(pageListing.slice(0, initialLimit));
      }
    }
  }, [pageNumber, totalItems, totalPage, limit, pageList]);

  return { pageNumber, setPageNumber, pageList, limit };
};