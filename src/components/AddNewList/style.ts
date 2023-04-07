import styled from "styled-components";
import COLORS from "../../lib/colors";
import modalFadeIn from "../../lib/animation";

const ModalContainer = styled.div`
  display: none;
  width: 100%;
  height: 122px;
  border-radius: 20px 20px 0 0;
  padding: 35px 20px 20px 20px;
  position: fixed;
  bottom: 0;
  background-color: ${COLORS.white};
  box-shadow: 0px -20px 28px -9px rgba(0, 0, 0, 0.12);
  z-index: 1;

  @media screen and (min-width: 576px) {
    width: 576px;
  }

  &.is-open {
    display: block;
    animation: ${modalFadeIn} 300ms ease-in-out;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  input {
    width: 90%;
    border: none;
    color: ${COLORS.black};
    caret-color: ${COLORS.main};
    background-color: transparent;

    ::placeholder {
      color: ${COLORS.gray};
    }
  }
`;

export default ModalContainer;
