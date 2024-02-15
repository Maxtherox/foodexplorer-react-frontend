import styled from "styled-components";

export const Container = styled.div`
   a {
    display: flex;
    justify-content: center;
    max-width: 700px;
    max-height: 200px;
    margin: 0 auto;
    margin-top: 300PX;
    border: 1px solid white;
    padding: 40px;
    border-radius: 10px;
    font-family: 'Roboto';
    font-size: 54px;
    transition: .5s;
    cursor: pointer;
    :hover{
        background-color: white;
        color: black;
        border: none;
    }
   }

   a:hover{
    background-color: white;
        color: black;
        border: none;
   }
`