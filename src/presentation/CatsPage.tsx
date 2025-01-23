import React from "react";

import styled from "styled-components";
import { FilterRow } from "./components/FilterRow.tsx";
import { CatTilesGrid } from "./components/CatTilesGrid.tsx";

export const CatsPage: React.FC = () => {
  return (
    <PageLayout>
      <FilterRow />
      <CatTilesGrid />
    </PageLayout>
  );
};

const PageLayout = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1rem;
  max-width: 1000px; // could change max-width to some breakpoint, later
  position: relative;
`;
