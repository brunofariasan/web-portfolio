import GlobalStyle from "@/globalStyles/globalStyle";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { Home } from "@/layouts/Home/Home";
import "@fontsource/inter/400.css"; 
import "@fontsource/montserrat/400.css";
import "@fontsource/signika/400.css"; 
import '@fontsource/montserrat/700.css'; 
import "@fontsource/zen-dots"; 

export default function Page() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}
