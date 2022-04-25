import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #5429CC;
        --green: #33CC95;
        --green-dark: #168259;

        --blue-light: #6933ff;
        
        --text-title: #363f5f;
        --text-body: #969cb3;
        
        --background: #f0f2f5;
        
        --shape: #ffffff;
        
    }
    * {
        margin: 0;
        padding: 0;
    }
    body,input, button, textarea {
        font-family: 'Poppins', sans-serif;
    }
    body{
        width: 100%;
        background: var(--background);
    }
    html {
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }
    body
    h1,h2,h3, h4, h5, h6, strong{
        font-weight: 600;
    }
    button{
        cursor: pointer;
    }
`;
