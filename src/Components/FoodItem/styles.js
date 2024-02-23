
import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    align-items: center;
    
    background-color: ${({theme, isnew}) => isnew ? "transparent" : theme.COLORS.LIGHT_LIGHT_600};
    color: ${({theme}) => theme.COLORS.GRAY_300};


    border:${({theme, isnew}) => isnew ? `2px dashed ${theme.COLORS.LIGHT_LIGHT_500}` : "none"};

    border-radius: 1rem;
    padding-right: 1.6rem;

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
        font-size: 1.6rem;
        height: 3.2rem;
        width: 11.8rem;
        text-align: center;
        color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_100};
        background: transparent;

        border: none;

        &::placeholder{
            color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_500};
        }
    }
`