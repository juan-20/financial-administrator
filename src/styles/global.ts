import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;   
        --red: #e52e4d;
        --blue: #5429cc;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --background: #FOF2F5;
        --shape: #FFF;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-widyh: 1080px){
            font-size: 93.75%; // 15 px
        }
        @media (max-widyh: 720px){
            font-size: 87.5%; // 14 px
        }
    }

    body{
        background: var(---background);
        -webkit-font-smooth: antialiased;
    }

    button{
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;