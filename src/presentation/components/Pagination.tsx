import React, { memo } from "react";
import { useCatsStore } from "../../store/useCatsStore.ts";

export const Pagination: React.FC = memo(() => {
  // quick and dirty implementation, no styling
  // should prefetch count for good pagination. no time
  const { currentPage, saveCurrentPage } = useCatsStore();
  const handleDecrement = () => {
    if (currentPage < 2) {
      return;
    }
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
});
