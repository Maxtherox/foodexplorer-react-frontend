import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints"

export const Container = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 77px;
    background-color: ${({theme}) => theme.COLORS.DARK_DARK_600};
    font-size: 15px;

    position: relative;
    bottom: 0;
    left: 0;
    z-index: 3;




    @media (min-width:${DEVICE_BREAKPOINTS.MD}) {
        justify-content: space-between;
        padding: 0 16.3rem;
    }
    
    > span{
        font-weight: 200;
       
        
    }

    .Copyright {
        font-family: 'DM Sans', sans-serif;
        font-size: 12px;
        color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_200};
        margin-left: 30px;
    }

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_700};
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        > img {
            margin-right: 6px;
            max-width: 22px;
            max-height: 18px;
        }
    }
`