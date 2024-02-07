import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    :root{
        font-size: 62.5%;
    }


    body{
        background-color: ${({theme}) => theme.COLORS.DARK_DARK_400};
        color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_100};

        -webkit-font-smoothing: antialiased;
        
    }

    body, h2, button {
        font-family: 'Poppins', sans-serif;
        font-size: 1.6rem;
        outline: none;
    }

    label, input, h1, footer, textarea{
       font-family: 'Roboto', sans-serif;
    }
    
    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9)
    }
`;