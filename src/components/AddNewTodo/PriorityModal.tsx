import { Priority as StylePriority } from "./style";
import { type Priority } from "../../model/todoItem";

interface PriorityModalProps {
  setPriority: (priority: Priority) => void;
  isPriorityModalOpen: boolean;
  setIsPriorityModalOpen: (isPriorityModalOpen: boolean) => void;
}

function PriorityModal({
  setPriority,
  isPriorityModalOpen,
  setIsPriorityModalOpen,
}: PriorityModalProps): JSX.Element {
  return (
    <StylePriority className={isPriorityModalOpen ? "is-open" : ""}>
      {[1, 2, 3, 4].map(priority => (
        <li
          key={priority}
          onClick={() => {
            setPriority(priority as Priority);
            setIsPriorityModalOpen(false);
          }}
        >{`우선순위 ${priority}`}</li>
      ))}
    </StylePriority>
  );
}

export default PriorityModal;
