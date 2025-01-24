import React, { useMemo, useState } from "react";
import { buildFullImageUrl } from "../../business/utils/buildFullImageUrl.ts";
import styled from "styled-components";
import { Loading } from "./styled-components/LoadingStyle.ts";
import { Chip } from "./styled-components/Chip.ts";

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
  const imageWidth = window.innerWidth - 200; // very dirty, 2x100px padding
  const imageHeight = window.innerHeight - 200;
  const [isImageLoading, setIsImageLoading] = useState(true);
  const url = useMemo(
    () => buildFullImageUrl(id, imageWidth, imageHeight),
    [id, imageWidth, imageHeight],
  );

  return (
    <>
      <Content>
        <ChipRow>
          <InfoWrapper>
            {tag && <Chip>{tag}</Chip>}
            {size && <Chip>{size}</Chip>}
          </InfoWrapper>
          <Chip className="close-button" onClick={onClose}>
            x Close
          </Chip>
        </ChipRow>
        {isImageLoading && <Loading>Loading ...</Loading>}
        <Image
          src={url}
          alt="cat"
          onLoad={() => setIsImageLoading(false)}
          onError={() => {
            onClose();
            console.error("Image failed to load");
          }}
          $isLoaded={!isImageLoading}
        />
      </Content>
    </>
  );
};

const Content = styled.div`
  border-radius: 1rem;
  position: relative;
  margin: 2rem;
`;

const ChipRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Image = styled.img<{ $isLoaded: boolean }>`
  display: ${(props) => (props.$isLoaded ? "block" : "none")};
  border-radius: 0.5rem;
`;
