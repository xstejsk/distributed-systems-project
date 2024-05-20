import { useTableControls } from "../hooks/useTableControls";
import { useSearchParams } from "react-router-dom";

type PaginationProps = {
  isLoading: boolean;
  isError: boolean;
  totalPages: number;
};

const Pagination = ({ isLoading, isError, totalPages }: PaginationProps) => {
  const {
    handleNextPage,
    handlePreviousPage,
    handleJumpToPage,
    reachablePages,
  } = useTableControls({
    isLoading: isLoading,
    isError: isError,
    totalPages: totalPages,
  });

  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page"));

  console.log("currentPage", currentPage);

  return (
    <div className=" p-5 flex items-center justify-center">
      <nav aria-label="Page navigation example">
        <ul className="list-style-none flex">
          <li>
            <button
              className={`relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 ${
                currentPage === 0
                  ? ""
                  : "dark:hover:bg-neutral-700 dark:hover:text-white hover:bg-neutral-100"
              } `}
              onClick={handlePreviousPage}
              disabled={currentPage === 0}
            >
              Previous
            </button>
          </li>
          {reachablePages(2).map((page) => (
            <li key={page}>
              <button
                className={`relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 dark:bg-neutral-700 ${
                  // currentPage === page
                  //   ? `${darkMode ? "text-[#9C00A9]" : " text-blue-600"}`
                  //   : "hover:bg-neutral-100"
                  currentPage === page ? ` text-blue-500` : ""
                }`}
                disabled={currentPage === page}
                onClick={() => handleJumpToPage(page)}
              >
                {page + 1}
              </button>
            </li>
          ))}

          <li>
            <button
              className="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
