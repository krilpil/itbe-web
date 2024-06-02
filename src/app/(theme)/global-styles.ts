import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        font-family: var(--font-sans), sans-serif;
    }
    
    p, span, h1, h2, h3, h4, h5 {
        margin: 0;
    }
`;
