import styled from "styled-components";
import React from "react";
import { CatTile } from "./CatTile.tsx";
import { useFetchCats } from "../../business/hooks/useGetCats.tsx";

export const CatTilesGrid: React.FC = () => {
  const { cats, isLoading } = useFetchCats();

  return (
    <>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <GridContainer>
          {cats &&
            cats.map((cat) => {
              return <CatTile key={cat.id} cat={cat}></CatTile>;
            })}
        </GridContainer>
      )}
    </>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;
