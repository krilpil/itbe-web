import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        border: none;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        font-family: var(--font-sans), sans-serif;

        &::-webkit-scrollbar {
            -webkit-appearance: none;
            position: absolute;
            left: 0;
            width: 10px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #adadad;
            border-radius: 10px;
        }

        &::-webkit-scrollbar-track {
            background: #f7f8f7;
        }
    }

    .ant-popover .ant-popover-title {
        margin-bottom: 0;
        max-width: 250px;
    }

    .ant-modal-mask,
    .ant-drawer-mask {
        backdrop-filter: blur(2px);
    }

    /* Links */
    a,
    a:link,
    a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    /* Common */
    aside,
    nav,
    footer,
    header,
    section,
    main {
        display: block;
    }

    blockquote,
    strong,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: var(--font-play);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    span,
    p {
        margin: 0;
        font-size: inherit;
        font-weight: inherit;
    }

    ul,
    ul li {
        list-style: none;
    }

    img {
        vertical-align: top;
    }

    img,
    svg {
        max-width: 100%;
        height: auto;
    }

    address {
        font-style: normal;
    }

    /* Form */
    input,
    textarea,
    button,
    select {
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        background-color: transparent;
    }

    input::-ms-clear {
        display: none;
    }

    button,
    input[type='submit'] {
        display: inline-block;
        box-shadow: none;
        background: transparent;
        cursor: pointer;
    }

    input:focus,
    input:active,
    button:focus,
    button:active {
        outline: none;
    }

    button::-moz-focus-inner {
        padding: 0;
        border: 0;
    }

    label {
        cursor: pointer;
    }

    legend {
        display: block;
    }

`;
