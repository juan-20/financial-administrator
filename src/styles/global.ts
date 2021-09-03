import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;   
        --red: #e52e4d;
        --blue: #5429cc;
        --green: '#33cc95'

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
        background: #f0f2f5;
        -webkit-font-smooth: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Popins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    } 

    button{
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    .react-modal-overlay{
        background: rgba(0,0,0, 0.5);
        
        position: fixed;
        top: 0%;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center ;
        justify-content: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: #f0f2f5;
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }
`;