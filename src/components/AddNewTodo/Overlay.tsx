import { Overlay as StyledOverlay } from "./style";

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
