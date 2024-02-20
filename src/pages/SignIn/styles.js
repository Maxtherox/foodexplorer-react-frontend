import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";
import * as animations from '../../styles/animations';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
    @media (min-width:${DEVICE_BREAKPOINTS.LG}) {
        display: flex;
        flex-direction: row;
        max-width: 1406px;
        justify-content: center;
        margin: 0 auto;
        height: 100vh;
        width: 100%;
        padding: 0 10.8rem 0 15.3rem ;
    }
    
`
export const LogoDesktop = styled.div`
    display: none;
    animation:${animations.slideIn} 1s ease-in-out;
    @media (min-width:${DEVICE_BREAKPOINTS.LG}) {
        display: flex;
        width: 100%;
        > h1 {
        display: flex;
        align-items: center;

        margin-bottom: 7.3rem;
        gap: 1.0rem;
        font-size: 3.2rem;
        font-weight: bold;}
    }

    
`

export const Form = styled.form`
    max-width: 31.6rem;
    display: flex;
    flex-direction: column;
    animation:${animations.scale} .5s ease-in-out;
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
            min-width: 47.6rem;
            background-color: ${({theme}) => theme.COLORS.DARK_DARK_700};
            padding: 6.4rem;
            border-radius: 1.6rem;
        }

    > h1 {
        display: flex;
        margin-top: 15.8rem;
        margin-bottom: 7.3rem;
        gap: 1.0rem;
        font-size: 3.7rem;
        font-weight: bold;
        
        @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
            display: none;
        }
    }

    > fieldset legend {
        display: none;

        @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
            display: flex;
            align-self: center;
            font-size: 3.2rem;
            font-weight: medium;
            text-align: center;
            margin-bottom: 3.2rem;
        }
    }

    > fieldset {
        
        border: none;
    }

    > label{
        margin-bottom: 8px;
    }
    a {
        display: flex;
        color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_100};
        font-size: 1.4rem;
        font-weight: medium;
        text-align: center;
        align-items: center;
        justify-content: center;
    }



`
