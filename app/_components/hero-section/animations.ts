import styled from "@emotion/styled";

//Animate y and opacity with emotion js
export const AnimateYAndOpacity = styled.div<{ delay?: string }>`
  opacity: 0;
  transform: translateY(-20px);
  animation: animateYAndOpacity 1s ease-in-out forwards;
  animation-delay: ${(props) => props.delay || "0s"};
  @keyframes animateYAndOpacity {
    0% {
      transform: translateY(0);
      opacity: 0;
    }
    100% {
      transform: translateY(-20px);
      opacity: 1;
    }
  }
`;
