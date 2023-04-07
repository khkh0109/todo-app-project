import type { TodoItem } from "./todoItem";

class ListItem {
  id: string;
  title: string;
  list: TodoItem[];

  constructor(id: string, title: string, list: TodoItem[]) {
    this.id = id;
    this.title = title;
    this.list = list;
  }
}

export default ListItem;
