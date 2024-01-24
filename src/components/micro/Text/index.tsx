import React from "react";
import { LinkTextContainer, TextContainer } from "./styles";
import { TextProps } from "./types";

const Text = ({
  variant = "title-banner",
  richText = false,
  color,
  text,
  dynamicHeader,
  informationColor = "white",
  component = "p",
  link,
  headerColor,
  children,
  ...rest
}: TextProps) => {
  if (link) {
    return (
      <LinkTextContainer href={link}>
        <TextContainer
          color={!dynamicHeader ? color : headerColor}
          variant={variant}
          component={component}
          {...rest}
        >
          {children ? children : richText}
        </TextContainer>
      </LinkTextContainer>
    );
  }
  return (
    <TextContainer
      color={!dynamicHeader ? color : headerColor}
      variant={variant}
      component={component}
      {...rest}
    >
      {children ? children : richText && text}
    </TextContainer>
  );
};

export default Text;
