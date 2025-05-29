import React from "react";

const PaginationNum = ({
  noOfPages,
  currentPage,
  gotToNextPage,
  gotToPreviousPage,
  handlePageChange,
}) => {
  return (
    <>
      <div className="pagination-number-container">
        <button
          disabled={currentPage === 0}
          className="page-nums"
          onClick={() => gotToPreviousPage()}
        >
          ⬅️
        </button>
        {[...Array(noOfPages).keys()].map((n) => (
          <button
            className={`page-nums ${n == currentPage ? "active" : ""}`}
            key={n}
            onClickCapture={() => handlePageChange(n)}
          >
            {n}
          </button>
        ))}
        <button
          disabled={currentPage === noOfPages - 1}
          className="page-nums"
          onClick={() => gotToNextPage()}
        >
          ➡️
        </button>
      </div>
    </>
  );
};

export default PaginationNum;
