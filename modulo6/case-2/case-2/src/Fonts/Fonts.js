import { createGlobalStyle } from 'styled-components';

import MontserratWoff from './Montserrat.woff';
import MontserratWoff2 from './Montserrat-Bold.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        src: local('Monsterrat'), local('Montserrat'),
        url(${MontserratWoff}) format('woff'),
        url(${MontserratWoff2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
`;
