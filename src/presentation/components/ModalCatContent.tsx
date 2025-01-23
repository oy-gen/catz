import React, { useState } from "react";
import { buildFullImageUrl } from "../../business/utils/buildFullImageUrl.ts";
import styled from "styled-components";

interface Props {
  id: string;
  tag: string | null;
  size: number;
  onClose: () => void;
}

export const ModalCatContent: React.FC<Props> = ({
  id,
  tag,
  size,
  onClose,
}) => {
  const imageWidth = window.innerWidth - 200; // dirty, 2x100px padding
  const imageHeight = window.innerHeight - 200;
  const [isImageLoading, setIsImageLoading] = useState(true);
  const url: string = buildFullImageUrl(id, imageWidth, imageHeight);

  return (
    <>
      {isImageLoading && <p>Loading ...</p>}
      <Content style={{ display: isImageLoading ? "none" : "block" }}>
        <ChipRow>
          <InfoWrapper>
            <Chip $color={"black"}>{tag}</Chip>
            <Chip $color={"black"}>{size}</Chip>
          </InfoWrapper>
          <Chip $color={"red"} onClick={onClose}>
            x Close
          </Chip>
        </ChipRow>
        <Image src={url} alt="cat" onLoad={() => setIsImageLoading(false)} />
      </Content>
    </>
  );
};
const Content = styled.div`
  border-radius: 2rem;
  position: relative;
  margin: 2rem;
`;

const ChipRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Chip = styled.div<{ $color: "red" | "black" }>`
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  color: white;
  background-color: ${(props) => (props.$color === "red" ? "red" : "black")};
  ${(props) => (props.$color === "red" ? "cursor: pointer" : "")};
`;

const Image = styled.img`
  border-radius: 2rem;
`;
