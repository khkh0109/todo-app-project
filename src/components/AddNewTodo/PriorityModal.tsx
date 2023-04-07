import { Priorities, PriorityItem } from "./style";
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
    <Priorities className={isPriorityModalOpen ? "is-open" : ""}>
      {[1, 2, 3, 4].map(priority => (
        <PriorityItem
          priority={priority as Priority}
          key={priority}
          onClick={() => {
            setPriority(priority as Priority);
            setIsPriorityModalOpen(false);
          }}
        >{`우선순위 ${priority}`}</PriorityItem>
      ))}
    </Priorities>
  );
}

export default PriorityModal;
