import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";
import * as animations from '../../styles/animations';
 


export const Container = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        height: 46.2rem;
        min-width: 30.4rem;
        margin: auto 0;
        margin-top: 5.0rem;
        gap: 1.5rem;
        background-color: ${({theme}) => theme.COLORS.DARK_DARK_200};
        border-radius: 1.0rem;
        border: 1px solid ${({theme}) => theme.COLORS.DARK_DARK_300};
        animation:${animations.fadeIn} 1.1s ease-in-out;

        h2 {
            max-width: 30.0rem;
            font-size: 2.4rem;
            font-weight: bold;
            margin: 0 auto;
            color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_300};
        }

        > p {
            max-width: 25.6rem;
            margin: 0 auto;
            font-family: 'Roboto', sans-serif;
            font-size: 1.4rem ;
            font-weight: regular;
            color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_400};
        }
        .price{
            font-family: 'Roboto', sans-serif;
            color: ${({theme}) => theme.COLORS.TINTS_CAKE_200};
            font-size: 3.2rem;
        }
        .image {
            margin: 0 auto;
            width: 17.6rem;
        }
        .favorite{
            
            position: relative;
            top: -10px;
            left: 10.3rem;
            z-index: 2;
            cursor: pointer;
            :hover{
                transform: scale(1.1);
            }

        }
        @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
            min-width: 30.4rem;
        }

        > div {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 1.4rem;
            align-items: center;         
            text-align: center;
            align-items: center;
            align-content: center;
            align-self: center;
            align-tracks: center;
        }

        > div button {
            width: 9.2rem;
            margin: 0;
        }
        > div span {

            font-family: 'Roboto', sans-serif;
            font-size: 2.0rem;
            
        }
    
`