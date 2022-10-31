import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Olá mundo</h1>
    </ThemeProvider>
  );
}
