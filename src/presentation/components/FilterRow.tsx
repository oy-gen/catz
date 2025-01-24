import styled from "styled-components";
import React, { useCallback, useMemo } from "react";
import { FilterEnum } from "../../business/models/FilterEnum.ts";
import { useCatsStore } from "../../store/useCatsStore.ts";

export const FilterRow: React.FC = () => {
  const { filters, saveFilters, resetFilters, saveCurrentPage } =
    useCatsStore();
  const filterKeys: string[] = useMemo(() => Object.keys(filters), [filters]);

  const handleToggleFilter = useCallback(
    (filterName: FilterEnum) => {
      if (filterName === FilterEnum.All) {
        resetFilters();
        return;
      }
      saveFilters({
        ...filters,
        [FilterEnum.All]: false,
        [filterName]: !filters[filterName],
      });
      saveCurrentPage(1);
    },
    [filters],
  );

  return (
    <ButtonContainer>
      {filterKeys.map((filterName) => {
        return (
          <Button
            key={filterName}
            onClick={() => handleToggleFilter(filterName as FilterEnum)}
            $isActive={filters[filterName as FilterEnum]}
          >
            {filterName}
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

const Button = styled.button<{ $isActive?: boolean }>`
  padding: 0.5rem 1rem;
  font-weight: bold;
  border: 2px solid ${(props) => (props.$isActive ? "#4886a6" : "#c8c8c8")};
  border-radius: 0.5rem;
  background-color: ${(props) => (props.$isActive ? "#dcdcdc" : "white")};
  color: #3e3e3e;
  cursor: pointer;
  transition: background-color 0.25s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    filter: grayscale(100);
  }
`;
