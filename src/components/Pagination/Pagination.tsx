import { FC } from 'react';

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  goToPage: (pageNumber: number) => void;
}

export const Pagination: FC<PaginationProps> = ({ pageCount, currentPage, goToPage }) => {
  return (
    <div className=" mx-auto flex justify-center mt-auto">
      {Array.from({ length: pageCount }, (_, i) => i + 1).map(pageNumber => (
        <button
          key={pageNumber}
          onClick={() => goToPage(pageNumber)}
          className={`px-3 py-1 border ${
            currentPage === pageNumber ? 'border-blue-500' : 'border-gray-300'
          }`}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};
