import React, { FC } from "react";
import { FlexProps } from "./types";
import { FlexContainer } from "./styles";

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
    <FlexContainer
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
    </FlexContainer>
  );
};

export default Flex;