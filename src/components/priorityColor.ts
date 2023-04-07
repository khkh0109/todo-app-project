import COLORS from "../lib/colors";
import PRIORITY from "../lib/priority";
import type { Priority } from "../model/todoItem";

const priorityColor = (priority: Priority): string => {
  switch (priority) {
    case PRIORITY.high:
      return COLORS.priority1;
    case PRIORITY.medium:
      return COLORS.priority2;
    case PRIORITY.low:
      return COLORS.priority3;
    case PRIORITY.default:
      return COLORS.gray;
  }
};

export default priorityColor;
