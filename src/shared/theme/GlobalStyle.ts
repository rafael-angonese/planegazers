import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${({ theme }) => theme.application.background};
        color: ${({ theme }) => theme.application.textColor};
    }
`;

export default GlobalStyles;
