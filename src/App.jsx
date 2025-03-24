import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@styles/globalStyle.ts';
import theme from '@styles/theme.ts';
import Router from './router/routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
