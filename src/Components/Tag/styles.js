import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
display: flex;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: ${({theme})=> theme.COLORS.LIGHT_LIGHT_100};
    background-color: ${({theme})=> theme.COLORS.DARK_DARK_1000} ;
    padding: 4px 8px;
    border-radius: 5px;
    align-items: center;
    text-align: center;
   
`