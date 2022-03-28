import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        word-wrap: break-word;
        transition: box-shadow 0.2s;
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    html {
        scroll-behavior: smooth;
        font-size: 125%;
        @media only screen and (max-width: 600px) {
                font-size: 17px;
        }
    }
    body {
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul {
        margin: 0;
        padding: 0;
    }
    h1 {
        font-family: 'Playfair Display';
        line-height: 4rem;
        font-size: 4rem;
    }
    h2 {
        font-size: 1.6rem;
        letter-spacing: 1px;
    }
    h3 {
        display: inline-block;
        font-size: 1.3rem;
    }
    h4 {
        font-size: 1.2rem;
    }
`;

function GlobalStyle() {
    return <StyledGlobalStyle />;
}

export default GlobalStyle;
