import styled from "styled-components";
import { colors } from "../../lib/colors";

const Background = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 0 6px 15px;
  border-bottom: 1px solid ${colors.divider};
  background-color: ${colors.white};
`;

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 7.59px;

  img {
    margin-right: 6px;
    width: 8.12px;
    height: 13.41px;
  }

  span {
    color: ${colors.main};
    font-size: 13px;
    line-height: 1;
  }
`;

const Title = styled.h1`
  margin-bottom: 7px;
  color: ${colors.main};
  font-size: 33.97px;
  line-height: 1.4424492199;
`;

const Completed = styled.span`
  color: ${colors.gray};
  font-size: 13px;
`;

export { Background, ListContainer, Title, Completed };
