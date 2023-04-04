import { TodoHeaderContainer, ListButton, Title, Completed } from "./style";
import { useNavigate } from "react-router-dom";

interface TodoHeaderProps {
  title: string;
  count: number;
}

function TodoHeader({ title, count }: TodoHeaderProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <TodoHeaderContainer>
      <ListButton
        onClick={() => {
          navigate("/");
        }}
      >
        목록
      </ListButton>
      <Title>{title}</Title>
      <Completed>{`${count}개 완료됨`}</Completed>
    </TodoHeaderContainer>
  );
}

export default TodoHeader;
