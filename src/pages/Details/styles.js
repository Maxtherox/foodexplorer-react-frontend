import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";
import * as animations from '../../styles/animations';

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    
    > main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4.2rem;
        animation:${animations.topToBottom} 0.6s ease-in-out;

        overflow-x: hidden;
        @media (max-width:${DEVICE_BREAKPOINTS.MD}){
            gap: 0;
        }
        
    }

    > footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }


`
export const DivButton = styled.div`
width: 1124px;
margin: 0 auto;

@media (max-width:${DEVICE_BREAKPOINTS.XL}){
    max-width: 98.6rem;
}
@media (max-width:${DEVICE_BREAKPOINTS.MD}){
    max-width: 31.6rem;
}


`

export const Content = styled.div`
    display: flex;
    align-items: center;
    
    > img {
        max-width: 39.0rem;
        max-height: 39.0rem;
        animation:${animations.slideIn} 0.6s ease-in-out;
    }
    @media (max-width:${DEVICE_BREAKPOINTS.MD}){
        flex-direction: column;
        align-items: center;
        height: 100vh;
        > img{
            max-width: 26.4rem;
            max-height: 26.4rem;
        }
    }
    @media (max-width:${DEVICE_BREAKPOINTS.XL}){

        > img {
            max-width: 30.0rem;
            max-height: 30.0rem;
        }
    }
` 

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 68.7rem;
    animation:${animations.slideOut} 0.6s ease-in-out;
    margin-left: 4.7rem;
    @media (max-width:${DEVICE_BREAKPOINTS.MD}){
            margin-bottom: 5.0rem;
        }
    > h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 4.0rem ;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_300};
        margin-bottom: 24px;
    }

    > p {
        font-size: 2.4rem;
        font-weight: 300;
        color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_300};
        margin-bottom: 2.4rem;
    }

    > span {
        display: flex;
        align-items: center;
        > button{ 
            margin-left: 3.3rem;
            width: 16.2rem;
            align-items: center;
            margin-bottom: 0;
        }
         
    }
    .buttonEdit{
       > button{
        margin-left: 0;
        width: 13.1rem;
        @media (max-width:${DEVICE_BREAKPOINTS.MD}){
            width: 100%;
        }
       }
    }

    @media (max-width:${DEVICE_BREAKPOINTS.MD}){
        text-align: center;
        max-width: 31.6rem;
        margin-top: 3.6rem;
        margin-left: 0;
        > h1 {
            
            font-size: 2.7rem;
        }

        > p {
            margin: 0 auto;         
            font-size: 1.6rem;
            margin-bottom: 2.4rem;
        }
    }

`

export const Tags = styled.section`
 display: flex;
 gap: 1.2rem;
 margin-bottom: 5.2rem;
 max-width: 60.0rem;
 flex-wrap: wrap;
    @media (max-width:${DEVICE_BREAKPOINTS.MD}){
        max-width: 31.6rem;
        flex-wrap: wrap;
        
 }
`