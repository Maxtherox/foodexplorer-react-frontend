
import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    align-items: center;
    
    background-color: ${({theme, isnew}) => isnew ? "transparent" : theme.COLORS.LIGHT_LIGHT_600};
    color: ${({theme}) => theme.COLORS.GRAY_300};


    border:${({theme, isnew}) => isnew ? `2px dashed ${theme.COLORS.LIGHT_LIGHT_500}` : "none"};

    border-radius: 10px;
    padding-right: 16px;

    > button {
        display: flex;
        border: none;
        background: none;

       
    }

    .button-delete {
            color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_100};
           
        }
        .button-add {
            color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_500};
        }
    > input {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        height: 32px;
        width: 118px;
        text-align: center;
        color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_100};
        background: transparent;

        border: none;

        &::placeholder{
            color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_500};
        }
    }
`