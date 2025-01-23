import React from "react";
import { useCatsStore } from "../../store/useCatsStore.ts";

export const Pagination: React.FC = () => {
  const { currentPage, saveCurrentPage } = useCatsStore();

  const handleDecrement = () => {
    if (currentPage < 2) {
      return;
    }
    console.log(currentPage);
    saveCurrentPage(currentPage - 1);
  };

  const handleIncrement = () => {
    // we should actually prefetch count for pagination. no time
    saveCurrentPage(currentPage + 1);
    console.log(currentPage);
  };

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      {currentPage}
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};
