import styled from "styled-components";

export const Container = styled.div``;

export const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  padding-bottom: 56.25%;
  video {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  position: inherit;
  text-align: center;
  color: #fff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexVideo = styled.div`
  max-width: 560px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

// const bounce = keyframes`
//   0%, 20%, 50%, 80%, 100% {
//     transform: translateY(0);
//   }
//   40% {
//     transform: translateY(-20px);
//   }
//   60% {
//     transform: translateY(-10px);
//   }
// `;

// export const ScrollDownAnimation = styled.div<{ visible: boolean }>`
//   position: absolute;
//   bottom: 120px;
//   left: 50%;
//   transform: translateX(-50%);
//   font-size: 18px;
//   opacity: ${(props) => (props.visible ? 1 : 0)};
//   transition: opacity 0.3s ease;
//   pointer-events: ${(props) => (props.visible ? 'auto' : 'none')};
//   animation: ${bounce} 2s infinite;
//   color: white;
// `;

// export const ArrowIcon = styled.span`
//   display: block;
//   width: 20px;
//   height: 20px;
//   border: solid #fff;
//   border-width: 0 3px 3px 0;
//   transform: rotate(45deg);
//   margin: 0 auto;
// `;
