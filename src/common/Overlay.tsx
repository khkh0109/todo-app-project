import styled from "styled-components";
import COLORS from "../lib/colors";

const StyledOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  background-color: ${COLORS.black};
  opacity: 0;
  visibility: hidden;
  transition: opacity 300ms ease-in-out, visibility 300ms ease-in-out;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &.is-active {
    opacity: 0.3;
    visibility: visible;
  }
`;

interface OverlayProps {
  isModalOpen: boolean;
  onClick: () => void;
}

function Overlay({ isModalOpen, onClick }: OverlayProps): JSX.Element {
  return (
    <StyledOverlay
      onClick={onClick}
      className={isModalOpen ? "is-active" : ""}
    />
  );
}

export default Overlay;
