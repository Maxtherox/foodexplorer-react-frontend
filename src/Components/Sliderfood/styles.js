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
    height: 530px;
    width: 1122px;
    margin-bottom: 48px;

    overflow-x: auto ;
    overflow-y: auto;

    @media (max-width:${DEVICE_BREAKPOINTS.XL}){
        width: 820px;
    }
    @media (max-width:${DEVICE_BREAKPOINTS.MD}){
        width: 376px;
        height: 341px;
    }

    .teste{
        
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 27px;
    }

    
`