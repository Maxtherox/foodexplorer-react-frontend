import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > h1 {
    font-size: 5.0rem;
  }
  > a {
    color: white;
    margin-top: 2.4rem;
  }

  @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
    > h1 {
    font-size: 2rem;
     }

     > a {
      font-size: 1.2rem;
     }
  }
`;