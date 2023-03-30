type Priority = 1 | 2 | 3 | 4;

class Todo {
  id: string;
  content: string;
  isDone: boolean;
  priority: Priority;

  constructor(id: string, content: string, isDone: boolean, priority: Priority) {
    this.id = id;
    this.content = content;
    this.isDone = isDone;
    this.priority = priority;
  }
}

export default Todo;
