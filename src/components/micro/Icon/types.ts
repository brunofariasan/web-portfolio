import { theme } from "@/styles/theme";
import "../../../assets/icon/style.css";

export type IconProps = {
  iconName: string;
  size: keyof typeof theme.font.sizes;
  color: keyof typeof theme.colors;
};
