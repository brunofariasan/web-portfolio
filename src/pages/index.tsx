import GlobalStyle from "@/globalStyles/globalStyle";
import Text from "@/components/micro/Text";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import Banner from "@/components/Banner";
import { Home } from "@/layouts/Home/Home";
import "@fontsource/inter/400.css"; // Importe a variante 400 da fonte Inter
import "@fontsource/montserrat/400.css"; // Importe a variante 400 da fonte Montserrat
import "@fontsource/signika/400.css"; // Importe a variante 400 da fonte Signika
import "@fontsource/zen-dots"; // Importe a fonte Zen Dots

// import '../Inter,Montserrat,Signika,Zen_Dots/Zen_Dots/ZenDots-Regular.ttf'
export default function Page() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}
