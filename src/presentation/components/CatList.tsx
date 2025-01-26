import styled from "styled-components";
import React from "react";
import { CatTile } from "./CatTile.tsx";
import { useFetchCats } from "../../business/hooks/useFetchCats.ts";
import { Loading } from "./styled-components/LoadingStyle.ts";
import { useCatsStore } from "../../store/useCatsStore.ts";
import { catsSelector } from "../../store/selectors/catsSelector.ts";

export const CatList: React.FC = () => {
  const { isLoading, error } = useFetchCats();
  const { cats } = useCatsStore(catsSelector);

  if (isLoading) {
    return <Loading>Loading ...</Loading>;
  }

  if (error) {
    return <Error>{error}</Error>;
  }

  return (
    <>
      <GridContainer>
        {cats.map((cat) => {
          return <CatTile key={cat.id} cat={cat}></CatTile>;
        })}
      </GridContainer>
    </>
  );
};

const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
  gap: 1rem;
`;

const Error = styled.p`
  color: darkred;
  font-weight: bolder;
`;
