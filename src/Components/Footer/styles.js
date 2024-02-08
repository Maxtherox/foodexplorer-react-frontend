import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: 77px;
    background-color: ${({theme}) => theme.COLORS.DARK_DARK_600};
    font-size: 15px;

    position: absolute;
    bottom: 0;
    top: 1;
    right: 0;
    left: 0;
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