import { createTheme } from '@material-ui/core/styles';
import { neutralColor, primaryColor, secondaryColor } from './colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: 'white',
    },
    secondary: {
      main: secondaryColor,
    },
    text: {
      primary: neutralColor,
    },
  },
});
