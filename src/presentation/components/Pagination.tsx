import React from "react";
import { useCatsStore } from "../../store/useCatsStore.ts";

export const Pagination: React.FC = () => {
  // quick and dirty implementation, no styling
  // we should actually prefetch entries count for good pagination. no time
  const { currentPage, saveCurrentPage } = useCatsStore();

  const handleDecrement = () => {
    if (currentPage < 2) {
      return;
    }
    store.set;
    saveCurrentPage(currentPage - 1);
  };

  const handleIncrement = () => {
    saveCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      {currentPage}
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};
