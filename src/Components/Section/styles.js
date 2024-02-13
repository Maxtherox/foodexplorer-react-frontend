import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  height: auto;
  margin: 0 auto;
  margin-bottom: 30px;
  align-items: center;
  position: relative;
  height: 549px;
  max-width: 1122px;
  justify-content: flex-start;
  scroll-behavior: smooth;
  overflow-x: hidden;
  overflow-y: hidden;

  
  > h2 {
    font-size: 32px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
    position: absolute;
    z-index: 2;
    top: 0;
  }

  .leftarrow {
    position: absolute;
    z-index: 2;
    left: 0;
    cursor: pointer;
  }

  .rightarrow {
    position: absolute;
    z-index: 2;
    right: 0;
    cursor: pointer;
  }
  .leftarrow,
  .rightarrow {
    /* estilos padrão das setas */

    &.scrolling {
      /* estilos específicos para o estado de scrolling */
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    width: 820px;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 376px;
  }
  section.scrollable::before {
  animation: gradientMove 1s linear infinite;
}

@keyframes gradientMove {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 27px;
  position: relative;
  z-index: 2;

  .leftarrow,
  .rightarrow {
    /* Estilos padrão das setas */

    &.scrolling {
      /* Estilos específicos para o estado de scrolling */
    }
  }
`;

export const LeftArrow = styled.a`
  cursor: pointer;
`;

export const RightArrow = styled.a`
  cursor: pointer;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
  position: relative;
  z-index: 1;
  margin-top: 0;
  
`;

export const Content = styled.div`
  display: flex;
  gap: 27px;
  overflow-x: hidden;
  overflow-y: hidden;
  scroll-behavior: smooth;
  position: relative;
  z-index: 1;
  
`;

export const Vignette = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, #000A0F 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 80%, #000A0F 100%);
  z-index: 2;
  pointer-events: none; /* Isso permite que os eventos passem através do componente */
`;