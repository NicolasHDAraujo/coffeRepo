import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CoffeesListProvider } from "./core/contexts/CoffeesListContext";


export function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <CoffeesListProvider>
          <Router />
        </CoffeesListProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
