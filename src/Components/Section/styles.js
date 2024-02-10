import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.section`
    display: flex;
    margin: 0 auto;
    background-color: red;
    height: 530px;
    width: 1122px;
    margin-bottom: 48px;

    > h2 {
        font-size: 32px;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_300};
    }

    @media (max-width:${DEVICE_BREAKPOINTS.XL}){
        width: 820px;
    }
    @media (max-width:${DEVICE_BREAKPOINTS.MD}){
        width: 376px;
        height: 341px;
    }
`