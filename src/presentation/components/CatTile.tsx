import styled from "styled-components";
import React, { useMemo, useState } from "react";
import { Cat } from "../../business/models/Cat.ts";
import { useCatsStore } from "../../store/useCatsStore.ts";
import { FilterEnum } from "../../business/models/Filters.ts";
import { Modal } from "./Modal.tsx";
import { ModalCatContent } from "./ModalCatContent.tsx";

interface Props {
  cat: Cat;
}

export const CatTile: React.FC<Props> = ({ cat }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { filters } = useCatsStore();

  const firstMatchingTag: string | null = useMemo(
    () =>
      cat.tags.find((tag) =>
        Object.values(FilterEnum).includes(tag as FilterEnum),
      ) ?? null,
    [filters],
  );

  return (
    <>
      <Tile key={cat.id} onClick={() => setIsModalOpen(true)} $image={cat.url}>
        <Chip $type={"size"}>{cat.size}</Chip>
        {/*<img id={cat.id} src={cat.url} alt={cat.id} loading="lazy" />*/}
        {firstMatchingTag && <Chip $type={"tag"}>{firstMatchingTag}</Chip>}
      </Tile>
      {isModalOpen && (
        <Modal>
          <ModalCatContent
            id={cat.id}
            tag={firstMatchingTag}
            size={cat.size}
            onClose={() => setIsModalOpen(false)}
          />
        </Modal>
      )}
    </>
  );
};

const Tile = styled.li<{ $image: string }>`
  border-radius: 2rem;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
  list-style: none;
  width: 100%;
  padding-top: 100%; /* This makes the element square */
`;
const Chip = styled.div<{ $type: "tag" | "size" }>`
  border-radius: 0.2rem;
  position: absolute;
  ${(props) =>
    props.$type === "size"
      ? "left: 0.5rem; top: 0.5rem;"
      : "right: 0.5rem; bottom: 0.5rem;"}
  right: 0.5rem;
  bottom: 0.5rem;
  background-color: black;
  color: white;
`;
