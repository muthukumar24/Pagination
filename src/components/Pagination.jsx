import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { PAGE_SIZE } from "../constants";
import PaginationNum from "./PaginationNum";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=500");
    const data = await response.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePageChange = (n) => {
    setCurrentPage(n);
  };

  const gotToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const gotToPreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="main-container">
      <h2>Pagination</h2>

      <PaginationNum
        noOfPages = {noOfPages}
        currentPage = {currentPage}
        gotToNextPage = {gotToNextPage}
        gotToPreviousPage ={gotToPreviousPage}
        handlePageChange = {handlePageChange}
      />

      {products.length == 0 ? (
        <h3>No Products Found</h3>
      ) : (
        <div className="products-container">
          {products.slice(start, end).map((p) => (
            <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Pagination;
