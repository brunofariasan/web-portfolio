import * as S from "./styles";
import React from "react";

const Copyright = ({ text, color }: any) => {
  return (
    <S.CopyrightWrapper color={color}>
      {text || `© BRUNO FARIA - 2022 - ${new Date().getFullYear()}` }
    </S.CopyrightWrapper>
  );
};

export default Copyright;
