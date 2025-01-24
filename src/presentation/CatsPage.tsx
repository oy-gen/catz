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
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  position: relative;
`;
