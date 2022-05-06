import "./App.css";
import { ThemeProvider } from "./packages/theme";
import GlobalStyle from "./GlobalStyle";
import Example from "./modules/Example";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Example />
    </ThemeProvider>
  );
}

export default App;
