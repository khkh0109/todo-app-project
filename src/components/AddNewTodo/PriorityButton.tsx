import { PriorityButton as StyledPriorityButton } from "./style";

interface PriorityButtonProps {
  onClick: () => void;
}

function PriorityButton({ onClick }: PriorityButtonProps): JSX.Element {
  return (
    <StyledPriorityButton type="button" onClick={onClick}>
      우선순위
    </StyledPriorityButton>
  );
}

export default PriorityButton;
