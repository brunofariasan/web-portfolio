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
  | "section-watermark" // texto marca d'agua da seção
  | "title-logo" //nome logo(Bruno Faria)
  | "main-text-about-me" // texto peincipal sobre mim
  | "final-text-about-me" // texto final sobre mim
  | "card-description" // texto de card
  | "small-text-about-me" // texto inical sobre mim
  | "medium-text-about-me" // segundo texto inicial da seção sobre mim
  | "end-text-about-me" // segundo texto inicial da seção sobre mim
  | "text-main-technologies"
  | "project-quantity"
  | "project-title"
  | "project-text"
  | "title-on-top-of-map"
  |"title-section-contact"
  | "contact-section-title-description"
  | "description-contact"
  | "section-watermark-white" // texto marca d'agua da seção
  | "text-name-menu" //texto do menu
  | "text-menu" //texto do menu
  | "bruno-faria-log" //texto do menu
  | "text-menu-logo"
  |"text-language"
  | "title-section-slider" //titulo grande da seção de slider
  | "title-section-card" //titulo grande da seção de slider

// | "text-partner"; // texto de parceiro
// | "title-section-description" //texto pequeno encima do titulo da seção
// | "text-menu" //text MENU
// | "text-close" //text CLOSE
// | "text-name-menu" //texto do menu
// | "title-section" //titulo grande da seção
// | "text-over-title" // texto sobre o titulo da seção
// | "text-data" // texto da data
// | "text-new" // texto novo

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
  dynamicHeader?: true | false;
  informationColor?: "white" | "black";
  children?: ReactNode;
  colorWhenFalse?: string;
  link?: string;
  fontSize?: number;
  height?: number;
  headerColor?: any;
};
