import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
    /* salvar borda
    border:3px solid #ffffff1e;
    border-left:50px solid transparent;
    border-right:50px solid transparent;
    */

    display: flex;
    justify-content: center;
    height: 53.0rem;
    width: 112.2rem;
    margin-bottom: 4.8rem;

    overflow-x: auto ;
    overflow-y: auto;

    @media (max-width:${DEVICE_BREAKPOINTS.XL}){
        width: 82.0rem;
    }
    @media (max-width:${DEVICE_BREAKPOINTS.MD}){
        width: 37.6rem;
        height: 34.1rem;
    }

    .teste{
        
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 27px;
    }

    
`