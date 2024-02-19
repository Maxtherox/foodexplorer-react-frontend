import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";



export const Container = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        height: 462px;
        min-width: 304px;
        margin: auto 0;
        margin-top: 50px;
        gap: 15px;
        background-color: ${({theme}) => theme.COLORS.DARK_DARK_200};
        border-radius: 10px;
        border: 1px solid ${({theme}) => theme.COLORS.DARK_DARK_300};


        h2 {
            font-size: 24px;
            font-weight: bold;
            color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_300};
        }

        > p {
            max-width: 256px;
            margin: 0 auto;
            font-family: 'Roboto', sans-serif;
            font-size: 14px ;
            font-weight: regular;
            color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_400};
        }
        .price{
            font-family: 'Roboto', sans-serif;
            color: ${({theme}) => theme.COLORS.TINTS_CAKE_200};
            font-size: 32px;
        }
        .image {
            margin: 0 auto;
            width: 176px;
        }
        .favorite{
            
            position: relative;
            top: -10px;
            left: 103px;
            z-index: 2;
            cursor: pointer;
            :hover{
                transform: scale(1.1);
            }

        }
        @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
            min-width: 304px;
        }

        > div {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 14px;
            align-items: center;         
            text-align: center;
            align-items: center;
            align-content: center;
            align-self: center;
            align-tracks: center;
        }

        > div button {
            width: 92px;
            margin: 0;
        }
        > div span {

            font-family: 'Roboto', sans-serif;
            font-size: 20px;
            
        }
    
`