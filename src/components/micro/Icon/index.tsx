import React from "react";
import "../../../assets/icon/style.css";
import { IconProps } from "./types";
import * as S from "./styles";

const Icon = ({
  iconName,
  size,
  color = "darkCharcoal",
}: IconProps) => {
  return (
    <S.I
      iconName={iconName}
      size={size}
      color={color}
      className={`${iconName}`}
    />
  );
};

export default Icon;
