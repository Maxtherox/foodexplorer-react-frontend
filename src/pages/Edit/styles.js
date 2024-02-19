import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
    overflow-y: auto;
    > header {
        position: absolute;
        
    }
    > footer {
        position: sticky;
        bottom: 0;
        z-index: -1;
        right: 0;
        left: 0;

        @media (max-width:${DEVICE_BREAKPOINTS.LG}) {
            margin-top: 15.3rem;
        }
        @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
            margin-top: 15.3rem;
        }
    }
    > main {
        max-width: 112.4rem;
        height: 100vh;
        margin: 0 auto;
        
        @media (max-width:${DEVICE_BREAKPOINTS.LG}) {
            max-width: 66.4rem;
        }
        @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
            max-width: 36.4rem;
        }
    }
    
`
export const Form = styled.form`
    
    > fieldset {
        
        > legend {
            font-family: 'Poppins', sans-serif;
            font-size: 3.2rem;
            font-weight: 400;
            margin-bottom: 3.2rem;
        }

        label {
            font-family: 'Roboto', sans-serif;
            font-size: 1.6rem;
            font-weight: 400;
            margin-bottom: 1.6rem;
            color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_400};
        }
    }

    

    input {

        border-radius: 8px;
        @media (max-width:${DEVICE_BREAKPOINTS.LG}) {
            width: 11.8rem;
        }
        @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
            max-width: 36.4rem;
        }
    }

    > fieldset{        
        border: none;
    }

    .uploadFile{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 4.8rem;
        max-width: 22.9rem ;
        padding: 1.2rem 3.2rem;
        background-color: ${({theme}) => theme.COLORS.DARK_DARK_900};
        text-align: center;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 1.4rem;
        border-radius: 8px;
        cursor: pointer;
        > img {
            margin-right: 8px ;
        }
        @media (max-width:${DEVICE_BREAKPOINTS.LG}) {
            max-width: 66.4rem;
        }
        @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
            max-width: 36.4rem;
        }
    }
    .hiddenUploadFile{

        display: none;
        position: absolute;
        visibility: hidden;
    }

    select {
        border: none;
        border-radius: 8px;
        width: 364px;
        height: 48px;
        padding-left: 10px;
        color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_400};
        background-color: ${({theme}) => theme.COLORS.DARK_DARK_900};
        
        :focus {
            outline: none;

        }
        ::-ms-expand {
            display: none;
        }

        option{
            outline: none;
            border: none;
        }
        @media (max-width:${DEVICE_BREAKPOINTS.LG}) {
            width: 66.4rem;
        }
        @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
            max-width: 36.4rem;
        }
    }

    .name{
        width: 46.3rem;
        @media (max-width:${DEVICE_BREAKPOINTS.LG}) {
            width: 66.4rem;
        }
        @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
            width: 36.4rem
        }
    }
    .ingredients{
        display: flex;
        align-items: center;
        text-align: center;
        height: 4.8rem;
        width: 83.7rem;
        border-radius: 8px;
        background-color: ${({theme}) => theme.COLORS.DARK_DARK_900};

        > div {
            max-width: 83.7rem;
            overflow-x: auto;
        }
           
        
        @media (max-width:${DEVICE_BREAKPOINTS.LG}) {
            max-width: 66.4rem;
        }
        @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
            max-width: 36.4rem;
        }
    }
    .price {
        width: 25.6rem;
        @media (max-width:${DEVICE_BREAKPOINTS.LG}) {
            width: 66.4rem;
        }
        @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
            width: 36.4rem;
        }
    }
    .description{
        all: unset;
        width: 112.0rem;
        height: 17.2rem;
        background-color: ${({theme}) => theme.COLORS.DARK_DARK_900};
        border-radius: 8px;
        margin-bottom: 2.4rem;

        &::placeholder{
            padding-left: 1rem;
            padding-top: 1rem;
        }
        @media (max-width:${DEVICE_BREAKPOINTS.LG}) {
            max-width: 66.4rem;
        }
        @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
            max-width: 36.4rem;
        }
    }

    .category{
        cursor: pointer;
        margin-bottom: 3.2rem;
    }

    .tags {
        display: flex;
        gap: 8PX;
    }

    > section {
        display: flex;
        justify-content: flex-end;
        margin: 0;
        > .savButton{
        position: relative;
        left:0;    
        background-color: ${({theme}) => theme.COLORS.TINTS_TOMATO_400};
        width: 17.2rem;
        }
        > .excButton {
            position: relative;
            right: 32px;    
            background-color: ${({theme}) => theme.COLORS.DARK_DARK_900};
            width: 13.5rem;
        }

        
    
    }

`

export const Section = styled.section`
    display: flex;
    gap: 3.2rem;
    > div {
        display: flex;
        flex-direction: column;
    }

    @media (max-width:${DEVICE_BREAKPOINTS.LG}) {
            flex-direction: column;
            gap: 1.6rem;
        }
    @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
            flex-direction: column;
        }
`