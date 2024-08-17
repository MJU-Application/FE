import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GlobalStyles = createGlobalStyle`
    ${reset}
    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;
        vertical-align: baseline;
    }
    body {
        line-height: 1;
        font-family: 'Noto Sans KR', sans-serif;
        background-color: #F6F9F0;
        /* 파이어폭스 */
        scrollbar-width: none;
        /* IE 브라우저 */
        -ms-overflow-style: none;
    }
    ol, ul {
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
    body::-webkit-scrollbar {
        /* 크롬 사파리 etc */
        display: none;
    }
`;

export default GlobalStyles;
