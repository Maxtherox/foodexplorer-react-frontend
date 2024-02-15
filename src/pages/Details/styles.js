import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    
    > main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 42px;


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
    max-width: 986px;
}
@media (max-width:${DEVICE_BREAKPOINTS.MD}){
    max-width: 316px;
}


`

export const Content = styled.div`
    display: flex;
    align-items: center;

    > img {
        max-width: 390px;
        max-height: 390px;
    }
    @media (max-width:${DEVICE_BREAKPOINTS.MD}){
        flex-direction: column;
        align-items: center;
        height: 100vh;
        > img{
            max-width: 264px;
            max-height: 264px;
        }
    }
    @media (max-width:${DEVICE_BREAKPOINTS.XL}){

        > img {
            max-width: 300px;
            max-height: 300px;
        }
    }
` 

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 687px;

    margin-left: 47px;
    @media (max-width:${DEVICE_BREAKPOINTS.MD}){
            margin-bottom: 50px;
        }
    > h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 40px ;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_300};
        margin-bottom: 24px;
    }

    > p {
        font-size: 24px;
        font-weight: 300;
        color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_300};
        margin-bottom: 24px;
    }

    > span {
        display: flex;
        align-items: center;
        > button{ 
            margin-left: 33px;
            width: 162px;
            align-items: center;
            margin-bottom: 0;
        }
        
        
    }

    @media (max-width:${DEVICE_BREAKPOINTS.MD}){
        text-align: center;
        max-width: 316px;
        margin-top: 36px;
        margin-left: 0;
        > h1 {
            
            font-size: 27px;
        }

        > p {
            margin: 0 auto;         
            font-size: 16px;
            margin-bottom: 24px;
        }
    }

`

export const Tags = styled.section`
 display: flex;
 gap: 12px;
 margin-bottom: 52px;
 max-width: 600px;
 flex-wrap: wrap;
    @media (max-width:${DEVICE_BREAKPOINTS.MD}){
        max-width: 316px;
        flex-wrap: wrap;
        
 }
`