import type { TodoItem } from "../model/todoItem";

export interface List {
  id: string;
  title: string;
  list: TodoItem[];
}
