import { ThemeType } from "@/styles/theme";
import { ReactNode } from "react";

type TextVariants =
  | "title-banner" //titulo grande do banner
  | "title-banner-sub" //sub titulo do banner
  | "text-icon" //texto abaixo dos icones
  | "text-description-left" //texto do lado esquerda da seção verde
  | "text-description-right" //texto do lado direito da seção verde
  | "title-footer" //titulo interno do footer
  | "text-footer" //text interno do footer
// | "title-logo" //nome logo(Bruno Faria)
// | "title-section-description" //texto pequeno encima do titulo da seção
// | "title-section-slider" //titulo grande da seção de slider
// | "text-menu" //text MENU
// | "text-close" //text CLOSE
// | "text-name-menu" //texto do menu
// | "title-section" //titulo grande da seção
// | "text-over-title" // texto sobre o titulo da seção
// | "text-data" // texto da data
// | "text-new" // texto novo
// | "card-description" // texto de card
// | "text-partner" // texto de parceiro
// | "section-watermark" // texto marca d'agua da seção
// | "small-text-about-me" // texto inical sobre mim
// | "main-text-about-me" // texto peincipal sobre mim
// | "final-text-about-me" // texto final sobre mim
// | "project-quantity";

type TextComponent =
  | "span"
  | "p"
  | "label"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export type TextProps = {
  variant?: TextVariants;
  color?: keyof ThemeType["colors"];
  richText?: boolean;
  text?: string | JSX.Element;
  component?: TextComponent;
  textAlign?: "left" | "center" | "right" | "justify";
  children?: ReactNode;
  link?: string;
  fontSize?: number;
  height?: number;
};
