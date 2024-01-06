import * as S from "./styles";
import React from "react";

const Copyright = ({ text, color }: any) => {
  return (
    <S.CopyrightWrapper color={color}>
      {text || `© 2022 - ${new Date().getFullYear()} Bruno Faria.`}
    </S.CopyrightWrapper>
  );
};

export default Copyright;
