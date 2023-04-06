import { keyframes } from "styled-components";

const modalFadeIn = keyframes`
0% {
  transform: translate3d(0, 100%, 0);
}

100% {
  transform: translate3d(0, 0, 0);
}
`;

export default modalFadeIn;
