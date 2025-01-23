import React from "react";

import styled from "styled-components";
import { FilterRow } from "./components/FilterRow.tsx";
import { CatList } from "./components/CatList.tsx";
import { Pagination } from "./components/Pagination.tsx";

export const CatsPage: React.FC = () => {
  return (
    <PageLayout>
      <FilterRow />
      <CatList />
      <Pagination />
    </PageLayout>
  );
};

const PageLayout = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1rem;
  max-width: 800px; // could change max-width to some breakpoint, later
  position: relative;
`;
