import StyledComponentsRegistry from "@/utils/registry";
import "@fontsource/inter/400.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/900.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/zen-dots";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </>
  );
}
