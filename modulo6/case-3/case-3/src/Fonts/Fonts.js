import { createGlobalStyle } from 'styled-components';

import RobotoMedium from './Roboto-Medium.woff2';
import RobotoRegular from './Roboto-Regular.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), local('Roboto'),
        url(${RobotoRegular}) format('woff'),
        url(${RobotoMedium}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
`;
