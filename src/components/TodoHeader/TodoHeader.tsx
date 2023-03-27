import { TodoHeaderContainer, ListContainer, Title, Completed } from "./style";

interface TodoHeaderProps {
  title: string;
  count: number;
}

function TodoHeader({ title, count }: TodoHeaderProps): JSX.Element {
  return (
    <TodoHeaderContainer>
      <ListContainer>
        <img src="assets/todo-header.svg" alt="" />
        <span>목록</span>
      </ListContainer>
      <Title>{title}</Title>
      <Completed>{`${count}개 완료됨`}</Completed>
    </TodoHeaderContainer>
  );
}

export default TodoHeader;
