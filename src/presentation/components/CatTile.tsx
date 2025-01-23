import styled from "styled-components";
import React, { useMemo, useState } from "react";
import { Cat } from "../../business/models/Cat.ts";
import { FilterEnum } from "../../business/models/FilterEnum.ts";
import { Modal } from "./Modal.tsx";
import { ModalCatContent } from "./ModalCatContent.tsx";

interface Props {
  cat: Cat;
}

export const CatTile: React.FC<Props> = ({ cat }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const firstMatchingTag: string | null = useMemo(
    () =>
      cat.tags.find((tag) =>
        Object.values(FilterEnum).includes(tag as FilterEnum),
      ) ?? null,
    [cat.tags],
  );

  return (
    <>
      <Tile key={cat.id} onClick={() => setIsModalOpen(true)} $image={cat.url}>
        <Chip className="size">{cat.imageSize}</Chip>
        {firstMatchingTag && <Chip className="tag">{firstMatchingTag}</Chip>}
      </Tile>
      {isModalOpen && (
        <Modal>
          <ModalCatContent
            id={cat.id}
            tag={firstMatchingTag}
            size={cat.imageSize}
            onClose={() => setIsModalOpen(false)}
          />
        </Modal>
      )}
    </>
  );
};

const Tile = styled.li<{ $image: string }>`
  border-radius: 1rem;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
  list-style: none;
  width: 100%;
  padding-top: 100%; /* This makes the element square */
`;

const Chip = styled.div`
  border-radius: 0.2rem;
  padding: 0.2rem 0.5rem;
  position: absolute;
  background-color: black;
  color: white;

  &.size {
    left: 0.5rem;
    top: 0.5rem;
  }

  &.tag {
    right: 0.5rem;
    bottom: 0.5rem;
  }
`;
