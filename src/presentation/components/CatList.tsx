import styled from "styled-components";
import React from "react";
import { CatTile } from "./CatTile.tsx";
import { useGetCats } from "../../business/hooks/useGetCats.ts";
import { Loading } from "./LoadingStyle.ts";

export const CatList: React.FC = () => {
  const { cats, isLoading, error } = useGetCats();

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
