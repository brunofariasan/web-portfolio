import StyledComponentsRegistry from "@/utils/registry";
import { Inter } from "next/font/google";
import '@fontsource/inter/400.css'; // Importe a variante 400 da fonte Inter
import '@fontsource/montserrat/400.css'; // Importe a variante 400 da fonte Montserrat
import '@fontsource/signika/400.css'; // Importe a variante 400 da fonte Signika
import '@fontsource/zen-dots'; // Importe a fonte Zen Dots

export default function Layout({ children }: { children: React.ReactNode }) {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
