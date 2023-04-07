import { Link } from "react-router-dom";
import { List as StyleList } from "./style";
import type ListItem from "../../model/listItem";
import DeleteButton from "../../common/DeleteButton.style";

interface MyListProps {
  lists: ListItem[];
  deleteList: (id: string) => void;
}

function MyList({ lists, deleteList }: MyListProps): JSX.Element {
  return (
    <StyleList>
      {lists.map((list: ListItem) => {
        return (
          <li key={list.id}>
            <Link to={`/${list.id}`}>{list.title}</Link>
            <DeleteButton
              type="button"
              onClick={() => {
                deleteList(list.id);
              }}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00002 2.41421L2.41423 1L9.4853 8.07107L8.07108 9.48528L1.00002 2.41421Z"
                  fill="#C4C4C4"
                  stroke="#C4C4C4"
                  strokeWidth="0.5"
                />
                <path
                  d="M8.07106 1.00009L9.48528 2.41431L2.41421 9.48537L0.999994 8.07116L8.07106 1.00009Z"
                  fill="#C4C4C4"
                  stroke="#C4C4C4"
                  strokeWidth="0.5"
                />
              </svg>
            </DeleteButton>
          </li>
        );
      })}
    </StyleList>
  );
}

export default MyList;
