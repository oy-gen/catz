import styled from "styled-components";
import React from "react";
import { FilterEnum } from "../../business/models/Filters.ts";
import { useCatsStore } from "../../store/useCatsStore.ts";

export const FilterRow: React.FC = () => {
  const { filters, saveFiltersToStore, resetFilters, saveCurrentPage } =
    useCatsStore();

  const handleToggleFilter = (filterName: FilterEnum) => {
    if (filterName === FilterEnum.All) {
      resetFilters();
      return;
    }
    // handles several active filters
    saveFiltersToStore({
      ...filters,
      [FilterEnum.All]: false,
      [filterName]: !filters[filterName],
    });
    // reset currentPage on filter change
    saveCurrentPage(1);
  };

  return (
    <ButtonContainer>
      {Object.keys(filters).map((filter) => {
        return (
          <Button
            key={filter}
            onClick={() => handleToggleFilter(filter as FilterEnum)}
            $active={filters[filter as FilterEnum]}
          >
            {filter}
          </Button>
        );
      })}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Button = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  font-weight: bold;
  border: 2px solid ${(props) => (props.$active ? "#4886a6" : "#c8c8c8")};
  border-radius: 0.5rem;
  background-color: ${(props) => (props.$active ? "#dcdcdc" : "white")};
  color: #3e3e3e;
  cursor: pointer;
  transition: background-color 0.25s;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    border-color: aqua;
  }

  &:disabled {
    filter: grayscale(100);
  }
`;
