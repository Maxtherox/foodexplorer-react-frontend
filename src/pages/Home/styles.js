import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints"

export const Container = styled.div`

`
export const Main = styled.main`
height: 100vh;
width: 100%;
/*
#container-group::before{ 

        content: "";
        position: absolute;
        height: 260px;
        width: 1120px;
        background-color: red;
        bottom: 13px;
        
        margin: 0 auto;
        z-index: -1;
    }
*/
`

export const Banner = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    height: 260px;
    max-width: 1120px;
    min-width: 376px;
    background: ${({theme}) => theme.COLORS.GRADIENTS_200};
    margin: 0 auto;
    margin-top: 166px;
    @media (max-width:${DEVICE_BREAKPOINTS.LG}) {
        max-width: 820px;

        > img {
            position: absolute;
            width: 600px;

        }
        

    }

        > img {
           position: absolute;
           left: -70px;
           bottom: -14px; 
        }
    > div {
        margin-right: 104px;
        @media (max-width:${DEVICE_BREAKPOINTS.LG}){
            margin-right: 60px;
        }

        h1{ 
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 40px;
            color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_300};
            @media (max-width:${DEVICE_BREAKPOINTS.LG}){
                font-size: 30px;
            }
        }
        p{
            font-family: 'Roboto', sans-serif;
            color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_300};
            @media (max-width:${DEVICE_BREAKPOINTS.LG}){
                font-size: 12px;
            }
        }
    }
`