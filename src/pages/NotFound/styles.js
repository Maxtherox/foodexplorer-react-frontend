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
    font-size: 50px;
  }
  > a {
    color: white;
    margin-top: 24px;
  }

  @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
    > h1 {
    font-size: 28px;
     }

     > a {
      font-size: 12px;
     }
  }
`;