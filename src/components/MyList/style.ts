import styled from "styled-components";
import COLORS from "../../lib/colors";
import FONT_WEIGHT from "../../lib/typography";

const List = styled.ul`
  height: 100%;
  padding: 0 15px 67px 15px;
  color: ${COLORS.black};
  font-weight: ${FONT_WEIGHT.medium};

  li {
    display: flex;
    justify-content: space-between;
    padding: 15px 0 15px 0;
    border-bottom: 1px solid ${COLORS.divider};
    font-size: 15px;

    :hover {
      path {
        fill: ${COLORS.gray};
        stroke: ${COLORS.gray};
      }
    }
  }
`;

export { List };
