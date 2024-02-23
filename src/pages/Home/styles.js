import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints"
import * as animations from '../../styles/animations';

export const Container = styled.div`

    
`
export const Main = styled.main`
    animation:${animations.topToBottom} .6s ease-in-out;
    overflow-y: auto;
    overflow-x: hidden;
    > section:nth-child(2) {
            animation:${animations.slideOut} .9s ease-in-out;
        }
    > section:nth-child(3) {
            animation:${animations.slideIn} 1.1s ease-in-out;
        }
    > section:nth-child(4) {
            animation:${animations.slideOut} 1.3s ease-in-out;
        }
`

export const Banner = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    height: 26.0rem;
    max-width: 112.0rem;
    min-width: 37.6rem;
    background: ${({theme}) => theme.COLORS.GRADIENTS_200};
    margin: 0 auto;
    margin-top: 26.6rem;
    margin-bottom: 6.2rem;
    animation:${animations.slideIn} .7s ease-in-out;
    @media (max-width:${DEVICE_BREAKPOINTS.XL}) {
        max-width: 82.0rem;
        margin-top: 22.4rem;
        > img {
            position: absolute;
            width: 60.0rem;
        }  
    }


     @media (max-width:${DEVICE_BREAKPOINTS.MD}){
         height: 12.0rem;
         width: 37.6rem;
         margin-top: 15.4rem;

         > img {
            height: 14.9rem;
            width: 19.7rem;
            margin-bottom: 1rem;
            margin-left: 5.2rem;
         }
    }

        > img {
           position: absolute;
           left: -70px;
           bottom: -14px; 
        }
    > div {
        margin-right: 10.4rem;
        @media (max-width:${DEVICE_BREAKPOINTS.XL}){
            margin-right: 6.0rem;

        }
        @media (max-width:${DEVICE_BREAKPOINTS.LG}){
            margin-right: 4.0rem;
            text-wrap: wrap
        }
        @media (max-width:${DEVICE_BREAKPOINTS.MD}){
            margin-right: 1rem;
        }

        h1{ 
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 4.0rem;
            color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_300};
            @media (max-width:${DEVICE_BREAKPOINTS.XL}){
                font-size: 3.0rem;
            }

            @media (max-width:${DEVICE_BREAKPOINTS.MD}){
                font-size: 1.8rem;
            }
        }
        p{
            font-family: 'Roboto', sans-serif;
            line-height: 140%;
            color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_300};
            @media (max-width:${DEVICE_BREAKPOINTS.XL}){
                font-size: 1.2rem;
            }

            @media (max-width:${DEVICE_BREAKPOINTS.MD}){
                max-width: 20.2rem;               
            }
        }
        
    }
`