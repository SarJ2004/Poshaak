import React, { useState } from "react";
import ProductCard from "./ProductCard";

function Products({ products }) {
  const [visible, setVisible] = useState(4);
  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const updateVisible = () => {
    setVisible((prev) => prev + 4);
  };
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };
  const filteredItems = products.filter(
    (item) => filter === "" || item.category === filter
  );
  const sortedItems = [...filteredItems];
  sortedItems.sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });
  console.log(filteredItems);
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center rounded-md">
          Shopping Everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit voluptates doloremque unde temporibus aut! Dolore,
          dolorum? Ut, dolor iure. Qui, possimus consequuntur. Tenetur libero
          rerum, numquam sit iusto expedita ullam!
        </p>
      </div>
      <div className="flex justify-center mt-4 gap-8">
        <div>
          <label>Filter by category:&nbsp;</label>
          <select value={filter} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="men">Male</option>
            <option value="women">Female</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <div>
          <label>Sort by price: </label>
          <select value={sortOrder} onChange={handleSortOrderChange}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {sortedItems.slice(0, visible).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <button
        className="align-middle  select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 mx-auto rounded-lg border border-gray-900 text-gray-900 hover:bg-black hover:text-white  active:opacity-[0.85] flex items-center gap-3 focus:ring-0"
        type="button"
        onClick={updateVisible}
        disabled={visible >= filteredItems.length}>
        Load More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path>
        </svg>
      </button>
    </div>
  );
}

export default Products;
