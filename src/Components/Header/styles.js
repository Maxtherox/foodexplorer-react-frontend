import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints"
import * as animations from '../../styles/animations';

export const Container = styled.header`
    position: relative;
    transition: 1s;
    animation:${animations.topToBottom} .5s ease-in-out;
`

export const Headerbase = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 4;

    width: 100%;
    height: 11.4rem;
    background-color: ${({theme}) => theme.COLORS.DARK_DARK_700};
    display: flex;
    justify-content: center;
`



export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-content: center;
    align-self: center;
    gap: 7.4rem;

    height: 11.4rem;
    background-color: ${({theme}) => theme.COLORS.DARK_DARK_700};
    color: white;
    position: absolute;
    z-index: 1;

    div {
        display: none;
        input{
            width: 100%;
        }
        @media (min-width:${DEVICE_BREAKPOINTS.XL}) {
            display: flex;
            width: 58.1rem;
            margin: auto 0;

        }
        @media (min-width:${DEVICE_BREAKPOINTS.MD}) {
            display: flex;
            min-width: 18.1rem;
            margin: auto ;

        }
    }
    > h1 {
    display: flex;
    max-width: 14.6rem;
    font-size: 2.1rem;
    text-align: center;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 8px;

    white-space: nowrap;  
    > img {
        width: 2.4rem;

    }
    > span {
        position: relative;
        font-size: 1.2rem;
        font-weight: 300;
        color: ${({theme}) => theme.COLORS.TINTS_CAKE_200};

        top: 1.8rem;
        right: 4.3rem;

        @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
            position: static;
        }
    }
    @media (min-width:${DEVICE_BREAKPOINTS.LG}) {
        min-width: 14.6rem;
        font-size: 2.4rem;   
        
    }

    }

    @media (min-width:${DEVICE_BREAKPOINTS.MD}) {
        height: 10.4rem;
        justify-content: space-between;
        gap: 3.2rem;
        
        .MenuOpen{
            display: none;
        }
    }
    @media (min-width:${DEVICE_BREAKPOINTS.XL}) {
        gap: 3.2rem;
    }
    @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
        .logoutdisable {
            display: none;
        }
    }

    
    > .teste {
        position: relative;

        @media (min-width:${DEVICE_BREAKPOINTS.MD}) {
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
            position: static;
            background-color: ${({theme}) => theme.COLORS.TINTS_TOMATO_100};
            //width: 21.6rem;
            
            padding: 1.2rem 4.6rem;
            //height: 5.6rem;
            border-radius: 5px;
        }
        
    }
    > a{

        > p {
                display: none;
                @media (min-width:${DEVICE_BREAKPOINTS.MD}) {
                    display: flex;
                    color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_100};
                    
                    margin: auto 0;
                    margin-left: 8px;
                }
            }
        > label {
            display: flex;
            align-items: center;
            justify-content: center;
            width:2.0rem ;
            height:2.0rem;
            border-radius: 50%;
            background-color: ${({theme}) => theme.COLORS.TINTS_TOMATO_100};
            font-size: 1.4rem;

            position: absolute;
            bottom: 1.0rem;
            left: 1.5rem;
            color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_100};;
            text-align: center;
            margin: auto 0;
            cursor: pointer;

            

            @media (min-width:${DEVICE_BREAKPOINTS.MD}){
                position: static;
            }
        }

        > img{
            display: flex;
            margin: auto 0;
    }
    } 
    
`
export const ContentMenu = styled.div`
     display: flex;
    align-items: center;
    align-self: center;
    height: 11.4rem;
    background-color: ${({theme}) => theme.COLORS.DARK_DARK_700};
    padding-left: 2.8rem;
    

    > a {
        font-family: 'Roboto', sans-serif;;
        font-weight: 300;
        font-size: 2.1rem;
        color: white;

        > img {
            width: 1.6rem;
            height: 1.6rem;
            margin-right: 1.6rem;
        }
    }

    
`

export const Menu = styled.div`
    display: block;
    visibility: hidden;
    height: 100vh;
    width: 100%;
    position: relative;
    z-index: 1;
    background-color: ${({theme}) => theme.COLORS.DARK_DARK_400};
    transition: visibility 0.5s ;
 

    
    > main {
        margin: 3.6rem 2.8rem;
        
        > a {
            display: flex;
        width: 100%;
        font-size: 2.4rem;
        color: white;
        font-weight: 200;
        padding-bottom: 1.0rem;
        border-bottom: 1px solid #ffffff23;
        
    }
    @keyframes menuOpen {
        0% {
            transform: translateX(-100%);

        }

        100%{
            transform: translateX(0);

        }
    };

    @keyframes menuClose {
        0% {
            transform: translateX(0);

        }
        
        100%{
            transform: translateX(-100%);

        }
    };
    }
;
`

export const LogoAdmin = styled.div`
    display: flex;
    max-width: 14.6rem;
    gap: 0;
    > img {
        margin: 0;
    }
    > div{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 0;
        margin: 0;
        > h1 {
            margin: 0;
            font-size: 2.4rem;
            font-weight: bold;
        }
    }
`
/* backup h1 style

    
}
*/