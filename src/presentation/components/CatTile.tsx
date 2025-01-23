import styled from "styled-components";
import React from "react";
import { Cat } from "../../business/models/CatModel.ts";
import { useCatsStore } from "../../store/useCatsStore.ts";
import { useGetCatImage } from "../../business/hooks/useGetCatImage.tsx";

interface Props {
  cat: Cat;
}

export const CatTile: React.FC<Props> = ({ cat }) => {
  const { saveCatImageToStore } = useCatsStore();
  // const tags = cat.tags.filter((tag) =>
  //   Object.entries(filters).includes([tag, true]),
  // );

  const handleTileClick = () => {
    // dirty calculating of image width
    const width = Math.max(window.innerWidth - 100, 1000);
    // needs refactoring
    saveCatImageToStore({
      [cat.id]: {
        width: width,
        catImage: "",
      },
    });
  };

  return (
    <Tile key={cat.id} onClick={handleTileClick}>
      <Size>{cat.size}</Size>
      <img id={cat.id} src={cat.url} alt={cat.id} />
      <Tag>{cat.tags[0]}</Tag>
    </Tile>
  );
};

const Tile = styled.div`
  border-radius: 2rem;
  background-color: #c2ea9d;
  position: relative;
`;
const Tag = styled.div`
  border-radius: 0.2rem;
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  background-color: black;
  color: white;
`;
const Size = styled.div`
  border-radius: 0.2rem;
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  background-color: black;
  color: white;
`;
