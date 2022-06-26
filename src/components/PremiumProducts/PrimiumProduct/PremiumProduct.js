import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./PremiumProduct.css";

const PremiumProduct = (props) => {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="products grid grid-cols-3 grid-flow-row place-items-center gap-y-5 mt-5">
        {currentItems.map((product) => {
          return (
            <div className="premiumProduct">
              <img className="p-3" src={product.img} alt={product.name} />
              <div className="premiumBtn flex justify-center items-center">
                <div class="box">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <button className="btn btn-sm btn-primary">See More</button>
              </div>
            </div>
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="pageNum"
        previousLinkClassName="pageNum"
        nextLinkClassName="pageNum"
        activeLinkClassName="active"
      />
    </>
  );
};

export default PremiumProduct;
