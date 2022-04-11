import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { SingleVideo } from "./videoGrid/SingleVideo";

export const Paginate = ({ data, type }) => {
  const [pageNumber, setPAgeNumber] = useState(0);

  const dataPerPage = 18;
  const pagesVisited = pageNumber * dataPerPage;

  const DisplayData = data
    .slice(pagesVisited, pagesVisited + dataPerPage)
    .map((item, index) => {
      return <SingleVideo key={index} item={item} type={type} />;
    });

  const pageCount = Math.ceil(data.length / dataPerPage);
  const pageChange = ({ selected }) => {
    setPAgeNumber(selected);
  };

  return (
    <>
      <div className='paginate'>{DisplayData}</div>{" "}
      <div className='paginate-btn-container'>
        <ReactPaginate
          previousLabel='prev'
          nextLabel='next'
          pageCount={pageCount}
          onPageChange={pageChange}
          containerClassName='paginationBtn'
          previousLinkClassName='prevBtn btn'
          nextLinkClassName='nextBtn btn'
          disableClassName='paginationDisabled'
          activeClassName='paginationActive'
        />
      </div>
    </>
  );
};
