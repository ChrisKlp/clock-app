import { ThemeProvider } from 'styled-components';
import { theme } from './theme/mainTheme';
import GlobalStyle from './theme/GlobalStyle';
import Main from './components/Main/Main';
import Provider from './Context';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider>
        <Main />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
