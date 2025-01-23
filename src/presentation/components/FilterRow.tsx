import styled from "styled-components";
import React from "react";
import { FilterEnum } from "../../business/models/FilterType.ts";
import { useCatsStore } from "../../store/useCatsStore.ts";

export const FilterRow: React.FC = () => {
  const { filters, saveFiltersToStore, resetFilters } = useCatsStore();

  const handleToggleFilter = (filterName: FilterEnum) => {
    if (filterName === FilterEnum.All) {
      resetFilters();
      return;
    }
    // can handle several active filters
    saveFiltersToStore({
      ...filters,
      [FilterEnum.All]: false,
      [filterName]: !filters[filterName],
    });
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
  gap: 1rem;
`;

const Button = styled.button<{ $active: boolean }>`
  padding: 1rem;
  font-weight: bold;
  border: 2px solid ${(props) => (props.$active ? "blue" : "white")};
  border-radius: 0.5rem;
  background-color: #c8c8c8;
  color: #6a6a6a;
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
