import React, { FC } from "react";
import { FlexProps } from "./types";
import { FlexContainer } from "./styles";

const Flex: FC<FlexProps> = ({
  direction,
  justify,
  align,
  wrap,
  flexDirection,
  textAlign,
  gap,
  height,
  width,
  maxWidth,
  children,
  ...rest
}) => {
  return (
    <FlexContainer
      direction={direction}
      justify={justify}
      align={align}
      wrap={wrap}
      flexDirection={flexDirection}
      textAlign={textAlign}
      gap={gap}
      height={height}
      width={width}
      maxWidth={maxWidth}
      {...rest}
    >
      {children}
    </FlexContainer>
  );
};

export default Flex;