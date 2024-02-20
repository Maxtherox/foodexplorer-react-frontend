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
    height: 260px;
    max-width: 112.0rem;
    min-width: 376px;
    background: ${({theme}) => theme.COLORS.GRADIENTS_200};
    margin: 0 auto;
    margin-top: 266px;
    margin-bottom: 62px;
    animation:${animations.slideIn} .7s ease-in-out;
    @media (max-width:${DEVICE_BREAKPOINTS.XL}) {
        max-width: 820px;
        margin-top: 224px;
        > img {
            position: absolute;
            width: 600px;
        }  
    }


     @media (max-width:${DEVICE_BREAKPOINTS.MD}){
         height: 120px;
         width: 376px;
         margin-top: 154px;

         > img {
            height: 149px;
            width: 197px;
            margin-bottom: 10px;
            margin-left: 52px;
         }
    }

        > img {
           position: absolute;
           left: -70px;
           bottom: -14px; 
        }
    > div {
        margin-right: 104px;
        @media (max-width:${DEVICE_BREAKPOINTS.XL}){
            margin-right: 60px;

        }
        @media (max-width:${DEVICE_BREAKPOINTS.LG}){
            margin-right: 40px;
            text-wrap: wrap
        }
        @media (max-width:${DEVICE_BREAKPOINTS.MD}){
            margin-right: 10px;
        }

        h1{ 
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 40px;
            color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_300};
            @media (max-width:${DEVICE_BREAKPOINTS.XL}){
                font-size: 30px;
            }

            @media (max-width:${DEVICE_BREAKPOINTS.MD}){
                font-size: 18px;
            }
        }
        p{
            font-family: 'Roboto', sans-serif;
            line-height: 140%;
            color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_300};
            @media (max-width:${DEVICE_BREAKPOINTS.XL}){
                font-size: 12px;
            }

            @media (max-width:${DEVICE_BREAKPOINTS.MD}){
                max-width: 202px;               
            }
        }
        
    }
`