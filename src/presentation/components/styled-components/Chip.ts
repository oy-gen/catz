import styled from "styled-components";

export const Chip = styled.div`
  border-radius: 0.2rem;
  padding: 0.2rem 0.5rem;
  background-color: black;
  color: white;

  &.inside-top-left {
    left: 0.5rem;
    top: 0.5rem;
    position: absolute;
  }

  &.inside-bottom-right {
    right: 0.5rem;
    bottom: 0.5rem;
    position: absolute;
  }

  &.close-button {
    background-color: red;
    cursor: pointer;
  }
`;
