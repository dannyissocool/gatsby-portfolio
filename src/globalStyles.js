import { createGlobalStyle } from "styled-components";
import "@fontsource/poppins";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        text-decoration: none;
        font-family: Poppins;
    }

    html, body {
        min-height: 100%;
    }
    body {
        background: #5C258D;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #4389A2, #5C258D);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #4389A2, #5C258D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }    
`;

export default GlobalStyle;
