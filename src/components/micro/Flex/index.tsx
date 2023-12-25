// src/components/FlexBox/FlexBox.tsx

import React, { FC } from "react";

import { FlexProps } from "./types";
import { FlexBoxContainer } from "./styles";

const Flex: FC<FlexProps> = ({
  direction,
  justify,
  align,
  wrap,
  flexDirection,
  gap,
  height,
  width,
  children,
  ...rest
}) => {
  return (
    <FlexBoxContainer
      direction={direction}
      justify={justify}
      align={align}
      wrap={wrap}
      flexDirection={flexDirection}
      gap={gap}
      height={height}
      width={width}
      {...rest}
    >
      {children}
    </FlexBoxContainer>
  );
};

export default Flex;